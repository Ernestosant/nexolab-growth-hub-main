import emailjs from '@emailjs/browser';

// Configuración de EmailJS
export const emailjsConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
};

// Función para inicializar EmailJS
export const initEmailJS = () => {
  if (emailjsConfig.publicKey) {
    emailjs.init(emailjsConfig.publicKey);
  }
};

// Función para enviar email
export const sendEmail = async (templateParams: Record<string, any>) => {
  try {
    // Verificar que la configuración esté completa
    if (!emailjsConfig.publicKey || emailjsConfig.publicKey === 'demo_key') {
      console.warn('EmailJS no configurado. Simulando envío de email...');
      console.log('Datos del formulario:', templateParams);
      
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

    // Enviar el email
    const response = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams
    );

    return { success: true, response };
  } catch (error: any) {
    console.error('Error al enviar email:', error);
    
    // Manejar errores específicos de EmailJS
    let errorMessage = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.';
    
    if (error.text) {
      const errorText = error.text.toLowerCase();
      
      if (errorText.includes('template') && errorText.includes('not found')) {
        errorMessage = 'Error de configuración: Plantilla de email no encontrada.';
      } else if (errorText.includes('service') && errorText.includes('not found')) {
        errorMessage = 'Error de configuración: Servicio de email no encontrado.';
      } else if (errorText.includes('public_key')) {
        errorMessage = 'Error de configuración: Clave pública inválida.';
      } else if (errorText.includes('to_email') && errorText.includes('empty')) {
        errorMessage = 'Error de configuración: Dirección del destinatario vacía.';
      }
    }
    
    return { success: false, error: errorMessage };
  }
};
