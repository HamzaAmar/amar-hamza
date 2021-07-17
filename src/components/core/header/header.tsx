import React, { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { TypeScript } from '@components/icons';

import styles from './header.module.css';
import menu from '@constants/menu';
import { Switcher } from '@components/ui';
import { useRouter } from 'next/router';

interface IPropsItem {
  name: string;
  path: string;
  pathname: string;
}

const Item = ({ name, path, pathname }: IPropsItem) => {
  return (
    <Link href={path}>
      <a className={cn(styles.itemLink)}>
        <li
          className={cn(styles.item, {
            [styles.activeLink]: pathname === path,
          })}
        >
          {name}
        </li>
      </a>
    </Link>
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
      <h1 className={styles.logo}>
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
            <h5 className={styles.name}>amar</h5>
            <h6 className={styles.extension}>.tsx</h6>
          </a>
        </Link>
      </h1>
      <ul className={styles.nav}>
        {menu.map(({ id, name, path }) => {
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
      <div className={styles.iconContainer}>
        <div>
          <div
            className={styles.logoContainer}
            onClick={() => setVisible(true)}
          >
            <div
              className={cn(styles.menu, {
                ['.menu_transform']: visible,
              })}
            />
          </div>
          <div
            className={cn(styles.menuMobile, {
              [styles.visible]: visible === true,
            })}
          >
            <ul className={styles.menuMobileList}>
              <div
                className={styles.closeMenu}
                onClick={() => setVisible(false)}
              >
                Close
              </div>
              {menu.map(({ id, name, path }) => {
                return (
                  <Link href={path}>
                    <a
                      className={styles.itemLink}
                      style={{ background: 'red' }}
                    >
                      <li
                        key={id}
                        className={cn(styles.menuMobileItem)}
                      >
                        {name}
                      </li>
                    </a>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        <Switcher />
      </div>
    </div>
  );
};

export default Header;
