import { classnames } from '@utils/classnames';

import { AvatarProps } from './avatar.type';

const avatar = ({
  image,
  title,
  size = 'md',
  color = 'primary',
  className,
}: AvatarProps) => {
  const avatarContent = image ? (
    <img className="avatar" src={image} alt={title} />
  ) : (
    <span className="avatar__fallback u_center">
      {title[0].toUpperCase()}
    </span>
  );

  const AvatarClassName = classnames(
    `avatar-wrapper avatar--${size} u_circle u_${color}`,
    {
      [className!]: Boolean(className),
    },
  );
  return <div {...AvatarClassName}>{avatarContent}</div>;
};

export default avatar;
