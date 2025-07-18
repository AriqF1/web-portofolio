import { projects } from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/static/Navbar";
import Footer from "@/static/Footer";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const projectId = params.id;
  const project = projects.find((p) => p.id === projectId);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  if (!project) {
    return {
      title: "Project Not Found | Ariq Farhan Portfolio",
      description: "The project you are looking for does not exist.",
    };
  }

  const metaDescription = project.fullDescription || project.description;

  return {
    title: `${project.title} | Ariq Farhan Projects`,
    description: metaDescription,
    keywords: [
      ...project.tags,
      "Ariq Farhan",
      "portfolio",
      "web development",
      project.title.toLowerCase().replace(/\s/g, ", "),
    ].join(", "),
    openGraph: {
      title: `${project.title} | Ariq Farhan Projects`,
      description: metaDescription,
      url: `${baseUrl}/projects/${project.id}`,
      siteName: "Ariq Farhan's Portfolio",
      images: [
        {
          url: project.image.startsWith("/")
            ? `${baseUrl}${project.image}`
            : project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} - Main Image`,
        },
      ],
      type: "article",
    },
    alternates: {
      canonical: `${baseUrl}/projects/${project.id}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-snippet": -1,
      },
    },
    authors: [{ name: "Ariq Farhan", url: baseUrl }],
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const projectId = params.id;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  const getVar = (varName: string) => `var(--${varName})`;

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundColor: getVar("background"),
        color: getVar("foreground"),
      }}
    >
      <Navbar />
      <main className="flex-grow pt-16 md:pt-24 lg:pt-28">
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </div>
  );
}
