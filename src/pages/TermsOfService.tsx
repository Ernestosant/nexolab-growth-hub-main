import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const TermsOfService = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
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

  return (
    <div className="min-h-screen text-foreground relative overflow-hidden">
      <AnimatedBackground isDark={isDark} />
      <div className="relative z-10">
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        
        <main className="container mx-auto px-4 pt-24 pb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">
              Términos de Servicio
            </h1>
            
            <div className="space-y-8 glass-card p-8 rounded-lg">
              <section className="prose dark:prose-invert max-w-none prose-headings:text-nexo-orange-500 dark:prose-headings:text-nexo-orange-400 prose-headings:font-semibold prose-headings:text-2xl prose-p:text-lg prose-li:text-lg">
                <h2>1. Aceptación de los Términos</h2>
                <p>
                  Al acceder y utilizar los servicios de NexoLab, usted acepta estar sujeto a estos Términos de Servicio. 
                  Si no está de acuerdo con alguna parte de estos términos, no podrá acceder a nuestros servicios.
                </p>

                <h2>2. Descripción del Servicio</h2>
                <p>
                  NexoLab proporciona servicios de desarrollo web, marketing digital y consultoría tecnológica. 
                  Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del servicio en cualquier momento.
                </p>

                <h2>3. Obligaciones del Cliente</h2>
                <ul>
                  <li>Proporcionar información precisa y actualizada</li>
                  <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                  <li>Utilizar los servicios de manera legal y ética</li>
                  <li>Cumplir con los términos de pago acordados</li>
                  <li>Respetar los derechos de propiedad intelectual</li>
                </ul>

                <h2>4. Propiedad Intelectual</h2>
                <p>
                  Todo el contenido, código, diseños y materiales generados por NexoLab permanecen como propiedad 
                  intelectual de la empresa hasta que se complete el pago total del proyecto, momento en el cual 
                  los derechos acordados serán transferidos al cliente.
                </p>

                <h2>5. Pagos y Facturación</h2>
                <p>
                  Los términos de pago específicos se establecerán en el contrato de servicios. Los pagos deben 
                  realizarse según lo acordado y pueden incluir:
                </p>
                <ul>
                  <li>Pagos iniciales antes de comenzar el proyecto</li>
                  <li>Pagos por hitos completados</li>
                  <li>Tarifas mensuales por servicios recurrentes</li>
                  <li>Cargos adicionales por cambios o servicios extra</li>
                </ul>

                <h2>6. Limitación de Responsabilidad</h2>
                <p>
                  NexoLab no será responsable por daños indirectos, incidentales o consecuentes que surjan del 
                  uso o la imposibilidad de usar nuestros servicios. Nuestra responsabilidad está limitada al 
                  monto pagado por los servicios.
                </p>

                <h2>7. Terminación de Servicios</h2>
                <p>
                  Nos reservamos el derecho de terminar o suspender el acceso a nuestros servicios por:
                </p>
                <ul>
                  <li>Incumplimiento de estos términos</li>
                  <li>Falta de pago</li>
                  <li>Conducta fraudulenta o abusiva</li>
                  <li>Requerimiento legal o regulatorio</li>
                </ul>

                <h2>8. Modificaciones a los Términos</h2>
                <p>
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán 
                  en vigor inmediatamente después de su publicación. El uso continuado de nuestros servicios 
                  constituye la aceptación de los términos modificados.
                </p>

                <h2>9. Contacto</h2>
                <p>
                  Para cualquier consulta sobre estos términos de servicio, puede contactarnos en:{' '}
                  <a 
                    href="mailto:legal@nexolab.com"
                    className="text-nexo-blue-600 dark:text-nexo-blue-400 hover:underline"
                  >
                    legal@nexolab.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default TermsOfService;
