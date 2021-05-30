import React, { ReactElement, ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './link.module.css';

interface IProps {
  href: string;
  children: ReactElement;
}

export default ({ href, children }: IProps) => {
  const router = useRouter();

  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className} active`;
  }

  return <Link href={href}>{children}</Link>;
};
