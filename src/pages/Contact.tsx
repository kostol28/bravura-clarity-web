import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, CheckCircle, ArrowRight, Shield, Award, Users } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Request submitted successfully!",
      description: "Our enterprise team will contact you within 24 hours.",
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Enterprise Sales",
      description: "Discuss your requirements",
      details: "enterprise@bravuradataworks.com",
      action: "Email Now"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Direct Line",
      description: "Speak with our team",
      details: "+1 (555) 123-4567",
      action: "Call Now"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Headquarters",
      description: "Visit our offices",
      details: "123 Enterprise Blvd, Data City, DC 20001",
      action: "Get Directions"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Business Hours",
      description: "Monday to Friday",
      details: "9:00 AM - 6:00 PM EST",
      action: "Schedule Call"
    },
  ];

  const benefits = [
    { icon: CheckCircle, text: "Free 60-minute strategy consultation" },
    { icon: Shield, text: "Enterprise-grade security & compliance" },
    { icon: Award, text: "Proven ROI with 500+ successful projects" },
    { icon: Users, text: "Dedicated account management team" }
  ];

  const faqs = [
    {
      question: "What's the typical project timeline?",
      answer: "Enterprise projects typically range from 3-9 months depending on scope. We provide detailed timelines during our discovery phase with clear milestones and deliverables."
    },
    {
      question: "Do you work with existing data infrastructure?",
      answer: "Absolutely. We specialize in integrating with and enhancing existing enterprise systems including cloud platforms, on-premises solutions, and hybrid architectures."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve Fortune 500 companies across financial services, healthcare, manufacturing, retail, technology, and government sectors with specialized regulatory expertise."
    },
    {
      question: "How do you ensure data security?",
      answer: "We maintain SOC 2 Type II certification, ISO 27001 compliance, and follow industry-leading security practices including encryption, access controls, and audit trails."
    },
    {
      question: "What's your implementation methodology?",
      answer: "We follow an agile, milestone-driven approach with regular stakeholder reviews, ensuring alignment with business objectives and timely delivery of measurable outcomes."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive support packages including 24/7 monitoring, maintenance, optimization, and dedicated account management for enterprise clients."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding surface-primary geometric-pattern">
        <div className="container-enterprise">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto trust-badge">Enterprise Contact</Badge>
            
            <h1 className="text-display">
              Ready to Transform
              <span className="block text-primary">Your Data Strategy?</span>
            </h1>
            
            <p className="text-body-large text-muted-foreground max-w-4xl mx-auto">
              Connect with our enterprise data experts to discuss your specific requirements and discover 
              how our proven solutions can drive measurable business outcomes for your organization.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-white/50 backdrop-blur-sm">
                    <Icon className="h-8 w-8 text-primary" />
                    <span className="text-sm font-medium text-center">{benefit.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-elevated">
                <CardContent className="space-y-8 p-8">
                  <div className="space-y-4">
                    <h2 className="text-title">Enterprise Inquiry</h2>
                    <p className="text-muted-foreground">
                      Complete the form below and our enterprise team will contact you within 24 hours 
                      to discuss your data transformation requirements.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          required
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Business Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john.doe@company.com"
                          required
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Enterprise Corp"
                          required
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="title">Job Title *</Label>
                        <Input
                          id="title"
                          name="title"
                          placeholder="Chief Data Officer"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="financial">Financial Services</SelectItem>
                            <SelectItem value="healthcare">Healthcare & Life Sciences</SelectItem>
                            <SelectItem value="retail">Retail & E-commerce</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="energy">Energy & Utilities</SelectItem>
                            <SelectItem value="media">Media & Entertainment</SelectItem>
                            <SelectItem value="government">Government & Public Sector</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-size">Company Size</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Number of employees" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="startup">1-50 employees</SelectItem>
                            <SelectItem value="small">51-200 employees</SelectItem>
                            <SelectItem value="medium">201-1,000 employees</SelectItem>
                            <SelectItem value="large">1,001-10,000 employees</SelectItem>
                            <SelectItem value="enterprise">10,000+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Primary Interest</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select primary service interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="analytics">Advanced Analytics & BI</SelectItem>
                          <SelectItem value="engineering">Data Engineering & Architecture</SelectItem>
                          <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                          <SelectItem value="realtime">Real-time Data Processing</SelectItem>
                          <SelectItem value="governance">Data Governance & Security</SelectItem>
                          <SelectItem value="consulting">Data Strategy Consulting</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Project Budget Range</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="100k-250k">$100k - $250k</SelectItem>
                          <SelectItem value="250k-500k">$250k - $500k</SelectItem>
                          <SelectItem value="500k-1m">$500k - $1M</SelectItem>
                          <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                          <SelectItem value="5m+">$5M+</SelectItem>
                          <SelectItem value="discuss">Let's Discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline">Desired Timeline</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you want to start?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediately</SelectItem>
                          <SelectItem value="1-3months">1-3 months</SelectItem>
                          <SelectItem value="3-6months">3-6 months</SelectItem>
                          <SelectItem value="6-12months">6-12 months</SelectItem>
                          <SelectItem value="planning">Still planning</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Please describe your data challenges, current infrastructure, and business objectives..."
                        rows={5}
                        required
                        className="w-full resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary"
                      size="lg"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Enterprise Inquiry"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-title">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Multiple ways to connect with our enterprise team. Choose what works best for your organization.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="card-interactive">
                    <CardContent className="space-y-4 p-6">
                      <div className="flex items-start space-x-4">
                        <div className="feature-icon flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm">{info.title}</h3>
                          <p className="text-xs text-muted-foreground mb-2">{info.description}</p>
                          <p className="font-medium text-primary text-sm">{info.details}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Priority Support CTA */}
              <Card className="card-elevated surface-overlay text-primary-foreground">
                <CardContent className="space-y-6 p-8">
                  <div className="space-y-4">
                    <h3 className="text-title">Priority Support</h3>
                    <p className="opacity-90 text-sm">
                      Need immediate assistance? Our enterprise support team is available 24/7 
                      for urgent inquiries and critical system issues.
                    </p>
                  </div>
                  
                  <Button className="w-full bg-white text-primary hover:bg-white/90">
                    Contact Priority Support
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Showcase - Temporary for verification */}
      <section className="section-padding">
        <div className="container-enterprise">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-headline">Current Color Palette</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {/* Buff */}
              <div className="space-y-2">
                <div className="w-full h-24 rounded-lg bg-buff"></div>
                <p className="text-sm font-medium">Buff #D6995E</p>
              </div>
              
              {/* Prussian Blue */}
              <div className="space-y-2">
                <div className="w-full h-24 rounded-lg bg-prussian_blue"></div>
                <p className="text-sm font-medium text-white">Prussian Blue #0C3347</p>
              </div>
              
              {/* White */}
              <div className="space-y-2">
                <div className="w-full h-24 rounded-lg bg-white border-2 border-gray-200"></div>
                <p className="text-sm font-medium">White #FFFFFF</p>
              </div>
              
              {/* Teal Blue */}
              <div className="space-y-2">
                <div className="w-full h-24 rounded-lg bg-teal_blue"></div>
                <p className="text-sm font-medium text-white">Teal Blue #195B75</p>
              </div>
              
              {/* Gunmetal */}
              <div className="space-y-2">
                <div className="w-full h-24 rounded-lg bg-gunmetal"></div>
                <p className="text-sm font-medium text-white">Gunmetal #0A2B3B</p>
              </div>
            </div>
            
            {/* Current Theme Usage */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              <div className="p-6 rounded-lg bg-primary text-primary-foreground">
                <h3 className="font-semibold">Primary Color</h3>
                <p className="text-sm opacity-90">Prussian Blue - Used for main actions</p>
              </div>
              
              <div className="p-6 rounded-lg bg-secondary text-secondary-foreground">
                <h3 className="font-semibold">Secondary Color</h3>
                <p className="text-sm opacity-90">Teal Blue - Supporting elements</p>
              </div>
              
              <div className="p-6 rounded-lg bg-accent text-accent-foreground">
                <h3 className="font-semibold">Accent Color</h3>
                <p className="text-sm">Buff - Highlights & CTAs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding surface-secondary">
        <div className="container-enterprise">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">Enterprise FAQ</Badge>
            <h2 className="text-headline">Frequently Asked Questions</h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Common questions from enterprise clients about our data solutions, implementation process, 
              and partnership approach.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="card-primary">
                <CardContent className="space-y-4 p-8">
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;