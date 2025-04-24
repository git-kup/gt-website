
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
      scrolled || isOpen ? "bg-background/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/17a370cd-2718-477c-918f-c327e9b9d205.png" 
              alt="Goldtech Solutions" 
              className="h-10 md:h-12 transition-all duration-300"
            />
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
                <div className="fixed inset-0 top-20 bg-background z-40 animate-fade-in">
                  <nav className="flex flex-col p-8 space-y-4">
                    {routes.map((route) => (
                      <Link
                        key={route.path}
                        to={route.path}
                        className={cn(
                          "py-2 px-4 rounded-lg font-medium text-lg transition-colors",
                          location.pathname === route.path
                            ? "text-accent"
                            : "text-foreground/80"
                        )}
                        onClick={closeMenu}
                      >
                        {route.label}
                      </Link>
                    ))}
                    <div className="pt-4 border-t border-border/50">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-full justify-between">
                            Client Resources
                            <ChevronDown className="h-4 w-4 ml-2" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                          <DropdownMenuItem asChild>
                            <Link to="/support">Support On-Demand</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <a href="https://speedtest.net" target="_blank" rel="noopener noreferrer">
                              Speed Test
                            </a>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <a href="https://portal.goldtechny.com/client/login.php" target="_blank" rel="noopener noreferrer">
                              Portal Login
                            </a>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
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
                    "text-sm font-medium transition-colors",
                    location.pathname === route.path
                      ? "text-accent"
                      : "text-foreground/80 hover:text-accent"
                  )}
                >
                  {route.label}
                </Link>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Client Resources
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link to="/support">Support On-Demand</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="https://speedtest.net" target="_blank" rel="noopener noreferrer">
                      Speed Test
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="https://portal.goldtechny.com/client/login.php" target="_blank" rel="noopener noreferrer">
                      Portal Login
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
