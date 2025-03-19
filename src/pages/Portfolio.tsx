
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  AnimatedButton,
  Badge,
  Card,
  Heading,
  SectionContainer,
  Testimonial
} from "@/components/ui-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Case studies data
const caseStudies = [
  {
    id: "nexus-financial",
    title: "Nexus Financial",
    category: "Cloud Migration",
    image: "bg-navy-light",
    challenge: "Nexus Financial, a growing financial services firm, was struggling with an outdated IT infrastructure that was becoming increasingly unreliable and expensive to maintain. They needed to modernize their systems while ensuring maximum security for sensitive financial data.",
    solution: "We implemented a comprehensive cloud migration strategy, moving their operations to a secure hybrid cloud environment. This included setting up advanced security protocols, data encryption, and a robust disaster recovery system.",
    results: ["Reduced IT operational costs by 35%", "Improved system reliability with 99.9% uptime", "Enhanced data security with multi-layered protection", "Increased team productivity by 28%"],
    testimonial: {
      quote: "The cloud migration executed by Goldtech Solutions transformed our operations. Our systems are now more reliable, secure, and cost-effective. Their team's expertise and support throughout the process were invaluable.",
      author: "Sarah Johnson",
      company: "CTO, Nexus Financial"
    }
  },
  {
    id: "metro-healthcare",
    title: "Metro Healthcare",
    category: "IT Infrastructure",
    image: "bg-accent/10",
    challenge: "Metro Healthcare, a network of medical clinics, was experiencing frequent system outages and security vulnerabilities. They needed a robust IT infrastructure that could support their expanding operations while complying with strict healthcare regulations.",
    solution: "We redesigned their entire IT infrastructure, implementing redundant systems, advanced network security, and HIPAA-compliant data management solutions. We also provided comprehensive staff training to ensure proper system usage.",
    results: ["Eliminated system downtime", "Achieved full HIPAA compliance", "Streamlined patient data management", "Reduced IT support tickets by 62%"],
    testimonial: {
      quote: "Goldtech Solutions delivered an IT infrastructure that not only meets our current needs but is also scalable for our future growth. Their understanding of healthcare regulations and requirements was impressive.",
      author: "Dr. Michael Chen",
      company: "Director, Metro Healthcare"
    }
  },
  {
    id: "vertex-manufacturing",
    title: "Vertex Manufacturing",
    category: "Cybersecurity",
    image: "bg-primary/10",
    challenge: "Vertex Manufacturing experienced a ransomware attack that severely disrupted their operations. They needed immediate incident response and a long-term strategy to strengthen their cybersecurity posture.",
    solution: "Our team quickly contained the breach, recovered critical data, and implemented a comprehensive cybersecurity framework including advanced endpoint protection, regular vulnerability assessments, and employee security training.",
    results: ["Successfully recovered 100% of affected data", "Implemented multi-layered security defenses", "Zero security incidents since implementation", "Developed comprehensive security policies"],
    testimonial: {
      quote: "After experiencing a devastating cyberattack, Goldtech Solutions not only helped us recover but also implemented robust security measures that have protected us from further threats. Their expertise in cybersecurity is outstanding.",
      author: "Robert Williams",
      company: "CEO, Vertex Manufacturing"
    }
  },
  {
    id: "horizon-retail",
    title: "Horizon Retail",
    category: "Custom Software",
    image: "bg-silver-dark/20",
    challenge: "Horizon Retail, a multi-location retail chain, was struggling with inventory management and customer data integration across their stores. Their existing systems were not communicating effectively, leading to inventory discrepancies and customer service issues.",
    solution: "We developed a custom retail management system that integrated inventory, point-of-sale, and customer relationship management into a unified platform. The solution included real-time synchronization across all locations and mobile access for staff.",
    results: ["Inventory accuracy improved to 99.8%", "Customer satisfaction increased by 42%", "Reduced operational costs by 25%", "Enabled data-driven decision making with comprehensive analytics"],
    testimonial: {
      quote: "The custom software solution from Goldtech Solutions has revolutionized how we manage our retail operations. The system is intuitive, powerful, and has directly contributed to our improved customer satisfaction and profitability.",
      author: "Jessica Chen",
      company: "Operations Director, Horizon Retail"
    }
  },
  {
    id: "alpine-construction",
    title: "Alpine Construction",
    category: "Managed IT Services",
    image: "bg-navy/5",
    challenge: "Alpine Construction was spending too much time and resources managing their IT needs, distracting them from their core business. They required a reliable partner to handle all aspects of their IT operations efficiently.",
    solution: "We implemented a comprehensive managed IT services plan, providing 24/7 monitoring, proactive maintenance, help desk support, and strategic IT consulting. This allowed their team to focus on construction projects rather than IT issues.",
    results: ["Reduced IT management time by 90%", "Improved employee productivity", "Predictable monthly IT expenses", "Rapid issue resolution with average response time under 15 minutes"],
    testimonial: {
      quote: "Partnering with Goldtech Solutions for managed IT services has been one of the best business decisions we've made. Their team handles all our technology needs efficiently, allowing us to focus on what we do best - construction.",
      author: "Mark Anderson",
      company: "President, Alpine Construction"
    }
  },
  {
    id: "beacon-education",
    title: "Beacon Education",
    category: "Network Infrastructure",
    image: "bg-accent/10",
    challenge: "Beacon Education, a growing school district, was experiencing network congestion and reliability issues as they expanded their digital learning initiatives. They needed a scalable network infrastructure to support increasing technology demands.",
    solution: "We designed and implemented a high-performance network infrastructure with increased bandwidth, improved Wi-Fi coverage, and enhanced security features. The solution included network segmentation for different user groups and quality of service configurations to prioritize educational applications.",
    results: ["Increased network capacity by 300%", "Eliminated network congestion issues", "Enhanced security with advanced filtering", "Supported 1:1 device initiative across the district"],
    testimonial: {
      quote: "The network upgrade performed by Goldtech Solutions has transformed our digital learning environment. Our students and teachers now have reliable, high-speed access to educational resources, significantly enhancing the learning experience.",
      author: "Sophia Rodriguez",
      company: "IT Director, Beacon Education"
    }
  }
];

