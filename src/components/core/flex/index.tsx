/* eslint-disable @typescript-eslint/naming-convention */
import { classnames } from '@utils/classnames';
import React, { forwardRef } from 'react';
import type { ForwardRefComponent } from '@type/polymorphic.type';

import type { FlexProps } from './flex.type';

export const Flex = forwardRef((props, forwardedRef) => {
  const {
    children,
    justify,
    items,
    flex,
    direction,
    wrap,
    inline,
    as: Tag = 'div',
    gap,
    className,
    ...rest
  } = props;
  const flexClassName = classnames('flex', {
    [`u_justify-${justify}`]: Boolean(justify),
    [`u_items-${items}`]: Boolean(items),
    // [`u_flex-${flex}`]: Boolean(items),
    [`u_direction-${direction}`]:
      Boolean(direction) && direction === 'column',
    'u_wrap-wrap': Boolean(wrap),
    'u_flex-inline': Boolean(inline),
    [`u_sp-${gap}`]: Boolean(gap),
    [`${className}`!]: Boolean(className),
  });

  return (
    <Tag ref={forwardedRef} {...flexClassName} {...rest}>
      {children}
    </Tag>
  );
}) as ForwardRefComponent<'div', FlexProps>;

Flex.displayName = 'Flex';
