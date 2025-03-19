
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
import { useEffect, useState } from "react";

// Blog posts data
const blogPosts = [
  {
    id: "cybersecurity-best-practices",
    title: "5 Cybersecurity Best Practices Every Business Should Implement",
    excerpt: "Protect your business from cyber threats with these essential security measures that are both effective and easy to implement.",
    category: "Cybersecurity",
    author: "Michael Chen",
    date: "June 15, 2023",
    image: "bg-navy-light"
  },
  {
    id: "cloud-migration-guide",
    title: "A Comprehensive Guide to Cloud Migration for Small Businesses",
    excerpt: "Learn how to successfully migrate your business to the cloud with this step-by-step guide designed specifically for small to medium-sized businesses.",
    category: "Cloud Computing",
    author: "Sarah Johnson",
    date: "May 28, 2023",
    image: "bg-accent/10"
  },
  {
    id: "it-cost-optimization",
    title: "IT Cost Optimization: How to Reduce Expenses Without Sacrificing Quality",
    excerpt: "Discover strategies to optimize your IT spending while maintaining or even improving the quality of your technology infrastructure and services.",
    category: "IT Management",
    author: "David Rodriguez",
    date: "April 12, 2023",
    image: "bg-primary/10"
  },
  {
    id: "remote-workforce",
    title: "Supporting a Remote Workforce: IT Challenges and Solutions",
    excerpt: "Address the unique IT challenges that come with managing a remote workforce and implement effective solutions to ensure productivity and security.",
    category: "Remote Work",
    author: "Jessica Chen",
    date: "March 5, 2023",
    image: "bg-silver-dark/20"
  },
  {
    id: "ai-business-applications",
    title: "Practical AI Applications for Modern Businesses",
    excerpt: "Explore how artificial intelligence can be applied to various aspects of your business to improve efficiency, customer experience, and decision-making.",
    category: "Technology Trends",
    author: "Robert Williams",
    date: "February 19, 2023",
    image: "bg-navy/5"
  },
  {
    id: "data-backup-strategies",
    title: "Effective Data Backup and Recovery Strategies for Business Continuity",
    excerpt: "Learn how to create a robust data backup and recovery plan that protects your business from data loss and ensures continuity in case of emergencies.",
    category: "Data Management",
    author: "Michael Chen",
    date: "January 7, 2023",
    image: "bg-accent/10"
  }
];

// Blog categories
const categories = ["All", "Cybersecurity", "Cloud Computing", "IT Management", "Remote Work", "Technology Trends", "Data Management"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === activeCategory));
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

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-navy-light/10 to-navy/5">
        <SectionContainer>
          <div className="max-w-3xl">
            <Badge variant="accent" className="mb-4 animate-fade-in">Our Blog</Badge>
            <h1 className="font-display font-bold mb-6 text-balance animate-fade-in">
              Insights & <span className="text-accent">Resources</span>
            </h1>
            <p className="text-lg text-foreground/80 mb-8 animate-fade-in">
              Stay updated with the latest trends, best practices, and insights in the world of IT
              through our regularly updated blog.
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

      {/* Featured Post */}
      <section className="py-16">
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-on-scroll">
            <div>
              <Badge variant="accent" className="mb-4">Featured Article</Badge>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-foreground/80 mb-4">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-2 text-sm text-foreground/60 mb-6">
                <span>{blogPosts[0].author}</span>
                <span>•</span>
                <span>{blogPosts[0].date}</span>
                <span>•</span>
                <span>{blogPosts[0].category}</span>
              </div>
              <AnimatedButton variant="accent" withArrow>
                Read Article
              </AnimatedButton>
            </div>
            <div>
              <div className={`h-80 ${blogPosts[0].image} rounded-xl`}></div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-silver-light">
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card
                key={post.id}
                variant="glass"
                interactive={true}
                className="overflow-hidden transition-all duration-300 animate-on-scroll"
              >
                <div className={`h-48 ${post.image} rounded-lg mb-4`}></div>
                <Badge variant="accent" className="mb-2">
                  {post.category}
                </Badge>
                <h3 className="text-xl font-medium mb-2">{post.title}</h3>
                <p className="text-foreground/70 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-foreground/60 mt-auto">
                  <div>{post.author}</div>
                  <div>{post.date}</div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center animate-on-scroll">
            <AnimatedButton variant="outline">
              Load More Articles
            </AnimatedButton>
          </div>
        </SectionContainer>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <SectionContainer>
          <div className="bg-navy text-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto animate-on-scroll relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.15),_transparent_50%)] z-0"></div>
            <div className="relative z-10">
              <Badge variant="accent" className="mb-4">Stay Updated</Badge>
              <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-silver-light max-w-2xl mx-auto mb-6">
                Get the latest insights, tips, and industry news delivered directly to your inbox.
                We promise not to spam you or share your information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-md text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <AnimatedButton variant="accent" withArrow>
                  Subscribe
                </AnimatedButton>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-silver-light">
        <SectionContainer>
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <Badge variant="accent" className="mb-4">Resources</Badge>
            <Heading as="h2" className="text-center">
              Additional Resources
            </Heading>
            <p className="text-foreground/80 text-balance">
              Access our free guides, whitepapers, and tools to help you make informed
              technology decisions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
            <Card variant="glass" className="p-6">
              <div className="mb-4 text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">E-Books & Guides</h3>
              <p className="text-foreground/70 mb-4">
                Download our comprehensive guides on various IT topics including cybersecurity,
                cloud migration, and IT infrastructure optimization.
              </p>
              <AnimatedButton variant="outline" withArrow>
                Browse E-Books
              </AnimatedButton>
            </Card>

            <Card variant="glass" className="p-6">
              <div className="mb-4 text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Webinars & Videos</h3>
              <p className="text-foreground/70 mb-4">
                Watch our educational webinars and videos featuring industry experts discussing
                the latest trends and best practices in IT.
              </p>
              <AnimatedButton variant="outline" withArrow>
                Watch Videos
              </AnimatedButton>
            </Card>

            <Card variant="glass" className="p-6">
              <div className="mb-4 text-accent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-12 w-12"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Templates & Checklists</h3>
              <p className="text-foreground/70 mb-4">
                Access free templates and checklists to help you implement IT best practices
                and streamline your technology management processes.
              </p>
              <AnimatedButton variant="outline" withArrow>
                Download Templates
              </AnimatedButton>
            </Card>
          </div>
        </SectionContainer>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
