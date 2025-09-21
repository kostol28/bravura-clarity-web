import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { BarChart3, Database, TrendingUp, Zap, Users, Shield, ArrowRight, CheckCircle, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Advanced Analytics & BI",
      description: "Transform complex data into actionable business intelligence with enterprise-grade analytics platforms and custom visualization solutions.",
      features: [
        "Executive dashboards & KPI tracking",
        "Self-service analytics platforms", 
        "Advanced statistical analysis",
        "Real-time monitoring systems",
        "Predictive analytics models",
      ],
      pricing: "Enterprise",
      popular: false,
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Data Engineering & Architecture",
      description: "Build scalable, secure data infrastructure that supports your organization's current needs and future growth ambitions.",
      features: [
        "Cloud data warehouse design",
        "ETL/ELT pipeline development",
        "Data lake & lakehouse architecture",
        "API development & integration",
        "Data quality & governance frameworks",
      ],
      pricing: "Enterprise",
      popular: true,
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "AI & Machine Learning",
      description: "Deploy production-ready AI solutions that drive operational efficiency, enhance customer experience, and unlock new revenue streams.",
      features: [
        "Custom ML model development",
        "Natural language processing",
        "Computer vision solutions",
        "Recommendation engines",
        "MLOps & model lifecycle management",
      ],
      pricing: "Enterprise",
      popular: false,
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Real-time Data Processing",
      description: "Process high-velocity data streams for immediate insights, real-time alerting, and rapid decision-making capabilities.",
      features: [
        "Stream processing pipelines",
        "Event-driven architectures",
        "Real-time alerting systems",
        "Live dashboard updates",
        "High-throughput data ingestion",
      ],
      pricing: "Enterprise",
      popular: false,
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Data Governance & Security",
      description: "Implement comprehensive data governance frameworks that ensure compliance, security, and proper data stewardship across your organization.",
      features: [
        "Data privacy & compliance (GDPR, HIPAA)",
        "Access control & authentication",
        "Data lineage & cataloging",
        "Risk assessment & auditing",
        "Backup & disaster recovery",
      ],
      pricing: "Enterprise",
      popular: false,
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Data Strategy Consulting",
      description: "Work with our expert consultants to develop comprehensive data strategies aligned with your business objectives and industry requirements.",
      features: [
        "Data maturity assessments",
        "Strategic roadmap development",
        "Technology stack evaluation",
        "Change management support",
        "Training & enablement programs",
      ],
      pricing: "Custom",
      popular: false,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of your current data landscape, business requirements, and strategic objectives.",
      duration: "2-4 weeks"
    },
    {
      step: "02", 
      title: "Strategy & Architecture",
      description: "Design scalable data architecture and develop detailed implementation roadmap with clear milestones.",
      duration: "3-6 weeks"
    },
    {
      step: "03",
      title: "Development & Implementation",
      description: "Agile development approach with regular stakeholder reviews and iterative delivery of capabilities.",
      duration: "8-16 weeks"
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Comprehensive testing including performance, security, and user acceptance validation processes.",
      duration: "2-4 weeks"
    },
    {
      step: "05",
      title: "Deployment & Training",
      description: "Production deployment with comprehensive user training and knowledge transfer to internal teams.",
      duration: "2-3 weeks"
    },
    {
      step: "06",
      title: "Support & Optimization",
      description: "Ongoing monitoring, maintenance, and continuous optimization to ensure peak performance.",
      duration: "Ongoing"
    },
  ];

  const industries = [
    { name: "Financial Services", desc: "Banking, Insurance, Investment Management" },
    { name: "Healthcare & Life Sciences", desc: "Hospitals, Pharmaceuticals, Medical Devices" },
    { name: "Retail & E-commerce", desc: "Consumer Brands, Online Marketplaces" },
    { name: "Manufacturing", desc: "Industrial, Automotive, Aerospace" },
    { name: "Technology", desc: "SaaS, Software, Hardware" },
    { name: "Energy & Utilities", desc: "Oil & Gas, Renewable Energy, Utilities" },
    { name: "Media & Entertainment", desc: "Broadcasting, Gaming, Publishing" },
    { name: "Government & Public Sector", desc: "Federal, State, Local Agencies" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding surface-primary geometric-pattern">
        <div className="container-enterprise">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto trust-badge">Enterprise Solutions</Badge>
            
            <h1 className="text-display">
              Data Solutions for
              <span className="block text-primary">Enterprise Scale</span>
            </h1>
            
            <p className="text-body-large text-muted-foreground max-w-4xl mx-auto">
              Comprehensive data and AI solutions designed for the most demanding enterprise environments. 
              From strategy to implementation, we deliver measurable business outcomes at scale.
            </p>

            <Button size="lg" className="btn-primary">
              <NavLink to="/contact" className="flex items-center">
                Schedule Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-enterprise">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-headline">Enterprise Services Portfolio</h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Comprehensive data services designed to address every aspect of your data transformation journey, 
              from infrastructure to advanced analytics and AI implementation.
            </p>
          </div>

          <div className="feature-grid">
            {services.map((service, index) => (
              <Card key={index} className={`card-feature relative ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardContent className="space-y-6 p-8 h-full flex flex-col">
                  <div className="feature-icon">
                    {service.icon}
                  </div>
                  
                  <div className="space-y-4 flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="text-title">{service.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {service.pricing}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6">
                    <NavLink to="/contact">Learn More</NavLink>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding surface-secondary data-grid">
        <div className="container-enterprise">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">Our Methodology</Badge>
            <h2 className="text-headline">Proven Delivery Framework</h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Our battle-tested methodology ensures successful project delivery with predictable timelines, 
              clear milestones, and measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="card-interactive">
                <CardContent className="space-y-6 p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-title">{step.title}</h3>
                      <p className="text-xs text-primary font-medium mt-1">{step.duration}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding">
        <div className="container-enterprise">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">Industry Expertise</Badge>
            <h2 className="text-headline">Sector-Specific Solutions</h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Deep domain expertise across critical industries, with specialized solutions tailored to 
              unique regulatory, operational, and competitive requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="card-interactive text-center">
                <CardContent className="space-y-4 p-6">
                  <h3 className="font-semibold text-lg">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground">{industry.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="section-padding surface-secondary">
        <div className="container-enterprise">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">Business Impact</Badge>
            <h2 className="text-headline">Measurable ROI</h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Our enterprise clients consistently achieve significant returns on their data investments 
              through improved efficiency, new revenue streams, and competitive advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="metric-card text-center">
              <div className="metric-value text-accent">285%</div>
              <div className="metric-label mb-3">Average ROI</div>
              <p className="text-sm text-muted-foreground">Within 18 months of implementation</p>
            </div>
            <div className="metric-card text-center">
              <div className="metric-value text-accent">40%</div>
              <div className="metric-label mb-3">Efficiency Gains</div>
              <p className="text-sm text-muted-foreground">Reduction in manual processes</p>
            </div>
            <div className="metric-card text-center">
              <div className="metric-value text-accent">6 Mo</div>
              <div className="metric-label mb-3">Time to Value</div>
              <p className="text-sm text-muted-foreground">Average time to first insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding surface-overlay text-primary-foreground">
        <div className="container-enterprise">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-headline">Transform Your Data Capabilities</h2>
            <p className="text-body-large opacity-90">
              Ready to unlock the full potential of your enterprise data? Let's discuss your specific 
              requirements and develop a custom solution that delivers measurable business impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <NavLink to="/contact" className="flex items-center">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <NavLink to="/about">Meet Our Experts</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;