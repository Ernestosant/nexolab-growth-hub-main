import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede tener más de 50 caracteres'),
  email: z.string()
    .email('Por favor, ingresa un email válido')
    .min(1, 'El email es requerido'),
  company: z.string()
    .max(100, 'El nombre de la empresa no puede tener más de 100 caracteres')
    .optional(),
  service: z.string()
    .min(1, 'Por favor, selecciona un servicio'),
  message: z.string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(1000, 'El mensaje no puede tener más de 1000 caracteres'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
