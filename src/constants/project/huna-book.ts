import type { ProjectType } from "./project.type";

export const huna: ProjectType = {
  id: "huna",
  avatar: {
    src: "/assets/project/huna/huna-avatar.png",
    alt: "huna a washing service",
  },
  img: {
    src: "/assets/project/huna/huna.png",
    alt: "huna a washing service",
  },
  title: "Huna Book",
  links: [
    {
      site: "https://www.figma.com/design/kduhu5puDayujBxQ5AiWJC/hunaBook?node-id=0-1&p=f&t=LYkhOimnM0esRku3-0",
      title: "Figma",
    },
  ],
  description:
    "Hunabook is an online booking platform for beauty, wellness, and leisure professionals in Morocco. It allows clients to easily find and book services such as hairdressing, aesthetic treatments, tattoos, and more.",
  technologies: ["Figma", "UI/UX"],
};
