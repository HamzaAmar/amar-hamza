import { Color, Size } from '@type/utils';

// type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'fluid';

export interface AvatarProps {
  size?: Size;
  image?: string;
  title: string;
  className?: string;
  color?: Color;
}
