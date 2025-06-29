import React, { useEffect, useRef } from 'react';

interface LaserParticleBackgroundProps {
  isDark?: boolean;
}

// Simplified Stage class for canvas management
class Stage {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  speed: number = 1;
  onTick?: (args: { width: number; height: number; simTime: number }) => void;
  onDraw?: (args: { ctx: CanvasRenderingContext2D; width: number; height: number }) => void;
  onResize?: () => void;
  private animationId?: number;
  private startTime: number;

  constructor(container: HTMLElement) {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d')!;
    this.startTime = Date.now();
    container.appendChild(this.canvas);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.resize();
    this.startAnimation();
    
    window.addEventListener('resize', () => {
      this.resize();
      if (this.onResize) this.onResize();
    });
  }

  private resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  private startAnimation() {
    const animate = () => {
      const simTime = (Date.now() - this.startTime) * this.speed;
      
      if (this.onTick) {
        this.onTick({ width: this.width, height: this.height, simTime });
      }
      
      if (this.onDraw) {
        this.onDraw({ ctx: this.ctx, width: this.width, height: this.height });
      }
      
      this.animationId = requestAnimationFrame(animate);
    };
    animate();
  }

  createCachedSprite(config: any) {
    return new CachedSprite(config);
  }

  createSprite(config: any) {
    return new Sprite(config);
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
  }
}

class CachedSprite {
  x: number = 0;
  y: number = 0;
  rotation: number = 0;
  width: number;
  height: number;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private drawFunction: (ctx: CanvasRenderingContext2D, sprite: any) => void;

  constructor(config: any) {
    this.width = config.width;
    this.height = config.height;
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext('2d')!;
    this.drawFunction = config.draw;
    this.redraw();
  }

  redraw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawFunction(this.ctx, this);
  }

  resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.canvas.width = width;
    this.canvas.height = height;
  }

  drawOnContext(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
    ctx.rotate(this.rotation);
    ctx.drawImage(this.canvas, -this.width / 2, -this.height / 2);
    ctx.restore();
  }
}

class Sprite {
  x: number = 0;
  y: number = 0;
  rotation: number = 0;
  width: number;
  height: number;
  private drawFunction: (ctx: CanvasRenderingContext2D, sprite: any) => void;

  constructor(config: any) {
    this.width = config.width;
    this.height = config.height;
    this.drawFunction = config.draw;
  }

  drawOnContext(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    this.drawFunction(ctx, this);
    ctx.restore();
  }
}

const LaserParticleBackground: React.FC<LaserParticleBackgroundProps> = ({ isDark = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<Stage | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const stage = new Stage(containerRef.current);
    stageRef.current = stage;

    // Configuration
    const config = {
      trails: 0,
      rotation: 0,
      scale: 1.2,
      dotCount: 4,
      dotScale: 1.5,
      clusterCount: 5,
      clusterScale: 1.2,
      laserRadius: 0,
      maxClusterDiameter: 0,
      clusterSpriteSize: 0
    };

    // Dynamic config update
    const updateConfig = () => {
      config.laserRadius = (stage.width < 800 ? 1.4 : 2) * config.dotScale;
      config.maxClusterDiameter = stage.width * (3/4) * config.clusterScale;
      config.clusterSpriteSize = config.maxClusterDiameter + config.laserRadius * 4;
    };

    updateConfig();

    // Create laser dot sprite
    const laserDotSprite = stage.createCachedSprite({
      width: config.laserRadius * 2 + 1,
      height: config.laserRadius * 2 + 1,
      draw(ctx: CanvasRenderingContext2D, { width, height }: any) {
        const radius = width / 2;
        const smallRadius = radius * 0.5;
        
        // Adjust colors based on theme
        const primaryColor = isDark ? '#00FF88' : '#2563EB';
        const secondaryColor = isDark ? '#00CCFF' : '#3B82F6';
        
        ctx.fillStyle = primaryColor;
        ctx.beginPath();
        ctx.arc(radius, radius, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = secondaryColor;
        ctx.beginPath();
        ctx.arc(radius, radius, smallRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Create laser dot cluster sprite
    const laserDotClusterSprite = stage.createCachedSprite({
      width: config.clusterSpriteSize,
      height: config.clusterSpriteSize,
      draw(ctx: CanvasRenderingContext2D, { rotation, width }: any) {
        const diameter = Math.sin(rotation) * config.maxClusterDiameter;
        const radius = diameter / 2;
        const count = config.dotCount;
        const divisor = count - 1;
        const canvasRadius = width / 2;
        
        for (let x = 0; x < count; x++) {
          for (let y = 0; y < count; y++) {
            const xPercent = x / divisor;
            const yPercent = y / divisor;
            const dist = Math.sqrt(Math.pow(0.5 - xPercent, 2) + Math.pow(0.5 - yPercent, 2));
            laserDotSprite.x = canvasRadius + xPercent * diameter - radius;
            laserDotSprite.y = canvasRadius + yPercent * diameter - radius;
            ctx.globalAlpha = 1 - dist;
            laserDotSprite.drawOnContext(ctx);
          }
        }
      }
    });

    // Create main laser sprite
    const laserSprite = stage.createSprite({
      width: 0,
      height: 0,
      draw(ctx: CanvasRenderingContext2D, { rotation }: any) {
        const diameter = stage.width * config.scale;
        const radius = diameter / 2;
        const count = config.clusterCount;
        const divisor = count - 1;
        
        laserDotClusterSprite.redraw();
        const clusterRadius = laserDotClusterSprite.width / 2;
        
        for (let x = 0; x < count; x++) {
          for (let y = 0; y < count; y++) {
            const xPercent = x / divisor;
            const yPercent = y / divisor;
            const dist = Math.sqrt(Math.pow(0.5 - xPercent, 2) + Math.pow(0.5 - yPercent, 2));
            laserDotClusterSprite.x = xPercent * diameter - radius - clusterRadius;
            laserDotClusterSprite.y = yPercent * diameter - radius - clusterRadius;
            laserDotClusterSprite.rotation = rotation;
            ctx.globalAlpha = 1 - dist;
            laserDotClusterSprite.drawOnContext(ctx);
          }
        }
      }
    });

    // Animation tick
    stage.onTick = ({ width, height, simTime }: any) => {
      laserSprite.x = width / 2;
      laserSprite.y = height / 2;
      laserSprite.rotation = config.rotation;
      
      config.rotation += simTime / 5000;
      if (config.rotation > 7 || config.rotation < -7) {
        config.rotation = config.rotation % (Math.PI * 2);
      }
    };

    // Drawing
    stage.onDraw = ({ ctx, width, height }: any) => {
      // Very light transparent background for trail effect
      const bgAlpha = 0.01; // Even more transparent
      const bgColor = isDark 
        ? `rgba(0,0,0,${bgAlpha})` 
        : `rgba(255,255,255,${bgAlpha})`;
      
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);
      laserSprite.drawOnContext(ctx);
    };

    // Resize handler
    const handleResize = () => {
      updateConfig();
      laserDotSprite.resize(config.laserRadius * 2 + 1, config.laserRadius * 2 + 1);
      laserDotSprite.redraw();
      laserDotClusterSprite.resize(config.clusterSpriteSize, config.clusterSpriteSize);
    };

    stage.onResize = handleResize;

    // Cleanup
    return () => {
      stage.destroy();
    };
  }, [isDark]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: -1,
        mixBlendMode: isDark ? 'lighten' : 'multiply'
      }}
    />
  );
};

export default LaserParticleBackground; 