import type { Color } from "@type/utils";

type Size = "4" | "5" | "6";

export type TagProps = {
  title: string;
  size?: Size;
  color?: Color;
};
