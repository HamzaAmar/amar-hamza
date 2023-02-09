import type { ReactNode } from 'react';

type Items = 'center' | 'end' | 'start';
type Justify = 'around' | 'between' | 'evenly' | 'end' | 'center';
type Flex = '1' | 'none' | 'auto';
type Direction = 'column' | 'row';
type Gap = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface FlexProps {
  items?: Items;
  justify?: Justify;
  gap?: Gap;
  flex?: Flex;
  direction?: Direction;
  wrap?: boolean;
  inline?: boolean;
}
