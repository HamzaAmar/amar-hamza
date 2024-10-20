import type { Color, Corner } from '@type/utils';
import type { ReactNode } from 'react';

type Variant = 'solid' | 'outline' | 'text' | 'soft';
type Status = 'idle' | 'success' | 'error' | 'loading';
type Size = '4' | '5' | '6';
interface ButtonCoreProps {
  icon?: ReactNode;
  variant?: Variant;
  size?: Size;
  color?: Color;
  corner?: Corner;
}

export interface ButtonProps extends ButtonCoreProps {
  status?: Status;
  fluid?: boolean;
  iconPosition?: 'start' | 'end';
}

export interface IconButtonProps extends ButtonCoreProps {
  title: string;
}
