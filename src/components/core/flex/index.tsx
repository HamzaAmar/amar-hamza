import React from "react";

import type { Polymorphic } from "@type/polymorphic.type";

import { c } from "@utils/classnames";

import type { FlexProps } from "./flex.type";

export const Flex: Polymorphic<"div", FlexProps> = (props) => {
  const {
    children,
    justify,
    items,
    flex,
    direction,
    wrap,
    inline,
    as: Tag = "div",
    gap,
    className,
    ...rest
  } = props;
  const flexClassName = c("flex", {
    [`u_justify-${justify}`]: Boolean(justify),
    [`u_items-${items}`]: Boolean(items),
    [`u_direction-${direction}`]:
      Boolean(direction) && direction === "column",
    "u_wrap-wrap": Boolean(wrap),
    "u_flex-inline": Boolean(inline),
    [`S-${gap}`]: Boolean(gap),
    [className!]: Boolean(className),
  });

  return (
    <Tag {...flexClassName} {...rest}>
      {children}
    </Tag>
  );
};
