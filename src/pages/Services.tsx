import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedButton, Badge, Card, Heading, SectionContainer, ServiceCard } from "@/components/ui-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// Define services
const services = [{
  title: "IT Infrastructure Management",
  description: "Comprehensive management of your IT infrastructure to ensure reliability, security, and performance. We handle everything from server maintenance to network monitoring.",
  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>,
  features: ["24/7 system monitoring", "Server maintenance and optimization", "Network performance tuning", "Hardware and software updates", "Capacity planning", "Disaster recovery planning"]
}, {
  title: "Cybersecurity Solutions",
  description: "Protect your business from cyber threats with our comprehensive security services. We implement multi-layered protection strategies to safeguard your data and systems.",
  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>,
  features: ["Security assessment and audits", "Endpoint protection", "Firewall configuration and management", "Intrusion detection and prevention", "Security awareness training", "Incident response planning"]
}, {
  title: "Network Services",
  description: "Design, implementation, and support for reliable network infrastructure. We ensure your network is secure, efficient, and scalable to meet your business needs.",
  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <path d="M15 2v2"></path>
        <path d="M15 20v2"></path>
        <path d="M2 15h2"></path>
        <path d="M20 15h2"></path>
      </svg>,
  features: ["Network design and implementation", "Wireless network solutions", "VPN setup and configuration", "Network security", "Bandwidth management", "Remote access solutions"]
}, {
  title: "Cloud Computing",
  description: "Harness the power of the cloud for improved flexibility and scalability. We help you migrate to and manage cloud environments that align with your business goals.",
  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
      </svg>,
  features: ["Cloud migration strategy", "Public, private, and hybrid cloud solutions", "SaaS, PaaS, and IaaS implementation", "Cloud security and compliance", "Cost optimization", "Ongoing cloud management"]
}, {
  title: "IT Consulting",
  description: "Strategic guidance to help you make informed technology decisions. Our experts provide insights and recommendations tailored to your business objectives.",
  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <line x1="10" y1="9" x2="8" y2="9"></line>
      </svg>,
  features: ["IT strategy development", "Technology roadmap planning", "Digital transformation guidance", "IT budget planning", "Vendor selection and management", "Process improvement"]
}, {
  title: "Managed IT Services",
  description: "Comprehensive IT support and management to keep your systems running smoothly. We take care of your IT needs so you can focus on your core business.",
  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
      </svg>,
  features: ["Help desk support", "Remote monitoring and management", "Patch management", "Backup and recovery", "IT asset management", "Proactive maintenance"]
}, {
  title: "Data Backup & Recovery",
  description: "Protect your critical data with reliable backup and recovery solutions. We ensure your data is safe and can be quickly restored in case of an emergency.",
  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="17 8 12 3 7 8"></polyline>
        <line x1="12" y1="3" x2="12" y2="15"></line>
      </svg>,
  features: ["Automated backup systems", "On-site and off-site backup solutions", "Cloud backup services", "Data recovery planning", "Disaster recovery testing", "Rapid restore capabilities"]
}];
const Services = () => {
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    });
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach(el => observer.observe(el));

    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  return <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-navy-light/10 to-navy/5">
        <SectionContainer>
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-4 animate-fade-in">Our Services</Badge>
            <h1 className="font-display font-bold mb-6 text-balance animate-fade-in">
              Comprehensive <span className="text-accent">IT Solutions</span> for Your Business
            </h1>
            <p className="text-lg text-foreground/80 mb-8 animate-fade-in">
              We offer a full range of IT services to help your business leverage technology 
              for growth, efficiency, and competitive advantage.
            </p>
          </div>
        </SectionContainer>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <SectionContainer>
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <Badge variant="accent" className="mb-4">What We Offer</Badge>
            <Heading as="h2" className="text-center">
              Our IT Services
            </Heading>
            <p className="text-foreground/80 text-balance">
              From infrastructure management to cybersecurity, we provide a wide range of services
              designed to meet the technology needs of modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />)}
          </div>
        </SectionContainer>
      </section>

      {/* Featured Services */}
      {services.slice(0, 4).map((service, index) => {})}

      {/* Why Choose Us */}
      <section className="py-16 bg-navy text-white">
        <SectionContainer>
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <Badge variant="accent" className="mb-4">Why Choose Us</Badge>
            <Heading as="h2" className="text-center text-white">
              The Goldtech Advantage
            </Heading>
            <p className="text-silver-light text-balance">
              We stand out from the competition with our commitment to excellence, 
              innovative solutions, and client-centered approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="glass-panel-dark" className="p-6 animate-on-scroll">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-accent/20 text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
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
              <h3 className="text-xl font-medium mb-2 text-white">Experienced Team</h3>
              <p className="text-silver-light">
                Our team of IT experts brings years of experience across various technologies
                and industries to address your unique challenges.
              </p>
            </Card>

            <Card variant="glass-panel-dark" className="p-6 animate-on-scroll">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-accent/20 text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2 text-white">Tailored Solutions</h3>
              <p className="text-silver-light">
                We don't believe in one-size-fits-all. Our solutions are customized to meet your
                specific business needs and objectives.
              </p>
            </Card>

            <Card variant="glass-panel-dark" className="p-6 animate-on-scroll">
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-accent/20 text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h6"></path>
                  <path d="M14 3v5h5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <path d="m22 22-3-3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2 text-white">Proactive Approach</h3>
              <p className="text-silver-light">
                We don't just fix problems; we prevent them. Our proactive IT management keeps
                your systems running smoothly and prevents downtime.
              </p>
            </Card>
          </div>
        </SectionContainer>
      </section>

      {/* Service Process */}
      <section className="py-16">
        <SectionContainer>
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <Badge variant="accent" className="mb-4">Our Process</Badge>
            <Heading as="h2" className="text-center">
              How We Work
            </Heading>
            <p className="text-foreground/80 text-balance">
              Our structured approach ensures we deliver solutions that perfectly align with
              your business needs and expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative animate-on-scroll">
              <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center text-white text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-medium mb-2">Discovery</h3>
              <p className="text-foreground/70">
                We start by understanding your business, its goals, challenges, and current IT infrastructure.
              </p>
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-accent/30"></div>
            </div>

            <div className="relative animate-on-scroll">
              <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center text-white text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-medium mb-2">Assessment</h3>
              <p className="text-foreground/70">
                We evaluate your existing systems and identify areas for improvement or optimization.
              </p>
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-accent/30"></div>
            </div>

            <div className="relative animate-on-scroll">
              <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center text-white text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-medium mb-2">Solution Design</h3>
              <p className="text-foreground/70">
                We develop a customized plan that addresses your needs and aligns with your business goals.
              </p>
              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-accent/30"></div>
            </div>

            <div className="animate-on-scroll">
              <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center text-white text-2xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-medium mb-2">Implementation</h3>
              <p className="text-foreground/70">
                We execute the plan efficiently, with minimal disruption to your operations.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-silver-light">
        <SectionContainer>
          <div className="bg-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg animate-on-scroll">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-semibold mb-2">
                Ready to Transform Your IT Infrastructure?
              </h3>
              <p className="text-foreground/80 max-w-xl">
                Contact us today to discover how Goldtech Solutions can help your business 
                leverage technology for growth and success.
              </p>
            </div>
            <div className="shrink-0">
              <Link to="/contact">
                <AnimatedButton variant="accent" size="lg" withArrow>
                  Schedule a Consultation
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </SectionContainer>
      </section>

      <Footer />
    </>;
};
export default Services;