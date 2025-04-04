
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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
      scrolled || isOpen ? "bg-background/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center hover-effect group">
            <img 
              src="/lovable-uploads/17a370cd-2718-477c-918f-c327e9b9d205.png" 
              alt="Goldtech Solutions" 
              className="h-10 md:h-12 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[5deg]"
            />
          </Link>

          {isMobile ? (
            <>
              <button 
                onClick={toggleMenu}
                className="p-2 focus:outline-none transition-transform duration-200 hover:scale-110 active:scale-95 hover-effect"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={24} className="animate-fade-in" /> : <Menu size={24} className="animate-fade-in" />}
              </button>

              {isOpen && (
                <div className="fixed inset-0 top-20 bg-background z-40 animate-fade-in">
                  <nav className="flex flex-col p-8 space-y-4">
                    {routes.map((route, index) => (
                      <Link
                        key={route.path}
                        to={route.path}
                        className={cn(
                          "py-2 px-4 rounded-lg font-medium text-lg hover:bg-muted transition-all duration-300 hover:text-accent hover:translate-x-1 hover-effect",
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
                            className="w-full justify-between hover-effect"
                          >
                            Client Resources
                            <ChevronDown className="h-4 w-4 ml-2" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent 
                          side="right" 
                          align="start" 
                          sideOffset={10}
                          className="w-56 bg-popover shadow-lg"
                        >
                          <DropdownMenuItem className="cursor-pointer hover:bg-muted hover:text-accent hover-effect" asChild>
                            <Link to="/support">Support On-Demand</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer hover:bg-muted hover:text-accent hover-effect" asChild>
                            <a href="https://speedtest.net" target="_blank" rel="noopener noreferrer">Speed Test</a>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer hover:bg-muted hover:text-accent hover-effect" asChild>
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
                <HoverCard key={route.path} openDelay={100} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <Link
                      to={route.path}
                      className={cn(
                        "text-sm font-medium transition-all duration-300 hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:translate-y-[-2px] hover-effect",
                        location.pathname === route.path
                          ? "text-accent after:scale-x-100"
                          : "text-foreground/80"
                      )}
                    >
                      {route.label}
                    </Link>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto p-2 bg-popover/90 backdrop-blur-sm animate-scale-in border border-accent/20">
                    <div className="text-xs text-muted-foreground font-medium">
                      Navigate to {route.label}
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-foreground/80 hover:text-accent hover:bg-transparent transition-all duration-300 hover:translate-y-[-2px] hover-effect">
                      Client Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[220px] animate-scale-in">
                        <li className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link 
                              to="/support"
                              className="flex p-2 select-none rounded-md outline-none hover:bg-muted hover:text-accent transition-colors group hover-effect"
                            >
                              <div className="relative overflow-hidden rounded w-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="p-1">Support On-Demand</div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="row-span-1">
                          <NavigationMenuLink asChild>
                            <a 
                              href="https://speedtest.net" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex p-2 select-none rounded-md outline-none hover:bg-muted hover:text-accent transition-colors group hover-effect"
                            >
                              <div className="relative overflow-hidden rounded w-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="p-1">Speed Test</div>
                              </div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li className="row-span-1">
                          <NavigationMenuLink asChild>
                            <a 
                              href="https://portal.goldtechny.com/client/login.php" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex p-2 select-none rounded-md outline-none hover:bg-muted hover:text-accent transition-colors group hover-effect"
                            >
                              <div className="relative overflow-hidden rounded w-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="p-1">Portal Login</div>
                              </div>
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
