import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown } from 'lucide-react';
import TypewriterText from './TypewriterText';

const HeroSection = () => {
  const objectives = [
    {
      icon: <img src="/icons/idea.gif" alt="Innovation" className="h-12 w-12" />,
      title: 'Innovación',
      description: 'Soluciones creativas que marcan la diferencia'
    },
    {
      icon: <img src="/icons/grafico-de-linea (1).gif" alt="Measurable Results" className="h-12 w-12" />,
      title: 'Resultados Medibles',
      description: 'Métricas claras que demuestran crecimiento'
    },
    {
      icon: <img src="/icons/tecnologia.gif" alt="Applied Technology" className="h-12 w-12" />,
      title: 'Tecnología Aplicada al Marketing',
      description: 'Herramientas avanzadas para potenciar tu negocio'
    }
  ];

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8 min-h-[90vh] justify-center rounded-lg">
          
          {/* Hero Content - More compact */}
          <div className="text-center space-y-6 animate-slide-in-left max-w-4xl">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Impulsamos tu crecimiento con{' '}
                <span className="gradient-text">Tecnología</span> y{' '}
                <span className="gradient-text">Creatividad</span>
              </h1>
              <div className="text-lg max-w-2xl mx-auto min-h-[3rem] flex items-center justify-center">
                <TypewriterText
                  text="No predecimos el futuro, lo creamos con IA"
                  speed={30}
                  delay={800}
                  className="text-lg"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={scrollToServices}
                className="bg-nexo-orange-500 hover:bg-nexo-orange-600 text-white px-8 py-4 text-base rounded-full"
              >
                Nuestros Servicios
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 text-base rounded-full border-2 text-primary dark:text-white"
              >
                Contacto
              </Button>
            </div>
          </div>

          {/* Robot/Logo pointing to objectives */}
          <div className="relative w-full max-w-5xl">
            {/* Animated Logo in center */}
            <div className="flex justify-center">
              <div className="relative flex flex-col items-center">
                <div className="w-40 h-40 flex items-center justify-center animate-bounce">
                  <img 
                    src="public/logothot_3.png" 
                    alt="NexoLab Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="-mt-8 mb-2 text-2xl lg:text-4xl font-semibold text-nexo-orange-500 text-center animate-fade-in z-10 relative">
                  ¿Qué esperar de nosotros?
                </div>
                <ArrowDown className="h-6 w-6 text-nexo-orange-500 mx-auto mt-2 animate-pulse" />
              </div>
            </div>

            {/* Objective Cards - More compact */}
            <div className="grid md:grid-cols-3 gap-4">
              {objectives.map((objective, index) => (
                <Card 
                  key={index}
                  className="glass-card card-enhanced p-4 hover:scale-105 transition-all duration-300 cursor-pointer group border-0"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    animation: 'fade-in 0.6s ease-out forwards'
                  }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-2 bg-gradient-to-br from-nexo-orange-500 to-nexo-blue-600 rounded-lg text-white group-hover:scale-110 transition-transform accent-glow">
                      {objective.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-1 group-hover:text-nexo-orange-500 transition-colors">
                        {objective.title}
                      </h3>
                      <p className="text-muted-foreground text-sm text-enhanced-contrast">
                        {objective.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
