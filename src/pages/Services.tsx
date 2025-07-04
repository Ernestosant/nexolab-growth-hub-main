import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Globe, Palette, Share2, Megaphone, Settings, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Desarrollo Web & Mobile',
      description: 'Creamos aplicaciones web y móviles modernas, escalables y de alto rendimiento que transforman tu presencia digital y elevan la experiencia de usuario a niveles superiores.',
      features: [
        'Aplicaciones multiplataforma (React Native, Flutter)',
        'Progressive Web Apps (PWA) avanzadas',
        'Arquitectura de backend escalable y segura',
        'APIs RESTful y GraphQL optimizadas',
        'Integración con servicios cloud y microservicios'
      ]
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Desarrollo de Soluciones con IA',
      description: 'Implementamos soluciones inteligentes de vanguardia que revolucionan procesos empresariales mediante tecnologías de Inteligencia Artificial de última generación, posicionando a tu empresa por delante de la competencia con innovación disruptiva.',
      features: [
        'Algoritmos de Machine Learning personalizados',
        'Automatización inteligente de procesos',
        'Análisis predictivo y Big Data',
        'Chatbots y asistentes virtuales avanzados',
        'Visión por computadora y NLP'
      ]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'Automatización y CRM',
      description: 'Sistemas automatizados que optimizan tus procesos de ventas y marketing, mejorando la experiencia del cliente y tu eficiencia operativa.',
      features: [
        'Implementación y configuración de CRM',
        'Automatización de email marketing',
        'Lead scoring y nurturing',
        'Integración de herramientas',
        'Reportes y análisis avanzados'
      ]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Branding',
      description: 'Creamos identidades visuales únicas y memorables que conectan emocionalmente con tu audiencia objetivo, diferenciándote de la competencia.',
      features: [
        'Diseño de logotipos profesionales',
        'Manual de identidad corporativa',
        'Paleta de colores estratégica',
        'Tipografías corporativas',
        'Aplicaciones de marca'
      ]
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: 'Gestión de Redes Sociales',
      description: 'Gestión integral de tus perfiles sociales con estrategias de contenido que generan engagement auténtico y conversiones medibles.',
      features: [
        'Estrategia de contenido personalizada',
        'Creación de posts y stories',
        'Community management profesional',
        'Análisis de métricas y KPIs',
        'Gestión de campañas orgánicas'
      ]
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: 'Servicios de Marketing y Publicidad Digital',
      description: 'Estrategias de marketing digital y campañas publicitarias personalizadas diseñadas para alcanzar tus objetivos empresariales.',
      features: [
        'Google Ads (Search, Display, Shopping)',
        'Meta Ads (Facebook, Instagram)',
        'Segmentación avanzada de audiencias',
        'Optimización de conversiones',
        'Reportes detallados de performance'
      ]
    }
  ];

  return (
    <div className="min-h-screen text-foreground relative overflow-hidden">
      <AnimatedBackground isDark={isDark} />
      <div className="relative z-10">
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                ¿Qué <span className="gradient-text">hacemos?</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Servicios especializados en marketing digital y tecnología que impulsan 
                el crecimiento sostenible de tu negocio
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-16 bg-transparent">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Columna izquierda */}
              <div className="grid auto-rows-fr gap-8">
                {[services[0], services[1], services[2]].map((service, index) => (
                  <Card
                    key={service.title}
                    className="glass-card card-enhanced p-6 hover:scale-[1.02] transition-all duration-300 group border-0 h-[400px]"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center space-x-4 flex-shrink-0 mb-4">
                        <div className="p-2.5 rounded-xl text-white accent-glow bg-gradient-to-br from-nexo-orange-500 to-nexo-blue-600">
                          {service.icon}
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-foreground">
                            {service.title}
                          </h2>
                        </div>
                      </div>
                      <div className="flex-1 overflow-y-auto custom-scrollbar">
                        <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                          {service.description}
                        </p>
                        <div>
                          <h3 className="font-semibold mb-2 text-foreground">Incluye:</h3>
                          <ul className="space-y-1.5">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 flex-shrink-0 text-nexo-orange-500" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              {/* Columna derecha */}
              <div className="grid auto-rows-fr gap-8">
                {[services[3], services[4], services[5]].map((service, index) => (
                  <Card
                    key={service.title}
                    className="glass-card card-enhanced p-6 hover:scale-[1.02] transition-all duration-300 group border-0 h-[400px]"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center space-x-4 flex-shrink-0 mb-4">
                        <div className="p-2.5 rounded-xl text-white accent-glow bg-gradient-to-br from-nexo-orange-500 to-nexo-blue-600">
                          {service.icon}
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-foreground">
                            {service.title}
                          </h2>
                        </div>
                      </div>
                      <div className="flex-1 overflow-y-auto custom-scrollbar">
                        <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                          {service.description}
                        </p>
                        <div>
                          <h3 className="font-semibold mb-2 text-foreground">Incluye:</h3>
                          <ul className="space-y-1.5">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 flex-shrink-0 text-nexo-orange-500" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact-cta" className="py-16 bg-gradient-to-br from-nexo-orange-500 to-nexo-blue-700">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                ¿Listo para impulsar tu negocio?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Conversemos sobre tu proyecto. Nuestro equipo está listo para 
                crear una estrategia personalizada que genere resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white text-white dark:text-white bg-nexo-blue-700/90 hover:bg-white hover:text-nexo-blue-700 px-8 py-4 rounded-full font-semibold transition-colors duration-200"
                  style={{ color: 'inherit' }}
                  onClick={() => window.location.href = '/#contact'}
                >
                  Agendar Reunión
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Services;