import React from 'react';
import { Card } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'María González',
      position: 'CEO, TechStartup',
      company: 'Empresa de Software',
      rating: 5,
      text: 'NexoLab transformó completamente nuestra presencia digital. En 6 meses aumentamos nuestras ventas en un 250% y mejoramos significativamente nuestro ROI.',
      avatar: '👩‍💼'
    },
    {
      name: 'Carlos Rodríguez',
      position: 'Director de Marketing',
      company: 'E-commerce Fashion',
      rating: 5,
      text: 'Su estrategia de automatización nos permitió captar 300% más leads mientras reducíamos el tiempo invertido en gestión manual. Resultados increíbles.',
      avatar: '👨‍💼'
    },
    {
      name: 'Ana Martín',
      position: 'Fundadora',
      company: 'Clínica Dental',
      rating: 5,
      text: 'La gestión de redes sociales de NexoLab nos ayudó a conectar con pacientes de forma auténtica. Hemos visto un crecimiento del 180% en consultas.',
      avatar: '👩‍⚕️'
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 text-container-enhanced">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-enhanced">
            Resultados reales de empresas que confiaron en nosotros
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass-card testimonial-card-enhanced p-6 hover:scale-105 transition-all duration-300 group relative border-0"
            >
              <div className="absolute top-4 right-4 text-nexo-orange-500/20 group-hover:text-nexo-orange-500/40 transition-colors">
                <Quote className="h-8 w-8" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <h3 className="font-bold text-base group-hover:text-nexo-orange-500 transition-colors">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </p>
                      <p className="text-xs text-nexo-blue-600 font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-nexo-orange-500 text-nexo-orange-500" />
                  ))}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