// Filter categories
const categories = ["All", "Cloud Migration", "IT Infrastructure", "Cybersecurity", "Custom Software", "Managed IT Services", "Network Infrastructure"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredCaseStudies, setFilteredCaseStudies] = useState(caseStudies);
  const [activeCase, setActiveCase] = useState<string | null>(null);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredCaseStudies(caseStudies);
    } else {
      setFilteredCaseStudies(caseStudies.filter(study => study.category === activeCategory));
    }
  }, [activeCategory]);

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

  const handleCaseClick = (id: string) => {
    if (activeCase === id) {
      setActiveCase(null);
    } else {
      setActiveCase(id);
      // Scroll to the case study after a brief delay to allow for animation
      setTimeout(() => {
        const element = document.getElementById(`case-${id}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-navy-light/10 to-navy/5">
        <SectionContainer>
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-4 animate-fade-in">Case Studies</Badge>
            <h1 className="font-display font-bold mb-6 text-balance animate-fade-in">
              Our <span className="text-accent">Success</span> Stories
            </h1>
            <p className="text-lg text-foreground/80 mb-8 animate-fade-in">
              Explore how we've helped businesses across various industries overcome their IT challenges
              and achieve their technology goals.
            </p>
          </div>
        </SectionContainer>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <SectionContainer>
          <div className="flex flex-wrap gap-2 justify-center animate-on-scroll">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-accent text-white"
                    : "bg-silver-light text-foreground hover:bg-accent/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((caseStudy) => (
              <Card
                key={caseStudy.id}
                variant="glass"
                interactive={true}
                className={`overflow-hidden transition-all duration-300 ${
                  activeCase === caseStudy.id ? "md:col-span-2 lg:col-span-3" : ""
                } animate-on-scroll`}
                id={`case-${caseStudy.id}`}
                onClick={() => handleCaseClick(caseStudy.id)}
              >
                {activeCase !== caseStudy.id ? (
                  /* Collapsed view */
                  <>
                    <div className={`h-48 ${caseStudy.image} rounded-lg mb-4`}></div>
                    <Badge variant="accent" className="mb-2">
                      {caseStudy.category}
                    </Badge>
                    <h3 className="text-xl font-medium mb-2">{caseStudy.title}</h3>
                    <p className="text-foreground/70 line-clamp-3">
                      {caseStudy.challenge}
                    </p>
                    <div className="mt-4 text-accent flex items-center">
                      <span className="mr-2">View Case Study</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </>
                ) : (
                  /* Expanded view */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className={`h-48 ${caseStudy.image} rounded-lg mb-4`}></div>
                      <Badge variant="accent" className="mb-2">
                        {caseStudy.category}
                      </Badge>
                      <h3 className="text-2xl font-medium mb-4">{caseStudy.title}</h3>
                      <div className="flex justify-between">
                        <AnimatedButton
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveCase(null);
                          }}
                        >
                          Close
                        </AnimatedButton>
                        <Link to="/contact" onClick={(e) => e.stopPropagation()}>
                          <AnimatedButton
                            variant="accent"
                            size="sm"
                            withArrow
                          >
                            Contact Us
                          </AnimatedButton>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className="mb-4">
                        <h4 className="text-lg font-medium mb-2">Challenge</h4>
                        <p className="text-foreground/80">{caseStudy.challenge}</p>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-lg font-medium mb-2">Solution</h4>
                        <p className="text-foreground/80">{caseStudy.solution}</p>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-lg font-medium mb-2">Results</h4>
                        <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                          {caseStudy.results.map((result, index) => (
                            <li key={index}>{result}</li>
                          ))}
                        </ul>
                      </div>
                      <Testimonial
                        quote={caseStudy.testimonial.quote}
                        author={caseStudy.testimonial.author}
                        company={caseStudy.testimonial.company}
                      />
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* Overview Stats */}
      <section className="py-16 bg-navy text-white">
        <SectionContainer>
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <Badge variant="accent" className="mb-4">Our Impact</Badge>
            <Heading as="h2" className="text-center text-white">
              Delivering Measurable Results
            </Heading>
            <p className="text-silver-light text-balance">
              Our solutions have helped businesses across various industries achieve significant improvements
              in their IT operations and overall business performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="glass-panel-dark" className="p-6 text-center animate-on-scroll">
              <div className="text-4xl font-bold text-gold mb-2">250+</div>
              <div className="text-silver-light">Successful Projects</div>
            </Card>

            <Card variant="glass-panel-dark" className="p-6 text-center animate-on-scroll">
              <div className="text-4xl font-bold text-gold mb-2">40%</div>
              <div className="text-silver-light">Average Cost Reduction</div>
            </Card>

            <Card variant="glass-panel-dark" className="p-6 text-center animate-on-scroll">
              <div className="text-4xl font-bold text-gold mb-2">99.9%</div>
              <div className="text-silver-light">System Uptime</div>
            </Card>
          </div>
        </SectionContainer>
      </section>

      {/* Client Logos */}
      <section className="py-16">
        <SectionContainer>
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <Badge variant="accent" className="mb-4">Our Clients</Badge>
            <Heading as="h2" className="text-center">
              Trusted by Businesses Across Industries
            </Heading>
            <p className="text-foreground/80 text-balance">
              We've had the privilege of working with a diverse range of clients,
              from startups to established enterprises.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll">
            {/* Client logos would go here - using placeholders */}
            <div className="h-24 bg-silver-light rounded-lg flex items-center justify-center">Client Logo</div>
            <div className="h-24 bg-silver-light rounded-lg flex items-center justify-center">Client Logo</div>
            <div className="h-24 bg-silver-light rounded-lg flex items-center justify-center">Client Logo</div>
            <div className="h-24 bg-silver-light rounded-lg flex items-center justify-center">Client Logo</div>
            <div className="h-24 bg-silver-light rounded-lg flex items-center justify-center">Client Logo</div>
            <div className="h-24 bg-silver-light rounded-lg flex items-center justify-center">Client Logo</div>
            <div className="h-24 bg-silver-light rounded-lg flex items-center justify-center">Client Logo</div>
            <div className="h-24 bg-silver-light rounded-lg flex items-center justify-center">Client Logo</div>
          </div>
        </SectionContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-silver-light">
        <SectionContainer>
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-lg animate-on-scroll">
            <Badge variant="accent" className="mb-4">Ready to Get Started?</Badge>
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">
              Let's Create Your Success Story
            </h3>
            <p className="text-foreground/80 max-w-2xl mx-auto mb-6">
              Whether you're looking to modernize your IT infrastructure, enhance your security posture,
              or implement innovative technology solutions, we're here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <AnimatedButton variant="accent" size="lg" withArrow>
                  Schedule a Consultation
                </AnimatedButton>
              </Link>
              <Link to="/services">
                <AnimatedButton variant="outline" size="lg">
                  Explore Our Services
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

export default Portfolio;
