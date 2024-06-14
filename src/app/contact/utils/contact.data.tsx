import { Call, Email, Pen } from '@components/icons';

import type { ContactInfoProps } from './contact.type';

export const CONTACT_INFO: ContactInfoProps[] = [
  {
    id: 'numberPhone',
    icon: <Call width={24} />,
    info: '+212 6 3037 1320',
  },
  {
    id: 'email',
    icon: <Email width={24} />,
    info: 'hamzamiloudamar@gmail.com',
  },
  {
    id: 'address',
    icon: <Pen width={24} />,
    info: 'Morocco Marrakesh',
  },
];
