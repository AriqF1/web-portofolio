"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const textOptions = [
    "Web Developer",
    "Backend Developer",
    "Software Engineer",
  ];
  useTheme();
  const socialLinks = [
    {
      name: "GitHub",
      IconComponent: Github,
      url: "https://github.com/AriqF1",
    },
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
  }, [textOptions.length]);

  const getVar = (varName: string) => `var(--${varName})`;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pb-16 overflow-hidden"
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
                style={{ color: getVar("text-primary") }}
              >
                Ariq Farhan
              </span>
            </h1>

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
                {socialLinks.map((link, index) => {
                  const { IconComponent } = link; // Ambil komponen ikon
                  return (
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
                      <IconComponent className="w-6 h-6" />{" "}
                      {/* Render komponen ikon */}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="hidden md:flex md:w-1/2 justify-center md:justify-end mt-10 md:mt-0 animate-slideInRight">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-2 rounded-full border-4 border-blue-500 opacity-70 animate-spin-slow-reverse"></div>
              <div
                className="group absolute inset-8 rounded-full overflow-hidden border-4 bg-neutral-800 flex items-center justify-center shadow-2xl"
                style={{
                  borderColor: getVar("card-border"),
                  backgroundColor: getVar("card-bg"),
                }}
              >
                <Image
                  src="/images/personal/about-hero.jpg"
                  alt="Ariq Farhan Profile"
                  fill
                  className="object-cover object-center 
                             transition-transform duration-500 ease-in-out 
                             scale-125"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw "
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
