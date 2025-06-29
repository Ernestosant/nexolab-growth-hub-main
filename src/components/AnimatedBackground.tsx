import React from 'react';
import ParticleBackground from './ParticleBackground';

interface AnimatedBackgroundProps {
  isDark?: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ isDark = false }) => {
  return <ParticleBackground isDark={isDark} />;
};

export default AnimatedBackground; 