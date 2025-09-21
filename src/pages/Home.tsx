import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Users, Zap } from "lucide-react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Organic Design */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-primary rounded-full blur-3xl opacity-20"></div>
        </div>
        
        <div className="container relative px-6 text-center">
          <h1 className="heading-hero text-foreground mb-6">
            Transforming Data Into
            <span className="block text-transparent bg-gradient-gold bg-clip-text">
              Flowing Insights
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Like the organic patterns in nature, we help your data flow seamlessly into actionable insights 
            that drive real business growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero">
              <NavLink to="/contact" className="flex items-center">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
            <Button variant="outline" size="lg" className="btn-outline">
              <NavLink to="/services">Explore Services</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Organic Section Divider */}
      <div className="section-divider"></div>

      {/* Features Section with Flowing Design */}
      <section className="py-20 md:py-32">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="heading-section text-foreground mb-4">
              Where Data Meets Design
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our approach flows naturally from raw data to beautiful, actionable insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Organic Analytics",
                description: "Data visualization that flows naturally, revealing patterns like organic growth in nature"
              },
              {
                icon: TrendingUp,
                title: "Growth Insights",
                description: "Predictive analytics that help your business grow as naturally as flowing water finds its path"
              },
              {
                icon: Users,
                title: "Human-Centered",
                description: "Dashboards designed with organic user flows, making complex data feel intuitive and natural"
              },
              {
                icon: Zap,
                title: "Dynamic Reporting",
                description: "Real-time insights that adapt and flow with your business needs, like living organisms"
              },
              {
                icon: BarChart3,
                title: "Fluid Integration",
                description: "Seamless data connections that flow between systems like interconnected neural networks"
              },
              {
                icon: TrendingUp,
                title: "Evolving Solutions",
                description: "Analytics that grow and adapt with your business, following natural evolutionary patterns"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card-elegant group hover:scale-105">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6 mx-auto">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Organic Section Divider */}
      <div className="section-divider"></div>

      {/* Stats Section with Flowing Layout */}
      <section className="py-20 md:py-32 bg-gradient-subtle">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="heading-section text-foreground mb-4">
              Flowing Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Like rivers carve canyons, our solutions create lasting impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed", description: "Each one unique as a snowflake" },
              { number: "98%", label: "Client Satisfaction", description: "Relationships that flow naturally" },
              { number: "50M+", label: "Data Points Analyzed", description: "Patterns revealed organically" },
              { number: "24/7", label: "Support Available", description: "Always flowing like a river" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-gold bg-clip-text mb-2">
                    {stat.number}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gold rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Organic Flow */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <div className="w-full h-full bg-gold rounded-l-full blur-3xl"></div>
        </div>
        
        <div className="container relative px-6 text-center">
          <h2 className="heading-section text-foreground mb-6">
            Ready to Flow Forward?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let your data find its natural path to success. Start your journey with Bravura today.
          </p>
          <Button size="lg" className="btn-gold">
            <NavLink to="/contact" className="flex items-center">
              Begin Your Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;