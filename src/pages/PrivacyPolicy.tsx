import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const PrivacyPolicy = () => {
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
              Política de Privacidad
            </h1>
            
            <div className="space-y-8 glass-card p-8 rounded-lg">
              <section className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4">
                  1. Introducción
                </h2>
                <p>
                  En NexoLab, nos tomamos muy en serio la privacidad de nuestros usuarios. 
                  Esta política describe cómo recopilamos, utilizamos y protegemos su información personal.
                </p>

                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">
                  2. Información que Recopilamos
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Información de contacto (nombre, email, teléfono)</li>
                  <li>Información técnica (IP, cookies, tipo de dispositivo)</li>
                  <li>Datos de uso del servicio</li>
                </ul>

                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">
                  3. Uso de la Información
                </h2>
                <p>
                  Utilizamos su información para:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proveer y mejorar nuestros servicios</li>
                  <li>Comunicarnos con usted</li>
                  <li>Personalizar su experiencia</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>

                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">
                  4. Protección de Datos
                </h2>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal.
                </p>

                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">
                  5. Sus Derechos
                </h2>
                <p>
                  Usted tiene derecho a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acceder a sus datos personales</li>
                  <li>Rectificar sus datos</li>
                  <li>Solicitar la eliminación de sus datos</li>
                  <li>Oponerse al procesamiento de sus datos</li>
                </ul>

                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">
                  6. Contacto
                </h2>
                <p>
                  Para cualquier consulta sobre nuestra política de privacidad, puede contactarnos en:
                  <br />
                  <a 
                    href="mailto:privacy@nexolab.com"
                    className="text-nexo-blue-600 dark:text-nexo-blue-400 hover:underline"
                  >
                    privacy@nexolab.com
                  </a>
                </p>

                <h2 className="text-2xl font-semibold text-nexo-orange-500 dark:text-nexo-orange-400 mb-4 mt-8">
                  7. Actualizaciones
                </h2>
                <p>
                  Esta política fue actualizada por última vez el 1 de Marzo de 2024.
                  Nos reservamos el derecho de modificar esta política en cualquier momento.
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

export default PrivacyPolicy;
