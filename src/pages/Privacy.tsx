import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Shield, Mail, ArrowRight } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding surface-primary">
        <div className="container-enterprise">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto trust-badge">Legal</Badge>
            
            <h1 className="text-display">
              Privacy Policy
            </h1>
            
            <p className="text-body-large text-muted-foreground">
              Last updated: September 21, 2025
            </p>

            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-accent" />
                <span>Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding">
        <div className="container-enterprise">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <Card className="card-elevated">
              <CardContent className="space-y-6 p-8">
                <h2 className="text-title">Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Bravura A Data Works Company ("we," "our," or "us") collects information you provide directly to us, 
                    such as when you create an account, request information, or communicate with us.
                  </p>
                  <p><strong>Personal Information includes:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Name, email address, and contact information</li>
                    <li>Company name, job title, and business information</li>
                    <li>Project requirements and technical specifications</li>
                    <li>Communication preferences and interaction history</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="space-y-6 p-8">
                <h2 className="text-title">How We Use Your Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Develop new products and services</li>
                    <li>Comply with legal obligations and protect our rights</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="space-y-6 p-8">
                <h2 className="text-title">Information Sharing and Disclosure</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties without 
                    your consent, except as described in this Privacy Policy:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li><strong>Service Providers:</strong> Trusted partners who assist in our operations</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
                    <li><strong>Consent:</strong> With your explicit permission for specific purposes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="space-y-6 p-8">
                <h2 className="text-title">Data Security</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We implement enterprise-grade security measures to protect your personal information:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>SOC 2 Type II certified data centers</li>
                    <li>End-to-end encryption for data in transit and at rest</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Access controls and authentication protocols</li>
                    <li>Employee security training and background checks</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="space-y-6 p-8">
                <h2 className="text-title">Your Rights and Choices</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>You have the following rights regarding your personal information:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                    <li><strong>Portability:</strong> Receive your data in a structured format</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, contact us at privacy@bravuradataworks.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="space-y-6 p-8">
                <h2 className="text-title">Contact Us</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Email:</strong> privacy@bravuradataworks.com</p>
                    <p><strong>Address:</strong> 123 Enterprise Blvd, Data City, DC 20001</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <NavLink to="/contact" className="flex items-center">
                      Contact Our Privacy Team
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </NavLink>
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;