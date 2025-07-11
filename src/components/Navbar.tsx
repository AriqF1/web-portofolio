"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-neutral-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
                Farhan Ariq
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className="text-neutral-300 hover:text-white transition-colors duration-200 text-lg font-medium"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-neutral-300 hover:text-white transition-colors duration-200 text-lg font-medium"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-neutral-300 hover:text-white transition-colors duration-200 text-lg font-medium"
            >
              Contact
            </Link>
            <a
              href="/resume.pdf"
              className="px-5 py-2 rounded-lg border border-neutral-600 text-neutral-200 hover:bg-neutral-800 hover:border-neutral-500 transition-all duration-200 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
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
        <div className="md:hidden bg-neutral-900 shadow-lg pb-4">
          <div className="px-2 pt-2 space-y-1 sm:px-3">
            <Link
              href="#about"
              className="block px-3 py-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors duration-200 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="block px-3 py-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors duration-200 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors duration-200 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="/resume.pdf"
              className="block px-3 py-2 rounded-md border border-neutral-600 text-neutral-200 hover:bg-neutral-800 hover:border-neutral-500 transition-all duration-200 text-base font-medium mt-2" // Added mt-2 for spacing
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
