import { c } from '@utils/classnames';

import type { AvatarProps } from './avatar.type';

export const Avatar = ({
  image,
  title,
  size = '4',
  color = 'p',
  className,
  ...rest
}: AvatarProps) => {
  const avatarContent = image ? (
    <img src={image} alt={title} {...rest} />
  ) : (
    <span className="Fc">{title[0].toUpperCase()}</span>
  );

  const AvatarClassName = c(`av-C av-${size} C Fc C${color}`, {
    [className!]: Boolean(className),
  });
  return <div {...AvatarClassName}>{avatarContent}</div>;
};
