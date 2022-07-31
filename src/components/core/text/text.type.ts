import type { ReactNode } from 'react';

type Color =
  | 'primary'
  | 'secondary'
  | 'blue'
  | 'grey'
  | 'danger'
  | 'warning'
  | 'success';
type Variant =
  | 'display'
  | 'subheading1'
  | 'subheading2'
  | 'body'
  | 'body2'
  | 'body3'
  | 'caption'
  | 'overline';
type Truncate = 'none' | 'multiline' | 'oneline';
type Weight = 'normal' | 'bold' | 'semi_bold';

export interface BaseTextProps {
  as?: 'p' | 'span' | 'label' | 'small' | 'b' | 'time';
  variant?: Variant;
  color?: Color;
  children: ReactNode;
  className?: string;
  weight?: Weight;
}

export interface Others extends BaseTextProps {
  truncate?: 'none' | 'oneline';
}
export interface MultilineProps extends BaseTextProps {
  truncate: 'multiline';
  multiline: number;
}

export type TextProps = Others | MultilineProps;
