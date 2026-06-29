"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, Check } from "lucide-react";

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

  // Menggabungkan gambar utama dan galeri tambahan
  const allImages =
    project.images && project.images.length > 0
      ? project.images
      : [project.image];

  return (
    <article className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 pb-32">
      {/* Top Navigation */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 pt-12">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-sm font-medium text-neutral-500 py-12 hover:text-neutral-900 dark:hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </button>
      </div>

      {/* Case Study Header */}
      <header className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-12 md:pt-24 md:pb-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        {/* Minimalist Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          {project.client && (
            <div>
              <span className="block text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">
                Client
              </span>
              <span className="font-medium">{project.client}</span>
            </div>
          )}
          {project.role && (
            <div>
              <span className="block text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">
                Role
              </span>
              <span className="font-medium">{project.role}</span>
            </div>
          )}
          {project.duration && (
            <div>
              <span className="block text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">
                Timeline
              </span>
              <span className="font-medium">{project.duration}</span>
            </div>
          )}
        </div>
      </header>

      {/* Main Hero Image */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 shadow-2xl">
          <Image
            src={allImages[0]}
            alt={`${project.title} Hero`}
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* Narrative Section (Asymmetric Split) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          {/* Left Column: Sticky Sidebar (4/12) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="lg:sticky lg:top-32 space-y-12">
              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-4">
                    Technologies
                  </h3>
                  <ul className="flex flex-col space-y-2">
                    {project.technologies.map((tech, index) => (
                      <li
                        key={index}
                        className="text-lg font-medium text-neutral-800 dark:text-neutral-200"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Links */}
              {(project.liveUrl || project.githubUrl) && (
                <div>
                  <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-4">
                    Links
                  </h3>
                  <div className="flex flex-col space-y-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-lg font-medium hover:text-neutral-500 transition-colors group"
                      >
                        Visit Live Site
                        <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-lg font-medium hover:text-neutral-500 transition-colors group"
                      >
                        Source Code
                        <Github className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Narrative Content (8/12) */}
          <div className="lg:col-span-8 lg:pl-10 flex flex-col space-y-20">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </section>

            {/* Challenges & Solutions */}
            {(project.challenges || project.solutions) && (
              <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {project.challenges && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {project.challenges}
                    </p>
                  </div>
                )}
                {project.solutions && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {project.solutions}
                    </p>
                  </div>
                )}
              </section>
            )}

            {/* Features (Clean List instead of Cards) */}
            {project.features && project.features.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start text-neutral-600 dark:text-neutral-300"
                    >
                      <Check className="w-5 h-5 mr-3 mt-1 text-neutral-900 dark:text-white flex-shrink-0" />
                      <span className="text-lg leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>

      {/* Extended Gallery (Stacked Editorial Images) */}
      {allImages.length > 1 && (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-32 space-y-16 lg:space-y-32">
          {allImages.slice(1).map((img, index) => (
            <div
              key={index}
              className={`relative w-full rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 shadow-xl ${
                index % 2 === 0
                  ? "aspect-video lg:w-10/12 ml-auto"
                  : "aspect-video lg:w-10/12 mr-auto"
              }`}
            >
              <Image
                src={img}
                alt={`${project.title} Detail ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            </div>
          ))}
        </div>
      )}
    </article>
  );
};

export default ProjectDetail;
