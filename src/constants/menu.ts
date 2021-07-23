interface Menu {
  id: number;
  name: string;
  path: string;
}

const MENU: Menu[] = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Blog', path: '/blogs' },
  { id: 3, name: 'Tutorial', path: '/tutorial' },
  { id: 4, name: 'Challange', path: '/challenge' },
  { id: 5, name: 'Contact', path: '/contact' },
];
export default MENU;
