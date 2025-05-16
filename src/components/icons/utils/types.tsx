import type { SVGProps } from "react";

import type { ROTATION } from "./config";

export type Rotation =
  | "bottom"
  | "top"
  | "right"
  | "left"
  | "left-top"
  | "left-bottom"
  | "right-bottom"
  | "right-top";
export type SvgType = {} & SVGProps<SVGSVGElement>;
export type SvgWithDirection = {
  direction?: keyof typeof ROTATION;
} & SvgType;
