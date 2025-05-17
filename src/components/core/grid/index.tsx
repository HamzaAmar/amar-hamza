import type { CSSProperties } from "react";

import type { Polymorphic } from "@type/polymorphic.type";

import { c } from "@utils/classnames";

import type { GridItemProps, GridProps } from "./grid.type";

const getStyles = (obj?: { [key: string]: unknown }) => {
  if (!obj) {
    return;
  }
  const newObj: { [key: string]: unknown } = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value) {
      newObj[`--${key}`] = value;
    }
  }
  return newObj as CSSProperties;
};

export const GridItem: Polymorphic<"div", GridItemProps> = (props) => {
  const {
    column,
    row,
    area,
    children,
    style,
    className,
    as: Tag = "div",
  } = props;

  const gridClassName = c("g-r-itm", {
    className: Boolean(className),
    style: Boolean(style),
  });

  const regularStyle = getStyles({ column, row, area });

  return (
    <Tag
      style={{
        ...regularStyle,
        ...style,
      }}
      {...gridClassName}
    >
      {children}
    </Tag>
  );
};

export const Grid: Polymorphic<"div", GridProps> = (props) => {
  const {
    gap,
    columns,
    rows,
    items,
    justify,
    areas,
    children,
    style,
    className,
    as: Tag = "div",
  } = props;
  const gridClassName = c("g-r", {
    [`u_justify-${justify}`]: Boolean(justify),
    [`u_items-${items}`]: Boolean(items),
    [`S-${gap}`]: Boolean(gap),
    [className!]: Boolean(className),
  });

  const regularStyle = getStyles({ columns, rows, areas });

  return (
    <Tag
      style={{
        ...regularStyle,
        ...style,
      }}
      {...gridClassName}
    >
      {children}
    </Tag>
  );
};
