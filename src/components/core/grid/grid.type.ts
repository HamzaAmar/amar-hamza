import type { CSSProperties, ReactNode } from "react";

export type GridBaseProps = {
  gap?: "3" | "4" | "5" | "6" | "7";
  columns?: string;
  rows?: string;
  areas?: string;
};
type Items = "center" | "end" | "start";
type Justify = "around" | "between" | "evenly" | "end" | "center";

export type GridProps = {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  items?: Items;
  justify?: Justify;
} & GridBaseProps;

export type GridItemProps = {
  children: ReactNode;
  area?: string;
  column?: string;
  row?: string;
  style?: CSSProperties;
  className?: string;
};
