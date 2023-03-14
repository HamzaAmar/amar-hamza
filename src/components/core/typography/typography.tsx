import { CSSProperties, forwardRef } from 'react';
import { classnames } from '@utils/classnames';
import type { ForwardRefComponent } from '@type/polymorphic.type';

import type {
  TypographyProps,
  MultiLineTypographyTruncate,
} from './typography.type';

export const Text = forwardRef((props, forwardedRef) => {
  let {
    as: Comp = 'p',
    size = 'md',
    truncate,
    weight,
    className,
    children,
    transform,
    align,
    decoration,
    color,
    leading,
    contrast = 'high',
    ...rest
  } = props;
  const contrastLvl = contrast === 'high' ? 12 : 11;

  /* 
      Every className that is Prefixed with u_ is a utility class and you can find it in 
      /src/scss/utilities folder
  */

  let styleOnlyExistOnTruncateMultiLine;

  const classNameStyle = classnames(`text u_size-${size}`, {
    [`u_${truncate}`]: Boolean(truncate),
    [`${className}`]: Boolean(className),
    [`u_transform__${transform}`]: Boolean(transform),
    [`u_align-${align}`]: Boolean(align),
    [`u_font-${weight}`]: Boolean(weight),
    [`u_decoration__${decoration}`]: Boolean(decoration),
    [`u_leading__${leading}`]: Boolean(leading),
  });

  if (truncate === 'multiline') {
    const { numberLine, ...restProps } =
      rest as MultiLineTypographyTruncate;
    styleOnlyExistOnTruncateMultiLine = {
      '--line-numbers': numberLine,
    };
    rest = restProps;
  }
  const colorStyle = color
    ? { '--color-text': `var(--${color}-${contrastLvl})` }
    : {};
  return (
    <Comp
      style={
        {
          ...styleOnlyExistOnTruncateMultiLine,
          ...colorStyle,
        } as CSSProperties
      }
      {...classNameStyle}
      {...rest}
    >
      {children}
    </Comp>
  );
}) as ForwardRefComponent<'p', TypographyProps>;

Text.displayName = 'Text';

export const Heading = forwardRef((props, ref) => {
  const {
    as: Comp = 'h2',
    size = 'md',
    truncate,
    weight,
    className,
    children,
    transform,
    align,
    decoration,
    color,
    leading,
    contrast = 'high',
    ...rest
  } = props;

  const contrastLvl = contrast === 'high' ? 12 : 11;

  /* 
      Every className that is Prefixed with u_ is a utility class and you can find it in 
      /src/scss/utilities folder
  */
  const styleOnlyExistOnTruncateMultiLine =
    truncate === 'multiline'
      ? { '--line-numbers': props.numberLine }
      : {};
  const colorStyle = color
    ? { '--color-heading': `var(--color-${color}-${contrastLvl})` }
    : {};

  const classNameStyle = classnames(`heading heading__${size}`, {
    [`u_${truncate}`]: Boolean(truncate),
    [`${className}`]: Boolean(className),
    [`u_transform__${transform}`]: Boolean(transform),
    [`u_align-${align}`]: Boolean(align),
    [`u_font-${weight}`]: Boolean(weight),
    [`u_decoration__${decoration}`]: Boolean(decoration),
    [`u_leading__${leading}`]: Boolean(leading),
  });
  return (
    <Comp
      style={
        {
          ...styleOnlyExistOnTruncateMultiLine,
          ...colorStyle,
        } as CSSProperties
      }
      {...classNameStyle}
      {...rest}
    >
      {children}
    </Comp>
  );
}) as ForwardRefComponent<'h1', TypographyProps>;

Heading.displayName = 'Heading';
