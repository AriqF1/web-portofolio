"use client";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

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
  if (!project) return null;

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{project.title}</h2>
        <div className="mt-2 h-1 w-20 bg-indigo-600 rounded-full"></div>
      </div>

      {/* Project Images Carousel */}
      <div className="mb-8 overflow-hidden rounded-lg">
        <div className="relative h-64 md:h-96 bg-gray-200">
          <Image
            src={project.images?.[0] || project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Project Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Overview</h3>
            <p className="text-gray-600">{project.fullDescription || project.description}</p>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h3>
              <ul className="space-y-2 text-gray-600">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block h-6 w-6 rounded-full bg-indigo-100 text-indigo-800 text-center flex-shrink-0 mr-2">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges & Solutions */}
          {(project.challenges || project.solutions) && (
            <div className="mb-8">
              {project.challenges && (
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Challenges</h3>
                  <p className="text-gray-600">{project.challenges}</p>
                </div>
              )}
              {project.solutions && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Solutions</h3>
                  <p className="text-gray-600">{project.solutions}</p>
                </div>
              )}
            </div>
          )}
        </div>

        <div>
          {/* Project Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Project Details</h3>
            <ul className="space-y-3">
              {project.client && (
                <li className="flex items-start">
                  <span className="font-medium text-gray-700 w-24">Client:</span>
                  <span className="text-gray-600">{project.client}</span>
                </li>
              )}
              {project.duration && (
                <li className="flex items-start">
                  <span className="font-medium text-gray-700 w-24">Duration:</span>
                  <span className="text-gray-600">{project.duration}</span>
                </li>
              )}
              {project.role && (
                <li className="flex items-start">
                  <span className="font-medium text-gray-700 w-24">My Role:</span>
                  <span className="text-gray-600">{project.role}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Project Links</h3>
            <div className="space-y-3">
              <a
                href={project.liveUrl}
                className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={18} className="mr-2" />
                View Live Demo
              </a>
              <a
                href={project.githubUrl}
                className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} className="mr-2" />
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;