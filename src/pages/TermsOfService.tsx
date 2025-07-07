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
              <section className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">1. Aceptación de los Términos</h2>
                <p>
                  Al acceder y utilizar los servicios de NexoLab, usted acepta estar sujeto a estos Términos de Servicio. 
                  Si no está de acuerdo con alguna parte de estos términos, no podrá acceder a nuestros servicios.
                </p>

                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">2. Descripción del Servicio</h2>
                <p>
                  NexoLab proporciona servicios de desarrollo web, marketing digital y consultoría tecnológica. 
                  Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del servicio en cualquier momento.
                </p>

                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">3. Obligaciones del Cliente</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar información precisa y actualizada</li>
                  <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                  <li>Utilizar los servicios de manera legal y ética</li>
                  <li>Cumplir con los términos de pago acordados</li>
                  <li>Respetar los derechos de propiedad intelectual</li>
                </ul>

                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">4. Propiedad Intelectual</h2>
                <p>
                  Todo el contenido, código, diseños y materiales generados por NexoLab permanecen como propiedad 
                  intelectual de la empresa hasta que se complete el pago total del proyecto, momento en el cual 
                  los derechos acordados serán transferidos al cliente.
                </p>

                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">5. Pagos y Facturación</h2>
                <p>
                  Los términos de pago específicos se establecerán en el contrato de servicios. Los pagos deben 
                  realizarse según lo acordado y pueden incluir:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pagos iniciales antes de comenzar el proyecto</li>
                  <li>Pagos por hitos completados</li>
                  <li>Tarifas mensuales por servicios recurrentes</li>
                  <li>Cargos adicionales por cambios o servicios extra</li>
                </ul>

                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">6. Limitación de Responsabilidad</h2>
                <p>
                  NexoLab no será responsable por daños indirectos, incidentales o consecuentes que surjan del 
                  uso o la imposibilidad de usar nuestros servicios. Nuestra responsabilidad está limitada al 
                  monto pagado por los servicios.
                </p>

                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">7. Terminación de Servicios</h2>
                <p>
                  Nos reservamos el derecho de terminar o suspender el acceso a nuestros servicios por:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Incumplimiento de estos términos</li>
                  <li>Falta de pago</li>
                  <li>Conducta fraudulenta o abusiva</li>
                  <li>Requerimiento legal o regulatorio</li>
                </ul>

                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">8. Modificaciones a los Términos</h2>
                <p>
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán 
                  en vigor inmediatamente después de su publicación. El uso continuado de nuestros servicios 
                  constituye la aceptación de los términos modificados.
                </p>

                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">9. Contacto</h2>
                <p>
                  Para cualquier consulta sobre estos términos de servicio, puede contactarnos en:{' '}
                  <a 
                    href="mailto:legal@nexolab.com"
                    className="text-nexo-blue-600 dark:text-nexo-blue-400 hover:underline"
                  >
                    legal@nexolab.com
                  </a>
                </p>

                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">10. Política de Reembolso</h2>
                <p>
                  Nuestra política de reembolso es la siguiente:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Los pagos iniciales y depósitos generalmente no son reembolsables.</li>
                  <li>Para servicios en curso, se puede solicitar un reembolso dentro de los 7 días posteriores al pago si el servicio no ha comenzado.</li>
                  <li>Para proyectos cancelados, cualquier trabajo ya completado debe ser pagado en su totalidad.</li>
                  <li>Las solicitudes de reembolso deben enviarse por escrito a nuestro departamento de finanzas.</li>
                  <li>Cada solicitud de reembolso será evaluada caso por caso.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">11. Resolución de Disputas</h2>
                <p>
                  En caso de disputa entre NexoLab y el cliente, ambas partes acuerdan:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Intentar resolver el conflicto de manera amistosa mediante negociación directa.</li>
                  <li>Si no se llega a un acuerdo, recurrir a mediación con un tercero neutral antes de iniciar acciones legales.</li>
                  <li>Participar en el proceso de resolución de disputas de buena fe.</li>
                  <li>Compartir equitativamente los costos de mediación, a menos que se acuerde lo contrario.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">12. Ley Aplicable</h2>
                <p>
                  Estos Términos de Servicio se rigen por las leyes españolas, sin consideración a disposiciones de conflicto de leyes. 
                  Cualquier acción legal relacionada con estos términos se presentará exclusivamente en los tribunales de Madrid, España, 
                  y usted acepta someterse a la jurisdicción personal de dichos tribunales.
                </p>

                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">13. Confidencialidad</h2>
                <p>
                  NexoLab se compromete a mantener la confidencialidad de toda la información proporcionada por el cliente. Esto incluye:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Información comercial sensible y estrategias de negocio.</li>
                  <li>Datos de clientes y usuarios finales.</li>
                  <li>Credenciales de acceso y configuraciones de seguridad.</li>
                  <li>Información financiera y detalles de facturación.</li>
                  <li>Propiedad intelectual y código fuente desarrollado específicamente para el cliente.</li>
                </ul>
                <p>
                  Esta obligación de confidencialidad sobrevive a la terminación de nuestros servicios, 
                  excepto cuando la divulgación sea requerida por ley o autoridades competentes.
                </p>

                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">14. Garantías</h2>
                <p>
                  NexoLab garantiza que todos los servicios prestados:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Se realizarán con habilidad y cuidado razonables por personal calificado.</li>
                  <li>Cumplirán con las especificaciones acordadas en el contrato de servicios.</li>
                  <li>No infringirán derechos de propiedad intelectual de terceros.</li>
                </ul>
                <p>
                  Para servicios de desarrollo web, ofrecemos un período de garantía de 30 días después de la entrega 
                  para corregir errores técnicos sin costo adicional. Esta garantía no cubre modificaciones solicitadas 
                  que no estaban en el alcance original del proyecto.
                </p>

                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">15. Uso del Servicio</h2>
                <p>
                  Al utilizar nuestros servicios, usted acepta:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>No utilizar los servicios para fines ilegales o no autorizados.</li>
                  <li>No intentar obtener acceso no autorizado a sistemas o redes relacionadas con los servicios.</li>
                  <li>No realizar actividades que puedan dañar, deshabilitar o sobrecargar la infraestructura de NexoLab.</li>
                  <li>No transmitir virus, malware u otro código malicioso a través de nuestros sistemas.</li>
                  <li>No compartir contenido que sea ilegal, ofensivo, difamatorio o que viole derechos de terceros.</li>
                </ul>
                <p>
                  NexoLab se reserva el derecho de suspender o terminar el acceso a los servicios si se detecta un uso indebido 
                  o que viole estos términos.
                </p>

                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">9. Contacto</h2>
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
