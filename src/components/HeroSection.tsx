
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lightbulb, BarChart3, Cpu } from 'lucide-react';

const HeroSection = () => {
  const objectives = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovación',
      description: 'Soluciones creativas que marcan la diferencia en tu industria'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Resultados Medibles',
      description: 'Métricas claras que demuestran el crecimiento de tu negocio'
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Tecnología Aplicada',
      description: 'Herramientas avanzadas para potenciar tu marketing digital'
    }
  ];

  return (
    <section id="home" className="min-h-screen hero-gradient pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <p className="text-nexo-orange-500 font-semibold text-lg">
                PODEROSA HACE HERR
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Impulsamos tu crecimiento con{' '}
                <span className="gradient-text">Tecnología</span> y{' '}
                <span className="gradient-text">creatividad</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Estrategias de crecimiento y marketing digital aplicadas 
                a empresas que buscan resultados extraordinarios.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-nexo-orange-500 hover:bg-nexo-orange-600 text-white px-8 py-6 text-lg rounded-full"
              >
                Nuestros Servicios
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg rounded-full border-2"
              >
                Contacto
              </Button>
            </div>
          </div>

          {/* Right Content - Robot and Cards */}
          <div className="relative animate-slide-in-right">
            {/* Robot Illustration */}
            <div className="relative z-10 flex justify-center mb-8">
              <div className="w-64 h-64 relative animate-float">
                <div className="w-full h-full bg-gradient-to-br from-nexo-orange-500 to-nexo-teal-500 rounded-3xl flex items-center justify-center shadow-2xl">
                  <div className="text-8xl">🤖</div>
                </div>
                {/* Floating elements around robot */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-nexo-blue-500 rounded-full animate-pulse-glow"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-nexo-teal-500 rounded-full animate-pulse-glow"></div>
              </div>
            </div>

            {/* Objective Cards */}
            <div className="grid gap-4">
              {objectives.map((objective, index) => (
                <Card 
                  key={index}
                  className="glass-card p-6 hover:scale-105 transition-all duration-300 cursor-pointer group"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    animation: 'fade-in 0.6s ease-out forwards'
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-nexo-orange-500 to-nexo-teal-500 rounded-xl text-white group-hover:scale-110 transition-transform">
                      {objective.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-nexo-orange-500 transition-colors">
                        {objective.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {objective.description}
                      </p>
                      <Button 
                        variant="link" 
                        className="text-nexo-teal-500 p-0 h-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        Saber más →
                      </Button>
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
