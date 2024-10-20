// type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'fluid';

import type { Color, Size } from '@type/utils';

export interface AvatarProps {
  size?: Size;
  image?: string;
  title: string;
  className?: string;
  color?: Color;
}
