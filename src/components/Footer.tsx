"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowUp, Zap, Link2 } from "lucide-react";

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
      icon: <Github size={22} />,
      ariaLabel: "GitHub Profile",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ariqfarhan-dev",
      icon: <Linkedin size={22} />,
      ariaLabel: "LinkedIn Profile",
    },
    {
      name: "Email",
      url: "mailto:farhanariq.dev@gmail.com",
      icon: <Mail size={22} />,
      ariaLabel: "Send Email",
    },
  ];

  return (
    <footer
      className={`bg-neutral-900 text-neutral-300 ${customClass} py-16 md:py-20 relative overflow-hidden`}
    >
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-light"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-light animation-delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-y-16 md:gap-x-12">
          {/* Column 1: Brand & Description */}
          <div className="md:col-span-1 lg:col-span-2">
            {" "}
            <Link
              href="/"
              className="text-3xl md:text-4xl font-extrabold mb-5 inline-block animate-fadeInDown"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
                Farhan Ariq
              </span>
            </Link>
            <p className="text-neutral-400 leading-relaxed mb-6 text-base md:text-lg max-w-lg animate-fadeIn delay-200">
              I'm a passionate developer focused on crafting intuitive,
              high-performance digital experiences. I constantly learn and adapt
              to build innovative solutions that truly make an impact.
            </p>
            <div className="flex space-x-5 mt-8 animate-fadeIn delay-400">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-neutral-400 hover:text-white transition-colors duration-300 transform hover:scale-125 hover:drop-shadow-lg"
                  aria-label={social.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-neutral-700 pb-3 inline-block animate-fadeInUp">
              Quick Links
            </h3>
            <ul className="space-y-4 animate-fadeIn delay-300">
              <li>
                <Link
                  href="#about"
                  className="text-neutral-400 hover:text-white transition-colors duration-200 text-base flex items-center group"
                >
                  <Link2
                    size={16}
                    className="mr-2 text-neutral-500 group-hover:text-white transition-colors"
                  />{" "}
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-neutral-400 hover:text-white transition-colors duration-200 text-base flex items-center group"
                >
                  <Link2
                    size={16}
                    className="mr-2 text-neutral-500 group-hover:text-white transition-colors"
                  />{" "}
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-neutral-400 hover:text-white transition-colors duration-200 text-base flex items-center group"
                >
                  <Link2
                    size={16}
                    className="mr-2 text-neutral-500 group-hover:text-white transition-colors"
                  />{" "}
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  className="text-neutral-400 hover:text-white transition-colors duration-200 text-base flex items-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link2
                    size={16}
                    className="mr-2 text-neutral-500 group-hover:text-white transition-colors"
                  />{" "}
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div className="md:col-span-2 lg:col-span-1">
            {" "}
            <h3 className="text-xl font-bold text-white mb-6 border-b border-neutral-700 pb-3 inline-block animate-fadeInUp delay-100">
              Get In Touch
            </h3>
            <p className="text-neutral-400 mb-3 flex items-center text-base md:text-lg animate-fadeIn delay-400">
              <span className="mr-3 text-purple-400">📍</span>
              Semarang City, Central Java, Indonesia
            </p>
            <p className="text-neutral-400 mb-6 flex items-center text-base md:text-lg animate-fadeIn delay-500">
              <span className="mr-3 text-blue-400">✉️</span>
              farhanariq.dev@gmail.com
            </p>
            {/* Call to action button */}
            <div className="mt-6 animate-fadeIn delay-600">
              <a
                href="mailto:farhanariq.dev@gmail.com"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-base md:text-lg transform hover:scale-105"
              >
                <Mail size={18} className="mr-2" />
                Say Hello!
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-700 my-12 md:my-16 animate-fadeIn delay-700"></div>
        {/* Bottom Section: Copyright & Scroll to Top */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left animate-fadeInUp delay-800">
          <p className="text-neutral-500 text-sm md:text-base mb-4 md:mb-0">
            &copy; {currentYear} **Farhan Ariq**. All rights reserved.
          </p>
          {/* Scroll to top button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="p-3 bg-neutral-700 hover:bg-neutral-600 rounded-full shadow-lg text-white transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-neutral-900 fixed bottom-8 right-8 z-50 animate-bounce-in" // Fixed position, added bounce-in
              aria-label="Scroll to top"
            >
              <ArrowUp size={24} />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
