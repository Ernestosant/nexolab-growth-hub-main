import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  isDark?: boolean;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ isDark = false }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const starsRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    // Configuration
    const config = {
      vel: 1,
      radius: 3,
      alpha: 0.8,
      starsCounter: 200
    };

    let center = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };

    // Star class
    class Star {
      x: number;
      y: number;
      x0: number;
      y0: number;
      radius: number;
      lineWidth: number;
      vel: { x: number; y: number };

      constructor() {
        this.x = center.x;
        this.y = center.y;
        this.x0 = center.x;
        this.y0 = center.y;
        this.radius = 0;
        this.lineWidth = 0;
        this.vel = { x: 0, y: 0 };
        this.init();
      }

      init() {
        this.radius = Math.random() * config.radius + 1;
        this.x = center.x;
        this.y = center.y;
        this.lineWidth = 0;
        this.vel = {
          x: Math.random() * 6 - 3,
          y: Math.random() * 6 - 3
        };
      }

      update() {
        this.vel.x *= 1.02;
        this.vel.y *= 1.02;
        this.lineWidth += 0.03;
        this.x0 = this.x;
        this.y0 = this.y;
        this.x += this.vel.x;
        this.y += this.vel.y;
        this.draw();
        if (this.isDead()) this.init();
      }

      draw() {
        if (!context) return;
        context.beginPath();
        context.moveTo(this.x0, this.y0);
        context.lineTo(this.x, this.y);
        context.lineWidth = this.lineWidth;
        context.stroke();
      }

      isDead() {
        return (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height);
      }
    }

    // Initialize stars
    const initStars = () => {
      starsRef.current = [];
      for (let i = 0; i < config.starsCounter; i++) {
        setTimeout(() => {
          starsRef.current.push(new Star());
        }, i * 50);
      }
    };

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      center.x = canvas.width / 2;
      center.y = canvas.height / 2;
    };

    // Render function
    const render = () => {
      // Clear canvas with very light transparent background
      const bgColor = isDark 
        ? 'rgba(1, 4, 35, 0.02)' 
        : 'rgba(245, 245, 255, 0.02)';
      
      const strokeColor = isDark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(30, 41, 59, 0.9)';

      context.fillStyle = bgColor;
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.strokeStyle = strokeColor;
      context.lineCap = 'round';

      for (let i = 0; i < starsRef.current.length; i++) {
        starsRef.current[i].update();
      }
    };

    // Animation loop
    const animate = () => {
      render();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    handleResize();
    initStars();
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: -1,
        mixBlendMode: isDark ? 'lighten' : 'multiply'
      }}
    />
  );
};

export default ParticleBackground; 