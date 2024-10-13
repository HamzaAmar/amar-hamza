import type { ReactElement } from 'react';

export interface ContactInfoProps {
  id: string;
  icon: ReactElement;
  info: string;
  href?: string;
}

export interface ContactItemProps
  extends Omit<ContactInfoProps, 'id'> {}
