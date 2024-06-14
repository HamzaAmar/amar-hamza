'use client';

import React, { ReactElement, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
interface LinkProps {
  href: string;
  children: ReactElement;
}

const LinkComp = ({ href, children }: LinkProps) => {
  const pathname = usePathname();

  console.log(pathname);

  let className = children.props.className || '';
  if (pathname === href) {
    className = `${className} active`;
  }

  return <Link href={href}>{children}</Link>;
};

export default LinkComp;
