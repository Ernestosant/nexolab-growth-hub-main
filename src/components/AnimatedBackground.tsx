import React from 'react';

interface AnimatedBackgroundProps {
  isDark?: boolean;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ isDark = false }) => {
  return (
    <div className="fixed inset-0 z-0 bg-image-background">
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>
    </div>
  );
};

export default AnimatedBackground;