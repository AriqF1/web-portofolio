"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  Eye,
  Info,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { projects, Project } from "@/data/projects";
import { useTheme } from "@/context/ThemeContext";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [animateCards, setAnimateCards] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { theme } = useTheme();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 3;

  const filters = [
    "all",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Firebase",
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project: Project) =>
          project.tags.includes(activeFilter)
        );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProjects.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setAnimateCards(true);
    }, 500);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!document.body.getAttribute("data-projects-section-visible")) {
              document.body.setAttribute(
                "data-projects-section-visible",
                "true"
              );
            }
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const section = document.getElementById("projects");
    if (section) {
      observer.observe(section);
    }

    return () => {
      clearTimeout(timer);
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    setAnimateCards(false);
    const resetTimer = setTimeout(() => setAnimateCards(true), 50);
    return () => clearTimeout(resetTimer);
  }, [activeFilter]);

  const getVar = (varName: string) => `var(--${varName})`;

  return (
    <section
      id="projects"
      className="py-8 md:py-12 relative overflow-hidden"
      style={{
        backgroundColor: getVar("background"),
        color: getVar("foreground"),
      }}
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute bottom-1/3 -right-1/4 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2500"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 border shadow-md"
            style={{
              background: getVar("button-primary-bg"),
              borderColor: getVar("border-divider"),
              color: "white",
            }}
          >
            ✨ My Work
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight"
            style={{ color: getVar("text-primary") }}
          >
            Explore My Latest{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ color: getVar("button-primary-bg") }}
            >
              Projects
            </span>
          </h2>
          <p
            className="mt-4 text-lg max-w-2xl mx-auto"
            style={{ color: getVar("text-secondary") }}
          >
            Here are some of my recent projects that showcase my skills and
            experience. Each project reflects my passion for creating
            intuitive and visually appealing web applications.
          </p>
          <div
            className="mt-6 h-1.5 w-32 mx-auto rounded-full"
            style={{ background: getVar("button-primary-bg") }}
          ></div>
        </div>

        {/* Filter Pills */}
        <div className="relative mb-10 overflow-x-auto pb-4 custom-scrollbar">
          <div className="flex justify-start md:justify-center space-x-3 min-w-max px-1">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-base font-medium transition-all duration-300 whitespace-nowrap
                  ${
                    activeFilter === filter
                      ? "shadow-md transform scale-105"
                      : ""
                  }`}
                style={{
                  background:
                    activeFilter === filter
                      ? getVar("button-primary-bg")
                      : getVar("card-border"),
                  color:
                    activeFilter === filter
                      ? "white"
                      : getVar("text-secondary"),
                  border: `1px solid ${getVar("border-divider")}`,
                }}
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
              <div
                key={i}
                className={`rounded-xl overflow-hidden shadow-xl h-96 animate-pulse border`}
                style={{
                  backgroundColor: getVar("card-border"),
                  borderColor: getVar("border-divider"),
                }}
              >
                <div
                  style={{ backgroundColor: getVar("border-divider") }}
                  className="h-48"
                ></div>
                <div className="p-6">
                  <div
                    style={{ backgroundColor: getVar("text-secondary") }}
                    className="h-6 rounded mb-4 w-3/4"
                  ></div>
                  <div
                    style={{ backgroundColor: getVar("border-divider") }}
                    className="h-4 rounded mb-2 w-full"
                  ></div>
                  <div
                    style={{ backgroundColor: getVar("border-divider") }}
                    className="h-4 rounded mb-4 w-5/6"
                  ></div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[1, 2, 3].map((j) => (
                      <div
                        key={j}
                        style={{ backgroundColor: getVar("border-divider") }}
                        className="h-6 rounded-full w-16"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {currentItems.length > 0 ? (
                currentItems.map((project: Project, index: number) => (
                  <div
                    key={project.id}
                    className={`rounded-xl overflow-hidden shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl-lg flex flex-col`}
                    style={{
                      backgroundColor: getVar("card-bg"),
                      borderColor: getVar("card-border"),
                      border: `1px solid ${getVar("card-border")}`,
                      opacity: animateCards ? 1 : 0,
                      transform: animateCards
                        ? "translateY(0)"
                        : "translateY(32px)",
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <div
                      style={{ backgroundColor: getVar("card-border") }}
                      className="h-52 relative overflow-hidden group"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 3}
                      />
                      <div className="lg: absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                        <div className="flex space-x-4">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors tooltip"
                              data-tooltip="GitHub Repo"
                              aria-label="GitHub Repository"
                            >
                              <Github size={20} />
                            </a>
                          )}
                          <Link
                            href={`/projects/${project.id}`}
                            className="p-3 bg-neutral-700 text-white rounded-full hover:bg-neutral-600 transition-colors tooltip"
                            data-tooltip="More Details"
                            aria-label="More Details"
                          >
                            <Eye size={20} />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: getVar("text-primary") }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="mb-4 text-sm md:text-base line-clamp-2"
                        style={{ color: getVar("text-secondary") }}
                      >
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag: string, tagIndex: number) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 rounded-full text-xs font-medium border"
                            style={{
                              backgroundColor: getVar("card-border"),
                              color: getVar("text-secondary"),
                              borderColor: getVar("border-divider"),
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* {button} */}
                      <div
                        className="flex flex-wrap gap-3 mt-auto pt-4 lg:hidden"
                        style={{
                          borderTop: `1px solid ${getVar("border-divider")}`,
                        }}
                      >
                        <a
                          href={`/projects/${project.id}`}
                          className="flex-1 px-4 py-2 rounded-lg font-semibold text-sm shadow-md transition-colors duration-300 items-center justify-center flex cursor-pointer"
                          style={{
                            backgroundColor: getVar("button-secondary-bg"),
                            color: getVar("button-secondary-text"),
                          }}
                        >
                          <Info size={16} className="mr-2" /> Detail
                        </a>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-2 rounded-lg font-semibold text-sm shadow-md transition-colors duration-300 items-center justify-center flex cursor-pointer"
                            style={{
                              backgroundColor: getVar("button-secondary-bg"),
                              color: getVar("button-secondary-text-alt"),
                            }}
                          >
                            <Github size={16} className="mr-2" /> GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div
                  className="md:col-span-3 text-center py-10"
                  style={{ color: getVar("text-secondary") }}
                >
                  No projects found for the selected filter.
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-16 space-x-2">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="cursor-pointer p-3 rounded-full shadow-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: getVar("button-secondary-bg"),
                    color: getVar("foreground"),
                  }}
                  aria-label="Previous page"
                >
                  <ChevronLeft size={20} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className="cursor-pointer px-4 py-2 rounded-full font-semibold transition-colors duration-300 shadow-md "
                    style={{
                      background:
                        currentPage === i + 1
                          ? getVar("button-primary-bg")
                          : getVar("button-secondary-bg"),
                      color:
                        currentPage === i + 1 ? "white" : getVar("foreground"),
                    }}
                    aria-label={`Page ${i + 1}`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className="cursor-pointer p-3 rounded-full shadow-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: getVar("button-secondary-bg"),
                    color: getVar("foreground"),
                  }}
                  aria-label="Next page"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
