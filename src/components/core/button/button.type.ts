import type { Color, Corner, Size } from '@type/utils';
import type { ReactNode } from 'react';

type Variant = 'solid' | 'outline' | 'text' | 'soft';
type Status = 'idle' | 'success' | 'error' | 'loading';

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
