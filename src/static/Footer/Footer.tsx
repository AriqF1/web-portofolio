"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="contact"
      className="bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 pt-32 pb-12 px-6 lg:px-8 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Top Half: Massive Typographic CTA */}
        <div className="mb-32 flex flex-col items-start">
          <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-bold leading-[0.9] tracking-tighter mb-8">
            Let's build <br className="hidden md:block" />
            <span className="text-neutral-400 dark:text-neutral-600 font-light">
              something.
            </span>
          </h2>
          <a
            href="mailto:your.email@example.com"
            className="group flex items-center text-xl md:text-2xl font-medium border-b-2 border-neutral-900 dark:border-neutral-50 pb-2 hover:text-neutral-500 dark:hover:text-neutral-400 hover:border-neutral-500 transition-colors"
          >
            Start a conversation
            <ArrowUpRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Bottom Half: Asymmetric Info & Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-16">
          {/* Left Column (7/12): Identity & Location */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="max-w-sm mb-12 lg:mb-0">
              <h3 className="text-xl font-bold mb-4">Ariq Farhan</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Full-stack Engineer focusing on robust logic and clean digital
                experiences. Based in Semarang, Indonesia.
              </p>
            </div>
          </div>

          {/* Right Column (5/12): Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div className="flex flex-col space-y-4">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">
                Navigation
              </span>
              <Link
                href="#about"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors w-fit"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors w-fit"
              >
                Selected Works
              </Link>
              <Link
                href="#certifications"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors w-fit"
              >
                Credentials
              </Link>
            </div>

            {/* Socials */}
            <div className="flex flex-col space-y-4">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">
                Connect
              </span>
              <a
                href="https://github.com/AriqF1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center group w-fit"
              >
                GitHub{" "}
                <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
              </a>
              <a
                href="https://linkedin.com/in/ariqfarhan-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center group w-fit"
              >
                LinkedIn{" "}
                <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
              </a>
              <a
                href="https://instagram.com/farhanariq_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center group w-fit"
              >
                Instagram{" "}
                <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Copyright & Editorial Scroll to Top */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-500 dark:text-neutral-400">
          <p>&copy; {currentYear} Ariq Farhan. Handcrafted with Next.js.</p>

          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 font-medium hover:text-neutral-900 dark:hover:text-white transition-colors uppercase tracking-wider text-xs"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
