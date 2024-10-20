import type { TagProps } from './tag.type';

export const Tag = ({ title, color = 'p' }: TagProps) => {
  const rootStyle = `tag C${color}`;
  return <div className={rootStyle}>{title}</div>;
};
