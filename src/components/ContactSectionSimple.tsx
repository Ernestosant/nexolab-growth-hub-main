import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSectionSimple = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Dirección',
      content: 'Ave 5ta #1013, Chibas, La Habana, Cuba' // Actualizado con la dirección correcta
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Teléfono',
      content: '+53 53226980' // Actualizado con el número de teléfono correcto
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      content: 'sales@thotlab.com'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Horario',
      content: 'Lun - Vie: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para <span className="gradient-text">crecer juntos?</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Conversemos sobre tu proyecto. Nuestro equipo está listo para 
            ayudarte a alcanzar tus objetivos de crecimiento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-5">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gradient-to-br from-orange-500 to-blue-600 rounded-lg text-white">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
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
          </div>

          {/* Simple Form */}
          <Card className="p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Formulario Simple (Versión de Debug)</h3>
              <input 
                type="text" 
                placeholder="Nombre" 
                className="w-full p-3 border rounded-md"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-3 border rounded-md"
              />
              <textarea 
                placeholder="Mensaje"
                rows={3}
                className="w-full p-3 border rounded-md"
              />
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => alert('Formulario de debug - Funciona correctamente!')}
              >
                Enviar (Debug)
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionSimple;
