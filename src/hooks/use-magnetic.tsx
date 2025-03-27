
import { useState, useRef, useEffect } from "react";

interface MagneticOptions {
  strength?: number;
  radius?: number;
  resetDuration?: number;
}

export function useMagnetic({ 
  strength = 30, 
  radius = 200,
  resetDuration = 600
}: MagneticOptions = {}) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      const distance = Math.sqrt(x * x + y * y);
      
      if (distance < radius) {
        // Calculate strength based on how close the cursor is to the center
        const strengthFactor = 1 - distance / radius;
        setPosition({ 
          x: x * strengthFactor * (strength / 10), 
          y: y * strengthFactor * (strength / 10) 
        });
        setIsHovered(true);
      } else if (isHovered) {
        // Reset position with a smooth animation
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }
    };
    
    const handleMouseLeave = () => {
      setIsHovered(false);
      setPosition({ x: 0, y: 0 });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (element) {
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [radius, strength, isHovered, resetDuration]);
  
  const magneticProps = {
    ref: elementRef,
    style: {
      transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      transition: isHovered ? 'transform 0.2s ease-out' : `transform ${resetDuration}ms ease-out`
    }
  };
  
  return { magneticProps, isHovered };
}

// Example magnetic button component
export function MagneticButton({ 
  children, 
  className, 
  strength = 30,
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { strength?: number }) {
  const { magneticProps, isHovered } = useMagnetic({ strength });
  
  return (
    <button
      {...props}
      {...magneticProps}
      className={`magnetic-effect ${className || ''} ${isHovered ? 'scale-105' : ''}`}
    >
      {children}
    </button>
  );
}
