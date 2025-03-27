
import { useEffect, useState, useRef } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

export function AnimatedCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  
  // Handle mouse movement
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);
    
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    
    // Check for touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setHidden(true);
    }
    
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);
  
  // Handle hover effect on links and buttons
  useEffect(() => {
    const handleLinkHoverEvents = () => {
      const allLinks = document.querySelectorAll("a, button, [role='button'], .hover-effect");
      
      allLinks.forEach((link) => {
        link.addEventListener("mouseenter", () => setLinkHovered(true));
        link.addEventListener("mouseleave", () => setLinkHovered(false));
      });
      
      return () => {
        allLinks.forEach((link) => {
          link.removeEventListener("mouseenter", () => setLinkHovered(true));
          link.removeEventListener("mouseleave", () => setLinkHovered(false));
        });
      };
    };
    
    return handleLinkHoverEvents();
  }, []);
  
  // Animation style based on mouse state
  const cursorOuterStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    opacity: hidden ? 0 : 1,
    width: linkHovered ? "40px" : "24px",
    height: linkHovered ? "40px" : "24px",
    backgroundColor: linkHovered ? "rgba(212, 175, 55, 0.2)" : "rgba(212, 175, 55, 0.15)",
    borderColor: clicked ? "rgba(212, 175, 55, 0.6)" : "rgba(212, 175, 55, 0.4)"
  };
  
  const cursorInnerStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    opacity: hidden ? 0 : 1,
    width: clicked ? "8px" : "10px",
    height: clicked ? "8px" : "10px",
    backgroundColor: clicked ? "#b5932b" : "#d4af37"
  };
  
  return (
    <div className="cursor-container pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <div
        ref={cursorOuterRef}
        className="cursor-outer fixed rounded-full border-2 transition-all duration-100 ease-out"
        style={cursorOuterStyle}
      />
      <div
        ref={cursorInnerRef}
        className="cursor-inner fixed rounded-full transition-all duration-75 ease-out"
        style={cursorInnerStyle}
      />
    </div>
  );
}
