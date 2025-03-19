
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  AnimatedButton, 
  Badge, 
  Card, 
  Heading,
  SectionContainer 
} from "@/components/ui-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
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
      <section className="pt-28 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-navy-light/10 to-navy/5">
        <SectionContainer>
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-4 animate-fade-in">Our Story</Badge>
            <h1 className="font-display font-bold mb-6 text-balance animate-fade-in">
              About <span className="text-accent">Goldtech</span> Solutions
            </h1>
            <p className="text-lg text-foreground/80 mb-8 animate-fade-in">
              We are a leading IT services company dedicated to delivering innovative, reliable, 
              and secure technology solutions that help businesses thrive in the digital age.
            </p>
          </div>
        </SectionContainer>
      </section>

      {/* Our Mission Section */}
      <section className="py-16">
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <Badge variant="accent" className="mb-4">Our Mission</Badge>
              <Heading as="h2" withAccent>
                Empowering Businesses Through Technology
              </Heading>
              <p className="text-foreground/80 mb-4">
                At Goldtech Solutions, our mission is to empower businesses of all sizes with cutting-edge
                technology solutions that drive growth, enhance efficiency, and provide a competitive advantage.
              </p>
              <p className="text-foreground/80 mb-4">
                We believe that technology should work for you, not the other way around. That's why we focus
                on creating tailored IT solutions that align with your business goals and address your specific challenges.
              </p>
              <p className="text-foreground/80">
                Our team of experts is committed to delivering exceptional service, innovative solutions,
                and reliable support to help your business reach its full potential in the digital landscape.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden h-80 animate-on-scroll">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-light to-navy/90 opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-navy-dark text-9xl opacity-10 font-bold flex items-center">
                  <span className="text-gold">G</span>T
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-silver-light">
        <SectionContainer>
          <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
            <Badge variant="accent" className="mb-4">Our Values</Badge>
            <Heading as="h2" className="text-center">
              What Drives Us
            </Heading>
            <p className="text-foreground/80 text-balance">
              Our core values shape every aspect of our work and guide us in delivering 
              exceptional IT services to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="glass" className="p-6 animate-on-scroll">
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
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Excellence</h3>
              <p className="text-foreground/70">
                We strive for excellence in everything we do, from the solutions we develop
                to the support we provide to our clients.
              </p>
            </Card>

            <Card variant="glass" className="p-6 animate-on-scroll">
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
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Innovation</h3>
              <p className="text-foreground/70">
                We embrace innovation and continuously explore new technologies to 
                deliver forward-thinking solutions to our clients.
              </p>
            </Card>

            <Card variant="glass" className="p-6 animate-on-scroll">
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
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                  <circle cx="12" cy="13" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Transparency</h3>
              <p className="text-foreground/70">
                We believe in open and honest communication with our clients, 
                ensuring clarity at every stage of our engagement.
              </p>
            </Card>

            <Card variant="glass" className="p-6 animate-on-scroll">
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
                  <circle cx="18" cy="18" r="3"></circle>
                  <circle cx="6" cy="6" r="3"></circle>
                  <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Adaptability</h3>
              <p className="text-foreground/70">
                We adapt to the ever-changing technology landscape and evolving 
                business needs to provide relevant and effective solutions.
              </p>
            </Card>

            <Card variant="glass" className="p-6 animate-on-scroll">
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
                  <path d="M17 18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12z"></path>
                  <path d="M12 8v4"></path>
                  <path d="M12 16h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Reliability</h3>
              <p className="text-foreground/70">
                We are committed to being a reliable partner for our clients, 
                delivering on our promises and providing dependable support.
              </p>
            </Card>

            <Card variant="glass" className="p-6 animate-on-scroll">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Security</h3>
              <p className="text-foreground/70">
                We prioritize the security of our clients' data and systems, 
                implementing robust measures to protect against threats.
              </p>
            </Card>
          </div>
        </SectionContainer>
      </section>

      {/* Our Team Section */}
      <section className="py-16">
        <SectionContainer>
          <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
            <Badge variant="accent" className="mb-4">Our Team</Badge>
            <Heading as="h2" className="text-center">
              Meet Our Experts
            </Heading>
            <p className="text-foreground/80 text-balance">
              Our team of IT professionals brings together a wealth of experience and 
              expertise to deliver exceptional solutions for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="animate-on-scroll">
              <div className="bg-silver-light rounded-xl overflow-hidden mb-4 aspect-square"></div>
              <h3 className="text-xl font-medium">Michael Chen</h3>
              <p className="text-accent mb-2">CEO & Founder</p>
              <p className="text-foreground/70">
                With over 20 years of experience in IT, Michael leads our team with a vision 
                for innovative technology solutions.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="animate-on-scroll">
              <div className="bg-silver-light rounded-xl overflow-hidden mb-4 aspect-square"></div>
              <h3 className="text-xl font-medium">Sarah Johnson</h3>
              <p className="text-accent mb-2">Chief Technology Officer</p>
              <p className="text-foreground/70">
                Sarah specializes in cloud computing and cybersecurity, ensuring our solutions 
                are at the cutting edge of technology.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="animate-on-scroll">
              <div className="bg-silver-light rounded-xl overflow-hidden mb-4 aspect-square"></div>
              <h3 className="text-xl font-medium">David Rodriguez</h3>
              <p className="text-accent mb-2">Lead Solutions Architect</p>
              <p className="text-foreground/70">
                David designs custom IT solutions that address the unique challenges 
                and goals of our clients.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Our History */}
      <section className="py-16 bg-silver-light">
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll order-2 md:order-1">
              <div className="relative rounded-xl overflow-hidden aspect-video"></div>
            </div>
            <div className="animate-on-scroll order-1 md:order-2">
              <Badge variant="accent" className="mb-4">Our History</Badge>
              <Heading as="h2" withAccent>
                A Decade of Excellence
              </Heading>
              <p className="text-foreground/80 mb-4">
                Founded in 2013, Goldtech Solutions started as a small IT consulting firm with a big vision: 
                to make enterprise-grade technology accessible to businesses of all sizes.
              </p>
              <p className="text-foreground/80 mb-4">
                Over the years, we've grown into a comprehensive IT services provider, expanding our offerings 
                to include infrastructure management, cybersecurity, cloud computing, and more.
              </p>
              <p className="text-foreground/80">
                Today, we serve hundreds of clients across various industries, helping them leverage technology 
                to achieve their business objectives and stay ahead in an increasingly digital world.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <SectionContainer>
          <div className="bg-navy text-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto animate-on-scroll relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.15),_transparent_50%)] z-0"></div>
            <div className="relative z-10">
              <Badge variant="accent" className="mb-4">Join Our Team</Badge>
              <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">
                Interested in Working with Us?
              </h3>
              <p className="text-silver-light max-w-2xl mx-auto mb-6">
                We're always looking for talented individuals to join our team. If you're passionate
                about technology and want to make a difference, we'd love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <AnimatedButton variant="accent" withArrow>
                  View Open Positions
                </AnimatedButton>
                <Link to="/contact">
                  <AnimatedButton variant="outline">
                    Contact Us
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      <Footer />
    </>
  );
};

export default About;
