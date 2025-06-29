import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

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

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, name: 'Facebook', url: '#' },
    { icon: <Instagram className="h-5 w-5" />, name: 'Instagram', url: '#' },
    { icon: <Linkedin className="h-5 w-5" />, name: 'LinkedIn', url: '#' }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para <span className="gradient-text">crecer juntos?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conversemos sobre tu proyecto. Nuestro equipo está listo para 
            ayudarte a alcanzar tus objetivos de crecimiento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 glass-card border-0 hover:scale-105 transition-transform group">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-nexo-orange-500 to-nexo-blue-600 rounded-xl text-white group-hover:scale-110 transition-transform accent-glow">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-nexo-orange-500 transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Síguenos en redes sociales</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="p-3 glass-card rounded-xl hover:scale-110 transition-all group border-0"
                  >
                    <div className="text-nexo-orange-500 group-hover:text-nexo-blue-600 transition-colors">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Action */}
            <Card className="p-6 bg-gradient-to-br from-nexo-orange-500 to-nexo-blue-700 text-white border-0 accent-glow">
              <h3 className="text-xl font-bold mb-2">¿Necesitas ayuda inmediata?</h3>
              <p className="mb-4 opacity-90">
                Programa una llamada gratuita de 30 minutos con nuestro equipo.
              </p>
              <Button className="bg-white text-nexo-blue-700 hover:bg-nexo-white-100 hover:text-nexo-blue-800 transition-colors">
                Agendar Reunión
              </Button>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 glass-card border-0 animate-slide-in-right">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre *</label>
                  <Input placeholder="Tu nombre completo" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input type="email" placeholder="tu@email.com" className="bg-background/50" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Empresa</label>
                <Input placeholder="Nombre de tu empresa" className="bg-background/50" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Servicio de interés</label>
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
                <label className="block text-sm font-medium mb-2">Mensaje *</label>
                <Textarea 
                  placeholder="Cuéntanos sobre tu proyecto y objetivos..."
                  rows={4}
                  className="bg-background/50"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-nexo-orange-500 hover:bg-nexo-orange-600 text-white py-6 text-lg rounded-full accent-glow"
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
