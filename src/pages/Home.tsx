import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { ArrowRight, BarChart3, Database, TrendingUp, Users, CheckCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Advanced Analytics",
      description: "Transform raw data into actionable insights with our cutting-edge analytics platform.",
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Data Integration",
      description: "Seamlessly connect and consolidate data from multiple sources into a unified view.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Predictive Modeling",
      description: "Leverage machine learning to forecast trends and make data-driven decisions.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Collaboration",
      description: "Share insights and collaborate on data projects with your entire organization.",
    },
  ];

  const testimonials = [
    {
      quote: "Bravura Data Works transformed how we understand our customers. Their insights drove a 35% increase in our conversion rates.",
      author: "Sarah Chen",
      role: "VP of Marketing",
      company: "TechFlow Inc.",
      rating: 5,
    },
    {
      quote: "The team's expertise in data analytics is unmatched. They delivered actionable insights that directly impacted our bottom line.",
      author: "Michael Rodriguez",
      role: "CEO",
      company: "DataDriven Solutions",
      rating: 5,
    },
    {
      quote: "Professional, reliable, and results-oriented. Bravura Data Works exceeded our expectations in every way.",
      author: "Emily Johnson",
      role: "Operations Director",
      company: "Growth Ventures",
      rating: 5,
    },
  ];

  const benefits = [
    "Custom dashboards and reporting",
    "Real-time data processing",
    "Advanced security and compliance",
    "24/7 support and monitoring",
    "Scalable cloud infrastructure",
    "Integration with existing systems",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-subtle">
        <div className="container px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                🚀 Now serving 500+ businesses
              </Badge>
              
              <div className="space-y-6">
                <h1 className="heading-hero text-foreground">
                  Transforming Data Into
                  <span className="bg-gradient-hero bg-clip-text text-transparent"> Decisions</span>
                </h1>
                
                <p className="text-large text-muted-foreground max-w-2xl">
                  Unlock the power of your data with professional analytics solutions. 
                  Make informed decisions faster with insights you can trust.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-hero">
                  <NavLink to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </NavLink>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-outline">
                  <NavLink to="/services">View Services</NavLink>
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>30-day guarantee</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={heroImage}
                  alt="Data analytics dashboard showing business insights and charts"
                  className="rounded-2xl shadow-large w-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-hero opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">Features</Badge>
            <h2 className="heading-section">Everything you need to succeed</h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive data platform provides all the tools and insights your business needs to thrive in today's data-driven world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-elegant hover:border-primary/20">
                <CardContent className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">Why Choose Us</Badge>
                <h2 className="heading-section">Built for modern businesses</h2>
                <p className="text-large text-muted-foreground">
                  We understand that every business is unique. That's why our solutions are tailored to meet your specific needs and goals.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="btn-hero">
                <NavLink to="/about">Learn More About Us</NavLink>
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="card-elegant">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">500+ Projects</h3>
                      <p className="text-muted-foreground">Successfully delivered</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elegant">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">98% Satisfaction</h3>
                      <p className="text-muted-foreground">Client retention rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32">
        <div className="container px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">Testimonials</Badge>
            <h2 className="heading-section">What our clients say</h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what businesses like yours have to say about working with Bravura Data Works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elegant">
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="space-y-1">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
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
            <h2 className="heading-section">Ready to transform your data?</h2>
            <p className="text-large max-w-2xl mx-auto opacity-90">
              Join hundreds of businesses that trust Bravura Data Works to turn their data into competitive advantages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <NavLink to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <NavLink to="/services">Explore Services</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;