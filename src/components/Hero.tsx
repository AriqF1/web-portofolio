"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const textOptions = [
    "Web Developer",
    "Backend Developer",
    "Software Engineer",
  ];

  const { theme } = useTheme();

  interface SocialLink {
    name: string;
    icon: string;
    url: string;
  }
  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
      url: "https://github.com/AriqF1",
    },
    {
      name: "LinkedIn",
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      url: "https://linkedin.com/in/ariqfarhan-dev",
    },
    {
      name: "Instagram",
      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.428.415a4.92 4.92 0 011.675 1.093 4.92 4.92 0 011.093 1.675c.175.458.359 1.258.415 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.415 2.428a4.902 4.902 0 01-1.093 1.675 4.902 4.902 0 01-1.675 1.093c-.458.175-1.258.359-2.428.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.428-.415a4.92 4.92 0 01-1.675-1.093 4.92 4.92 0 01-1.093-1.675c-.175-.458-.359-1.258-.415-2.428C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.415-2.428a4.902 4.902 0 011.093-1.675 4.902 4.902 0 011.675-1.093c.458-.175 1.258-.359 2.428-.415C8.416 2.175 8.796 2.163 12 2.163zm0 1.837c-3.162 0-3.522.012-4.767.069-1.02.048-1.574.218-1.94.362-.49.191-.838.42-1.203.785a3.093 3.093 0 00-.785 1.203c-.144.366-.314.92-.362 1.94-.057 1.245-.069 1.605-.069 4.767s.012 3.522.069 4.767c.048 1.02.218 1.574.362 1.94.191.49.42.838.785 1.203.365.365.713.594 1.203.785.366.144.92.314 1.94.362 1.245.057 1.605.069 4.767.069s3.522-.012 4.767-.069c1.02-.048 1.574-.218 1.94-.362a3.093 3.093 0 001.203-.785 3.093 3.093 0 00.785-1.203c.144-.366.314-.92.362-1.94-1.266.057-1.646.069-4.767.069zm0 3.838a5.999 5.999 0 100 11.998 5.999 5.999 0 000-11.998zm0 1.838a4.161 4.161 0 110 8.322 4.161 4.161 0 010-8.322zm6.406-1.044a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z",
      url: "https://instagram.com/farhanariq_",
    },
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setIsTextVisible(false);

      setTimeout(() => {
        setCurrentTextIndex(
          (prevIndex) => (prevIndex + 1) % textOptions.length
        );
        setIsTextVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(textInterval);
  }, []);

  const getVar = (varName: string) => `var(--${varName})`;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-16 md:py-16 overflow-hidden"
      style={{
        backgroundColor: getVar("background"),
        color: getVar("foreground"),
      }}
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">
          <div className="md:w-1/2 space-y-6 text-center md:text-left animate-slideInLeft">
            <div
              className="inline-flex items-center px-5 py-2 rounded-full text-sm border shadow-lg transform hover:scale-105 transition-transform duration-300"
              style={{
                background: getVar("card-border"),
                borderColor: getVar("border-divider"),
                color: getVar("text-primary"),
              }}
            >
              <Sparkles className="h-4 w-4 mr-2 text-yellow-300" />
              Welcome to my portfolio!
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Hi, I&apos;m{" "}
              <span
                className={`text-transparent bg-clip-text drop-shadow-xl`}
                style={{
                  color: getVar("text-primary"),
                }}
              >
                Ariq Farhan
              </span>
            </h1>

            {/* Dynamic Role Text */}
            <div className="h-16 flex justify-center md:justify-start items-center">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl flex items-center font-bold"
                style={{ color: getVar("text-primary") }}
              >
                A{" "}
                <span
                  className={`inline-block ml-3 min-w-[12rem] text-left transition-opacity duration-700 ease-in-out ${
                    isTextVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    backgroundImage: getVar("button-primary-bg"),
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))",
                  }}
                >
                  {textOptions[currentTextIndex]}
                </span>
              </h2>
            </div>

            {/* Description */}
            <p
              className="text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed"
              style={{ color: getVar("text-secondary") }}
            >
              I specialize in creating{" "}
              <strong style={{ color: getVar("text-primary") }}>
                captivating, user-friendly websites
              </strong>{" "}
              and robust backend systems, transforming ideas into seamless
              digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-6">
              <a
                href="#contact"
                className="px-10 py-3 font-bold rounded-lg shadow-xl hover:bg-neutral-200 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-40 flex items-center group"
                style={
                  {
                    backgroundColor: getVar("button-secondary-bg"),
                    color: getVar("text-primary"),
                    "--tw-ring-color": getVar("border-divider"),
                  } as React.CSSProperties
                }
              >
                Contact Me{" "}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="px-10 py-3 border-2 font-semibold rounded-lg transition-all duration-300 shadow-md transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-40 flex items-center"
                style={
                  {
                    borderColor: getVar("border-divider"),
                    color: getVar("text-primary"),
                    backgroundColor: getVar("button-secondary-bg"),
                    "--tw-ring-color": getVar("border-divider"),
                  } as React.CSSProperties
                }
              >
                See My Work
              </a>
            </div>

            {/* Social Media */}
            <div
              className="pt-10 mt-10"
              style={{ borderTop: `1px solid ${getVar("border-divider")}` }}
            >
              <p
                className="text-base mb-4 font-semibold"
                style={{ color: getVar("text-secondary") }}
              >
                Connect with me:
              </p>
              <div className="flex space-x-5 justify-center md:justify-start">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 transform hover:scale-110"
                    style={
                      {
                        backgroundColor: getVar("card-border"),
                        color: getVar("foreground"),
                        "--tw-ring-color": getVar("border-divider"),
                      } as React.CSSProperties
                    }
                    aria-label={link.name}
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d={link.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0 animate-slideInRight">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-2 rounded-full border-4 border-blue-500 opacity-70 animate-spin-slow-reverse"></div>

              {/* Profile Image Container */}
              <div
                className="absolute inset-8 rounded-full overflow-hidden border-4 bg-neutral-800 flex items-center justify-center shadow-2xl"
                style={{
                  borderColor: getVar("card-border"),
                  backgroundColor: getVar("card-bg"),
                }}
              >
                <Image
                  src="/images/personal/about-hero.png"
                  alt="Ariq Farhan Profile"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
