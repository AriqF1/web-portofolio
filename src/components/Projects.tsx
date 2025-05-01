"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, Github, Eye, Info, X } from "lucide-react";
import ProjectDetail from "./ProjectDetail";
import { projects, Project } from "../data/projects";



const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [animateCards, setAnimateCards] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  

  const filters = ["all", "Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project: Project) => project.tags.includes(activeFilter));

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
      setAnimateCards(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Reset animation state when filter changes
  useEffect(() => {
    setAnimateCards(false);
    setTimeout(() => setAnimateCards(true), 50);
  }, [activeFilter]);

  const openProjectDetail = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectDetail = () => {
    setIsModalOpen(false);
    // Wait for animation to complete before setting selected project to null
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            My Projects
          </h2>
          <div className="mt-3 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills and
            experience. Each project reflects my passion for creating intuitive
            and visually appealing web applications.
          </p>
        </div>

        {/* Filter Pills - Scrollable on mobile */}
        <div className="relative mb-10 overflow-x-auto pb-4">
          <div className="flex justify-start md:justify-center space-x-2 min-w-max px-1">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md h-96 animate-pulse">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-300 rounded mb-4 w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 w-5/6"></div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="h-6 bg-gray-200 rounded-full w-16"></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project:Project, index: number) => (
              <div
                key={project.id}
                className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                  animateCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-52 bg-gray-200 relative group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <div className="flex space-x-4">
                      <button
                        onClick={() => openProjectDetail(project)}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 transform transition hover:scale-110"
                        aria-label="View project details"
                      >
                        <Info size={18} />
                      </button>
                      <a
                        href={project.githubUrl}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 transform transition hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View GitHub repository"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => openProjectDetail(project)}
                    className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition-colors text-sm"
                  >
                    View Details
                    <ExternalLink size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Detail Modal */}
        {selectedProject && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
              isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            } transition-opacity duration-300`}
          >
            <div
              className="absolute inset-0 bg-black bg-opacity-75 transition-opacity"
              onClick={closeProjectDetail}
            ></div>
            <div
              className={`relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform ${
                isModalOpen ? "scale-100" : "scale-95"
              } transition-transform duration-300`}
            >
              <button
                onClick={closeProjectDetail}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-800 transition-colors z-10"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <ProjectDetail project={selectedProject} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;