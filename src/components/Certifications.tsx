"use client";

import { useState } from "react";
import { certifications, Certification } from "@/data/certifications";
import { ArrowUpRight } from "lucide-react";

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState<"course" | "webinar">(
    "course",
  );

  const filteredItems = certifications.filter(
    (cert) => cert.category === activeCategory,
  );

  const totalCourses = certifications.filter(
    (c) => c.category === "course",
  ).length;
  const totalWebinars = certifications.filter(
    (c) => c.category === "webinar",
  ).length;

  return (
    <section
      id="certifications"
      className="py-24 md:py-32 relative bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          {/* Left Column: Sticky Header & Filters (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col items-start relative">
            <div className="lg:sticky lg:top-32 w-full">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-[1px] bg-neutral-900 dark:bg-neutral-50" />
                <h2 className="text-sm font-medium tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
                  Credentials
                </h2>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-8">
                Continuous <br className="hidden lg:block" /> Learning.
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-12 max-w-sm">
                A verified log of my professional certifications, courses, and
                technical webinars.
              </p>

              {/* Minimalist Vertical Filter */}
              <div className="flex lg:flex-col gap-4 lg:gap-2">
                <button
                  onClick={() => setActiveCategory("course")}
                  className={`text-left text-lg md:text-xl font-medium transition-all duration-300 flex items-center group ${
                    activeCategory === "course"
                      ? "text-neutral-900 dark:text-white translate-x-2 lg:translate-x-4"
                      : "text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
                  }`}
                >
                  <span
                    className={`h-[2px] bg-neutral-900 dark:bg-white transition-all duration-300 mr-3 ${activeCategory === "course" ? "w-6 lg:w-8" : "w-0 group-hover:w-4"}`}
                  />
                  Courses{" "}
                  <span className="ml-2 text-sm font-mono opacity-50">
                    ({totalCourses})
                  </span>
                </button>

                <button
                  onClick={() => setActiveCategory("webinar")}
                  className={`text-left text-lg md:text-xl font-medium transition-all duration-300 flex items-center group ${
                    activeCategory === "webinar"
                      ? "text-neutral-900 dark:text-white translate-x-2 lg:translate-x-4"
                      : "text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
                  }`}
                >
                  <span
                    className={`h-[2px] bg-neutral-900 dark:bg-white transition-all duration-300 mr-3 ${activeCategory === "webinar" ? "w-6 lg:w-8" : "w-0 group-hover:w-4"}`}
                  />
                  Webinars{" "}
                  <span className="ml-2 text-sm font-mono opacity-50">
                    ({totalWebinars})
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Flowing List (8 Columns) */}
          <div className="lg:col-span-8 lg:mt-16">
            <div className="border-t border-neutral-200 dark:border-neutral-800">
              {filteredItems.map((cert: Certification, index: number) => (
                <a
                  key={index}
                  href={cert.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-b border-neutral-200 dark:border-neutral-800 py-8 lg:py-10 transition-colors hover:bg-white/50 dark:hover:bg-neutral-900/50"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start transition-transform duration-500 group-hover:translate-x-2">
                    {/* Date - Mono font for technical feel */}
                    <div className="md:col-span-3">
                      <span className="text-sm font-mono text-neutral-500 dark:text-neutral-400 block mt-1 uppercase tracking-wider">
                        {cert.date}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-8 flex flex-col">
                      <h4 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                        {cert.name}
                      </h4>
                      <span className="text-base font-medium text-neutral-800 dark:text-neutral-200 mb-3">
                        {cert.issuer}
                      </span>
                      {cert.description && (
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
                          {cert.description}
                        </p>
                      )}
                    </div>

                    {/* Action Icon */}
                    <div className="md:col-span-1 hidden md:flex justify-end items-start">
                      <ArrowUpRight className="w-6 h-6 text-neutral-300 dark:text-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
