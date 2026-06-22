import type { Metadata } from "next";

import { getProjects } from "api/blog";

import Project from "../_components/project";

const ProjectPage = async () => {
  const projects = getProjects().map(({ metadata }) => metadata);
  return (
    <div className="project-page">
      <Project projects={projects} />
    </div>
  );
};

export default ProjectPage;

export const metadata: Metadata = {
  title: "Projects | Hamza Miloud Amar",
  description:
    "Explore the portfolio of web projects, UI/UX designs, and fullstack applications built with Next.js, React, and modern web technologies.",
};
