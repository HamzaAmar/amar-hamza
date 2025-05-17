// this c is a little bit different than the the classic one it return obj not a string

import type * as React from "react";

import type { Polymorphic } from "@type/polymorphic.type";

import { c } from "@utils/classnames";

import type { TypographyProps } from "./typography.type";

export type PolymorphicProps<
  E extends React.ElementType,
  P,
> = P &
  Omit<React.ComponentPropsWithoutRef<E>, keyof P> & {
    /**
     * The component or HTML tag to render as
     */
    as?: E;
  };

export const Text: Polymorphic<"p", TypographyProps> = (props) => {
  const {
    as: Tag = "p",
    type = "text",
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
    low = "false",
    children,
    ...rest
  } = props;

  const classNames = c("ty-", {
    [`Fs-${size}`]: !!size,
    [`T${truncate}`]: !!truncate,
    [`Tt-${transform}`]: !!transform,
    [`Ta-${align}`]: !!align,
    [`Fw-${weight}`]: !!weight,
    [`u_t_${decoration}`]: !!decoration,
    [`u_leading_${leading}`]: !!leading,
    [`Fsy-${fontStyle}`]: !!fontStyle,
    [`C${color}`]: !!color,
    "ty-low": !!low,
    [`ty-${type}`]: type !== "text",
    [className!]: !!className,
  });

  return (
    <Tag {...classNames} {...rest}>
      {children}
    </Tag>
  );
};

export type { TypographyProps } from "./typography.type";
