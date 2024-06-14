import { ReactElement } from 'react';

export interface ContactInfoProps {
  id: string;
  icon: ReactElement;
  info: string;
}

export interface ContactItemProps
  extends Omit<ContactInfoProps, 'id'> {}
