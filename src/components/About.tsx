"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Briefcase, GraduationCap, Code, ChevronRight, Award, Calendar } from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "React.js", level: 90, category: "frontend" },
    { name: "Next.js", level: 85, category: "frontend" },
    { name: "TypeScript", level: 80, category: "frontend" },
    { name: "Node.js", level: 75, category: "backend" },
    { name: "Tailwind CSS", level: 95, category: "frontend" },
    { name: "Bootstrap", level: 90, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "Laravel", level: 90, category: "backend" },
    { name: "PHP", level: 90, category: "backend" },
    { name: "HTML5", level: 95, category: "frontend" },
    { name: "CSS3", level: 90, category: "frontend" },
    { name: "Git", level: 85, category: "tools" },
    { name: "UI/UX Design", level: 80, category: "design" },
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Lead frontend development for enterprise applications using React and Next.js. Improved site performance by 40% through optimization techniques.",
      achievements: [
        "Led a team of 5 developers to deliver projects on time",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      title: "Web Developer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      description:
        "Developed responsive websites for various clients using modern JavaScript frameworks and CSS preprocessors.",
      achievements: [
        "Created 15+ client websites with responsive designs",
        "Integrated various third-party APIs and payment gateways",
        "Optimized website performance achieving 95+ PageSpeed scores"
      ]
    },
    {
      title: "Junior Developer",
      company: "WebCraft Agency",
      period: "2018 - 2020",
      description:
        "Collaborated with design team to implement UI designs for small to medium business websites.",
      achievements: [
        "Built and maintained WordPress sites for 10+ clients",
        "Assisted in migrating legacy codebase to modern frameworks",
        "Participated in client meetings and requirement gathering"
      ]
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Dian Nuswantoro University",
      period: "2022 - now",
      description: "Specialized in Web Technologies and Information Systems.",
      achievements: [
        "Graduated with First Class Honors",
        "Final year project: Building a learning management system",
        "Active member of the Computer Science Society"
      ]
    },
    {
      degree: "Science High School Diploma",
      institution: "SMA Mardisiswa Semarang",
      period: "2018",
      description:
        "6-month intensive program focusing on modern web development technologies.",
      achievements: [
        "Completed with distinction",
        "Built 5 full-stack projects during the course",
        "Selected for mentorship program with industry professionals"
      ]
    },
  ];

  // Group skills by category for better organization
  const skillCategories = {
    frontend: { name: "Frontend", icon: <Code size={18} /> },
    backend: { name: "Backend", icon: <Code size={18} /> },
    design: { name: "Design", icon: <Code size={18} /> },
    tools: { name: "Tools", icon: <Code size={18} /> }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Know More About Me
          </h2>
          <div className="mt-4 h-1 w-24 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex items-center gap-12 lg:gap-16">
          {/* Right column - Content */}
          <div className={`w-full mt-16 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-10'}`}>
            <div className="flex items-center mb-4">
              <span className="inline-block bg-indigo-100 p-2 rounded-md text-indigo-600 mr-3">
                <Code size={20} />
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Web Developer
              </h3>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed text-base md:text-lg">
              Hi there! I'm a passionate web developer with a strong focus on creating 
              intuitive and high-performance websites. I specialize in building modern 
              web applications using cutting-edge technologies that are both beautiful and scalable.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed text-base md:text-lg">
              My journey in web development started when I was in college, and
              since then, I've worked on numerous projects ranging from small
              business websites to complex web applications. I believe in
              writing clean, maintainable code and creating designs that are
              both aesthetically pleasing and functional.
            </p>

            {/* Improved Tabs */}
            <div className="mb-8">
              {/* Tab Navigation - Enhanced for mobile with sliding indicator */}
              <div className="flex bg-gray-100 p-1 rounded-lg mb-6 shadow-sm max-w-md">
                <button
                  className={`py-2 px-4 rounded-md font-medium text-sm flex items-center justify-center flex-1 transition-all duration-300 ${
                    activeTab === "skills"
                      ? "bg-white text-indigo-700 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab("skills")}
                >
                  <Code size={16} className="mr-1.5" />
                  Skills
                </button>
                <button
                  className={`py-2 px-4 rounded-md font-medium text-sm flex items-center justify-center flex-1 transition-all duration-300 ${
                    activeTab === "experience"
                      ? "bg-white text-indigo-700 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab("experience")}
                >
                  <Briefcase size={16} className="mr-1.5" />
                  Experience
                </button>
                <button
                  className={`py-2 px-4 rounded-md font-medium text-sm flex items-center justify-center flex-1 transition-all duration-300 ${
                    activeTab === "education"
                      ? "bg-white text-indigo-700 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab("education")}
                >
                  <GraduationCap size={16} className="mr-1.5" />
                  Education
                </button>
              </div>

              {/* Tab content with animations */}
              <div className="py-4">
                {/* Skills Tab - Enhanced for mobile and visual appeal */}
                {activeTab === "skills" && (
                  <div className="animate-fadeIn">
                    {/* Skill categories */}
                    {Object.keys(skillCategories).map((category) => (
                      <div key={category} className="mb-6">
                        <div className="flex items-center mb-3">
                          <span className="text-indigo-600 mr-2">
                            {skillCategories[category as keyof typeof skillCategories].icon}
                          </span>
                          <h4 className="text-lg font-semibold text-gray-800">
                            {skillCategories[category as keyof typeof skillCategories].name}
                          </h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {skills
                            .filter((skill) => skill.category === category)
                            .map((skill, index) => (
                              <div key={index} className="mb-3 hover:transform hover:translate-x-1 transition-transform duration-300">
                                <div className="flex justify-between mb-1">
                                  <span className="text-gray-700 font-medium text-sm">
                                    {skill.name}
                                  </span>
                                  <span className="text-indigo-600 font-medium text-sm">
                                    {skill.level}%
                                  </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                                  <div
                                    className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                                  ></div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Experience Tab - Enhanced with timeline and cards */}
                {activeTab === "experience" && (
                  <div className="space-y-6 animate-fadeIn">
                    {experiences.map((exp, index) => (
                      <div
                        key={index}
                        className="relative pl-6 md:pl-8 pb-6 border-l-2 border-indigo-200 hover:border-indigo-600 transition-colors duration-300"
                      >
                        <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-white border-2 border-indigo-600 shadow"></div>
                        
                        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                          <div className="flex items-center mb-2">
                            <Calendar size={16} className="text-indigo-600 mr-2" />
                            <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium">
                              {exp.period}
                            </span>
                          </div>
                          
                          <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                            {exp.title}
                          </h4>
                          <p className="text-indigo-600 font-medium mb-3 text-sm md:text-base">
                            {exp.company}
                          </p>
                          <p className="text-gray-600 mb-4 text-sm md:text-base">
                            {exp.description}
                          </p>
                          
                          <div className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start">
                                <ChevronRight size={16} className="text-indigo-600 mt-1 mr-2 flex-shrink-0" />
                                <p className="text-gray-600 text-sm">{achievement}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Education Tab - Enhanced with timeline and cards */}
                {activeTab === "education" && (
                  <div className="space-y-6 animate-fadeIn">
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        className="relative pl-6 md:pl-8 pb-6 border-l-2 border-indigo-200 hover:border-indigo-600 transition-colors duration-300"
                      >
                        <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-white border-2 border-indigo-600 shadow"></div>
                        
                        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                          <div className="flex items-center mb-2">
                            <Calendar size={16} className="text-indigo-600 mr-2" />
                            <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium">
                              {edu.period}
                            </span>
                          </div>
                          
                          <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                            {edu.degree}
                          </h4>
                          <p className="text-indigo-600 font-medium mb-3 text-sm md:text-base">
                            {edu.institution}
                          </p>
                          <p className="text-gray-600 mb-4 text-sm md:text-base">
                            {edu.description}
                          </p>
                          
                          <div className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start">
                                <ChevronRight size={16} className="text-indigo-600 mt-1 mr-2 flex-shrink-0" />
                                <p className="text-gray-600 text-sm">{achievement}</p>
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