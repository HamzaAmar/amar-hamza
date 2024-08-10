import { Color } from '@type/utils';

type Size = 'sm' | 'md' | 'lg';

export interface TagProps {
  title: string;
  size?: Size;
  color?: Color;
}
