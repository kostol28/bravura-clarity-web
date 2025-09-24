import { Separator } from "@/components/ui/separator";
import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/50 backdrop-blur-sm border-t border-gray-200/50">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <img 
                src="/bravura-logo.png" 
                alt="Bravura A Data Works Company Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="font-light text-gray-600 text-sm leading-relaxed">
              Transforming data into competitive advantage with AI-powered enterprise solutions 
              trusted by industry leaders worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-medium text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-4">
              <NavLink to="/" className="font-light text-gray-600 hover:text-accent transition-colors text-sm">
                Home
              </NavLink>
              <NavLink to="/about" className="font-light text-gray-600 hover:text-accent transition-colors text-sm">
                About Us
              </NavLink>
              <NavLink to="/services" className="font-light text-gray-600 hover:text-accent transition-colors text-sm">
                Services
              </NavLink>
              <NavLink to="/blog" className="font-light text-gray-600 hover:text-accent transition-colors text-sm">
                Blog
              </NavLink>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-medium text-foreground">Services</h3>
            <div className="flex flex-col space-y-4">
              <span className="font-light text-gray-600 text-sm">Data Analytics</span>
              <span className="font-light text-gray-600 text-sm">Business Intelligence</span>
              <span className="font-light text-gray-600 text-sm">Machine Learning</span>
              <span className="font-light text-gray-600 text-sm">Data Integration</span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-medium text-foreground">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                <p className="font-light text-gray-600 text-sm">hello@bravuradataworks.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                <p className="font-light text-gray-600 text-sm">(555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                <p className="font-light text-gray-600 text-sm">Enterprise District, Tech City</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-gray-200/50" />

        {/* Copyright and Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="font-light text-gray-600 text-sm">
            © {currentYear} Bravura A Data Works Company. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <NavLink 
              to="/privacy" 
              className="font-light text-gray-600 hover:text-accent transition-colors text-sm"
            >
              Privacy Policy
            </NavLink>
            <NavLink 
              to="/terms" 
              className="font-light text-gray-600 hover:text-accent transition-colors text-sm"
            >
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;