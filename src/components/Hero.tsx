"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textOptions = ["Junior Web Developer", "Designer", "Content Creator"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-yellow-300">Ariq Farhan</span>
            </h1>
            <div className="mb-6 h-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl">
                I'm a{" "}
                <span className="text-yellow-300 inline-block min-w-32">
                  {textOptions[currentTextIndex]}
                </span>
              </h2>
            </div>
            <p className="text-lg mb-8 max-w-lg">
              I create beautiful, responsive websites with modern technologies
              to help businesses achieve their goals.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-indigo-600 transition"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-indigo-600 transition"
              >
                See My Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              {/* Replace with your profile image */}
              <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
                Profile Image
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
