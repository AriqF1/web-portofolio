"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, Project } from "@/data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 relative overflow-hidden bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-[1px] bg-neutral-900 dark:bg-neutral-50" />
            <h2 className="text-sm font-medium tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
              Selected Works
            </h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            Curated projects bridging robust logic and clean design.
          </h3>
        </div>

        {/* Project List - Alternating Asymmetric Layout */}
        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((project: Project, index: number) => {
            // Menentukan posisi gambar: Genap di kiri, Ganjil di kanan
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 group ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual / Image Side */}
                {/* Rasio grid dibuat asimetris: 7/12 vs 5/12 */}
                <div className={`w-full ${isEven ? "lg:w-7/12" : "lg:w-5/12"}`}>
                  <div
                    className={`relative w-full rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 shadow-xl ${
                      isEven ? "aspect-[16/10]" : "aspect-[4/3] lg:aspect-[3/4]"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority={index === 0}
                    />
                    {/* Subtle Overlay on hover */}
                    <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors duration-500" />
                  </div>
                </div>

                {/* Text Content Side */}
                <div
                  className={`w-full flex flex-col justify-center ${isEven ? "lg:w-5/12" : "lg:w-7/12"}`}
                >
                  {/* Tech Stack Tags (Clean text mode) */}
                  <div className="flex flex-wrap gap-2 text-xs font-mono font-medium text-neutral-500 dark:text-neutral-400 mb-6 uppercase tracking-wider">
                    {project.tags.map((tag, i) => (
                      <span key={i}>
                        {tag}{" "}
                        {i !== project.tags.length - 1 && (
                          <span className="mx-1">•</span>
                        )}
                      </span>
                    ))}
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 max-w-xl">
                    {project.description}
                  </p>

                  {/* Action Links */}
                  <div className="flex items-center gap-6">
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-neutral-200 dark:border-neutral-800 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                      Read Case Study
                    </Link>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                        aria-label="View Source on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Link */}
        <div className="mt-32 border-t border-neutral-200 dark:border-neutral-800 pt-10 flex justify-center">
          <a
            href="https://github.com/AriqF1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-flex items-center group"
          >
            Explore more repositories on GitHub
            <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
