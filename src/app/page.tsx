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
        <InteractiveLoader
          onComplete={() => handleLoaderComplete()}
          duration={3000}
        />
      )}

      <div
        className={`min-h-screen bg-neutral-950 text-neutral-300 transition-opacity duration-1000 ease-in ${
          showContent ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Navbar />
        <main>
          <section aria-label="Hero Section">
            <Hero />
          </section>
          <section aria-label="About Section" id="about">
            <About />
          </section>
          <section aria-label="Projects Section" id="projects">
            <Projects />
          </section>
          <section aria-label="Certifications Section" id="certifications">
            <Certifications />
          </section>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
