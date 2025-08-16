// Configuración de seguridad para EmailJS
export const SECURITY_CONFIG = {
  // Rate limiting
  minSubmissionInterval: 30000, // 30 segundos entre envíos
  maxDailySubmissions: 10, // Máximo 10 envíos por día por IP (si implementas tracking)
  
  // Validación de contenido
  maxFieldLengths: {
    name: 100,
    email: 254,
    company: 100,
    service: 50,
    message: 1000
  },
  
  // Dominios permitidos
  allowedDomains: [
    'localhost',
    '127.0.0.1',
    'nexolab.com',
    'www.nexolab.com'
  ],
  
  // Palabras prohibidas en mensajes (anti-spam básico)
  bannedWords: [
    'viagra',
    'casino',
    'lottery',
    'winner',
    'congratulations',
    'click here',
    'urgent',
    'act now'
  ],
  
  // Patrones sospechosos
  suspiciousPatterns: [
    /https?:\/\/[^\s]+/gi, // URLs múltiples
    /[A-Z]{10,}/g, // Texto en mayúsculas excesivo
    /(.)\1{5,}/g, // Caracteres repetidos
  ]
};

// Función para validar contenido sospechoso
export const validateContent = (message: string): { isValid: boolean; reason?: string } => {
  const lowerMessage = message.toLowerCase();
  
  // Verificar palabras prohibidas
  for (const word of SECURITY_CONFIG.bannedWords) {
    if (lowerMessage.includes(word)) {
      return { isValid: false, reason: 'Contenido no permitido detectado' };
    }
  }
  
  // Verificar patrones sospechosos
  for (const pattern of SECURITY_CONFIG.suspiciousPatterns) {
    if (pattern.test(message)) {
      return { isValid: false, reason: 'Patrón sospechoso detectado' };
    }
  }
  
  return { isValid: true };
};

// Función para validar email de forma más estricta
export const validateEmailStrict = (email: string): boolean => {
  // RFC 5322 compliant regex (simplified)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  if (!emailRegex.test(email)) {
    return false;
  }
  
  // Verificar dominios sospechosos
  const suspiciousDomains = ['tempmail', '10minutemail', 'guerrillamail'];
  const domain = email.split('@')[1]?.toLowerCase();
  
  return !suspiciousDomains.some(suspicious => domain?.includes(suspicious));
};

// Función para sanitizar input
export const sanitizeInput = (input: string, maxLength: number): string => {
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remover scripts
    .replace(/[<>]/g, ''); // Remover < y >
};
