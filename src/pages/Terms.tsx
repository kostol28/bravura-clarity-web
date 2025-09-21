import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { FileText, Scale, ArrowRight } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding surface-primary">
        <div className="container-enterprise">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto trust-badge">Legal</Badge>
            
            <h1 className="text-display">
              Terms of Service
            </h1>
            
            <p className="text-body-large text-muted-foreground">
              Last updated: September 21, 2025
            </p>

            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-accent" />
                <span>Enterprise Agreement</span>
              </div>
              <div className="flex items-center space-x-2">
                <Scale className="h-4 w-4 text-accent" />
                <span>Legal Framework</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding">
        <div className="container-enterprise">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <Card className="card-elevated">
              <CardContent className="space-y-6 p-8">
                <h2 className="text-title">Acceptance of Terms</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    By accessing and using Bravura A Data Works Company's services, you accept and agree to 
                    be bound by the terms and provision of this agreement. These Terms of Service govern 
                    your use of our website, consulting services, and data solutions.
                  </p>
                  <p>
                    If you do not agree to abide by the above, please do not use our services. 
                    We reserve the right to change these terms at any time with reasonable notice.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="space-y-6 p-8">
                <h2 className="text-title">Service Description</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Bravura A Data Works Company provides:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Enterprise data analytics and business intelligence solutions</li>
                    <li>Data engineering and architecture consulting</li>
                    <li>Artificial intelligence and machine learning implementation</li>
                    <li>Data governance and security consulting</li>
                    <li>Strategic data transformation planning</li>
                    <li>Ongoing support and optimization services</li>
                  </ul>
                  <p>
                    All services are provided according to the specific terms outlined in individual 
                    service agreements and statements of work.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="space-y-6 p-8">
                <h2 className="text-title">Client Responsibilities</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>As our client, you agree to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Provide accurate and complete information necessary for service delivery</li>
                    <li>Maintain appropriate data access controls and security measures</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Respect intellectual property rights</li>
                    <li>Pay fees according to agreed-upon terms</li>
                    <li>Participate actively in project planning and review processes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="space-y-6 p-8">
                <h2 className="text-title">Intellectual Property</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>Client Data:</strong> You retain all rights to your data and business information.</p>
                  <p><strong>Deliverables:</strong> Custom solutions developed specifically for your organization 
                  become your property upon full payment.</p>
                  <p><strong>Bravura IP:</strong> We retain rights to our methodologies, frameworks, and 
                  general knowledge gained through service delivery.</p>
                  <p><strong>Third-Party Tools:</strong> Some solutions may incorporate licensed third-party 
                  software subject to separate terms.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="space-y-6 p-8">
                <h2 className="text-title">Confidentiality</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We maintain strict confidentiality regarding your business information:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>All client data and business information is treated as confidential</li>
                    <li>We implement appropriate technical and organizational measures</li>
                    <li>Access is limited to authorized personnel with legitimate business need</li>
                    <li>Non-disclosure agreements govern all client relationships</li>
                    <li>Confidentiality obligations survive termination of services</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="space-y-6 p-8">
                <h2 className="text-title">Limitation of Liability</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    To the maximum extent permitted by law, Bravura A Data Works Company shall not be 
                    liable for any indirect, incidental, special, consequential, or punitive damages, 
                    including without limitation, loss of profits, data, use, goodwill, or other 
                    intangible losses.
                  </p>
                  <p>
                    Our total liability for any claims arising out of or relating to our services 
                    shall not exceed the amount paid by you for the specific services giving rise to the claim.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="space-y-6 p-8">
                <h2 className="text-title">Termination</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Either party may terminate services with appropriate notice as specified in the 
                    service agreement. Upon termination:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>All work-in-progress will be delivered in its current state</li>
                    <li>Final invoices will be processed according to work completed</li>
                    <li>Confidentiality obligations remain in effect</li>
                    <li>Client data will be returned or securely destroyed as requested</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="space-y-6 p-8">
                <h2 className="text-title">Governing Law</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    These Terms of Service are governed by the laws of the District of Columbia, 
                    without regard to conflict of law principles. Any disputes arising under these 
                    terms will be resolved through binding arbitration in Washington, DC.
                  </p>
                </div>

                <div className="pt-6 border-t">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <NavLink to="/contact" className="flex items-center">
                      Contact Legal Team
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

export default Terms;