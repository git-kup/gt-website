
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  AnimatedButton,
  Badge,
  Heading,
  SectionContainer,
  Card
} from "@/components/ui-components";
import { Link } from "react-router-dom";

const Contact = () => {
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

    // Reset scroll position when component mounts
    window.scrollTo(0, 0);

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

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
              Whether you're a small business needing desktop support or a growing company with broader IT needs,
              we're here to help with personalized solutions that fit your business.
            </p>
          </div>
        </SectionContainer>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="animate-on-scroll">
              <Heading as="h2" withAccent>
                Our Contact Information
              </Heading>
              <p className="text-foreground/80 mb-8">
                Reach out to us through any of the following methods. We're here to answer your questions and help you with your IT needs.
              </p>
              
              <Card className="p-6 border border-accent/20 bg-accent/5">
                <div className="flex items-center justify-between mb-6">
                  <Heading as="h3" className="mb-0">
                    Contact Information
                  </Heading>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
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
                </div>
                
                <div className="mt-6 pt-6 border-t border-accent/10">
                  <Link to="/services">
                    <AnimatedButton variant="accent" withArrow>
                      View Our Services
                    </AnimatedButton>
                  </Link>
                </div>
              </Card>
            </div>
            
            {/* Business Hours */}
            <div className="animate-on-scroll">
              <Heading as="h2" withAccent>
                Business Hours
              </Heading>
              <p className="text-foreground/80 mb-8">
                Here's when our team is available to assist you.
              </p>
              
              <Card className="p-6">
                <div className="grid grid-cols-2 gap-4 text-foreground/70">
                  <div className="font-medium">Monday - Friday</div>
                  <div>9:00 AM - 6:00 PM</div>
                  <div className="font-medium">Saturday</div>
                  <div>10:00 AM - 2:00 PM</div>
                  <div className="font-medium">Sunday</div>
                  <div>Closed</div>
                </div>
              </Card>
              
              <div className="mt-8">
                <Heading as="h3" className="text-xl">
                  Our Service Area
                </Heading>
                <p className="text-foreground/80 mb-4">
                  We proudly serve small businesses throughout:
                </p>
                <ul className="space-y-2 text-foreground/70 list-disc list-inside">
                  <li>Brooklyn</li>
                  <li>Manhattan</li>
                  <li>Queens</li>
                  <li>Bronx</li>
                  <li>Staten Island</li>
                  <li>Long Island (Nassau County)</li>
                </ul>
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
              <div className="w-full h-full bg-gradient-to-r from-navy/5 to-accent/5 flex items-center justify-center">
                <div className="p-8 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-16 w-16 mx-auto mb-4 text-accent/60"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p className="text-foreground/70 text-lg font-medium">
                    185 Clymer St, Brooklyn, NY 11211
                  </p>
                </div>
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
              Find answers to common questions about our services and how we can help your small business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">What industries do you serve?</h3>
                <p className="text-foreground/70">
                  We serve businesses of all sizes, with a special focus on small businesses and startups. Our solutions are
                  tailored to meet your specific needs, whether you're a small retail shop, professional office, or growing startup.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Do you offer same-day desktop support?</h3>
                <p className="text-foreground/70">
                  Yes, we prioritize desktop support for our local clients. For many common issues, 
                  we can provide same-day assistance to minimize disruption to your business operations.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">How quickly can you respond to IT issues?</h3>
                <p className="text-foreground/70">
                  We typically respond to service requests within 1-2 hours during business hours. We understand 
                  that technology problems can significantly impact small businesses, so we prioritize rapid response.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">What is your pricing structure?</h3>
                <p className="text-foreground/70">
                  We offer flexible pricing options designed specifically for small businesses, including hourly rates for
                  on-demand support and affordable monthly packages for ongoing maintenance. We work with your budget to
                  provide the right level of support.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Can you work with our existing IT setup?</h3>
                <p className="text-foreground/70">
                  Absolutely. We're experienced at working with existing technology setups, and we don't believe in replacing
                  what's already working. We'll help optimize what you have and only recommend changes that bring real value.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Do you offer training for our staff?</h3>
                <p className="text-foreground/70">
                  Yes, we provide practical training for your staff on the systems and 
                  technologies we implement. We focus on showing your team the skills they'll actually use day-to-day,
                  including basic troubleshooting they can handle themselves.
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
                IT Support Tailored for Small Businesses
              </h2>
              <p className="text-silver-light mb-8 text-balance">
                Contact us today to discuss your desktop support needs or to schedule a free consultation.
                We provide personalized, affordable IT solutions that help your small business succeed.
              </p>
              <Link to="/services">
                <AnimatedButton variant="accent" size="lg" withArrow>
                  Schedule a Free Consultation
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </SectionContainer>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
