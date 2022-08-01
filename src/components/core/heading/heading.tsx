import { classnames } from '@utils/classnames';
import React, { CSSProperties } from 'react';

import type { HeadingProps } from './heading.type';

const heading = (props: HeadingProps) => {
  const {
    as: Comp = 'h1',
    size = 'md',
    color = 'primary',
    variant = 'normal',
    align = 'center',
    children,
    className,
  } = props;
  let multiline;
  if (props.truncate === 'multiline') {
    multiline = props.multiline;
  }

  const classname = classnames(
    `heading heading__${size} heading__${align} heading__${variant} heading__${color}`,
    { [className!]: Boolean(className) },
  );

  return (
    <Comp
      {...classname}
      style={{ '--multi-line': multiline } as CSSProperties}
    >
      {children}
    </Comp>
  );
};

export default heading;
