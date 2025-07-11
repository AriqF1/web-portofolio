"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

interface FooterProps {
  customClass?: string;
}

const Footer: React.FC<FooterProps> = ({ customClass = "" }) => {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks: Array<{
    name: string;
    url: string;
    icon: React.ReactNode;
    ariaLabel: string;
  }> = [
    {
      name: "GitHub",
      url: "https://github.com/AriqF1",
      icon: <Github size={20} />,
      ariaLabel: "GitHub Profile",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ariqfarhan-dev",
      icon: <Linkedin size={20} />,
      ariaLabel: "LinkedIn Profile",
    },
    {
      name: "Email",
      url: "mailto:farhanariq.dev@gmail.com",
      icon: <Mail size={20} />,
      ariaLabel: "Send Email",
    },
  ];

  return (
    <footer
      className={`bg-neutral-900 text-neutral-300 ${customClass} py-12 md:py-16`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-y-12 md:gap-x-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
                Farhan Ariq
              </span>
            </Link>
            <p className="text-neutral-400 leading-relaxed mb-4 text-base max-w-sm text-justify">
              I'm a passionate developer with a strong focus on creating
              intuitive and performant websites. I'm always eager to learn
              something new and apply it to build better digital experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-neutral-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                  aria-label={social.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-neutral-400 hover:text-white transition-colors duration-200 text-base"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-neutral-400 hover:text-white transition-colors duration-200 text-base"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-neutral-400 hover:text-white transition-colors duration-200 text-base"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  className="text-neutral-400 hover:text-white transition-colors duration-200 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Column Contact Info */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-5">Get In Touch</h3>
            <p className="text-neutral-400 mb-2 flex items-center text-base">
              <span className="mr-2">📍</span> Semarang City, Central Java,
              Indonesia
            </p>
            <p className="text-neutral-400 mb-2 flex items-center text-base">
              <span className="mr-2">✉️</span> farhanariq.dev@gmail.com
            </p>
            {/* Call to action button */}
            <div className="mt-6">
              <a
                href="mailto:farhanariq.dev@gmail.com"
                className="inline-flex items-center px-6 py-3 border border-neutral-600 text-neutral-200 rounded-lg hover:bg-neutral-800 hover:border-neutral-500 transition-all duration-300 font-medium text-base shadow-md"
              >
                <Mail size={18} className="mr-2" />
                Say Hello
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 my-10 md:my-12"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Farhan Ariq. All rights reserved.
          </p>
          {/* Scroll to top button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="p-3 bg-neutral-700 hover:bg-neutral-600 rounded-full shadow-lg text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
