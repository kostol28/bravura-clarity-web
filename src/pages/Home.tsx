import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, Database, TrendingUp, Shield, Users, Zap } from "lucide-react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Transform raw data into actionable insights with sophisticated statistical analysis and machine learning algorithms."
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamlessly connect and consolidate data from multiple sources into unified, reliable data infrastructure."
    },
    {
      icon: TrendingUp,
      title: "Predictive Modeling",
      description: "Leverage AI and machine learning to forecast trends, optimize operations, and drive strategic decisions."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Industry-leading security protocols and compliance frameworks protect your most valuable data assets."
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Work with certified data scientists and engineers who understand your industry's unique challenges."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Process and analyze data streams in real-time for immediate insights and rapid response capabilities."
    }
  ];

  const metrics = [
    { value: "500+", label: "Enterprise Clients", description: "Trusted by Fortune 500 companies" },
    { value: "99.9%", label: "System Uptime", description: "Enterprise-grade reliability" },
    { value: "10PB+", label: "Data Processed", description: "Petabytes of data analyzed daily" },
    { value: "24/7", label: "Expert Support", description: "Round-the-clock technical assistance" }
  ];

  const trustSignals = [
    "SOC 2 Type II Certified",
    "ISO 27001 Compliant", 
    "GDPR Ready",
    "HIPAA Compliant"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50/30">
        <div className="container-enterprise">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {trustSignals.map((signal, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 rounded-full text-xs font-light bg-white/60 border border-gray-200/50 text-gray-700">
                  {signal}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-light tracking-tight leading-none">
              Transform Data Into
              <span className="block text-primary font-normal"> Competitive Advantage</span>
            </h1>
            
            <p className="text-xl font-light text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade data analytics and AI solutions that turn complex data challenges 
              into strategic opportunities. Trusted by industry leaders worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
              <Button size="lg" className="btn-accent">
                <NavLink to="/contact" className="flex items-center">
                  Start Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button variant="outline" size="lg" className="btn-outline">
                <NavLink to="/services">View Solutions</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32">
        <div className="container-enterprise">
          <div className="text-center space-y-8 mb-20">
            <Badge variant="secondary" className="w-fit mx-auto px-4 py-2 rounded-full text-xs font-light bg-white/60 border border-gray-200/50 text-gray-700">Enterprise Solutions</Badge>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
              Built for Enterprise Scale
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive data solutions designed for the most demanding enterprise environments, 
              with security, scalability, and performance at the core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card-feature group">
                  <div className="w-16 h-16 rounded-2xl bg-gray-100/60 flex items-center justify-center mb-8 group-hover:bg-accent/10 transition-all duration-300">
                    <Icon className="w-8 h-8 text-gray-600 group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium mb-6 group-hover:text-accent transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 lg:py-32 bg-white/50 backdrop-blur-sm">
        <div className="container-enterprise">
          <div className="text-center space-y-8 mb-20">
            <Badge variant="secondary" className="w-fit mx-auto px-4 py-2 rounded-full text-xs font-light bg-white/60 border border-gray-200/50 text-gray-700">Trusted by Leaders</Badge>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
              Enterprise-Proven Results
            </h2>
            <p className="text-xl font-light text-gray-600">
              Numbers that demonstrate our commitment to enterprise excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl lg:text-6xl font-light text-foreground mb-4 group-hover:text-accent transition-colors duration-300">{metric.value}</div>
                <div className="text-lg font-medium mb-3 text-gray-800">{metric.label}</div>
                <p className="text-sm font-light text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 lg:py-32">
        <div className="container-enterprise">
          <div className="text-center space-y-8 mb-20">
            <Badge variant="secondary" className="w-fit mx-auto px-4 py-2 rounded-full text-xs font-light bg-white/60 border border-gray-200/50 text-gray-700">Industry Leaders</Badge>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
              Trusted Across Industries
            </h2>
            <p className="text-xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From Fortune 500 enterprises to innovative startups, organizations worldwide 
              rely on our expertise to unlock the power of their data.
            </p>
          </div>

          {/* Client Logo Grid Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-16">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex items-center justify-center py-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-40 hover:opacity-80">
                <div className="w-20 h-10 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50/30 to-gray-100/30">
        <div className="container-enterprise">
          <div className="text-center space-y-12 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto px-4 py-2 rounded-full text-xs font-light bg-white/60 border border-gray-200/50 text-gray-700">
              Get Started Today
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
              Transform Your Data Strategy
            </h2>
            <p className="text-xl font-light text-gray-600 leading-relaxed">
              Schedule a free consultation with our data experts. Discover how enterprise-grade 
              analytics can drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button size="lg" className="btn-accent">
                <NavLink to="/contact" className="flex items-center">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button variant="outline" size="lg" className="btn-outline">
                <NavLink to="/about">Meet Our Team</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;