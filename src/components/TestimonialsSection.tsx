
import React from 'react';
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'María González',
      company: 'TechStart Solutions',
      role: 'CEO',
      avatar: 'MG',
      content: 'NexoLab transformó completamente nuestra presencia digital. En 6 meses, aumentamos nuestras ventas online en un 200%. Su equipo es excepcional.',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      company: 'Innovate Corp',
      role: 'Director de Marketing',
      avatar: 'CR',
      content: 'La estrategia de marketing digital que desarrollaron superó todas nuestras expectativas. ROI increíble y resultados medibles desde el primer mes.',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      company: 'Creative Studio',
      role: 'Fundadora',
      avatar: 'AM',
      content: 'Profesionalismo y creatividad en cada proyecto. NexoLab no solo cumple, sino que supera las expectativas. Altamente recomendados.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Lo que dicen nuestros <span className="gradient-text">clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Testimonios reales de empresas que han transformado su crecimiento 
            con nuestras estrategias de marketing y tecnología.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 glass-card hover:scale-105 transition-all duration-300 cursor-pointer group border-0"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animation: 'fade-in 0.6s ease-out forwards'
              }}
            >
              <div className="space-y-6">
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">⭐</div>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <Avatar className="group-hover:scale-110 transition-transform">
                    <AvatarFallback className="bg-gradient-to-br from-nexo-orange-500 to-nexo-teal-500 text-white font-bold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold group-hover:text-nexo-orange-500 transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
