import type { TagProps } from './tag.type';

const tag = ({ title, size = 'md', color = 'primary' }: TagProps) => {
  const rootStyle = `tag tag--${color} tag--${size} u_${color}`;
  return <div className={rootStyle}>{title}</div>;
};

export default tag;
