import type { TagProps } from "./tag.type";

export const Tag = ({ title, color = "p" }: TagProps) => {
  return <div className={`tag C${color}`}>{title}</div>;
};
