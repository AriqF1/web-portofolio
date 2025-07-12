"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getVar = (varName: string) => `var(--${varName})`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "" : "bg-transparent"
      }`}
      style={{
        backgroundColor: isScrolled ? getVar("card-bg") : "transparent",
        borderBottom: isScrolled
          ? `1px solid ${getVar("border-divider")}`
          : "none",
        boxShadow: isScrolled
          ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold">
              <span
                className={`text-transparent bg-clip-text`}
                style={{
                  color: getVar("text-primary"),
                }}
              >
                Farhan Ariq
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#about"
              className={`transition-colors duration-200 text-lg font-medium hover:opacity-80`}
              style={{ color: getVar("text-primary") }}
            >
              About
            </Link>
            <Link
              href="/#projects"
              className={`transition-colors duration-200 text-lg font-medium hover:opacity-80`}
              style={{ color: getVar("text-primary") }}
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className={`transition-colors duration-200 text-lg font-medium hover:opacity-80`}
              style={{ color: getVar("text-primary") }}
            >
              Contact
            </Link>
            <a
              href="/resume.pdf"
              className={`px-5 py-2 rounded-lg border transition-all duration-200 font-medium hover:opacity-80`}
              style={{
                borderColor: getVar("border-divider"),
                color: getVar("text-primary"),
                backgroundColor: getVar("card-border"),
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full shadow-md transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2`}
              style={{
                backgroundColor: getVar("button-secondary-bg"),
                color: getVar("foreground"),
              }}
              aria-label={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full shadow-md transition-colors duration-300 mr-4`}
              style={{
                backgroundColor: getVar("button-secondary-bg"),
                color: getVar("foreground"),
              }}
              aria-label={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2`}
              style={
                {
                  color: getVar("foreground"),
                  "--tw-ring-color": getVar("border-divider"),
                  "--tw-ring-offset-color": isScrolled
                    ? getVar("card-bg")
                    : getVar("background"),
                } as React.CSSProperties
              }
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden shadow-lg pb-4`}
          style={{ backgroundColor: getVar("card-bg") }}
        >
          <div className="px-2 pt-2 space-y-1 sm:px-3">
            <Link
              href="/#about"
              className={`block px-3 py-2 rounded-md transition-colors duration-200 text-base font-medium hover:opacity-80`}
              style={{
                color: getVar("text-primary"),
                backgroundColor: getVar("card-border"),
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#projects"
              className={`block px-3 py-2 rounded-md transition-colors duration-200 text-base font-medium hover:opacity-80`}
              style={{
                color: getVar("text-primary"),
                backgroundColor: getVar("card-border"),
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className={`block px-3 py-2 rounded-md transition-colors duration-200 text-base font-medium hover:opacity-80`}
              style={{
                color: getVar("text-primary"),
                backgroundColor: getVar("card-border"),
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="/resume.pdf"
              className={`block px-3 py-2 rounded-md border transition-all duration-200 text-base font-medium mt-2 hover:opacity-80`}
              style={{
                borderColor: getVar("border-divider"),
                color: getVar("text-primary"),
                backgroundColor: getVar("card-border"),
              }}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
