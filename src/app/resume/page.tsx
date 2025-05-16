import type { Metadata } from "next";

import React from "react";

import Resume from "./_components/resume";

const curriculumVitae = () => {
  return <Resume />;
};

export default curriculumVitae;

export const metadata: Metadata = {
  title: "Resume", // Replace with your company name
  description:
    "Frontend Developer with expertise in React.js, Next.js, Remix.js, HTML, CSS. Creator of Pillar UI.",
};
