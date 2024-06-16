import { Call, Email, Pen } from '@components/icons';

import type { ContactInfoProps } from './contact.type';

const NUMBER = '+212630371320';
const MAIL = 'hamzamiloudamar@gmail.com';

export const CONTACT_INFO: ContactInfoProps[] = [
  {
    id: 'numberPhone',
    icon: <Call width={24} />,
    info: `${NUMBER}`,
    href: `tel:${NUMBER}`,
  },
  {
    id: 'email',
    icon: <Email width={24} />,
    info: `${MAIL}`,
    href: `mailto:${MAIL}`,
  },
  {
    id: 'address',
    icon: <Pen width={24} />,
    info: 'Morocco Marrakesh',
  },
];
