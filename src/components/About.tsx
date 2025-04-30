"use client";
import { useState } from "react";
import Image from "next/image";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const skills = [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Bootstrap", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "Laravel", level: 90 },
    { name: "PHP", level: 90 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Git", level: 85 },
    { name: "UI/UX Design", level: 80 },
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Lead frontend development for enterprise applications using React and Next.js. Improved site performance by 40% through optimization techniques.",
    },
    {
      title: "Web Developer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      description:
        "Developed responsive websites for various clients using modern JavaScript frameworks and CSS preprocessors.",
    },
    {
      title: "Junior Developer",
      company: "WebCraft Agency",
      period: "2018 - 2020",
      description:
        "Collaborated with design team to implement UI designs for small to medium business websites.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      period: "2015 - 2019",
      description: "Specialized in Web Technologies and Information Systems.",
    },
    {
      degree: "Full Stack Web Development",
      institution: "Tech Academy",
      period: "2018",
      description:
        "6-month intensive program focusing on modern web development technologies.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-medium mb-2">Get to know me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Me
          </h2>
          <div className="mt-4 h-1 w-24 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left column - Image with decorative elements */}
          <div className="lg:w-2/5">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Background decorative element - responsive positioning and sizing */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-full h-full bg-indigo-600 rounded-lg rotate-3"></div>

              {/* Main image container */}
              <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-xl border-4 border-white bg-white z-10">
                {/* Responsive placeholder - shown when image is loading or not available */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                  <span className="text-sm sm:text-base">About Image</span>
                </div>

                {/* Responsive image - uncomment and add your image path */}
                <Image
                  src="/images/about.png"
                  alt="About Me"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Bottom stat box - adjusted for responsive positioning */}
              <div className="absolute -bottom-6 sm:-bottom-10 right-0 sm:-right-10 bg-white p-3 sm:p-4 rounded-lg shadow-lg z-20">
                <div className="text-center">
                  <p className="text-2xl sm:text-4xl font-bold text-indigo-600">
                    2+
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Years Experience
                  </p>
                </div>
              </div>

              {/* Top stat box - adjusted for responsive positioning */}
              <div className="absolute -top-6 sm:-top-10 right-0 sm:-right-10 bg-white p-3 sm:p-4 rounded-lg shadow-lg z-20">
                <div className="text-center">
                  <p className="text-2xl sm:text-4xl font-bold text-indigo-600">
                    20+
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Projects Completed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="lg:w-3/5 mt-16 lg:mt-0">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Web Developer
            </h3>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Hi there! I'm a passionate web developer with a strong focus on
              creating website. I specialize in building modern web applications
              using cutting-edge technologies that are both performant and
              scalable.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              My journey in web development started when I was in college, and
              since then, I've worked on numerous projects ranging from small
              business websites to complex web applications. I believe in
              writing clean, maintainable code and creating designs that are
              both aesthetically pleasing and functional.
            </p>

            {/* Improved Tabs for Mobile */}
            <div className="mb-8">
              {/* Tab Navigation - Improved for mobile */}
              <div className="flex flex-wrap border-b border-gray-200">
                <button
                  className={`py-2 px-3 sm:px-4 font-medium text-xs sm:text-sm flex-1 text-center ${
                    activeTab === "skills"
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("skills")}
                >
                  Skills
                </button>
                <button
                  className={`py-2 px-3 sm:px-4 font-medium text-xs sm:text-sm flex-1 text-center ${
                    activeTab === "experience"
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("experience")}
                >
                  Experience
                </button>
                <button
                  className={`py-2 px-3 sm:px-4 font-medium text-xs sm:text-sm flex-1 text-center ${
                    activeTab === "education"
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("education")}
                >
                  Education
                </button>
              </div>

              {/* Tab content */}
              <div className="py-4">
                {/* Skills Tab - Improved for mobile */}
                {activeTab === "skills" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <div key={index} className="mb-3">
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700 font-medium text-sm sm:text-base">
                            {skill.name}
                          </span>
                          <span className="text-indigo-600 font-medium text-sm sm:text-base">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-indigo-600 h-2 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Experience Tab - Improved for mobile */}
                {activeTab === "experience" && (
                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <div
                        key={index}
                        className="relative pl-6 sm:pl-8 border-l-2 border-indigo-200"
                      >
                        <div className="absolute -left-1.5 sm:-left-2 top-0 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-indigo-600"></div>
                        <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                          {exp.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500 mb-2">
                          <span>{exp.company}</span>
                          <span className="bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full text-xs">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600">
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Education Tab - Improved for mobile */}
                {activeTab === "education" && (
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        className="relative pl-6 sm:pl-8 border-l-2 border-indigo-200"
                      >
                        <div className="absolute -left-1.5 sm:-left-2 top-0 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-indigo-600"></div>
                        <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                          {edu.degree}
                        </h4>
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500 mb-2">
                          <span>{edu.institution}</span>
                          <span className="bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full text-xs">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base text-gray-600">
                          {edu.description}
                        </p>
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
