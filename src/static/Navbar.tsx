"use client";

import Link from "next/link";
import { ArrowDownToLine } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["about", "projects", "certifications", "contact"];
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "-10% 0px -80% 0px",
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
    { href: "#about", label: "About", id: "about" },
    { href: "#projects", label: "Works", id: "projects" },
    { href: "#certifications", label: "Credentials", id: "certifications" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 py-4"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo (Left) */}
        <Link
          href="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white group flex items-center"
        >
          Ariq.
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>

        {/* Navigation & Actions (Right - Asymmetric clustering) */}
        <div className="flex items-center gap-6 md:gap-10">
          {/* Main Links - Hidden on very small screens to maintain cleanliness */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-neutral-900 dark:text-white"
                    : "text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {item.label}
                {/* Minimalist Active Indicator */}
                <span
                  className={`absolute -bottom-1.5 left-0 h-[1.5px] bg-neutral-900 dark:bg-white transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="hidden md:block w-[1px] h-4 bg-neutral-300 dark:bg-neutral-700" />

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs md:text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 px-4 py-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
            >
              Resume
              <ArrowDownToLine className="ml-2 w-3 h-3 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
