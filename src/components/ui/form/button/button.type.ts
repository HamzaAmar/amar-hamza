/* eslint-disable @typescript-eslint/naming-convention */
import { ElementType } from 'react';

type Variant = 'contained' | 'outline';
type IStatus = 'idle' | 'success' | 'error' | 'loading';

export interface ButtonProps<C extends ElementType> {
  as?: C;
  children: React.ReactNode;
  icon?: React.ReactNode;
  status?: IStatus;
  className?: string;
  variant?: Variant;
}
