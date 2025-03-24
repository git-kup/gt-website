
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

  // Reset scroll position on route change
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
      scrolled ? "bg-background/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/17a370cd-2718-477c-918f-c327e9b9d205.png" 
              alt="Goldtech Solutions" 
              className="h-10 md:h-12"
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
                <div className="fixed inset-0 top-20 bg-background z-40">
                  <nav className="flex flex-col p-8 space-y-4">
                    {routes.map((route) => (
                      <Link
                        key={route.path}
                        to={route.path}
                        className={cn(
                          "py-2 px-4 rounded-lg font-medium text-lg hover:bg-muted transition-colors hover:text-accent",
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
                          <Button 
                            variant="outline" 
                            className="w-full justify-between hover:bg-muted hover:text-accent group"
                          >
                            <span>Client Resources</span>
                            <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 bg-popover shadow-lg">
                          <DropdownMenuItem className="cursor-pointer hover:bg-muted hover:text-accent" asChild>
                            <Link to="/support">Support On-Demand</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer hover:bg-muted hover:text-accent" asChild>
                            <a href="https://speedtest.net" target="_blank" rel="noopener noreferrer">Speed Test</a>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer hover:bg-muted hover:text-accent" asChild>
                            <a href="https://portal.goldtechny.com/client/login.php" target="_blank" rel="noopener noreferrer">Portal Login</a>
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
                    "text-sm font-medium transition-colors hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
                    location.pathname === route.path
                      ? "text-accent after:scale-x-100"
                      : "text-foreground/80"
                  )}
                >
                  {route.label}
                </Link>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-[140px] flex justify-between items-center hover:bg-accent/10 hover:text-accent transition-colors group"
                  >
                    <span>Client Resources</span>
                    <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-popover shadow-lg">
                  <DropdownMenuItem className="cursor-pointer hover:bg-muted hover:text-accent" asChild>
                    <Link to="/support">Support On-Demand</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-muted hover:text-accent" asChild>
                    <a href="https://speedtest.net" target="_blank" rel="noopener noreferrer">Speed Test</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-muted hover:text-accent" asChild>
                    <a href="https://portal.goldtechny.com/client/login.php" target="_blank" rel="noopener noreferrer">Portal Login</a>
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
