import emailjs from '@emailjs/browser';

// Configuración de EmailJS con validaciones de seguridad
export const emailjsConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  // Dominios permitidos para validación adicional
  allowedDomains: ['localhost', 'nexolab.com', 'www.nexolab.com']
};

// Validar dominio actual
const validateDomain = (): boolean => {
  const currentDomain = window.location.hostname;
  return emailjsConfig.allowedDomains.includes(currentDomain);
};

// Rate limiting simple en el frontend
let lastSubmissionTime = 0;
const MIN_SUBMISSION_INTERVAL = 30000; // 30 segundos entre envíos

const validateRateLimit = (): boolean => {
  const now = Date.now();
  if (now - lastSubmissionTime < MIN_SUBMISSION_INTERVAL) {
    return false;
  }
  lastSubmissionTime = now;
  return true;
};

// Función para inicializar EmailJS
export const initEmailJS = () => {
  if (emailjsConfig.publicKey) {
    emailjs.init(emailjsConfig.publicKey);
  }
};

// Función para enviar email con validaciones de seguridad
export const sendEmail = async (templateParams: Record<string, any>) => {
  try {
    // Validación de dominio
    if (!validateDomain()) {
      throw new Error('Dominio no autorizado para envío de emails');
    }

    // Validación de rate limiting
    if (!validateRateLimit()) {
      throw new Error('Demasiados intentos. Espera 30 segundos antes de enviar otro mensaje.');
    }

    // Sanitizar datos de entrada
    const sanitizedParams = {
      from_name: String(templateParams.from_name || '').slice(0, 100),
      from_email: String(templateParams.from_email || '').slice(0, 254),
      email: String(templateParams.email || '').slice(0, 254),
      company: String(templateParams.company || '').slice(0, 100),
      service: String(templateParams.service || '').slice(0, 50),
      message: String(templateParams.message || '').slice(0, 1000)
    };

    // Debug: Mostrar configuración actual (solo en desarrollo)
    if (import.meta.env.DEV) {
      console.log('=== DEBUG EmailJS ===');
      console.log('Public Key:', emailjsConfig.publicKey ? '***configurado***' : 'NO CONFIGURADO');
      console.log('Service ID:', emailjsConfig.serviceId);
      console.log('Template ID:', emailjsConfig.templateId);
      console.log('Domain:', window.location.hostname);
      console.log('====================');
    }
    
    // Verificar que la configuración esté completa
    if (!emailjsConfig.publicKey || emailjsConfig.publicKey === 'demo_key') {
      console.warn('EmailJS no configurado. Simulando envío de email...');
      console.log('Datos del formulario:', sanitizedParams);
      
      // Simular tiempo de respuesta
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      return { 
        success: true, 
        response: { 
          text: 'Modo de desarrollo: Email simulado correctamente' 
        } 
      };
    }
    
    if (!emailjsConfig.serviceId) {
      throw new Error('EmailJS service ID no configurado. Revisa las variables de entorno.');
    }
    
    if (!emailjsConfig.templateId) {
      throw new Error('EmailJS template ID no configurado. Revisa las variables de entorno.');
    }

    // Inicializar EmailJS si no está inicializado
    initEmailJS();

    // Enviar el email con parámetros sanitizados
    const response = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      sanitizedParams
    );

    return { success: true, response };
  } catch (error: any) {
    console.error('Error al enviar email:', error);
    
    // Si es un error de rate limiting, retornarlo directamente
    if (error.message?.includes('Demasiados intentos') || error.message?.includes('Dominio no autorizado')) {
      return { success: false, error: error.message };
    }
    
    // Manejar errores específicos de EmailJS
    const errorMessage = getEmailJSErrorMessage(error);
    return { success: false, error: errorMessage };
  }
};

// Función auxiliar para manejar errores específicos de EmailJS
const getEmailJSErrorMessage = (error: any): string => {
  const defaultMessage = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.';
  
  if (!error.text) {
    return defaultMessage;
  }
  
  const errorText = error.text.toLowerCase();
  
  if (errorText.includes('template') && errorText.includes('not found')) {
    return 'Error de configuración: Plantilla de email no encontrada.';
  }
  
  if (errorText.includes('service') && errorText.includes('not found')) {
    return 'Error de configuración: Servicio de email no encontrado.';
  }
  
  if (errorText.includes('public_key')) {
    return 'Error de configuración: Clave pública inválida.';
  }
  
  if (errorText.includes('to_email') && errorText.includes('empty')) {
    return 'Error de configuración: Dirección del destinatario vacía.';
  }
  
  return defaultMessage;
};
