import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300">
      <Head>
        <title>Ariq Farhan | Portfolio</title> {/* Enhanced Title */}
        <meta
          name="description"
          content="Ariq Farhan's personal portfolio showcasing web development, data engineering, and UI/UX design projects."
        />{" "}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
