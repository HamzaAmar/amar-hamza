import type { ProjectType } from "./project.type";

export const taouafiRent: ProjectType = {
  id: "taouafi-rent",
  title: "Taouafi Rent Car",
  img: {
    src: "/assets/project/taouafi/taouafi.png",
    alt: "car-rental project",
  },
  avatar: {
    src: "/assets/project/taouafi/favicon.ico",
    alt: "car-rental project",
  },
  links: [
    {
      site: "https://www.taouafi-rent-car.com/",
      title: "Site",
    },
  ],
  description:
    "Rent luxury cars in Marrakech with Taouafi. SUVs, exotic sports cars & chauffeur service. Airport delivery. Book your premium experience today.",
  technologies: ["React", "Next", "Nest.js", "CSS", "HTML", "Pillar-ui", "Postgres", "Drizzle"],
};
