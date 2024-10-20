import type { Color, Size } from '@type/utils';

type Contrast = 'low' | 'high';
type TypographySize = '2' | Size | '2xl' | '3xl' | '4xl';
// type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Align = 'start' | 'end' | 'center' | 'justify';
type Transform = 'uppercase' | 'lowercase' | 'capitalize' | 'fl';
type Weight = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type Truncate = '1' | '2' | '3' | '4' | '5' | '6';
export type Leading = 'none' | 'sm' | 'md' | 'lg';
type FontStyle = 'italic' | 'oblique';
type Decoration = 'line-through' | 'underline' | 'overline';

export interface TypographyProps {
  size?: TypographySize;
  className?: string;
  align?: Align;
  transform?: Transform;
  weight?: Weight;
  color?: Color;
  low?: boolean;
  fontStyle?: FontStyle;
  decoration?: Decoration;
  leading?: Leading;
  truncate?: Truncate;
}
