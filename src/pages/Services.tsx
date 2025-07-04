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
      icon: <Brain className="h-8 w-8" />,
      title: 'Desarrollo de Soluciones con IA',
      description: 'Implementamos soluciones inteligentes de vanguardia que revolucionan procesos empresariales mediante tecnologías de Inteligencia Artificial de última generación, posicionando a tu empresa por delante de la competencia con innovación disruptiva.',
      features: [
        'Algoritmos de Machine Learning personalizados',
        'Automatización inteligente de procesos',
        'Análisis predictivo y Big Data',
        'Chatbots y asistentes virtuales avanzados',
        'Visión por computadora y NLP'
      ],
      examples: [
        'Sistema predictivo que aumentó ventas en 400%',
        'Chatbot IA que redujo costos de soporte en 60%',
        'Automatización que optimizó procesos en 80%'
      ],
      price: 'Desde $5,000',
      duration: '6-12 semanas'
    },
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
      ],
      examples: [
        'App móvil con 1M+ descargas y 4.8 estrellas',
        'E-commerce que aumentó conversiones en 300%',
        'SaaS platform con 50K+ usuarios activos'
      ],
      price: 'Desde $3,500',
      duration: '6-10 semanas'
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
      ],
      examples: [
        'Rediseño completo de marca para startup tecnológica',
        'Identidad visual para cadena de restaurantes',
        'Branding para consultoría de negocios'
      ],
      price: 'Desde $1,500',
      duration: '2-4 semanas'
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
      ],
      examples: [
        'Crecimiento del 300% en engagement para marca de moda',
        'Gestión integral para clínica dental',
        'Estrategia social para e-commerce'
      ],
      price: 'Desde $800/mes',
      duration: 'Servicio mensual'
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
      ],
      examples: [
        'ROI del 400% en campaña para SaaS',
        'Reducción del 50% en costo por adquisición',
        'Aumento del 250% en ventas online'
      ],
      price: 'Desde $1,200/mes + ad spend',
      duration: 'Campañas continuas'
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
      ],
      examples: [
        'Automatización que generó 40% más leads',
        'CRM personalizado para inmobiliaria',
        'Sistema de nurturing para consultora'
      ],
      price: 'Desde $2,000',
      duration: '3-6 semanas'
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
            <div className="space-y-16">
              {services.map((service, index) => (
                <Card 
                  key={index}
                  className={`glass-card card-enhanced p-8 hover:scale-[1.02] transition-all duration-300 group border-0 ${
                    index === 0 ? 'service-card-featured ring-2 ring-nexo-orange-500/40 shadow-2xl' : ''
                  }`}
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Service Info */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl text-white accent-glow ${
                          index === 0 
                            ? 'bg-gradient-to-br from-nexo-orange-500 to-red-600 shadow-lg' 
                            : 'bg-gradient-to-br from-nexo-orange-500 to-nexo-blue-600'
                        }`}>
                          {service.icon}
                        </div>
                        <div>
                          <h2 className={`text-2xl font-bold ${
                            index === 0 ? 'text-nexo-orange-600' : 'text-foreground'
                          }`}>
                            {service.title}
                          </h2>
                          <div className="flex items-center space-x-4 mt-2">
                            <Badge variant="outline" className={`${
                              index === 0 
                                ? 'text-nexo-orange-600 border-nexo-orange-600 font-semibold' 
                                : 'text-nexo-orange-500 border-nexo-orange-500'
                            }`}>
                              {service.price}
                            </Badge>
                            <Badge variant="outline" className="text-nexo-blue-600 border-nexo-blue-600">
                              {service.duration}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div>
                        <h3 className="font-semibold mb-3 text-foreground">Incluye:</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <CheckCircle className={`h-4 w-4 flex-shrink-0 ${
                                index === 0 ? 'text-nexo-orange-600' : 'text-nexo-orange-500'
                              }`} />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Examples */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-4 text-foreground">Casos de Éxito:</h3>
                        <div className="space-y-3">
                          {service.examples.map((example, idx) => (
                            <div key={idx} className="p-4 bg-background/30 rounded-lg border border-border/50">
                              <div className="flex items-start space-x-3">
                                <ArrowRight className="h-4 w-4 text-nexo-blue-600 mt-0.5 flex-shrink-0" />
                                <p className="text-sm text-muted-foreground">{example}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
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
                  className="border-white text-white hover:bg-white hover:text-nexo-blue-700 px-8 py-4 rounded-full font-semibold"
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