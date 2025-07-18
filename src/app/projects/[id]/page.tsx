import { projects } from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";
import { notFound } from "next/navigation";
import Navbar from "@/static/Navbar";
import Footer from "@/static/Footer";

interface ProjectPageParams {
  id: string;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<ProjectPageParams>;
}) {
  const { id: projectId } = await params;
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
