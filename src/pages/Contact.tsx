
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  AnimatedButton,
  Badge,
  Heading,
  SectionContainer,
  FormInput,
  FormTextarea
} from "@/components/ui-components";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
      
      setFormStatus("idle");
    }, 1500);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-navy-light/10 to-navy/5">
        <SectionContainer>
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-4 animate-fade-in">Get in Touch</Badge>
            <h1 className="font-display font-bold mb-6 text-balance animate-fade-in">
              Contact <span className="text-accent">Goldtech</span> Solutions
            </h1>
            <p className="text-lg text-foreground/80 mb-8 animate-fade-in">
              Have questions about our services or ready to start your next IT project?
              Reach out to us and our team will get back to you shortly.
            </p>
          </div>
        </SectionContainer>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-on-scroll">
              <Heading as="h2" withAccent>
                Send Us a Message
              </Heading>
              <p className="text-foreground/80 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    label="First Name"
                    name="firstName"
                    placeholder="Enter your first name"
                    required
                  />
                  <FormInput
                    label="Last Name"
                    name="lastName"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                  <FormInput
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <FormInput
                    label="Company"
                    name="company"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <FormInput
                    label="Subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                
                <div>
                  <FormTextarea
                    label="Message"
                    name="message"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div>
                  <AnimatedButton
                    type="submit"
                    variant="accent"
                    className="w-full md:w-auto"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? "Sending..." : "Send Message"}
                  </AnimatedButton>
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="animate-on-scroll">
              <Heading as="h2" withAccent>
                Contact Information
              </Heading>
              <p className="text-foreground/80 mb-8">
                You can also reach us directly using the contact information below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Address</h3>
                    <p className="text-foreground/70">
                      185 Clymer St<br />
                      Brooklyn, NY 11211
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="text-foreground/70">
                      <a href="tel:9292996365" className="hover:text-accent transition-colors">
                        929-299-6365
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-foreground/70">
                      <a href="mailto:sales@goldtechny.com" className="hover:text-accent transition-colors">
                        sales@goldtechny.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Support</h3>
                    <p className="text-foreground/70">
                      <a href="mailto:support@goldtechny.com" className="hover:text-accent transition-colors">
                        support@goldtechny.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Business Hours</h3>
                  <div className="grid grid-cols-2 gap-2 text-foreground/70">
                    <div>Monday - Friday</div>
                    <div>9:00 AM - 6:00 PM</div>
                    <div>Saturday</div>
                    <div>10:00 AM - 2:00 PM</div>
                    <div>Sunday</div>
                    <div>Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-silver-light">
        <SectionContainer>
          <div className="animate-on-scroll">
            <Heading as="h2" className="text-center">
              Our Location
            </Heading>
            <p className="text-foreground/80 text-center max-w-2xl mx-auto mb-8">
              Visit us at our office in Brooklyn, New York.
            </p>
            
            <div className="aspect-video max-h-[500px] rounded-xl overflow-hidden shadow-lg">
              {/* Embed Google Maps iframe here */}
              <div className="w-full h-full bg-silver-dark/20 flex items-center justify-center text-foreground/50">
                [Google Maps Embed]
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <SectionContainer>
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <Badge variant="accent" className="mb-4">FAQs</Badge>
            <Heading as="h2" className="text-center">
              Frequently Asked Questions
            </Heading>
            <p className="text-foreground/80 text-balance">
              Find answers to common questions about our services and how we can help your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">What industries do you serve?</h3>
                <p className="text-foreground/70">
                  We serve a wide range of industries including finance, healthcare, manufacturing, 
                  retail, education, and professional services. Our solutions are tailored to meet 
                  the specific needs and regulatory requirements of each industry.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Do you offer 24/7 support?</h3>
                <p className="text-foreground/70">
                  Yes, we offer 24/7 support for our managed IT services clients. Our team is 
                  always available to address any issues that may arise and ensure your systems 
                  continue to run smoothly.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">How quickly can you respond to IT issues?</h3>
                <p className="text-foreground/70">
                  Our average response time is under 15 minutes for critical issues. We prioritize 
                  issues based on severity and impact on your business operations.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">What is your pricing structure?</h3>
                <p className="text-foreground/70">
                  Our pricing is based on the specific services you need and the size of your 
                  organization. We offer both project-based pricing and monthly subscription models. 
                  Contact us for a customized quote.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Can you work with our existing IT team?</h3>
                <p className="text-foreground/70">
                  Absolutely. We often collaborate with in-house IT teams to provide specialized 
                  expertise or additional support. We can work together to determine the best 
                  division of responsibilities.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Do you offer training for our staff?</h3>
                <p className="text-foreground/70">
                  Yes, we provide comprehensive training for your staff on the systems and 
                  technologies we implement. We also offer security awareness training to help 
                  protect your organization from cyber threats.
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <SectionContainer>
          <div className="text-center max-w-3xl mx-auto animate-on-scroll relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.15),_transparent_50%)] z-0"></div>
            <div className="relative z-10">
              <Badge variant="accent" className="mb-4">Let's Work Together</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-white">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-silver-light mb-8 text-balance">
                Contact us today to schedule a consultation and discover how Goldtech Solutions 
                can help your business leverage technology for growth and success.
              </p>
              <AnimatedButton variant="accent" size="lg" withArrow>
                Schedule a Consultation
              </AnimatedButton>
            </div>
          </div>
        </SectionContainer>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
