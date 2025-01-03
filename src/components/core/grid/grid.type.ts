import type { ReactNode, CSSProperties } from 'react';

export interface GridBaseProps {
  gap?: '3' | '4' | '5' | '6' | '7';
  columns?: string;
  rows?: string;
  areas?: string;
}
type Items = 'center' | 'end' | 'start';
type Justify = 'around' | 'between' | 'evenly' | 'end' | 'center';

export interface GridProps extends GridBaseProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  items?: Items;
  justify?: Justify;
}

export interface GridItemProps {
  children: ReactNode;
  area?: string;
  column?: string;
  row?: string;
  style?: CSSProperties;
  className?: string;
}
