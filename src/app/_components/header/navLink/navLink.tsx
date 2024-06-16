'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const NavLink = ({ children, href, ...rest }: LinkProps) => {
  const pathname = usePathname();

  let path = pathname.split('/')[1] ?? '';
  path = `/${path}`;
  const isActive = path === href;

  const current = isActive
    ? ({ 'aria-current': 'page' } as { 'aria-current': 'page' })
    : {};

  return (
    <Link href={href} {...rest} {...current}>
      {children}
    </Link>
  );
};

export default NavLink;
