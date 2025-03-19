
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export function Navbar() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-background/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center font-bold text-xl text-primary">
            <span className="text-accent">Gold</span>tech
          </Link>

          {isMobile ? (
            <>
              <button 
                onClick={toggleMenu}
                className="p-2 focus:outline-none"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {isOpen && (
                <div className="fixed inset-0 top-20 bg-background z-40">
                  <nav className="flex flex-col p-8 space-y-4">
                    {routes.map((route) => (
                      <Link
                        key={route.path}
                        to={route.path}
                        className={cn(
                          "py-2 px-4 rounded-lg font-medium text-lg hover:bg-muted transition-colors",
                          location.pathname === route.path
                            ? "text-accent"
                            : "text-foreground/80"
                        )}
                        onClick={closeMenu}
                      >
                        {route.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              )}
            </>
          ) : (
            <nav className="flex items-center space-x-8">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    location.pathname === route.path
                      ? "text-accent"
                      : "text-foreground/80"
                  )}
                >
                  {route.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Get Started
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
