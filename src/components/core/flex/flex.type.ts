import type { ReactNode } from 'react';

type Items = 'center' | 'end' | 'start';
type Justify = 'around' | 'between' | 'evenly' | 'end' | 'center';
type Flex = '1' | 'none' | 'auto';
type Direction = 'column' | 'row';
type Gap = '2' | '3' | '4' | '5' | '6' | '7' | '8';

export interface FlexProps {
  items?: Items;
  justify?: Justify;
  gap?: Gap;
  flex?: Flex;
  direction?: Direction;
  wrap?: boolean;
  inline?: boolean;
}
