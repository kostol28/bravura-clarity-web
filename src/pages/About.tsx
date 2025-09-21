import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Users, Target, Award, ArrowRight } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Founder",
      bio: "15+ years in data analytics and business intelligence. Former VP at Fortune 500 tech company.",
      expertise: ["Strategic Planning", "Data Governance", "Business Intelligence"],
    },
    {
      name: "David Chen",
      role: "Chief Data Scientist",
      bio: "PhD in Statistics with expertise in machine learning and predictive modeling. Published researcher.",
      expertise: ["Machine Learning", "Statistical Modeling", "AI Development"],
    },
    {
      name: "Maria Rodriguez",
      role: "VP of Engineering",
      bio: "Former lead engineer at top data companies. Expert in scalable data architecture and systems.",
      expertise: ["Data Engineering", "Cloud Architecture", "System Design"],
    },
    {
      name: "James Thompson",
      role: "Director of Client Success",
      bio: "10+ years helping businesses maximize their data investments and achieve measurable outcomes.",
      expertise: ["Client Strategy", "Project Management", "Business Analysis"],
    },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Data-Driven Excellence",
      description: "We believe every decision should be backed by solid data and rigorous analysis.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Client-Centric Approach",
      description: "Your success is our success. We partner with you to achieve your specific goals.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Innovation & Quality",
      description: "We continuously innovate while maintaining the highest standards of quality and security.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-subtle">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">About Us</Badge>
            
            <h1 className="heading-hero text-foreground">
              Empowering businesses through
              <span className="bg-gradient-hero bg-clip-text text-transparent"> intelligent data</span>
            </h1>
            
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Founded in 2018, Bravura Data Works has been at the forefront of helping businesses 
              transform their data into competitive advantages. We combine deep technical expertise 
              with business acumen to deliver solutions that drive real results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="card-elegant">
              <CardContent className="space-y-6">
                <div className="p-3 bg-primary/10 rounded-xl w-fit">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="heading-section">Our Mission</h2>
                <p className="text-large text-muted-foreground">
                  To democratize data analytics by making sophisticated insights accessible to businesses of all sizes. 
                  We believe that every organization deserves to harness the power of their data to make better decisions 
                  and drive growth.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardContent className="space-y-6">
                <div className="p-3 bg-primary/10 rounded-xl w-fit">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h2 className="heading-section">Our Vision</h2>
                <p className="text-large text-muted-foreground">
                  To be the trusted partner that businesses turn to when they want to unlock the full potential of their data. 
                  We envision a world where data-driven decision making is the norm, not the exception.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">Our Values</Badge>
            <h2 className="heading-section">What drives us forward</h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Our core values guide everything we do, from how we work with clients to how we approach complex data challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-elegant hover:border-primary/20">
                <CardContent className="space-y-6 text-center">
                  <div className="p-4 bg-primary/10 rounded-xl w-fit mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32">
        <div className="container px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">Our Team</Badge>
            <h2 className="heading-section">Meet the experts</h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Our diverse team combines decades of experience in data science, engineering, and business strategy 
              to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-elegant hover:border-primary/20">
                <CardContent className="space-y-6">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground">Expertise:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold text-primary">98%</p>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Team Members</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold text-primary">5</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="container px-6">
          <div className="text-center space-y-8 text-primary-foreground">
            <h2 className="heading-section">Ready to work with us?</h2>
            <p className="text-large max-w-2xl mx-auto opacity-90">
              Let's discuss how our team can help transform your data into a competitive advantage.
            </p>
            
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <NavLink to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;