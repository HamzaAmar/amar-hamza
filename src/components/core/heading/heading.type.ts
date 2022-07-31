import type { ReactNode } from 'react';

type Color = 'primary' | 'secondary' | 'blue';
type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type Variant = 'normal' | 'hero';
type Align = 'start' | 'end' | 'center';

export interface BaseTextProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: Size;
  color?: Color;
  children: ReactNode;
  variant?: Variant;
  align?: Align;
  className?: string;
}

export interface Others extends BaseTextProps {
  truncate?: 'none' | 'oneline';
}
export interface MultilineProps extends BaseTextProps {
  truncate: 'multiline';
  multiline: number;
}

export type HeadingProps = Others | MultilineProps;
