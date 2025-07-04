import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Globe, Palette, Share2, Megaphone, Settings } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'Desarrollo de Soluciones con IA',
      description: 'Implementamos soluciones inteligentes de vanguardia que revolucionan tu negocio con tecnología de IA de última generación, posicionándote por delante de la competencia.',
      features: ['Machine Learning avanzado', 'Automatización inteligente', 'Análisis predictivo']
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Desarrollo Web & Mobile',
      description: 'Aplicaciones web y móviles modernas, escalables y optimizadas que transforman tu presencia digital y mejoran la experiencia de tus usuarios.',
      features: ['Apps multiplataforma', 'Progressive Web Apps', 'Backend robusto']
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'Branding',
      description: 'Identidades visuales únicas que conectan con tu audiencia y fortalecen tu presencia.',
      features: ['Diseño de logos', 'Manual de marca', 'Identidad visual']
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: 'Gestión de Redes Sociales',
      description: 'Gestión integral con contenido estratégico que genera engagement y conversiones.',
      features: ['Gestión de contenido', 'Community management', 'Estrategia social']
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      title: 'Servicios de Marketing y Publicidad Digital',
      description: 'Campañas optimizadas en Google y Meta Ads que maximizan tu retorno de inversión.',
      features: ['Google Ads', 'Meta Ads', 'Optimización ROI']
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Automatización y CRM',
      description: 'Sistemas automatizados para optimizar procesos y mejorar la experiencia del cliente.',
      features: ['Marketing automation', 'CRM integration', 'Lead nurturing']
    }
  ];

  return (
    <section id="services" className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 text-container-enhanced">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-enhanced">
            Soluciones estratégicas diseñadas para maximizar tu potencial digital
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="glass-card card-enhanced group p-5 hover:scale-105 transition-all duration-300 cursor-pointer border-0"
            >
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-nexo-orange-500 to-nexo-blue-600 rounded-lg text-white group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-nexo-orange-500 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  variant="link" 
                  className="text-nexo-blue-600 hover:text-nexo-orange-500 p-0 h-auto justify-start text-sm"
                >
                  Ver más →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
