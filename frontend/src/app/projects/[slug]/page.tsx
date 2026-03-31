import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectData, getAllProjectIds } from "@/data/projects-detail";
import ProjectDetailComponent from "@/components/ProjectDetailComponent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Dynamic Project Detail Page
 * Supports /projects/[slug] routing
 */

// Generate static params for all projects
export async function generateStaticParams() {
  return getAllProjectIds().map((id) => ({
    slug: id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectData(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "website",
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectData(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ProjectDetailComponent project={project} />
      </main>
      <Footer />
    </>
  );
}
