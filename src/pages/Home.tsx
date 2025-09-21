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
      <section className="section-padding surface-primary geometric-pattern">
        <div className="container-enterprise">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {trustSignals.map((signal, index) => (
                <Badge key={index} variant="secondary" className="trust-badge">
                  {signal}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-display">
              Transform Data Into
              <span className="block text-primary"> Competitive Advantage</span>
            </h1>
            
            <p className="text-body-large text-muted-foreground max-w-4xl mx-auto">
              Enterprise-grade data analytics and AI solutions that turn complex data challenges 
              into strategic opportunities. Trusted by industry leaders worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <NavLink to="/contact" className="flex items-center">
                  Start Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <NavLink to="/services">View Solutions</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-enterprise">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">Enterprise Solutions</Badge>
            <h2 className="text-headline">
              Built for Enterprise Scale
            </h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Comprehensive data solutions designed for the most demanding enterprise environments, 
              with security, scalability, and performance at the core.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card-feature group">
                  <div className="feature-icon mb-6 group-hover:bg-accent/20 transition-colors duration-200">
                    <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-200" />
                  </div>
                  <h3 className="text-title mb-4 group-hover:text-accent transition-colors duration-200">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section-padding surface-secondary data-grid">
        <div className="container-enterprise">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">Trusted by Leaders</Badge>
            <h2 className="text-headline">
              Enterprise-Proven Results
            </h2>
            <p className="text-body-large text-muted-foreground">
              Numbers that demonstrate our commitment to enterprise excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="metric-card text-center group hover:border-accent/30 transition-all duration-200">
                <div className="metric-value mb-2 group-hover:text-accent transition-colors duration-200">{metric.value}</div>
                <div className="metric-label mb-3">{metric.label}</div>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
                <div className="w-8 h-0.5 bg-accent/30 group-hover:bg-accent mx-auto mt-3 transition-all duration-200"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-padding">
        <div className="container-enterprise">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">Industry Leaders</Badge>
            <h2 className="text-headline">
              Trusted Across Industries
            </h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              From Fortune 500 enterprises to innovative startups, organizations worldwide 
              rely on our expertise to unlock the power of their data.
            </p>
          </div>

          {/* Client Logo Grid Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-60">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="client-logo bg-muted rounded-lg h-20 flex items-center justify-center">
                <div className="w-16 h-8 bg-muted-foreground/20 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding surface-overlay text-primary-foreground">
        <div className="container-enterprise">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto bg-white/20 text-white border-white/30">
              Get Started Today
            </Badge>
            <h2 className="text-headline">
              Ready to Transform Your Data Strategy?
            </h2>
            <p className="text-body-large opacity-90">
              Schedule a free consultation with our data experts. Discover how enterprise-grade 
              analytics can drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <NavLink to="/contact" className="flex items-center">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-accent hover:text-accent-foreground hover:border-accent">
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