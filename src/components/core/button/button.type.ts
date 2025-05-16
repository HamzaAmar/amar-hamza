import type { ReactNode } from "react";

import type { Color, Corner } from "@type/utils";

type Variant = "solid" | "outline" | "text" | "soft";
type Status = "idle" | "success" | "error" | "loading";
type Size = "4" | "5" | "6";
type ButtonCoreProps = {
  icon?: ReactNode;
  variant?: Variant;
  size?: Size;
  color?: Color;
  corner?: Corner;
};

export type ButtonProps = {
  status?: Status;
  fluid?: boolean;
  iconPosition?: "start" | "end";
} & ButtonCoreProps;

export type IconButtonProps = {
  title: string;
} & ButtonCoreProps;
