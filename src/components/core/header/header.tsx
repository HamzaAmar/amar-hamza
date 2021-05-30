import React, { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { TypeScript } from '@components/icons';

import styles from './header.module.css';
import menu from '@constants/menu';
import { Switcher } from '@components/ui';
import { useTheme } from 'next-themes';

const Header = () => {
  const [visible, setVisible] = useState(false);

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
            <li key={id} className={cn(styles.item)}>
              <Link href={path}>
                <a className={styles.itemLink}>{name}</a>
              </Link>
            </li>
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
                  <li key={id} className={cn(styles.menuMobileItem)}>
                    <Link href={path}>
                      <a className={styles.itemLink}>{name}</a>
                    </Link>
                  </li>
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
