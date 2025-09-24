import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Users, Target, Award, ArrowRight, CheckCircle } from "lucide-react";

const About = () => {
  const leadership = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      bio: "Former Data Analyst at a Fortune 500 tech company. Computer Science degree from UC Berkeley with a passion for making data accessible to growing businesses.",
      expertise: ["Data Strategy", "Business Intelligence", "Team Leadership"],
    },
    {
      name: "Marcus Rodriguez",
      role: "Co-founder & CTO", 
      bio: "Software engineer with 5 years experience building scalable data pipelines. Graduated from MIT with expertise in machine learning applications.",
      expertise: ["Machine Learning", "Software Development", "Data Engineering"],
    },
    {
      name: "Jennifer Park",
      role: "Lead Data Scientist",
      bio: "PhD in Statistics from Stanford. Former research intern at Google. Specializes in turning complex data into actionable business insights.",
      expertise: ["Statistical Analysis", "Predictive Modeling", "Data Visualization"],
    },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Enterprise Excellence",
      description: "We maintain the highest standards of quality, security, and reliability that enterprise clients demand.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Partnership Mindset",
      description: "We become an extension of your team, deeply understanding your business objectives and challenges.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Innovation Leadership",
      description: "We stay at the forefront of data science and AI, bringing cutting-edge solutions to complex problems.",
    },
  ];

  const certifications = [
    "AWS Partner Network Member",
    "Google Cloud Partner", 
    "Microsoft Partner Network",
    "Snowflake Partner",
    "SOC 2 Type II Compliant",
    "GDPR Compliant"
  ];

  const achievements = [
    "Y Combinator Alumni 2022",
    "Best New Startup - Local Tech Awards 2023", 
    "Top 10 Data Startups to Watch",
    "Featured in TechCrunch Startup Spotlight"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding surface-primary geometric-pattern">
        <div className="container-enterprise">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto trust-badge">About Bravura</Badge>
            
            <h1 className="text-display">
              Data Science Excellence
              <span className="block text-primary">Since 2018</span>
            </h1>
            
            <p className="text-body-large text-muted-foreground max-w-4xl mx-auto">
              Founded in 2022 by data enthusiasts with experience at top tech companies, Bravura started 
              as a mission to help growing businesses harness the power of their data. We've helped over 
              50 companies transform their data capabilities and make smarter decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="card-elevated">
              <CardContent className="space-y-6 p-8">
                <div className="feature-icon">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-title">Our Mission</h2>
                <p className="text-body text-muted-foreground">
                  To help growing businesses unlock the power of their data through accessible, practical 
                  analytics solutions. We believe every company, regardless of size, deserves smart data 
                  insights to make better decisions and compete effectively.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="space-y-6 p-8">
                <div className="feature-icon">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-title">Our Vision</h2>
                <p className="text-body text-muted-foreground">
                  To become the go-to data partner for growing businesses, helping them make data-driven 
                  decisions that fuel sustainable growth. We envision a future where small and medium 
                  businesses have the same data advantages as large corporations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding surface-secondary">
        <div className="container-enterprise">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">Leadership Team</Badge>
            <h2 className="text-headline">World-Class Expertise</h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Our leadership team combines decades of experience from the world's leading technology 
              companies, bringing proven enterprise expertise to every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
              <Card key={index} className="card-interactive">
                <CardContent className="space-y-6 p-8">
                  <div className="w-20 h-20 bg-gradient-primary rounded-xl mx-auto flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="text-title">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                  
                  <p className="text-muted-foreground">{member.bio}</p>
                  
                  <div className="space-y-3">
                    <p className="text-label text-foreground">Expertise</p>
                    <div className="flex flex-wrap gap-2">
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

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-enterprise">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">Core Values</Badge>
            <h2 className="text-headline">What Drives Us Forward</h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Our values guide every client interaction, technical decision, and strategic initiative.
            </p>
          </div>

          <div className="feature-grid">
            {values.map((value, index) => (
              <Card key={index} className="card-feature">
                <CardContent className="space-y-6 text-center p-8">
                  <div className="feature-icon mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-title">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="section-padding surface-secondary">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">Certifications</Badge>
                <h2 className="text-headline">Industry Recognition</h2>
                <p className="text-body text-muted-foreground">
                  Our commitment to excellence is reflected in our industry certifications and partnerships 
                  with leading technology providers.
                </p>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">Awards</Badge>
                <h2 className="text-headline">Market Leadership</h2>
                <p className="text-body text-muted-foreground">
                  Recognition from leading industry analysts and organizations validates our position 
                  as a market leader in enterprise data services.
                </p>
              </div>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="section-padding data-grid">
        <div className="container-enterprise">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="metric-card text-center">
              <div className="metric-value">50+</div>
              <div className="metric-label mb-3">Happy Clients</div>
              <p className="text-sm text-muted-foreground">Growing businesses served</p>
            </div>
            <div className="metric-card text-center">
              <div className="metric-value">98%</div>
              <div className="metric-label mb-3">Client Satisfaction</div>
              <p className="text-sm text-muted-foreground">Net Promoter Score: 72</p>
            </div>
            <div className="metric-card text-center">
              <div className="metric-value">12</div>
              <div className="metric-label mb-3">Team Members</div>
              <p className="text-sm text-muted-foreground">Passionate data experts</p>
            </div>
            <div className="metric-card text-center">
              <div className="metric-value">5</div>
              <div className="metric-label mb-3">Years Experience</div>
              <p className="text-sm text-muted-foreground">Rapid growth trajectory</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding surface-overlay text-primary-foreground">
        <div className="container-enterprise">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-headline">Join Our Success Story</h2>
            <p className="text-body-large opacity-90">
              Ready to partner with industry-leading data experts? Let's discuss how our proven 
              methodologies can accelerate your data transformation journey.
            </p>
            
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <NavLink to="/contact" className="flex items-center">
                Schedule Strategy Session
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