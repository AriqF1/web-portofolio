"use client";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { FloatingNavbar } from "@/components/ui/floating-navbar";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const getVar = (varName: string) => `var(--${varName})`;

  return (
    <FloatingNavbar>
      <nav className="flex items-center justify-center gap-5 sm:gap-5 md:gap-5">
        <Link
          href="/#about"
          className="transition-colors duration-200 font-medium hover:opacity-80 text-xs sm:text-sm md:text-base"
        >
          About
        </Link>
        <Link
          href="/#projects"
          className="transition-colors duration-200 font-medium hover:opacity-80 text-xs sm:text-sm md:text-base"
        >
          Projects
        </Link>
        <Link
          href="/#contact"
          className="transition-colors duration-200 font-medium hover:opacity-80 text-xs sm:text-sm md:text-base"
        >
          Contact
        </Link>
        <a
          href="/resume.pdf"
          className="rounded-lg border transition-all duration-200 font-medium hover:opacity-80 
                     px-3 py-1.5 text-xs 
                     sm:px-4 sm:py-2 sm:text-sm 
                     md:text-base"
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
          className="p-2 rounded-full shadow-md transition-colors duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: getVar("button-secondary-bg"),
            color: getVar("foreground"),
          }}
          aria-label={
            theme === "light" ? "Switch to dark mode" : "Switch to light mode"
          }
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </nav>
    </FloatingNavbar>
  );
};

export default Navbar;
