
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Share2, Megaphone, Globe } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Branding',
      description: 'Creamos identidades visuales únicas que conectan con tu audiencia y fortalecen tu presencia en el mercado.',
      features: ['Diseño de logos', 'Manual de marca', 'Identidad visual']
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: 'Redes Sociales',
      description: 'Gestión integral de tus redes sociales con contenido estratégico que genera engagement y conversiones.',
      features: ['Gestión de contenido', 'Community management', 'Estrategia social']
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: 'Publicidad Digital',
      description: 'Campañas publicitarias optimizadas en Google Ads y Meta Ads que maximizan tu retorno de inversión.',
      features: ['Google Ads', 'Meta Ads', 'Optimización ROI']
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Diseño Web',
      description: 'Sitios web modernos, responsivos y optimizados para conversión que reflejan la esencia de tu marca.',
      features: ['Diseño responsive', 'UX/UI optimizada', 'SEO friendly']
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos soluciones integrales de marketing digital y tecnología 
            para impulsar el crecimiento de tu empresa de manera estratégica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-0 glass-card"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fade-in 0.6s ease-out forwards'
              }}
            >
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-br from-nexo-orange-500 to-nexo-teal-500 rounded-xl text-white w-fit group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold group-hover:text-nexo-orange-500 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm flex items-center">
                      <div className="w-2 h-2 bg-nexo-teal-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-4 group-hover:bg-nexo-orange-500 group-hover:text-white group-hover:border-nexo-orange-500 transition-colors"
                >
                  Ver más
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-nexo-teal-500 hover:bg-nexo-teal-600 text-white px-8 py-6 text-lg rounded-full"
          >
            Solicitar Cotización
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
