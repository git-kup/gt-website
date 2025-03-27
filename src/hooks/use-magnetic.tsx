
import { useState, useRef, useEffect } from "react";

interface MagneticOptions {
  strength?: number;
  radius?: number;
  resetDuration?: number;
  scale?: number;
}

export function useMagnetic({ 
  strength = 30, 
  radius = 200,
  resetDuration = 600,
  scale = 1.05
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
      
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const x = clientX - centerX;
      const y = clientY - centerY;
      const distance = Math.sqrt(x * x + y * y);
      
      if (distance < radius) {
        // Calculate strength based on how close the cursor is to the center
        const strengthFactor = 1 - distance / radius;
        // Add a subtle elastic effect
        const elasticX = x * strengthFactor * (strength / 10);
        const elasticY = y * strengthFactor * (strength / 10);
        
        setPosition({ x: elasticX, y: elasticY });
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
      transform: `translate3d(${position.x}px, ${position.y}px, 0) ${isHovered ? `scale(${scale})` : 'scale(1)'}`,
      transition: isHovered 
        ? 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)' 
        : `transform ${resetDuration}ms cubic-bezier(0.34, 1.56, 0.64, 1)`
    }
  };
  
  return { magneticProps, isHovered };
}

// Example magnetic button component
export function MagneticButton({ 
  children, 
  className, 
  strength = 30,
  scale = 1.05,
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { 
  strength?: number;
  scale?: number;
}) {
  const { magneticProps, isHovered } = useMagnetic({ strength, scale });
  
  return (
    <button
      {...props}
      ref={magneticProps.ref as React.Ref<HTMLButtonElement>}
      style={{
        ...magneticProps.style,
        ...(props.style || {})
      }}
      className={`magnetic-effect ${className || ''} ${isHovered ? 'hover-active' : ''}`}
    >
      <span className="relative z-10 transition-transform duration-200">
        {children}
      </span>
      {isHovered && (
        <span className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent/20 rounded-md animate-pulse"></span>
      )}
    </button>
  );
}

// New MagneticCard component for cards with magnetic effect
export function MagneticCard({ 
  children, 
  className, 
  strength = 20,
  scale = 1.02,
  ...props 
}: React.HTMLAttributes<HTMLDivElement> & { 
  strength?: number;
  scale?: number;
}) {
  const { magneticProps, isHovered } = useMagnetic({ strength, scale });
  
  return (
    <div
      {...props}
      ref={magneticProps.ref as React.Ref<HTMLDivElement>}
      style={{
        ...magneticProps.style,
        ...(props.style || {})
      }}
      className={`magnetic-effect relative overflow-hidden ${className || ''} ${isHovered ? 'hover-active' : ''}`}
    >
      {children}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent animate-shimmer"></div>
      )}
    </div>
  );
}
