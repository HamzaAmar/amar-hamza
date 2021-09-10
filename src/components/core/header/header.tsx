/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { Menu, TypeScript } from '@components/icons';
import MENU from '@constants/menu';
import { Switcher } from '@components/ui';
import { useRouter } from 'next/router';

import styles from './header.module.css';

interface ItemProps {
  name: string;
  path: string;
  pathname: string;
}

const Item = ({ name, path, pathname }: ItemProps) => {
  const isCurrentLink = pathname === path;
  const currentLink = isCurrentLink ? 'page' : false;
  return (
    <li
      className={cn(styles.item, {
        [styles.activeLink]: isCurrentLink,
      })}
    >
      <Link href={path}>
        <a aria-current={currentLink} className={styles.itemLink}>
          {name}
        </a>
      </Link>
    </li>
  );
};

const getFirstPathInTheUrl = (pathname: string) => {
  const pathNames = pathname.slice(1);
  const firstPathWithSlash = `/${pathNames.split('/')[0]}`;
  return firstPathWithSlash;
};

const Header = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const pathname = getFirstPathInTheUrl(router.pathname);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <a className={styles.logoContent}>
              <TypeScript
                width={25}
                height={25}
                style={{
                  marginRight: '0.7rem',
                  borderRadius: '0.2rem',
                }}
              />
              <div className={styles.name}>amar</div>
              <div className={styles.extension}>.tsx</div>
            </a>
          </Link>
        </div>
        <ul className={styles.nav}>
          {MENU.map(({ id, name, path }) => {
            return (
              <Item
                key={id}
                name={name}
                path={path}
                pathname={pathname}
              />
            );
          })}
        </ul>
        <div className={styles.rightSide}>
          <button
            type="button"
            className={`${styles.menuMobileIcon}`}
            // className={`${styles.menuMobileIcon} ${styles.buttonReset}`}
            onClick={() => setVisible(true)}
            aria-label="Toggle Menu"
          >
            <Menu width="30" focusable="false" aria-hidden="true" />
          </button>
          <Switcher />
        </div>
      </header>
      <div
        className={cn(styles.menuMobile, {
          [styles.visible]: visible === true,
        })}
      >
        <ul className={styles.menuMobileList}>
          <button
            type="button"
            className={styles.closeMenu}
            onClick={() => setVisible(false)}
          >
            Close
          </button>
          {MENU.map(({ id, name, path }) => {
            return (
              <li className={cn(styles.menuMobileItem)} key={id}>
                <Link href={path}>
                  <a
                    className={cn(styles.itemLink, {
                      [styles.activeMobileLink]: pathname === path,
                    })}
                  >
                    {name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
