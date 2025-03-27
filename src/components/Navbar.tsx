
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

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
      scrolled || isOpen ? "bg-background/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/17a370cd-2718-477c-918f-c327e9b9d205.png" 
              alt="Goldtech Solutions" 
              className="h-10 md:h-12 transition-transform duration-300 hover:scale-105 animate-float"
            />
          </Link>

          {isMobile ? (
            <>
              <button 
                onClick={toggleMenu}
                className="p-2 focus:outline-none transition-transform duration-200 hover:scale-110 active:scale-95"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? 
                  <X size={24} className="animate-enter" /> : 
                  <Menu size={24} className="animate-enter" />
                }
              </button>

              {isOpen && (
                <div className="fixed inset-0 top-20 bg-background z-40 animate-fade-in">
                  <nav className="flex flex-col p-8 space-y-4">
                    {routes.map((route, index) => (
                      <Link
                        key={route.path}
                        to={route.path}
                        className={cn(
                          "py-2 px-4 rounded-lg font-medium text-lg hover:bg-muted transition-all duration-300 hover:text-accent hover:translate-x-1",
                          location.pathname === route.path
                            ? "text-accent"
                            : "text-foreground/80",
                          "animate-fade-in"
                        )}
                        style={{
                          animationDelay: `${index * 50}ms`
                        }}
                        onClick={closeMenu}
                      >
                        {route.label}
                      </Link>
                    ))}
                    <div className="pt-4 border-t border-border/50 animate-fade-in" style={{ animationDelay: "200ms" }}>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button 
                            variant="outline" 
                            className="w-full justify-between group"
                          >
                            <span className="group-hover:translate-x-1 transition-transform duration-300">Client Resources</span>
                            <ChevronDown className="h-4 w-4 ml-2 group-hover:rotate-180 transition-transform duration-300" />
                          </Button>
                        </DropdownMenuTrigger>
                        {/* Fixed positioning by adding sideOffset and positioning to left side */}
                        <DropdownMenuContent 
                          side="right" 
                          align="start" 
                          sideOffset={10} 
                          className="w-56 bg-popover shadow-lg animate-scale-in"
                          forceMount
                        >
                          <DropdownMenuItem className="cursor-pointer hover:bg-muted hover:text-accent transition-all duration-200 hover:pl-6" asChild>
                            <Link to="/support">Support On-Demand</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer hover:bg-muted hover:text-accent transition-all duration-200 hover:pl-6" asChild>
                            <a href="https://speedtest.net" target="_blank" rel="noopener noreferrer">Speed Test</a>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer hover:bg-muted hover:text-accent transition-all duration-200 hover:pl-6" asChild>
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
                  onMouseEnter={() => setHoveredLink(route.path)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative overflow-hidden group",
                    location.pathname === route.path
                      ? "text-accent"
                      : "text-foreground/80 hover:text-accent"
                  )}
                >
                  <span className="relative z-10 inline-block transform transition-transform duration-300 group-hover:translate-y-[-2px]">
                    {route.label}
                  </span>
                  <span 
                    className={cn(
                      "absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300", 
                      location.pathname === route.path || hoveredLink === route.path 
                        ? "scale-x-100" 
                        : "scale-x-0"
                    )} 
                  />
                  <span 
                    className={cn(
                      "absolute inset-0 bg-accent/5 rounded-full scale-0 transition-transform duration-300", 
                      hoveredLink === route.path && "scale-100"
                    )} 
                  />
                </Link>
              ))}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="group bg-transparent text-foreground/80 hover:text-accent hover:bg-transparent transition-all duration-300 hover:translate-y-[-2px]">
                      <span className="group-hover:text-accent transition-colors duration-300">Client Resources</span>
                      <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition-transform duration-300 group-data-[state=open]:rotate-180 group-hover:rotate-180" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[220px] animate-scale-in">
                        <li className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link 
                              to="/support"
                              className="flex p-2 select-none rounded-md outline-none hover:bg-muted hover:text-accent transition-all duration-300 group"
                            >
                              <span className="group-hover:translate-x-1 transition-transform duration-300">Support On-Demand</span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="row-span-1">
                          <NavigationMenuLink asChild>
                            <a 
                              href="https://speedtest.net" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex p-2 select-none rounded-md outline-none hover:bg-muted hover:text-accent transition-all duration-300 group"
                            >
                              <span className="group-hover:translate-x-1 transition-transform duration-300">Speed Test</span>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li className="row-span-1">
                          <NavigationMenuLink asChild>
                            <a 
                              href="https://portal.goldtechny.com/client/login.php" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex p-2 select-none rounded-md outline-none hover:bg-muted hover:text-accent transition-all duration-300 group"
                            >
                              <span className="group-hover:translate-x-1 transition-transform duration-300">Portal Login</span>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
