"use client";
import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useRouter } from "next/navigation";

interface Project {
  title: string;
  image: string;
  images?: string[];
  fullDescription?: string;
  description?: string;
  features?: string[];
  challenges?: string;
  solutions?: string;
  client?: string;
  duration?: string;
  role?: string;
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectDetail = ({ project }: { project: Project }) => {
  const router = useRouter();
  if (!project) return null;

  const { theme } = useTheme();

  const allImages =
    project.images && project.images.length > 0
      ? project.images
      : [project.image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length
    );
  };

  const getVar = (varName: string) => `var(--${varName})`;

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div
      className="relative p-6 md:p-10 lg:p-8 overflow-hidden"
      style={{
        backgroundColor: getVar("background"),
        color: getVar("foreground"),
      }}
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-4 text-center md:text-center lg:text-left">
          <button
            onClick={handleGoBack}
            className="px-4 py-2 rounded-md font-semibold rounded-xl shadow-lg border transition-colors duration-300 hover:bg-neutral-800 hover:text-neutral-200 cursor-pointer"
            style={{
              backgroundColor: getVar("card-bg"),
              color: getVar("button-primary-text"),
            }}
          >
            ← Go Back
          </button>
        </div>
        <div className="text-center mb-12 md:mb-16">
          <h1
            className="text-2xl md:text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight mb-4"
            style={{ color: getVar("text-primary") }}
          >
            {project.title}
          </h1>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
            style={{ color: getVar("text-secondary") }}
          >
            {project.description}
          </p>
          <div
            className="mt-6 h-2 w-48 mx-auto rounded-full"
            style={{ background: getVar("button-primary-bg") }}
          ></div>
        </div>

