"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  // Improved text animation state
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const textOptions = ["Web Developer", "Data Engineer", "UI/UX Designer"];

  // Social media links
  const socialLinks = [
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
  ];

  // Text animation effect
  useEffect(() => {
    const textInterval = setInterval(() => {
      // Fade out current text
      setIsTextVisible(false);

      // Wait for fade out animation, then change text and fade in
      setTimeout(() => {
        setCurrentTextIndex(
          (prevIndex) => (prevIndex + 1) % textOptions.length
        );
        setIsTextVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-indigo-900 text-white py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-indigo-500 rounded-full opacity-10"></div>
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-blue-500 rounded-full opacity-10"></div>
          <div className="absolute top-1/2 left-10 w-24 h-24 bg-purple-500 rounded-full opacity-10"></div>
        </div>
      </div>

      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left column - Text content */}
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-indigo-800 bg-opacity-50 text-sm border border-indigo-400 mb-2">
              Welcome to my portfolio
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
                Ariq Farhan
              </span>
            </h1>

            <div className="h-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl flex items-center">
                I'm a{" "}
                <span
                  className={`text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 inline-block min-w-40 ml-2 transition-opacity duration-500 ${
                    isTextVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {textOptions[currentTextIndex]}
                </span>
              </h2>
            </div>

            <p className="text-lg max-w-lg text-gray-200">
              I create beautiful, responsive websites and data solutions with
              modern technologies to help businesses achieve their goals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-md hover:from-blue-600 hover:to-indigo-700 transition shadow-lg transform hover:scale-105"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-indigo-600 transition shadow-lg transform hover:scale-105"
              >
                See My Work
              </a>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <p className="text-sm text-gray-300 mb-2">Find me on:</p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors duration-300"
                    aria-label={link.name}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d={link.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Profile image */}
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              {/* Decorative elements */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 animate-spin-slow opacity-70"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 opacity-70"></div>

              {/* Profile image container */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-200">
                {/* Replace with your actual profile image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <span className="text-lg font-medium">Profile Image</span>
                  {/* Uncomment and add your image path
                  <Image
                    src="/your-profile-image.jpg"
                    alt="Ariq Farhan"
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-300 mb-2">Scroll down</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
