import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-28 items-center justify-between px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img 
            src="/src/assets/bravura-logo-new.png" 
            alt="Bravura A Data Works Company Logo" 
            className="h-28 w-auto"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-accent relative ${
                  isActive ? "text-accent" : "text-muted-foreground"
                } ${isActive ? "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-accent after:rounded-full" : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <NavLink to="/contact">Get Started</NavLink>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex flex-col space-y-6 mt-6">
              <NavLink to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <img 
              src="/src/assets/bravura-logo-new.png" 
              alt="Bravura A Data Works Company Logo" 
              className="h-24 w-auto"
            />
              </NavLink>
              
                <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors hover:text-accent px-3 py-2 rounded-md ${
                        isActive ? "text-accent bg-accent/10 border-l-2 border-accent" : "text-muted-foreground hover:bg-accent/5"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                </nav>
              
              <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <NavLink to="/contact" onClick={() => setIsOpen(false)}>Get Started</NavLink>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;