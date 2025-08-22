"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowUp, Phone } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import Description from "./components/Description";
import QuickLinks from "./components/QuickLinks";
import Touch from "./components/Touch";
import { getVar } from "@/helper/var";

interface FooterProps {
  customClass?: string;
}

const Footer: React.FC<FooterProps> = ({ customClass = "" }) => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const currentYear = new Date().getFullYear();

  useTheme();

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
            <Description />
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-1 lg:col-span-1">
            <QuickLinks />
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <Touch />
          </div>
        </div>
        <div
          className="my-12 md:my-16 animate-fadeIn delay-700"
          style={{ borderTop: `1px solid ${getVar("border-divider")}` }}
        ></div>
        <div
          className="flex flex-col md:flex-row justify-between items-center text-center md:text-left animate-fadeInUp delay-800"
          style={{ color: getVar("text-secondary") }}
        >
          <p className="text-sm md:text-base mb-4 md:mb-0">
            &copy; {currentYear} Farhan Ariq. All rights reserved.
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
