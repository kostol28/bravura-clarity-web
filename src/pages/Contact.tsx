import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Us",
      description: "Get in touch via email",
      details: "hello@bravuradataworks.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Call Us",
      description: "Speak with our team",
      details: "+1 (555) 123-4567",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Visit Us",
      description: "Our main office",
      details: "123 Data Street, Analytics City, AC 12345",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Business Hours",
      description: "Monday to Friday",
      details: "9:00 AM - 6:00 PM EST",
    },
  ];

  const benefits = [
    "Free 30-minute consultation",
    "Custom solution proposal",
    "No obligation assessment",
    "Response within 24 hours",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-subtle">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">Contact Us</Badge>
            
            <h1 className="heading-hero text-foreground">
              Let's transform your data
              <span className="bg-gradient-hero bg-clip-text text-transparent"> together</span>
            </h1>
            
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Ready to unlock the power of your data? Get in touch with our team of experts 
              and discover how we can help drive your business forward.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/50 rounded-full px-4 py-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-32">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-elegant">
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <h2 className="heading-section">Send us a message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company Name"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="analytics">Data Analytics & Insights</SelectItem>
                        <SelectItem value="integration">Data Integration & Management</SelectItem>
                        <SelectItem value="ml">Predictive Analytics & ML</SelectItem>
                        <SelectItem value="realtime">Real-Time Data Processing</SelectItem>
                        <SelectItem value="bi">Business Intelligence Solutions</SelectItem>
                        <SelectItem value="governance">Data Governance & Security</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Project Budget</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="over-100k">Over $100,000</SelectItem>
                        <SelectItem value="discuss">Let's discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your data challenges and goals..."
                      rows={5}
                      required
                      className="w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-hero"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="heading-section">Get in touch</h2>
                <p className="text-muted-foreground">
                  We're here to help you succeed. Choose the way that works best for you to connect with our team.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="card-elegant hover:border-primary/20">
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-xl">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold">{info.title}</h3>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                      <div className="pl-16">
                        <p className="font-medium text-primary">{info.details}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional CTA */}
              <Card className="card-elegant bg-gradient-hero text-primary-foreground">
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Prefer to talk first?</h3>
                    <p className="opacity-90">
                      Schedule a free 30-minute consultation to discuss your data needs and explore how we can help.
                    </p>
                  </div>
                  
                  <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Schedule a Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container px-6">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">FAQ</Badge>
            <h2 className="heading-section">Frequently asked questions</h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Have questions? We've got answers. Here are some of the most common questions we receive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope and complexity. Most projects range from 4-12 weeks, with ongoing support available."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise organizations."
              },
              {
                question: "What if I don't have clean data?",
                answer: "Don't worry! Data cleaning and preparation is part of our process. We'll help you get your data ready for analysis."
              },
              {
                question: "Can you integrate with our existing systems?",
                answer: "Yes, we specialize in integrating with existing business systems and can work with virtually any data source."
              }
            ].map((faq, index) => (
              <Card key={index} className="card-elegant">
                <CardContent className="space-y-4">
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