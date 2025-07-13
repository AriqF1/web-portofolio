"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Briefcase,
  GraduationCap,
  Code,
  ChevronRight,
  Award,
  Calendar,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { skills, Skill } from "@/data/skills"; 
import { education, Education } from "@/data/educations";
import { useTheme } from "@/context/ThemeContext";


const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [isVisible, setIsVisible] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const section = document.getElementById("about");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const getVar = (varName: string) => `var(--${varName})`;

  const skillCategories = {
    frontend: { name: "Frontend", icon: <Code size={20} /> },
    backend: { name: "Backend", icon: <Code size={20} /> },
    tools: { name: "Tools", icon: <Code size={20} /> },
  };

  return (
    <section
      id="about"
      className="py-8 md:py-12 relative overflow-hidden"
      style={{
        backgroundColor: getVar("background"),
        color: getVar("foreground"),
      }}
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 border shadow-md"
            style={{
              background: getVar("card-border"),
              borderColor: getVar("border-divider"),
              color: getVar("text-secondary"),
            }}
          >
            🚀 About Me
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight"
            style={{ color: getVar("text-primary") }}
          >
            Dive Deeper Into My{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ color: getVar("button-primary-bg") }}
            >
              Journey
            </span>
          </h2>
          <p
            className="mt-4 text-lg max-w-2xl mx-auto"
            style={{ color: getVar("text-secondary") }}
          >
            Discover my passion, expertise, and educational background that
            shape my development journey.
          </p>
          <div
            className="mt-6 h-1.5 w-32 mx-auto rounded-full"
            style={{ background: getVar("button-primary-bg") }}
          ></div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-12 lg:gap-16">
          <div
            className={`w-full lg:w-1/3 flex flex-col items-center lg:items-start transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Profile Image */}
            <div
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 shadow-2xl flex-shrink-0"
              style={{ borderColor: getVar("card-border") }}
            >
              <Image
                src="/images/about.png"
                alt="Ariq Farhan Profile"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div
                className="absolute inset-0 rounded-full ring-4 ring-offset-4 animate-pulse-fade"
                style={
                  {
                    "--tw-ring-color": getVar("button-primary-bg"),
                    "--tw-ring-offset-color": getVar("background"),
                  } as React.CSSProperties
                }
              ></div>
            </div>

            {/* Stats Card */}
            <div
              className="mt-12 w-full max-w-xs md:max-w-md rounded-xl p-6 shadow-lg border flex flex-col gap-4"
              style={{
                backgroundColor: getVar("card-bg"),
                borderColor: getVar("border-divider"),
              }}
            >
              <div
                className="flex items-center"
                style={{ color: getVar("text-primary") }}
              >
                <Briefcase size={24} className="text-blue-400 mr-3" />{" "}
                <div>
                  <h4 className="font-semibold text-lg">
                    5+ Projects Completed
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: getVar("text-secondary") }}
                  >
                    Successfully delivered diverse web solutions.
                  </p>
                </div>
              </div>
              <div
                className="flex items-center"
                style={{ color: getVar("text-primary") }}
              >
                <Award size={24} className="text-yellow-400 mr-3" />{" "}
                <div>
                  <h4 className="font-semibold text-lg">
                    2 Years of Experience
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: getVar("text-secondary") }}
                  >
                    Passionately developing web solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - About Text & Tabs */}
          <div
            className={`w-full lg:w-2/3 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="flex items-center mb-6">
              <span
                className="inline-block p-3 rounded-xl mr-4 border shadow-md"
                style={{
                  backgroundColor: getVar("card-border"),
                  color: getVar("text-secondary"),
                  borderColor: getVar("border-divider"),
                }}
              >
                <Code size={24} className="text-blue-300" />{" "}
              </span>
              <h3
                className="text-3xl md:text-4xl font-extrabold leading-tight"
                style={{ color: getVar("text-primary") }}
              >
                Web{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ color: getVar("button-secondary-text") }}
                >
                  Developer
                </span>
              </h3>
            </div>

            <p
              className="text-lg mb-6 leading-relaxed max-w-full lg:max-w-none"
              style={{ color: getVar("text-secondary") }}
            >
              Hi there! I'm a passionate{" "}
              <strong style={{ color: getVar("text-primary") }}>
                web developer
              </strong>{" "}
              with a strong focus on creating intuitive and high-performance
              websites. I specialize in building modern web applications using
              cutting-edge technologies that are both{" "}
              <strong style={{ color: getVar("text-primary") }}>
                beautiful and scalable.
              </strong>
            </p>

            <p
              className="text-lg mb-8 leading-relaxed max-w-full lg:max-w-none"
              style={{ color: getVar("text-secondary") }}
            >
              My journey in web development started when I was in college, and
              since then, I've worked on numerous projects ranging from small
              business websites to complex web applications. I believe in
              writing{" "}
              <strong style={{ color: getVar("text-primary") }}>
                clean, maintainable code
              </strong>{" "}
              and crafting user experiences that are both{" "}
              <strong style={{ color: getVar("text-primary") }}>
                aesthetically pleasing and functional.
              </strong>
            </p>

            {/* Tab Navigation */}
            <div className="mb-8">
              <div
                className="flex p-1 rounded-xl mb-8 shadow-xl border max-w-full lg:max-w-xl mx-auto lg:mx-0"
                style={{
                  backgroundColor: getVar("card-border"),
                  borderColor: getVar("border-divider"),
                }}
              >
                <button
                  className={`py-3 px-6 rounded-lg font-semibold text-base flex items-center justify-center flex-1 transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                    activeTab === "skills" ? "shadow-lg" : ""
                  }`}
                  style={{
                    background:
                      activeTab === "skills"
                        ? getVar("button-primary-bg")
                        : "transparent",
                    color:
                      activeTab === "skills"
                        ? "white"
                        : getVar("text-secondary"),
                  }}
                  onClick={() => setActiveTab("skills")}
                >
                  <Code size={18} className="mr-2" />
                  My Skills
                </button>
                <button
                  className={`py-3 px-6 rounded-lg font-semibold text-base flex items-center justify-center flex-1 transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                    activeTab === "education" ? "shadow-lg" : ""
                  }`}
                  style={{
                    background:
                      activeTab === "education"
                        ? getVar("button-primary-bg")
                        : "transparent",
                    color:
                      activeTab === "education"
                        ? "white"
                        : getVar("text-secondary"),
                  }}
                  onClick={() => setActiveTab("education")}
                >
                  <GraduationCap size={18} className="mr-2" />
                  Education
                </button>
              </div>

              <div className="py-4">
                {/* Skills Tab Content */}
                {activeTab === "skills" && (
                  <div className="animate-fadeIn transition-opacity duration-500 delay-200">
                    {Object.keys(skillCategories).map((category) => (
                      <div
                        key={category}
                        className="mb-8 p-4 rounded-lg border shadow-lg"
                        style={{
                          backgroundColor: getVar("card-bg"),
                          borderColor: getVar("border-divider"),
                        }}
                      >
                        <div className="flex items-center mb-4">
                          <span
                            className="mr-3"
                            style={{ color: getVar("button-secondary-text") }}
                          >
                            {
                              skillCategories[
                                category as keyof typeof skillCategories
                              ].icon
                            }
                          </span>
                          <h4
                            className="text-xl font-bold"
                            style={{ color: getVar("text-primary") }}
                          >
                            {
                              skillCategories[
                                category as keyof typeof skillCategories
                              ].name
                            }
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {skills
                            .filter((skill) => skill.category === category)
                            .map((skill: Skill, index) => (
                              <span
                                key={index}
                                className="px-4 py-2 rounded-full text-base font-medium border shadow-sm transition-all duration-300 transform hover:scale-105"
                                style={{
                                  backgroundColor: getVar("card-border"),
                                  color: getVar("text-primary"),
                                  borderColor: getVar("border-divider"),
                                }}
                              >
                                {skill.name}
                              </span>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Education Tab Content */}
                {activeTab === "education" && (
                  <div className="space-y-10 animate-fadeIn transition-opacity duration-500 delay-200">
                    {education.map((edu: Education, index) => (
                      <div
                        key={index}
                        className="relative pl-8 md:pl-10 pb-10 last:pb-0 group"
                      >
                        <div
                          className="absolute left-0 top-0 w-5 h-5 rounded-full border-2 shadow-lg z-10 transform group-hover:scale-125 transition-transform duration-300"
                          style={{
                            background: getVar("button-primary-bg"),
                            borderColor: getVar("background"),
                          }}
                        ></div>
                        {index < education.length - 1 && (
                          <div
                            className="absolute left-2 top-0 bottom-0 w-0.5 ml-0.5"
                            style={{
                              backgroundColor: getVar("border-divider"),
                            }}
                          ></div>
                        )}

                        {/* Education Card */}
                        <div
                          className="p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border relative z-10 transform group-hover:translate-y-[-5px] transition-transform duration-300 ease-out"
                          style={{
                            backgroundColor: getVar("card-bg"),
                            borderColor: getVar("border-divider"),
                          }}
                        >
                          <div className="flex items-center mb-3">
                            <Calendar
                              size={18}
                              className="mr-2"
                              style={{ color: getVar("text-secondary") }}
                            />
                            <span
                              className="px-3 py-1 rounded-full text-xs font-medium border shadow-inner"
                              style={{
                                backgroundColor: getVar("card-border"),
                                color: getVar("text-secondary"),
                                borderColor: getVar("border-divider"),
                              }}
                            >
                              {edu.period}
                            </span>
                          </div>

                          <h4
                            className="text-xl md:text-2xl font-extrabold mb-2"
                            style={{ color: getVar("text-primary") }}
                          >
                            {edu.degree}
                          </h4>
                          <p
                            className="font-semibold mb-4 text-base md:text-lg"
                            style={{
                              color: getVar("button-secondary-text-alt"),
                            }}
                          >
                            {edu.institution}
                          </p>
                          <p
                            className="mb-4 text-base md:text-lg leading-relaxed"
                            style={{ color: getVar("text-secondary") }}
                          >
                            {edu.description}
                          </p>

                          <div className="space-y-3">
                            {edu.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start">
                                <ChevronRight
                                  size={18}
                                  className="mt-1 mr-2 flex-shrink-0"
                                  style={{
                                    color: getVar("button-secondary-text-alt"),
                                  }}
                                />
                                <p
                                  className="text-base"
                                  style={{ color: getVar("text-secondary") }}
                                >
                                  {achievement}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;