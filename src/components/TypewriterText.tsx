import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  speed = 50, 
  delay = 500,
  className = '' 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Add initial delay before starting
    const initialTimer = setTimeout(() => {
      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setDisplayedText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);

        return () => clearTimeout(timer);
      } else if (currentIndex === text.length) {
        // Mark as complete when text is fully written
        setIsComplete(true);
      }
    }, currentIndex === 0 ? delay : 0);

    return () => clearTimeout(initialTimer);
  }, [currentIndex, text, speed, delay]);

  return (
    <span className={`typewriter-enhanced relative ${className}`}>
      <span className="typewriter-text-enhanced">
        {displayedText}
      </span>
      <span 
        className={`typewriter-cursor-enhanced ml-1 font-bold text-nexo-orange-500 dark:text-nexo-orange-400 transition-opacity duration-300 ${
          isComplete ? 'opacity-0' : 'opacity-100 animate-pulse-cursor'
        }`}
      >
        |
      </span>
    </span>
  );
};

export default TypewriterText; 