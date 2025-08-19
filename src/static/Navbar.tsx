"use client";
import Link from "next/link";
import { Sun, Moon, Download } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { FloatingNavbar } from "@/components/ui/floating-navbar";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const getVar = (varName: string) => `var(--${varName})`;

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
    <FloatingNavbar>
      <nav
        className={`
          flex items-center justify-center gap-1 sm:gap-2 md:gap-3 px-2 sm:px-4 md:px-6 py-2 sm:py-3
          transition-all duration-500 ease-out
          ${isScrolled ? "backdrop-blur-xl" : "backdrop-blur-md"}
        `}
        style={{
          background: isScrolled
            ? `linear-gradient(135deg, ${getVar("card-bg")}95, ${getVar(
                "card-border"
              )}90)`
            : `linear-gradient(135deg, ${getVar("card-bg")}90, ${getVar(
                "card-border"
              )}85)`,
          border: `1px solid ${getVar("border-divider")}60`,
          borderRadius: "16px",
          boxShadow: isScrolled
            ? `0 8px 32px ${getVar("shadow-color")}25, 0 4px 16px ${getVar(
                "shadow-color"
              )}15`
            : `0 4px 24px ${getVar("shadow-color")}20, 0 2px 12px ${getVar(
                "shadow-color"
              )}10`,
        }}
      >
        {/* Navigation Links */}
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`
              relative px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-xl
              font-medium text-xs sm:text-sm md:text-base
              transition-all duration-300 ease-out
              hover:scale-105 active:scale-95
              group overflow-hidden
              ${
                activeSection === item.id
                  ? "text-white shadow-lg transform scale-105"
                  : "hover:opacity-80"
              }
            `}
            style={{
              color: activeSection === item.id ? "#ffffff" : getVar("text"),
              background:
                activeSection === item.id
                  ? `linear-gradient(135deg, ${getVar("accent-primary")}, ${
                      getVar("accent-secondary") || getVar("accent-primary")
                    })`
                  : "transparent",
            }}
          >
            {/* Background glow effect */}
            <div
              className={`
                absolute inset-0 rounded-xl transition-opacity duration-300
                ${
                  activeSection === item.id
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-50"
                }
              `}
              style={{
                background: `linear-gradient(135deg, ${getVar(
                  "accent-primary"
                )}20, ${
                  getVar("accent-secondary") || getVar("accent-primary")
                }10)`,
              }}
            />

            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div
                className="absolute inset-0 rounded-xl animate-pulse"
                style={{
                  background: `linear-gradient(45deg, transparent 30%, ${getVar(
                    "accent-primary"
                  )}10 50%, transparent 70%)`,
                }}
              />
            </div>

            <span className="relative z-10">{item.label}</span>
          </Link>
        ))}

        {/* Divider */}
        <div
          className="w-px h-6 sm:h-7 md:h-8 mx-1 sm:mx-2"
          style={{
            background: `linear-gradient(to bottom, transparent, ${getVar(
              "border-divider"
            )}60, transparent)`,
          }}
        />

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          className="
            group relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3
            rounded-xl font-medium text-xs sm:text-sm md:text-base
            transition-all duration-300 ease-out
            hover:scale-105 active:scale-95 hover:shadow-lg
            overflow-hidden
          "
          style={{
            background: `linear-gradient(135deg, ${getVar(
              "button-primary-bg"
            )}, ${getVar("button-primary-bg")}90)`,
            color: getVar("button-primary-text"),
            border: `1px solid ${getVar("border-accent")}40`,
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Background animation */}
          <div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(135deg, ${getVar(
                "accent-primary"
              )}20, ${
                getVar("accent-secondary") || getVar("accent-primary")
              }10)`,
            }}
          />

          {/* Shimmer effect */}
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div
              className="absolute inset-0 rounded-xl animate-pulse"
              style={{
                background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
              }}
            />
          </div>

          <Download
            size={16}
            className="relative z-10 transition-transform duration-300 group-hover:rotate-12"
          />
          <span className="relative z-10 hidden sm:inline">Resume</span>
        </a>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="
            group relative p-2 sm:p-2.5 md:p-3 rounded-xl
            transition-all duration-300 ease-out
            hover:scale-110 active:scale-95
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent
            overflow-hidden
          "
          style={{
            backgroundColor: getVar("button-secondary-bg"),
            color: getVar("foreground"),
            border: `1px solid ${getVar("border-divider")}40`,
          }}
          aria-label={
            theme === "light" ? "Switch to dark mode" : "Switch to light mode"
          }
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle, ${getVar(
                "accent-primary"
              )}15, transparent 70%)`,
            }}
          />

          {/* Icon with rotation animation */}
          <div className="relative z-10 transition-transform duration-500 group-hover:rotate-180">
            {theme === "light" ? (
              <Moon size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
            ) : (
              <Sun size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
            )}
          </div>

          {/* Pulse effect on click */}
          <div
            className="absolute inset-0 rounded-xl opacity-0 group-active:opacity-50 transition-opacity duration-150"
            style={{
              background: `radial-gradient(circle, ${getVar(
                "accent-primary"
              )}30, transparent 70%)`,
            }}
          />
        </button>
      </nav>
    </FloatingNavbar>
  );
};

export default Navbar;
