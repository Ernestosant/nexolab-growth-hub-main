import React from 'react';
import ParticleBackground from './ParticleBackground';

interface AnimatedBackgroundProps {
  isDark?: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ isDark = false }) => {
  return (
    <div className="fixed inset-0 z-0" style={{ opacity: 0.6 }}>
      <ParticleBackground isDark={isDark} />
    </div>
  );
};

export default AnimatedBackground;