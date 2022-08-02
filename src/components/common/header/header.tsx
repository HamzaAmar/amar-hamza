/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, TypeScript } from '@components/icons';
import MENU from '@constants/menu';
import { Switcher } from '@components/ui';
import { Button, Text } from '@components/core';
import { useRouter } from 'next/router';

interface ItemProps {
  name: string;
  path: string;
  pathname: string;
  mobile?: boolean;
}

const Item = ({ name, path, pathname, mobile }: ItemProps) => {
  const isCurrentLink = pathname === path;
  const currentLink = isCurrentLink ? 'page' : false;

  return (
    <li className="header__item" data-mobile={mobile}>
      <Link href={path}>
        <a
          aria-current={currentLink}
          className="header__itemLink u_bothCenter"
        >
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
    <header className="header">
      <Link href="/">
        <a className="header__logo u_bothCenter">
          <TypeScript
            width={25}
            height={25}
            style={{
              marginRight: '0.7rem',
              borderRadius: '0.2rem',
            }}
          />
          <Text variant="subheading1">Hamza Amar</Text>
        </a>
      </Link>
      <nav className="header__nav">
        <ul className="header__list">
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
      </nav>
      <div className="header__actions">
        <button
          type="button"
          // className={`${styles.menuMobileIcon}`}
          onClick={() => setVisible(true)}
          aria-label="Toggle Menu"
        >
          <Menu width="30" focusable="false" aria-hidden="true" />
        </button>
        <Switcher />
      </div>
      <nav className="header__mobile" data-visible={visible === true}>
        <Button
          type="button"
          variant="outline"
          onClick={() => setVisible(false)}
          className="header--close-button"
        >
          Close
        </Button>
        <ul className="header__mobileList u_bothCenter l_flow">
          {MENU.map(({ id, name, path }) => {
            return (
              <Item
                key={id}
                name={name}
                path={path}
                pathname={pathname}
                mobile
              />
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
