'use client';

/* eslint-disable no-warning-comments */
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Menu, Moon, Sun, TypeScript } from '@components/icons';
import {
  Button,
  Flex,
  IconButton,
  Social,
  Spinner,
  Text,
} from '@components/core';
import useBoolean from '@hooks/useBoolean';

import type { ItemProps, MenuProps } from './header.type';
import { usePathname } from 'next/navigation';
import { NavLink } from './navLink';
import { useTheme } from 'next-themes';

const MENU: MenuProps[] = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Blog', path: '/blogs' },
  { id: 3, name: 'Contact', path: '/contact' },
  { id: 4, name: 'Resume', path: '/resume' },
];

const Switcher = () => {
  const { state: mounted, handleTrue } = useBoolean(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    handleTrue();
  }, [handleTrue]);

  // TODO: Return Skeleton to avoid  Layout Shift
  if (!mounted) {
    return <Spinner size="6" />;
  }

  const nextMode = resolvedTheme === 'dark' ? 'light' : 'dark';

  const icon =
    resolvedTheme === 'dark' ? (
      <Sun width="30" aria-hidden="true" focusable="false" />
    ) : (
      <Moon width="30" aria-hidden="true" focusable="false" />
    );

  return (
    <IconButton
      onClick={() => setTheme(nextMode)}
      icon={!mounted ? <Spinner /> : icon}
      title={`Switch to ${nextMode} Mode`}
    />
  );
};

const Item = ({
  name,
  path,
  pathname,
  mobile,
  handleClose,
}: ItemProps) => {
  const close = handleClose ? { onClick: handleClose } : {};
  const onlyDesktop = mobile ? {} : ({ justify: 'center' } as const);

  return (
    <li className="h-e-itm" data-mobile={mobile}>
      <NavLink
        className="Fc h-e-lnk"
        data-mobile={mobile}
        {...close}
        {...onlyDesktop}
        href={path}
      >
        {name}
      </NavLink>
    </li>
  );
};

const Header = () => {
  const { state: visible, handleFalse, handleTrue } = useBoolean();
  const pathname = usePathname();

  return (
    <Flex
      justify="between"
      items="center"
      as="header"
      className="h-e"
    >
      <Flex
        as={Link}
        aria-label="Home Page"
        items="center"
        gap="4"
        href="/"
        className="h-e-logo"
      >
        <svg viewBox="0 0 243 254" width="36" fill="var(--P10)">
          <path d="M177.3 10a10 10 0 0 1 13.6-3.7l8.7 5a10 10 0 0 1 3.7 13.7L86.2 227.5c-1.7 3-6.3 3.4-10.2 1.2l-11.8-6.8c-3.9-2.3-5.7-6.5-4-9.4L177.2 10Z" />
          <path d="m242.3 249.5-29.6 4.4-35.5-241.4c-.4-3.3 2.8-6.5 7.3-7.2l13.5-2c4.4-.6 8.4 1.6 9 4.9l35.3 241.3ZM23.8 7c.3-3.3 4.2-5.7 8.7-5.2L46.1 3c4.5.4 7.9 3.5 7.6 6.8L30.6 252.7.7 250 23.8 7Z" />
          <path d="M177.8 208c1.8 3 .1 7.2-3.7 9.5l-11.6 7.2c-3.9 2.4-8.4 2-10.2-.9l-123-199a10 10 0 0 1 3.2-13.7L41 6A10 10 0 0 1 54.8 9l123 199Z" />
          <path d="m149.8 186 .5 10-67.7 4-.6-10 67.8-4Z" />
        </svg>
      </Flex>
      <nav className="h-e-nav sm_hide u_flex-1">
        <ul className="Fc h-e-lst">
          {MENU.map(({ id, name, path }) => {
            return (
              <Item
                key={id}
                name={name}
                path={path}
                pathname={path}
              />
            );
          })}
        </ul>
      </nav>
      <Flex gap="3" items="center">
        <IconButton
          icon={<Menu focusable="false" aria-hidden="true" />}
          title="Toggle Menu mobile-only"
          onClick={handleTrue}
          className="h-e-tog"
        />
        <Switcher />
      </Flex>
      <nav className="h-e-mob Sf-8" data-visible={visible === true}>
        <Button type="button" variant="outline" onClick={handleFalse}>
          Close
        </Button>
        <ul className="h-e-lstM u_flex-1">
          {MENU.map(({ id, name, path }) => {
            return (
              <Item
                key={id}
                name={name}
                path={path}
                pathname={pathname}
                mobile
                handleClose={handleFalse}
              />
            );
          })}
        </ul>

        <div className="Sf-6">
          <Social />
          <Text align="center" weight="1" size="2" color="b" low>
            I'm glad you're here! Explore my work and get to know me
            better.
          </Text>
        </div>
      </nav>
    </Flex>
  );
};

export default Header;
