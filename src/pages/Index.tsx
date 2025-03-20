
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  AnimatedButton, 
  Badge, 
  Card, 
  Heading, 
  SectionContainer, 
  ServiceCard, 
  Testimonial
} from "@/components/ui-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const services = [
  {
    title: "IT Infrastructure Management",
    description: "Optimize your IT infrastructure for reliability, security, and performance.",
    icon: (
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
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
  },
  {
    title: "Cybersecurity Solutions",
    description: "Protect your business from threats with our comprehensive security services.",
    icon: (
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
  },
  {
    title: "Network Services",
    description: "Design, implementation, and support for reliable network infrastructure.",
    icon: (
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
        <path d="M9 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9z"></path>
        <polyline points="9 2 9 9 16 9"></polyline>
      </svg>
    ),
  },
  {
    title: "Desktop Support",
    description: "Friendly and reliable desktop support for small businesses and startups.",
    icon: (
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
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: "Goldtech Solutions transformed our IT infrastructure and reduced our operational costs by 30%. Their team was professional, knowledgeable, and exceeded our expectations.",
    author: "Sarah Johnson",
    company: "Nexus Marketing",
  },
  {
    quote: "After experiencing a security breach, we hired Goldtech to revamp our cybersecurity systems. They implemented robust solutions that have kept us protected ever since.",
    author: "Mark Williams",
    company: "Atlas Financial",
  },
  {
    quote: "Their cloud migration service was seamless. We were able to transition without any downtime, and our team adapted quickly to the new systems.",
    author: "Jessica Chen",
    company: "Horizon Tech",
  },
];

const Index = () => {
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

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-light/10 to-navy/5 z-0"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.1),_transparent_50%)] z-0"></div>
        
        <SectionContainer className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="max-w-3xl lg:w-1/2">
              <Badge variant="accent" className="mb-4 animate-fade-in">Innovative IT Solutions</Badge>
              <h1 className="font-display font-bold mb-6 text-balance animate-fade-in">
                Empowering Businesses with{" "}
                <span className="text-accent">Cutting-Edge</span> Technology
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8 text-balance animate-fade-in">
                We deliver customized IT solutions that drive efficiency, 
                enhance security, and foster growth for businesses of all sizes.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in">
                <Link to="/services">
                  <AnimatedButton variant="default" size="lg" withArrow className="hover:bg-primary/80 transform hover:scale-105 transition-all">
                    Explore Services
                  </AnimatedButton>
                </Link>
                <Link to="/contact">
                  <AnimatedButton variant="outline" size="lg" className="hover:bg-accent/10 transform hover:scale-105 transition-all">
                    Contact Us
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-silver-light">
        <SectionContainer>
          <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
            <Badge variant="accent" className="mb-4">Why Choose Us</Badge>
            <Heading as="h2" className="text-center">
              Reliable Technology Solutions for Modern Businesses
            </Heading>
            <p className="text-foreground/80 text-balance">
              At Goldtech Solutions, we combine technical expertise with business acumen
              to deliver IT services that align with your strategic goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="glass" className="p-6 animate-on-scroll hover:shadow-lg hover:bg-accent/5 transition-all transform hover:scale-[1.02]">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
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
                  <path d="M12 2v4"></path>
                  <path d="M12 18v4"></path>
                  <path d="m4.93 4.93 2.83 2.83"></path>
                  <path d="m16.24 16.24 2.83 2.83"></path>
                  <path d="M2 12h4"></path>
                  <path d="M18 12h4"></path>
                  <path d="m4.93 19.07 2.83-2.83"></path>
                  <path d="m16.24 7.76 2.83-2.83"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Innovative Solutions</h3>
              <p className="text-foreground/70">
                We stay at the forefront of technology to bring you innovative solutions
                that give your business a competitive edge.
              </p>
            </Card>

            <Card variant="glass" className="p-6 animate-on-scroll hover:shadow-lg hover:bg-accent/5 transition-all transform hover:scale-[1.02]">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
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
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Small Business Friendly</h3>
              <p className="text-foreground/70">
                Our solutions are tailored for businesses of all sizes, with special focus 
                on the unique needs of small businesses and startups.
              </p>
            </Card>

            <Card variant="glass" className="p-6 animate-on-scroll hover:shadow-lg hover:bg-accent/5 transition-all transform hover:scale-[1.02]">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
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
                  <path d="M2 3h20"></path>
                  <path d="M10 12h4"></path>
                  <path d="M10 16h4"></path>
                  <path d="M8 9h0"></path>
                  <path d="M16 9h0"></path>
                  <path d="M9 19l-4 1 1-4 9-9 3 3-9 9z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Tailored Approach</h3>
              <p className="text-foreground/70">
                We customize our solutions to meet your specific needs, ensuring
                optimal results for your business.
              </p>
            </Card>

            <Card variant="glass" className="p-6 animate-on-scroll hover:shadow-lg hover:bg-accent/5 transition-all transform hover:scale-[1.02]">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
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
                  <path d="M12 2v4"></path>
                  <path d="M5 10H2a10 10 0 0 0 20 0h-3"></path>
                  <path d="M8 10a4 4 0 0 1 8 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Cloud Expertise</h3>
              <p className="text-foreground/70">
                Leverage our cloud computing expertise to improve scalability
                and reduce costs for your business.
              </p>
            </Card>

            <Card variant="glass" className="p-6 animate-on-scroll hover:shadow-lg hover:bg-accent/5 transition-all transform hover:scale-[1.02]">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
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
                  <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Strategic Planning</h3>
              <p className="text-foreground/70">
                We help you develop IT strategies that align with your business
                goals and drive long-term success.
              </p>
            </Card>

            <Card variant="glass" className="p-6 animate-on-scroll hover:shadow-lg hover:bg-accent/5 transition-all transform hover:scale-[1.02]">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
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
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                  <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Cost Efficiency</h3>
              <p className="text-foreground/70">
                Our solutions are designed to optimize your IT spending while
                maximizing the value you receive.
              </p>
            </Card>
          </div>
        </SectionContainer>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <SectionContainer>
          <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
            <Badge variant="accent" className="mb-4">Our Services</Badge>
            <Heading as="h2" className="text-center">
              Comprehensive IT Solutions
            </Heading>
            <p className="text-foreground/80 text-balance">
              From infrastructure management to cybersecurity, we offer a wide range of services
              to meet all your IT needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                className="hover:shadow-lg hover:bg-accent/5 transition-all transform hover:scale-[1.02]"
              />
            ))}
          </div>
          
          <div className="text-center mt-12 animate-on-scroll">
            <Link to="/services">
              <AnimatedButton variant="outline" withArrow className="hover:bg-accent/10 transform hover:scale-105 transition-all">
                View All Services
              </AnimatedButton>
            </Link>
          </div>
        </SectionContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,41,59,0.8),rgba(30,41,59,0.4))] backdrop-blur-sm z-0"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.15),_transparent_50%)] z-0"></div>
        
        <SectionContainer className="relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <Badge variant="accent" className="mb-4">Get Started Today</Badge>
            <Heading as="h2" className="text-white text-center">
              Ready to Transform Your IT Infrastructure?
            </Heading>
            <p className="text-silver-light text-lg mb-8 text-balance">
              Contact us today for a free consultation and discover how Goldtech Solutions
              can help your business thrive with the right technology.
            </p>
            <Link to="/contact">
              <AnimatedButton variant="accent" size="lg" withArrow className="hover:bg-accent/90 transform hover:scale-105 transition-all">
                Schedule a Consultation
              </AnimatedButton>
            </Link>
          </div>
        </SectionContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <SectionContainer>
          <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
            <Badge variant="accent" className="mb-4">Testimonials</Badge>
            <Heading as="h2" className="text-center">
              What Our Clients Say
            </Heading>
            <p className="text-foreground/80 text-balance">
              Don't just take our word for it. Hear what our clients have to say about
              our services and solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
                className="hover:shadow-lg hover:bg-accent/5 transition-all transform hover:scale-[1.02]"
              />
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-silver-light">
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-on-scroll hover:transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-foreground/70">Happy Clients</div>
            </div>
            <div className="animate-on-scroll hover:transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-foreground/70">Projects Completed</div>
            </div>
            <div className="animate-on-scroll hover:transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-foreground/70">Years of Experience</div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <SectionContainer>
          <div className="bg-navy-light/5 border border-navy-light/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 animate-on-scroll hover:shadow-lg hover:bg-accent/5 transition-all">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-semibold mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-foreground/80 max-w-xl">
                Contact us today to discuss how we can help your business achieve its IT goals.
              </p>
            </div>
            <div className="shrink-0">
              <Link to="/contact">
                <AnimatedButton variant="accent" size="lg" withArrow className="hover:bg-accent/90 transform hover:scale-105 transition-all">
                  Contact Us
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

export default Index;
