import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Loader2 } from 'lucide-react';

// X (Twitter) SVG icon as a React component
const XIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 509.64" className={className} fill="currentColor">
    <rect width="512" height="509.64" rx="115.61" ry="115.61" />
    <path fill="currentColor" fillRule="nonzero" d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"/>
  </svg>
);

// Telegram SVG icon as a React component
const TelegramIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 8.16l-1.704 8.04c-.128.6-.464.744-.944.464l-2.6-1.92-1.256 1.208c-.136.136-.256.256-.528.256l.192-2.72L17.736 7.2c.224-.2-.048-.312-.352-.112l-6.464 4.072-2.784-.864c-.608-.192-.616-.608.128-.896l10.88-4.208c.504-.184.944.112.784.896z"/>
  </svg>
);

// WhatsApp SVG icon as a React component
const WhatsAppIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
  </svg>
);

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Dirección',
      content: 'Ave 5ta #1013, Chibas, La Habana, Cuba' // Actualizado con la dirección correcta
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Teléfono',
      content: '+53 50001538'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      content: 'sales@thotlabs.tech'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Horario',
      content: 'Lun - Vie: 9:00 AM - 6:00 PM'
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, name: 'Facebook', url: 'https://www.facebook.com/share/1HmZS8mA1x/' },
    { icon: <Instagram className="h-5 w-5" />, name: 'Instagram', url: 'https://www.instagram.com/techlabas_ai_agency' },
    { icon: <XIcon className="h-5 w-5" />, name: 'X', url: 'https://x.com/ThotLabsAi?s=08', className: 'x-social-icon' },
    { icon: <TelegramIcon className="h-5 w-5" />, name: 'Telegram', url: 'https://t.me/thotlabsAI_redcolaborativadeIA' },
    { icon: <WhatsAppIcon className="h-5 w-5" />, name: 'WhatsApp', url: 'https://wa.me/5350001538', className: 'text-green-500 group-hover:text-green-600 transition-colors' }
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor, ingresa un email válido';
    }

    if (!formData.service) {
      newErrors.service = 'Por favor, selecciona un servicio';
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envío de email
      console.log('Datos del formulario:', formData);
      
      // Simular tiempo de respuesta
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulación de envío exitoso
      alert('¡Gracias por contactarnos! Te responderemos pronto.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
      setErrors({});
      
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  return (
    <>
      <section id="contact" className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in text-container-enhanced max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ¿Listo para <span className="gradient-text">crecer juntos?</span>
            </h2>
            <p className="text-lg text-enhanced max-w-2xl mx-auto">
              Conversemos sobre tu proyecto. Nuestro equipo está listo para 
              ayudarte a alcanzar tus objetivos de crecimiento.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6 animate-slide-in-left">
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={`contact-${index}`} className="p-5 glass-card card-enhanced border-0 hover:scale-105 transition-transform group">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-gradient-to-br from-nexo-orange-500 to-nexo-blue-600 rounded-lg text-white group-hover:scale-110 transition-transform accent-glow">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 group-hover:text-nexo-orange-500 transition-colors">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground text-sm text-enhanced-contrast">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Síguenos en redes sociales</h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={`social-${index}`}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-card card-enhanced rounded-lg hover:scale-110 transition-all group border-0"
                    >
                      <div className={social.className || "text-nexo-orange-500 group-hover:text-nexo-blue-600 transition-colors"}>
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Action */}
              <Card className="p-5 bg-gradient-to-br from-nexo-orange-500 to-nexo-blue-700 text-white border-0 accent-glow">
                <h3 className="text-lg font-bold mb-2">¿Necesitas ayuda inmediata?</h3>
                <p className="mb-3 opacity-90 text-sm">
                  Programa una llamada gratuita de 30 minutos con nuestro equipo.
                </p>
                <Button className="bg-white text-nexo-blue-700 hover:bg-nexo-white-100 hover:text-nexo-blue-800 transition-colors">
                  Agendar Reunión
                </Button>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-6 glass-card card-enhanced border-0 animate-slide-in-right">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nombre *</label>
                    <Input 
                      value={formData.name}
                      onChange={handleInputChange('name')}
                      placeholder="Tu nombre completo" 
                      className="bg-background/50"
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email *</label>
                    <Input 
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      type="email" 
                      placeholder="tu@email.com" 
                      className="bg-background/50"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Empresa</label>
                  <Input 
                    value={formData.company}
                    onChange={handleInputChange('company')}
                    placeholder="Nombre de tu empresa" 
                    className="bg-background/50"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Servicio de interés *</label>
                  <select 
                    value={formData.service}
                    onChange={handleInputChange('service')}
                    className="w-full p-3 border rounded-md bg-background/50 disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="Branding"><span translate="no" lang="en">Branding</span></option>
                    <option value="Redes Sociales">Redes Sociales</option>
                    <option value="Publicidad Digital">Publicidad Digital</option>
                    <option value="Diseño Web">Diseño Web</option>
                    <option value="Consultoría Integral">Consultoría Integral</option>
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Mensaje *</label>
                  <Textarea 
                    value={formData.message}
                    onChange={handleInputChange('message')}
                    placeholder="Cuéntanos sobre tu proyecto y objetivos..."
                    rows={3}
                    className="bg-background/50"
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-nexo-orange-500 hover:bg-nexo-orange-600 text-white py-4 text-base rounded-full accent-glow disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar Mensaje'
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/5350001538"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          title="Contáctanos por WhatsApp"
        >
          {/* WhatsApp Icon */}
          <WhatsAppIcon className="h-8 w-8 text-white" />
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">1</span>
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            ¡Escríbenos ahora!
            <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
          </div>
        </a>
      </div>
    </>
  );
};

export default ContactSection;
