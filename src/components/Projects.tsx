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
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-neutral-200/50 to-transparent dark:from-neutral-900/50 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-24 max-w-3xl">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-[2px] bg-neutral-900 dark:bg-neutral-50" />
            <h2 className="text-sm font-bold tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
              Selected Works
            </h2>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Curated projects bridging <br className="hidden md:block" />
            <span className="text-neutral-400 dark:text-neutral-600">
              robust logic
            </span>{" "}
            and clean design.
          </h3>
        </div>

        {/* Project List - Overlapping Asymmetric Layout */}
        <div className="flex flex-col gap-32 md:gap-40">
          {projects.map((project: Project, index: number) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className={`relative flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-0 group`}
              >
                {/* Visual / Image Side */}
                <div
                  className={`w-full lg:w-7/12 relative z-0 ${isEven ? "lg:pr-8" : "lg:pl-8"}`}
                >
                  <div
                    className={`relative w-full rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02] ${
                      isEven ? "aspect-[16/10]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/0 transition-colors duration-500" />
                  </div>
                </div>

                {/* Text Content Side - Overlapping Card */}
                <div
                  className={`w-full lg:w-6/12 relative z-10 ${
                    isEven ? "lg:-ml-24" : "lg:-mr-24"
                  }`}
                >
                  <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl p-8 md:p-12 rounded-2xl shadow-xl border border-neutral-200/50 dark:border-neutral-800/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 text-xs font-mono font-semibold text-neutral-500 dark:text-neutral-400 mb-6 uppercase tracking-wider">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title & Description */}
                    <h4 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 dark:text-neutral-50">
                      {project.title}
                    </h4>

                    <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Action Links */}
                    <div className="flex items-center gap-6">
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                      >
                        Read Case Study
                      </Link>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-all"
                          aria-label="View Source on GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Link */}
        <div className="mt-40 border-t border-neutral-200 dark:border-neutral-800 pt-10 flex justify-center">
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
