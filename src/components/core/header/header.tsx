import React, { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { TypeScript } from '@components/icons';

import style from './header.module.css';
import menu from '@constants/menu';
import { Switcher } from '@components/ui';
import { useTheme } from 'next-themes';

const Header = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={style.container}>
      <h1 className={style.logo}>
        <Link href="/">
          <a className={style.logoContent}>
            <TypeScript
              width={25}
              height={25}
              style={{
                marginRight: '0.7rem',
                borderRadius: '0.2rem',
              }}
            />
            <h5 className={style.name}>amar</h5>
            <h6 className={style.extension}>.tsx</h6>
          </a>
        </Link>
      </h1>
      <ul className={style.nav}>
        {menu.map(({ id, name, path }) => {
          return (
            <li key={id} className={cn(style.item)}>
              <Link href={path}>
                <a className={style.itemLink}>{name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={style.iconContainer}>
        <div className={style.logoContainer}>
          <div
            className={cn(style.menu, {
              ['.menu_transform']: visible,
            })}
          />
        </div>
        <Switcher />
      </div>
    </div>
  );
};

export default Header;
