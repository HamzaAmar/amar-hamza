/* eslint-disable @typescript-eslint/naming-convention */
import type { ElementType, ReactNode } from 'react';

type Variant = 'contained' | 'outline' | 'text' | 'icon';
type Color =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning';
type Status = 'idle' | 'success' | 'error' | 'loading';
type Size = 'sm' | 'md' | 'lg' | 'fluid';

export interface ButtonProps<C extends ElementType> {
  as?: C;
  children: ReactNode;
  icon?: ReactNode;
  status?: Status;
  className?: string;
  variant?: Variant;
  size?: Size;
  color?: Color;
}
