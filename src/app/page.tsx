import type { Metadata } from "next";
import Navbar from "@/static/Navbar";
import Footer from "@/static/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";

export const metadata: Metadata = {
  title: "Ariq Farhan Althaf | Web Developer & Software Engineer Portfolio",
  description:
    "Portfolio profesional Ariq Farhan Althaf - Web Developer, Backend Developer, dan Software Engineer berpengalaman dari Indonesia. Lihat proyek-proyek dan sertifikasi terbaru.",
  alternates: {
    canonical: "https://farhanariq.my.id/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300">
      <header>
        <Navbar />
      </header>

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
  );
}
