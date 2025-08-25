"use client";
import Link from "next/link";
import { Sun, Moon, Download } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["about", "projects", "contact"];

    const observerOptions = {
      threshold: 0.3,
      rootMargin: "-20% 0px -70% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { href: "/#about", label: "About", id: "about" },
    { href: "/#projects", label: "Projects", id: "projects" },
    { href: "/#contact", label: "Contact", id: "contact" },
  ];

  return (
    <FloatingNavbar
      className={cn(
        isScrolled ? "backdrop-blur-2xl" : "backdrop-blur-xl",
        isScrolled
          ? "shadow-2xl border-gray-300/60 dark:border-gray-600/60"
          : "shadow-xl border-gray-200/40 dark:border-gray-700/40",

        "bg-gradient-to-r from-white/90 via-white/95 to-white/90",
        "dark:from-gray-900/90 dark:via-gray-900/95 dark:to-gray-900/90"
      )}
    >
      <div className="flex items-center justify-center gap-2 w-full">
        {/* Navigation Links */}
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "relative px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl font-medium",
                "text-xs sm:text-sm transition-all duration-300 ease-out",
                "hover:scale-105 active:scale-95 group overflow-hidden",

                activeSection === item.id
                  ? "text-white shadow-lg scale-105"
                  : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              )}
              style={{
                background:
                  activeSection === item.id
                    ? "linear-gradient(135deg, #3b82f6, #1d4ed8)"
                    : "transparent",
              }}
            >
              <div
                className={cn(
                  "absolute inset-0 rounded-xl transition-all duration-300",
                  activeSection === item.id
                    ? "bg-gradient-to-r from-blue-500/20 to-blue-600/20 opacity-100"
                    : "bg-gradient-to-r from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100"
                )}
              />

              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <span className="relative z-10">{item.label}</span>

              {activeSection === item.id && (
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
              )}
            </Link>
          ))}
        </div>

        <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-transparent dark:via-gray-600 mx-2" />

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            className="group relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 ease-out hover:scale-105 active:scale-95 overflow-hidden border-1 border-solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Background shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            <Download
              size={16}
              className="relative z-10 transition-transform duration-300 group-hover:rotate-12"
            />
            <span className="relative z-10 hidden sm:inline">Resume</span>

            <div className="absolute inset-0 rounded-xl bg-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="group relative p-2 sm:p-2.5 rounded-xl transition-all duration-300 ease-out hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-transparent overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 "
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 transition-transform duration-500 group-hover:rotate-180">
              {theme === "light" ? (
                <Moon size={18} className="sm:w-5 sm:h-5" />
              ) : (
                <Sun size={18} className="sm:w-5 sm:h-5" />
              )}
            </div>

            <div className="absolute inset-0 rounded-xl bg-blue-500/30 opacity-0 group-active:opacity-50 transition-opacity duration-150" />
          </button>
        </div>
      </div>
    </FloatingNavbar>
  );
};

export default Navbar;
