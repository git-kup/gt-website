
import { Link } from "react-router-dom";
import { SectionContainer } from "./ui-components";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      <SectionContainer className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-display font-bold text-2xl flex items-center">
              <span className="text-gold">Gold</span>tech
            </Link>
            <p className="mt-4 text-silver-dark max-w-md">
              Innovative and reliable IT solutions for businesses. We deliver technology that works for you,
              not the other way around.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="text-silver hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="text-silver hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-silver hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-silver-dark hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-silver-dark hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-silver-dark hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-silver-dark hover:text-gold transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-silver-dark hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-gold shrink-0 mt-0.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-silver-dark">
                  185 Clymer St, Brooklyn, NY 11211
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-gold shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:9292996365" className="text-silver-dark hover:text-gold transition-colors">
                  929-299-6365
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-gold shrink-0"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:sales@goldtechny.com" className="text-silver-dark hover:text-gold transition-colors">
                  sales@goldtechny.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-navy-light/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-silver-dark text-sm">
              &copy; {currentYear} Goldtech Solutions. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
              <Link to="/privacy" className="text-silver-dark hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-silver-dark hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
