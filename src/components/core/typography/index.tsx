// this c is a little bit different than the the classic one it return obj not a string
import { forwardRef } from 'react';
import type { TypographyProps } from './typography.type';
import { c } from '@utils/classnames';
import type { ForwardRefComponent } from '@type/polymorphic.type';

export const Text = forwardRef((props, forwardedRef) => {
  const {
    as: Tag = 'p',
    size,
    truncate,
    className,
    transform,
    weight,
    leading,
    align,
    decoration,
    color,
    fontStyle,
    low = 'false',
    children,
    ...rest
  } = props;

  const classNames = c('ty-', {
    [`Fs-${size}`]: !!size,
    [`T${truncate}`]: !!truncate,
    [`Tt-${transform}`]: !!transform,
    [`Ta-${align}`]: !!align,
    [`Fw-${weight}`]: !!weight,
    [`u_t_${decoration}`]: !!decoration,
    [`u_leading_${leading}`]: !!leading,
    [`Fsy-${fontStyle}`]: !!fontStyle,
    [`C${color}`]: !!color,
    'ty-low': !!low,
    [className!]: !!className,
  });

  return (
    <Tag {...classNames} ref={forwardedRef} {...rest}>
      {children}
    </Tag>
  );
}) as ForwardRefComponent<'p', TypographyProps>;
Text.displayName = 'Text';

export const Heading = forwardRef(
  ({ as: Tag = 'h1', children, ...rest }, forwardedRef) => {
    return (
      <Text as={Tag} className="ty-_hdg" ref={forwardedRef} {...rest}>
        {children}
      </Text>
    );
  },
) as ForwardRefComponent<'h1', TypographyProps>;

Heading.displayName = 'Heading';

export const Link = forwardRef(
  ({ children, ...rest }, forwardedRef) => {
    return (
      <Text
        ref={forwardedRef}
        color="p"
        low
        className="ty-_lnk"
        as="a"
        {...rest}
      >
        {children}
      </Text>
    );
  },
) as ForwardRefComponent<'a', TypographyProps>;

Link.displayName = 'Link';

export type { TypographyProps } from './typography.type';
