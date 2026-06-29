"use client";

import { useState } from "react";
import InteractiveLoader from "@/components/loading/InteractiveLoader";
import Navbar from "@/static/Navbar";
import Footer from "@/static/Footer/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  return (
    <>
      {isLoading && (
        <InteractiveLoader onComplete={handleLoaderComplete} duration={2800} />
      )}

      <div
        className={`flex flex-col min-h-screen transition-opacity duration-1000 ease-out ${
          showContent
            ? "opacity-100"
            : "opacity-0 h-screen overflow-hidden pointer-events-none"
        }`}
      >
        <Navbar />

        <main className="flex-grow">
          <Hero />
          <About />
          <Projects />
          <Certifications />
        </main>

        <Footer />
      </div>
    </>
  );
}
