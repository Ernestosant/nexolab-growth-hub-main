import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { PreloadManager, usePerformanceMetrics } from '@/components/PreloadManager';
import ServiceWorkerManager from '@/components/ServiceWorkerManager';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  
  // Hook para monitorear performance
  usePerformanceMetrics();

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    // Marcar body como high-performance si el dispositivo lo soporta
    const isHighPerformance = navigator.hardwareConcurrency >= 4 && 
                             !(navigator as any).connection?.effectiveType?.includes('2g') &&
                             !(navigator as any).connection?.effectiveType?.includes('3g');
    
    if (isHighPerformance) {
      document.body.classList.add('high-performance');
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
    <>
      <ServiceWorkerManager />
      <PreloadManager isDark={isDark} />
      <div className="min-h-screen text-foreground relative overflow-hidden">
        <AnimatedBackground isDark={isDark} />
        <div className="relative z-10">
          <Header isDark={isDark} toggleTheme={toggleTheme} />
          <HeroSection />
          <div className="space-y-0">
            <ServicesSection />
          </div>
          <ContactSection />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
