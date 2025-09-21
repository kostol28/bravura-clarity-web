import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { BarChart3, Database, TrendingUp, Zap, Users, Shield, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "Data Analytics & Insights",
      description: "Transform raw data into actionable business intelligence with advanced analytics and visualization.",
      features: [
        "Custom dashboard development",
        "Real-time data monitoring",
        "Advanced statistical analysis",
        "Performance KPI tracking",
        "Automated reporting systems",
      ],
      price: "Starting at $2,500/month",
    },
    {
      icon: <Database className="h-12 w-12 text-primary" />,
      title: "Data Integration & Management",
      description: "Consolidate data from multiple sources into a unified, reliable, and scalable data infrastructure.",
      features: [
        "Multi-source data integration",
        "Data warehouse design",
        "ETL pipeline development",
        "Data quality assurance",
        "Cloud migration services",
      ],
      price: "Starting at $3,000/month",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Predictive Analytics & ML",
      description: "Leverage machine learning and AI to forecast trends, optimize operations, and drive growth.",
      features: [
        "Predictive modeling",
        "Machine learning algorithms",
        "Forecasting & trend analysis",
        "Risk assessment models",
        "Customer behavior analytics",
      ],
      price: "Starting at $4,000/month",
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Real-Time Data Processing",
      description: "Process and analyze data streams in real-time for immediate insights and rapid decision-making.",
      features: [
        "Stream processing pipelines",
        "Real-time alerting systems",
        "Live dashboard updates",
        "Event-driven architecture",
        "High-velocity data handling",
      ],
      price: "Starting at $3,500/month",
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Business Intelligence Solutions",
      description: "Comprehensive BI solutions that empower your team with self-service analytics capabilities.",
      features: [
        "Self-service BI platforms",
        "Executive reporting suites",
        "Data visualization tools",
        "Mobile analytics apps",
        "User training & support",
      ],
      price: "Starting at $2,000/month",
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Data Governance & Security",
      description: "Ensure data privacy, compliance, and security with enterprise-grade governance frameworks.",
      features: [
        "Data governance frameworks",
        "Compliance management",
        "Security auditing",
        "Access control systems",
        "Privacy protection measures",
      ],
      price: "Starting at $2,800/month",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current data landscape, identify opportunities, and define project scope.",
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a comprehensive roadmap with clear milestones, timelines, and success metrics.",
    },
    {
      step: "03",
      title: "Implementation & Development",
      description: "Build and deploy your custom data solutions using best practices and proven methodologies.",
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Rigorously test all systems and optimize performance to ensure maximum reliability.",
    },
    {
      step: "05",
      title: "Deployment & Training",
      description: "Launch your solution and provide comprehensive training to ensure adoption success.",
    },
    {
      step: "06",
      title: "Ongoing Support",
      description: "Continuous monitoring, maintenance, and enhancement to keep your systems performing optimally.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-subtle">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">Our Services</Badge>
            
            <h1 className="heading-hero text-foreground">
              Comprehensive data solutions for
              <span className="bg-gradient-hero bg-clip-text text-transparent"> modern businesses</span>
            </h1>
            
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              From data integration to advanced analytics, we provide end-to-end solutions 
              that transform how you collect, process, and leverage your business data.
            </p>

            <Button asChild size="lg" className="btn-hero">
              <NavLink to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="container px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="heading-section">Our Expertise</h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Choose from our comprehensive range of data services, each designed to address specific business challenges and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-elegant hover:border-primary/20 h-full">
                <CardContent className="space-y-6 h-full flex flex-col">
                  <div className="p-4 bg-primary/10 rounded-xl w-fit">
                    {service.icon}
                  </div>
                  
                  <div className="space-y-4 flex-grow">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-border">
                    <p className="text-lg font-semibold text-primary">{service.price}</p>
                    <Button asChild className="w-full">
                      <NavLink to="/contact">Learn More</NavLink>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">Our Process</Badge>
            <h2 className="heading-section">How we work with you</h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures successful project delivery from initial consultation to ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="card-elegant hover:border-primary/20">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-32">
        <div className="container px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">Industries We Serve</Badge>
            <h2 className="heading-section">Trusted across industries</h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Our data solutions are tailored to meet the unique requirements of various industries and business sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "E-commerce & Retail",
              "Healthcare & Life Sciences",
              "Financial Services",
              "Manufacturing",
              "Technology & SaaS",
              "Media & Entertainment",
              "Real Estate",
              "Education & Training"
            ].map((industry, index) => (
              <Card key={index} className="card-elegant hover:border-primary/20">
                <CardContent className="text-center">
                  <p className="font-medium">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="container px-6">
          <div className="text-center space-y-8 text-primary-foreground">
            <h2 className="heading-section">Ready to get started?</h2>
            <p className="text-large max-w-2xl mx-auto opacity-90">
              Let's discuss your data challenges and explore how our services can drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <NavLink to="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <NavLink to="/about">Learn About Our Team</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;