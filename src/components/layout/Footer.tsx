import { NavLink } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 mt-20">
      <div className="container px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/src/assets/bravura-logo-clean.svg" 
              alt="Bravura A Data Works Company Logo" 
              className="h-20 w-auto"
            />
            <p className="text-sm text-muted-foreground max-w-xs">
              Transforming data into actionable insights for modern businesses. 
              Professional analytics solutions you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <NavLink to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </NavLink>
              <NavLink to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </NavLink>
              <NavLink to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </NavLink>
              <NavLink to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Blog
              </NavLink>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-muted-foreground">Data Analytics</span>
              <span className="text-sm text-muted-foreground">Business Intelligence</span>
              <span className="text-sm text-muted-foreground">Custom Reporting</span>
              <span className="text-sm text-muted-foreground">Data Visualization</span>
            </div>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <div className="flex flex-col space-y-2">
              <NavLink to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Get in Touch
              </NavLink>
              <span className="text-sm text-muted-foreground">hello@bravuradataworks.com</span>
              <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Bravura A Data Works Company. All rights reserved.
            </p>
            <div className="flex items-center space-x-1">
              <span className="text-xs text-muted-foreground">🔒</span>
              <span className="text-xs text-muted-foreground">SSL Secured</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <NavLink to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;