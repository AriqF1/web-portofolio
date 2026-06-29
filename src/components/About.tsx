"use client";

import Image from "next/image";
import { ArrowUpRight, Code2, Database } from "lucide-react";
import { skills } from "@/data/skills";

const About = () => {
  const featuredSkillNames = [
    "Laravel",
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "SQL",
    "Git",
  ];

  const topSkills = skills.filter((skill) =>
    featuredSkillNames.includes(skill.name),
  );

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      {/* Subtle asymmetric background blur */}
      <div className="absolute top-1/2 left-0 -ml-32 w-[500px] h-[500px] bg-gradient-to-tr from-neutral-200/40 to-transparent dark:from-neutral-900/40 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          {/* Left Column: Narrative (7 columns) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-px bg-neutral-900 dark:bg-neutral-50" />
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400">
                About Me
              </h2>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 max-w-3xl mb-8">
              Building scalable web applications with focus on backend systems,
              clean architecture, and exceptional user experience.
            </h3>

            <div className="space-y-6 text-base md:text-lg leading-8 text-neutral-600 dark:text-neutral-400 max-w-2xl">
              <p>
                I'm Ariq Farhan, a Full Stack Developer with a strong focus on
                Backend Development. I enjoy building secure, scalable, and
                maintainable web applications while creating modern, responsive,
                and intuitive user interfaces.
              </p>

              <p>
                Through academic projects, professional experience, and
                continuous learning, I've developed applications ranging from
                management systems to AI-powered platforms. One of my notable
                projects is
                <strong> SIAPOL-JATENG</strong>, a web-based emergency reporting
                system that integrates artificial intelligence for report
                analysis and Telegram Bot for real-time officer notifications.
              </p>

              <p>
                My primary tech stack includes Golang, Laravel, React, Next.js,
                TypeScript, PostgreSQL, and MySQL. I enjoy solving complex
                problems, designing scalable system architectures, and
                continuously learning new technologies to build software that
                delivers real value.
              </p>
            </div>

            <div className="mt-12 w-full max-w-2xl border-t border-neutral-200 dark:border-neutral-800 pt-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-neutral-900 dark:text-neutral-100">
                Current & Past Focus
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline group cursor-pointer">
                  <span className="font-medium group-hover:text-neutral-500 transition-colors">
                    Developer & Creator, SIAPOL-JATENG
                  </span>
                  <span className="text-sm text-neutral-400 font-mono">
                    Present
                  </span>
                </div>
                <div className="flex justify-between items-baseline group cursor-pointer">
                  <span className="font-medium group-hover:text-neutral-500 transition-colors">
                    Software Engineering Intern, Polda Jateng
                  </span>
                  <span className="text-sm text-neutral-400 font-mono">
                    Past
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visuals & Stack (5 columns) */}
          <div className="lg:col-span-5 lg:mt-32 relative flex flex-col">
            {/* Image */}
            <div className="relative w-full max-w-sm mx-auto lg:ml-auto aspect-square mb-12">
              <div className="absolute -inset-3 bg-neutral-200/50 dark:bg-neutral-800/30 rounded-2xl rotate-3" />
              <div className="absolute inset-0 rounded-xl overflow-hidden -rotate-1 border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 z-10 shadow-lg">
                <Image
                  src="/images/personal/about.webp"
                  alt="Ariq Farhan working"
                  fill
                  className="object-cover object-center grayscale-[0.5] hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-5 -right-5 z-20 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                <Code2 className="w-6 h-6 text-neutral-400" />
              </div>
            </div>

            {/* Asymmetric Skill Tags with Real Icons */}
            <div className="w-full max-w-sm mx-auto lg:ml-auto pl-4">
              <div className="flex items-center space-x-2 mb-6">
                <Database className="w-4 h-4 text-neutral-400" />
                <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                  Core Stack
                </h4>
              </div>

              <div className="flex flex-wrap gap-3">
                {topSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-center px-4 py-2 text-sm font-medium rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm text-neutral-700 dark:text-neutral-300 hover:-translate-y-1 hover:border-neutral-400 dark:hover:border-neutral-500 transition-all duration-300 cursor-default shadow-sm"
                    >
                      {/* React Icon embedded with its brand color */}
                      <Icon
                        className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                      {skill.name}
                    </div>
                  );
                })}

                {/* Subtle link to full stack details */}
                <a
                  href="#projects" // Ubah ke halaman spesifik jika ada (misal: /stack)
                  className="px-4 py-2 text-sm font-medium rounded-full flex items-center text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  View full stack <ArrowUpRight className="ml-1 w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
