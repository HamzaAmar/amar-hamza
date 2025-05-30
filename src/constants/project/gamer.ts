import type { ProjectType } from "./project.type";

export const gamer: ProjectType = {
  id: "gamer",
  img: {
    src: "/assets/project/gamers/gamers.jpg",
    alt: "Gamers Player Tournois Website",
  },
  avatar: {
    src: "/assets/project/gamers/gamers-avatar.jpg",
    alt: "Gamers Player Tournois Website",
  },
  title: "Gamer Play",
  links: [
    {
      site: "https://www.figma.com/design/6InQFuZkOrb66Caq3Wfzck/Gamer?node-id=0-1&p=f&t=QfJp7jqMAILMmRPK-0",
      title: "Figma",
    },
  ],
  description:
    "Your Portal to Infinite Gaming Adventures: A Full-Stack JavaScript Gaming Platform. Built with React and Next.js for lightning-fast server-side rendering, this platform is powered by Storybook for seamless development and styled with SCSS for an immersive visual experience.",
  technologies: [
    "React",
    "Next",
    "CSS",
    "HTML",
    "Firebase",
    "mongoDB",
    "Node",
    "Express",
  ],
};
