import { AvatarProps } from './avatar.type';

const avatar = ({ image, title, size = 'md' }: AvatarProps) => {
  const photo = image ? (
    <img className="avatar image" src={image} alt={title} />
  ) : null;
  const firstLetterFromTitle =
    !image && title ? (
      <span className="avatar">{title[0].toUpperCase()}</span>
    ) : null;

  const root = `avatar avatar--${size}`;
  return (
    <div className={root}>
      {photo}
      {firstLetterFromTitle}
    </div>
  );
};

export default avatar;
