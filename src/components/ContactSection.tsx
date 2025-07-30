import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

// Define interfaces for typing
interface SocialLink {
  icon: React.ReactNode;
  name: string;
  url: string;
  className?: string;
}

// X (Twitter) SVG icon as a React component
const XIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 509.64" className={className} fill="currentColor">
    <rect width="512" height="509.64" rx="115.61" ry="115.61" />
    <path fill="currentColor" fillRule="nonzero" d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"/>
  </svg>
);

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Dirección',
      content: 'Av. Tecnología 123, Ciudad Digital, CD 12345'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Teléfono',
      content: '+1 (555) 123-4567'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      content: 'hola@nexolab.com'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Horario',
      content: 'Lun - Vie: 9:00 AM - 6:00 PM'
    }
  ];

  const socialLinks: SocialLink[] = [
    { icon: <Facebook className="h-5 w-5" />, name: 'Facebook', url: '#' },
    { icon: <Instagram className="h-5 w-5" />, name: 'Instagram', url: '#' },
    { icon: <XIcon className="h-5 w-5" />, name: 'X', url: '#', className: 'x-social-icon' }
  ];

  return (
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
                <Card key={index} className="p-5 glass-card card-enhanced border-0 hover:scale-105 transition-transform group">
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
                    key={index}
                    href={social.url}
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
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nombre *</label>
                  <Input placeholder="Tu nombre completo" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <Input type="email" placeholder="tu@email.com" className="bg-background/50" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Empresa</label>
                <Input placeholder="Nombre de tu empresa" className="bg-background/50" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Servicio de interés</label>
                <select className="w-full p-3 border rounded-md bg-background/50">
                  <option>Selecciona un servicio</option>
                  <option>Branding</option>
                  <option>Redes Sociales</option>
                  <option>Publicidad Digital</option>
                  <option>Diseño Web</option>
                  <option>Consultoría Integral</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Mensaje *</label>
                <Textarea 
                  placeholder="Cuéntanos sobre tu proyecto y objetivos..."
                  rows={3}
                  className="bg-background/50"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-nexo-orange-500 hover:bg-nexo-orange-600 text-white py-4 text-base rounded-full accent-glow"
              >
                Enviar Mensaje
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
