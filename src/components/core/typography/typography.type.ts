import { Color, Size } from '@type/utils';

type Contrast = 'low' | 'high';
type TypographySize = '2xs' | Size | '2xl' | '3xl' | '4xl';
// type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Align = 'start' | 'end' | 'center' | 'justify';
type Transform = 'uppercase' | 'lowercase' | 'capitalize';
type Weight =
  | 'thin'
  | 'extra-light'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semi-bold'
  | 'bold'
  | 'extra-bold'
  | 'black';
export type Leading = 'none' | 'sm' | 'md' | 'lg';
type FontStyle = 'italic' | 'oblique';
type Decoration = 'line-through' | 'underline' | 'overline';

export interface TypographyBaseProps {
  size?: TypographySize;
  className?: string;
  align?: Align;
  transform?: Transform;
  weight?: Weight;
  color?: Color;
  contrast?: Contrast;
  fontStyle?: FontStyle;
  decoration?: Decoration;
  leading?: Leading;
}

export interface MultiLineTypographyTruncate
  extends TypographyBaseProps {
  truncate?: 'multiline';
  numberLine: number;
}

interface SingleLineTypographyTruncate extends TypographyBaseProps {
  truncate?: 'singleline';
}

export type TypographyProps =
  | MultiLineTypographyTruncate
  | SingleLineTypographyTruncate;
