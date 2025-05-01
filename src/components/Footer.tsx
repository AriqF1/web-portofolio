"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

// Interface untuk props (jika diperlukan di masa depan)
interface FooterProps {
  customClass?: string;
}

const Footer: React.FC<FooterProps> = ({ customClass = "" }) => {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Event listener untuk mendeteksi scroll
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

  // Fungsi untuk scroll ke atas
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Data sosial media (untuk memudahkan perubahan dan pengelolaan)
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
      name: "Twitter",
      url: "https://twitter.com",
      icon: <Twitter size={20} />,
      ariaLabel: "Twitter Profile",
    },
    {
      name: "Email",
      url: "https://farhanariq.dev@gmail.com",
      icon: <Mail size={20} />,
      ariaLabel: "Send Email",
    },
  ];
  
  return (
    <footer className={`bg-gray-900 text-white ${customClass}`}>
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Farhanariq.dev</h3>
            <p className="text-gray-300 mb-4">
              I'm a passionate developer with a strong focus on creating website
              and happy to learn something new.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label={social.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Semarang City, Central Java</p>
            <p className="text-gray-300 mb-2">farhanariq.dev@gmail.com</p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium transition duration-300"
              >
                Send Email
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Farhanariq.dev | All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed right-8 bottom-8 p-2 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg text-white transition duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
