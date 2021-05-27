import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './link.module.css';

export default ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className} active`;
  }

  return <Link href={href}>{children}</Link>;
};
