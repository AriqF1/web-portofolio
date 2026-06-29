"use client";

import Image from "next/image";
import { ArrowRight, Github, Linkedin, Instagram, MapPin } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    { name: "GitHub", IconComponent: Github, url: "https://github.com/AriqF1" },
    {
      name: "LinkedIn",
      IconComponent: Linkedin,
      url: "https://linkedin.com/in/ariqfarhan-dev",
    },
    {
      name: "Instagram",
      IconComponent: Instagram,
      url: "https://instagram.com/farhanariq_",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
      {/* Subtle, asymmetric background element instead of heavy blobs */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-gradient-to-b from-neutral-200/50 to-transparent dark:from-neutral-900/50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          {/* Left Side: Text Content (Dominant - 7 columns) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8 mt-10 lg:mt-0 order-2 lg:order-1">
            {/* Small decorative eyebrow */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[1px] bg-neutral-900 dark:bg-neutral-50" />
              <p className="text-sm font-medium tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                Portfolio
              </p>
            </div>

            {/* Asymmetric Headline */}
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Ariq Farhan. <br />
              <span className="font-light text-neutral-400 dark:text-neutral-500">
                Full-stack Engineer.
              </span>
            </h1>

            {/* Simple, confident subtext */}
            <p className="text-lg md:text-xl max-w-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              I build robust backend architectures with Laravel and craft
              seamless, interactive user interfaces using React and Next.js.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 overflow-hidden transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900"
              >
                <span className="relative z-10 flex items-center">
                  Get in touch
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
              <a
                href="#projects"
                className="text-neutral-500 dark:text-neutral-400 font-medium hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors duration-300 underline-offset-4 hover:underline"
              >
                View selected work
              </a>
            </div>

            {/* Offset Social Links */}
            <div className="flex space-x-6 pt-12 mt-4 border-t border-neutral-200 dark:border-neutral-800 w-3/4 max-w-sm">
              {socialLinks.map((link, index) => {
                const { IconComponent } = link;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 transform hover:-translate-y-1"
                    aria-label={link.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side: Visual Element (Supporting - 5 columns) */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 w-full max-w-md mx-auto lg:ml-auto md:mr-0 pl-0 lg:pl-8">
            <div className="relative w-full aspect-[4/5]">
              {/* Asymmetric background block */}
              <div className="absolute -inset-4 bg-neutral-200 dark:bg-neutral-800/50 rounded-2xl rotate-3 transition-transform duration-700 hover:rotate-6" />

              {/* Main Image Container */}
              <div className="absolute inset-0 rounded-xl overflow-hidden -rotate-2 transition-transform duration-700 hover:-rotate-1 border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 z-10 shadow-xl">
                <Image
                  src="/images/personal/about-hero.webp"
                  alt="Ariq Farhan"
                  fill
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Floating micro-detail card */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 px-5 py-3 rounded-lg shadow-lg rotate-3 flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-neutral-500" />
                <span className="text-xs font-mono font-medium text-neutral-600 dark:text-neutral-300 tracking-tight">
                  Based in Semarang
                </span>
              </div>

              {/* Abstract decorative dots */}
              <div className="absolute -top-8 -right-4 z-0 flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700 mt-4" />
                <div className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
