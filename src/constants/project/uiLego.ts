import type { ProjectType } from "./project.type";

export const uiLego: ProjectType = {
  id: "ui_lego",
  img: {
    src: "/assets/project/ui_lego/ui_lego.png",
    alt: "UI Lego Design System Starter",
  },
  avatar: {
    src: "/assets/project/ui_lego/ui_lego_avatar.jpg",
    alt: "UI Lego Design System Starter",
  },
  title: "UI Lego Design System Starter",
  links: [
    {
      site: "https://github.com/HamzaAmar/ui_lego",
      title: "Github",
    },
  ],
  description:
    "UI Lego is a free, open-source UI starter kit built with React, SCSS, and Storybook. It's designed to streamline your development workflow with a collection of pre-built, customizable components that empower you to assemble user interfaces quickly and easily, much like building with Lego blocks.",
  technologies: ["SCSS", "HTML", "React", "Storybook", "Typescript"],
};
