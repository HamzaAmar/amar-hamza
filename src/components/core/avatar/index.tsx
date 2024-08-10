import { classnames } from '@utils/classnames';

import { AvatarProps } from './avatar.type';

export const Avatar = ({
  image,
  title,
  size = 'md',
  color = 'p',
  className,
}: AvatarProps) => {
  const avatarContent = image ? (
    <img className="a-v u_circle" src={image} alt={title} />
  ) : (
    <span className="a-v-flb u_center">{title[0].toUpperCase()}</span>
  );

  const AvatarClassName = classnames(
    `a-v-cnt a-v_${size} u_circle u_center u_${color}`,
    {
      [className!]: Boolean(className),
    },
  );
  return <div {...AvatarClassName}>{avatarContent}</div>;
};
