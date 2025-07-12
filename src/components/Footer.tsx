"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowUp, Zap, Link2 } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface FooterProps {
  customClass?: string;
}

const Footer: React.FC<FooterProps> = ({ customClass = "" }) => {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  const { theme } = useTheme();

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

  const getVar = (varName: string) => `var(--${varName})`;

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
      id="contact"
      className={`${customClass} py-8 md:py-10 relative overflow-hidden`}
      style={{
        backgroundColor: getVar("card-bg"),
        color: getVar("foreground"),
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-20">
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-light"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-light animation-delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-y-16 md:gap-x-12">
          <div className="md:col-span-1 lg:col-span-2">
            <Link
              href="/"
              className="text-3xl md:text-4xl font-extrabold mb-5 inline-block animate-fadeInDown"
            >
              <span
                className="text-transparent bg-clip-text"
                style={{ color: getVar("button-primary-bg") }}
              >
                Farhan Ariq
              </span>
            </Link>
            <p
              className="leading-relaxed mb-6 text-base md:text-lg max-w-lg animate-fadeIn delay-200"
              style={{ color: getVar("text-secondary") }}
            >
              I'm a passionate developer focused on crafting intuitive,
              high-performance digital experiences. I constantly learn and adapt
              to build innovative solutions that truly make an impact.
            </p>
            <div className="flex space-x-5 mt-8 animate-fadeIn delay-400">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="transition-colors duration-300 transform hover:scale-125 hover:drop-shadow-lg"
                  style={{ color: getVar("text-secondary") }}
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
            <h3
              className="text-xl font-bold mb-6 pb-3 inline-block animate-fadeInUp"
              style={{
                color: getVar("text-primary"),
                borderBottom: `1px solid ${getVar("border-divider")}`,
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-4 animate-fadeIn delay-300">
              <li>
                <Link
                  href="#about"
                  className="transition-colors duration-200 text-base flex items-center group hover:opacity-80"
                  style={{ color: getVar("text-secondary") }}
                >
                  <Link2
                    size={16}
                    className="mr-2 transition-colors"
                    style={{ color: getVar("border-divider") }}
                  />{" "}
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="transition-colors duration-200 text-base flex items-center group hover:opacity-80"
                  style={{ color: getVar("text-secondary") }}
                >
                  <Link2
                    size={16}
                    className="mr-2 transition-colors"
                    style={{ color: getVar("border-divider") }}
                  />{" "}
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="transition-colors duration-200 text-base flex items-center group hover:opacity-80"
                  style={{ color: getVar("text-secondary") }}
                >
                  <Link2
                    size={16}
                    className="mr-2 transition-colors"
                    style={{ color: getVar("border-divider") }}
                  />{" "}
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  className="transition-colors duration-200 text-base flex items-center group hover:opacity-80"
                  style={{ color: getVar("text-secondary") }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link2
                    size={16}
                    className="mr-2 transition-colors"
                    style={{ color: getVar("border-divider") }}
                  />{" "}
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3
              className="text-xl font-bold mb-6 pb-3 inline-block animate-fadeInUp delay-100"
              style={{
                color: getVar("text-primary"),
                borderBottom: `1px solid ${getVar("border-divider")}`,
              }}
            >
              Get In Touch
            </h3>
            <p
              className="mb-3 flex items-center text-base md:text-lg animate-fadeIn delay-400"
              style={{ color: getVar("text-secondary") }}
            >
              <span
                className="mr-3"
                style={{ color: getVar("button-secondary-text") }}
              >
                📍
              </span>{" "}
              Semarang City, Central Java, Indonesia
            </p>
            <p
              className="mb-6 flex items-center text-base md:text-lg animate-fadeIn delay-500"
              style={{ color: getVar("text-secondary") }}
            >
              <span
                className="mr-3"
                style={{ color: getVar("button-secondary-text-alt") }}
              >
                ✉️
              </span>{" "}
              farhanariq.dev@gmail.com
            </p>
            {/* Call to action button */}
            <div className="mt-6 animate-fadeIn delay-600">
              <a
                href="mailto:farhanariq.dev@gmail.com"
                className="inline-flex items-center px-8 py-3 rounded shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-base md:text-lg transform hover:scale-105"
                style={{
                  background: getVar("button-primary-bg"),
                  color: "white",
                }}
              >
                <Mail size={18} className="mr-2" />
                Say Hello!
              </a>
            </div>
          </div>
        </div>
        <div
          className="my-12 md:my-16 animate-fadeIn delay-700"
          style={{ borderTop: `1px solid ${getVar("border-divider")}` }}
        ></div>
        {/* Bottom Section: Copyright & Scroll to Top */}
        <div
          className="flex flex-col md:flex-row justify-between items-center text-center md:text-left animate-fadeInUp delay-800"
          style={{ color: getVar("text-secondary") }}
        >
          <p className="text-sm md:text-base mb-4 md:mb-0">
            &copy; {currentYear} **Farhan Ariq**. All rights reserved.
          </p>
          {/* Scroll to top button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 fixed bottom-8 right-8 z-50 animate-bounce-in cursor-pointer"
              style={
                {
                  backgroundColor: getVar("button-secondary-bg"),
                  color: getVar("foreground"),
                  "--tw-ring-color": getVar("button-secondary-text-alt"),
                  "--tw-ring-offset-color": getVar("card-bg"),
                } as React.CSSProperties
              }
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