        {/* Main Image*/}
        <div
          className="mb-12 relative overflow-hidden rounded-3xl border-2 shadow-2xl group w-full hidden md:block"
          style={{
            borderColor: getVar("border-divider"),
            background: getVar("card-border"),
          }}
        >
          <div className="relative h-72 md:h-[600px] lg:h-[700px]">
            <Image
              src={allImages[currentImageIndex]}
              alt={`${project.title} - Screenshot ${currentImageIndex + 1}`}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="100vw"
              priority
            />
            {allImages.length > 1 && (
              <>
                <button
                  onClick={goToPreviousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black bg-opacity-40 rounded-full text-white hover:bg-opacity-60 transition-opacity opacity-0 group-hover:opacity-100 duration-300 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={goToNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black bg-opacity-40 rounded-full text-white hover:bg-opacity-60 transition-opacity opacity-0 group-hover:opacity-100 duration-300 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight size={28} />
                </button>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 p-2 bg-black bg-opacity-30 rounded-full z-10">
                  {allImages.map((_, index) => (
                    <span
                      key={index}
                      className={`block w-3 h-3 rounded-full bg-white transition-all duration-300 cursor-pointer ${
                        index === currentImageIndex
                          ? "opacity-100 scale-125 shadow-md"
                          : "opacity-50"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    ></span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Content Layout - Asymmetric / Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2
                className="text-3xl font-bold mb-6 pb-3 border-b-2"
                style={{
                  color: getVar("text-primary"),
                  borderColor: getVar("border-divider"),
                }}
              >
                Project Overview
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: getVar("text-secondary") }}
              >
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h2
                  className="text-3xl font-bold mb-6 pb-3 border-b-2"
                  style={{
                    color: getVar("text-primary"),
                    borderColor: getVar("border-divider"),
                  }}
                >
                  Key Features
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start p-5 rounded-xl shadow-lg border"
                      style={{
                        backgroundColor: getVar("card-bg"),
                        borderColor: getVar("card-border"),
                        color: getVar("text-secondary"),
                      }}
                    >
                      <CheckCircle
                        size={24}
                        className="text-emerald-400 flex-shrink-0 mr-4 mt-1"
                      />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges & Solutions */}
            {(project.challenges || project.solutions) && (
              <div className="space-y-8">
                {project.challenges && (
                  <div
                    className="p-8 rounded-xl border-2 shadow-2xl"
                    style={{
                      backgroundColor: getVar("background"),
                      borderColor: getVar("button-secondary-text"),
                    }}
                  >
                    <h3
                      className="text-3xl font-bold mb-4 flex items-center"
                      style={{ color: getVar("button-secondary-text") }}
                    >
                      <Sparkles size={32} className="mr-3 text-purple-400" />
                      Challenges
                    </h3>
                    <p
                      className="text-lg leading-relaxed"
                      style={{ color: getVar("text-secondary") }}
                    >
                      {project.challenges}
                    </p>
                  </div>
                )}
                {project.solutions && (
                  <div
                    className="p-8 rounded-xl border-2 shadow-2xl"
                    style={{
                      backgroundColor: getVar("background"),
                      borderColor: getVar("button-secondary-text-alt"),
                    }}
                  >
                    <h3
                      className="text-3xl font-bold mb-4 flex items-center"
                      style={{ color: getVar("button-secondary-text-alt") }}
                    >
                      <CheckCircle size={32} className="mr-3 text-blue-400" />
                      Solutions
                    </h3>
                    <p
                      className="text-lg leading-relaxed"
                      style={{ color: getVar("text-secondary") }}
                    >
                      {project.solutions}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column (Sticky Sidebar for Project Info & Links) */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 lg:py-8 lg:px-4 space-y-8">
              {" "}
              <div
                className="p-8 rounded-xl shadow-xl border"
                style={{
                  backgroundColor: getVar("card-bg"),
                  borderColor: getVar("border-divider"),
                }}
              >
                <h3
                  className="text-2xl font-bold mb-6 pb-4 border-b"
                  style={{
                    color: getVar("text-primary"),
                    borderColor: getVar("border-divider"),
                  }}
                >
                  Project Details
                </h3>
                <ul className="space-y-4 text-lg">
                  {project.client && (
                    <li className="flex justify-between items-start">
                      <span
                        className="font-semibold"
                        style={{ color: getVar("text-secondary") }}
                      >
                        Client:
                      </span>
                      <span
                        className="text-right flex-1 ml-4"
                        style={{ color: getVar("foreground") }}
                      >
                        {project.client}
                      </span>
                    </li>
                  )}
                  {project.duration && (
                    <li className="flex justify-between items-start">
                      <span
                        className="font-semibold"
                        style={{ color: getVar("text-secondary") }}
                      >
                        Duration:
                      </span>
                      <span
                        className="text-right flex-1 ml-4"
                        style={{ color: getVar("foreground") }}
                      >
                        {project.duration}
                      </span>
                    </li>
                  )}
                  {project.role && (
                    <li className="flex justify-between items-start">
                      <span
                        className="font-semibold"
                        style={{ color: getVar("text-secondary") }}
                      >
                        My Role:
                      </span>
                      <span
                        className="text-right flex-1 ml-4"
                        style={{ color: getVar("foreground") }}
                      >
                        {project.role}
                      </span>
                    </li>
                  )}
                </ul>
              </div>
              {/* Technologies Used */}
              {project.technologies && project.technologies.length > 0 && (
                <div
                  className="p-8 rounded-xl shadow-xl border"
                  style={{
                    backgroundColor: getVar("card-bg"),
                    borderColor: getVar("border-divider"),
                  }}
                >
                  <h3
                    className="text-2xl font-bold mb-6 pb-4 border-b"
                    style={{
                      color: getVar("text-primary"),
                      borderColor: getVar("border-divider"),
                    }}
                  >
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full text-base font-medium border"
                        style={{
                          backgroundColor: getVar("card-border"),
                          color: getVar("text-secondary"),
                          borderColor: getVar("border-divider"),
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {/* Project Links */}
              {(project.liveUrl || project.githubUrl) && (
                <div
                  className="p-8 rounded-xl shadow-xl border"
                  style={{
                    backgroundColor: getVar("card-bg"),
                    borderColor: getVar("border-divider"),
                  }}
                >
                  <h3
                    className="text-2xl font-bold mb-6 pb-4 border-b"
                    style={{
                      color: getVar("text-primary"),
                      borderColor: getVar("border-divider"),
                    }}
                  >
                    Project Links
                  </h3>
                  <div className="space-y-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="flex items-center justify-center w-full px-8 py-4 rounded-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
                        style={{
                          background: getVar("button-primary-bg"),
                          color: "white",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={24} className="mr-3" /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="flex items-center justify-center w-full px-8 py-4 rounded-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
                        style={{
                          backgroundColor: getVar("button-secondary-bg"),
                          color: getVar("foreground"),
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={24} className="mr-3" /> GitHub Repo
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
