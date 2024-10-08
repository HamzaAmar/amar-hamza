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
    return <Spinner size="lg" />;
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
        className="u_center h-e-lnk"
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
        gap="sm"
        href="/"
        className="h-e-logo"
      >
        Miloud Amar
      </Flex>
      <nav className="h-e-nav sm_hide u_flex-1">
        <ul className="u_center h-e-lst">
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
      <Flex gap="xs" items="center">
        <IconButton
          icon={<Menu focusable="false" aria-hidden="true" />}
          title="Toggle Menu mobile-only"
          onClick={handleTrue}
          className="h-e-tog"
        />
        <Switcher />
      </Flex>
      <nav
        className="h-e-mob l_f_2xl"
        data-visible={visible === true}
      >
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

        <div className="l_f_lg">
          <Social />
          <Text
            align="center"
            weight="thin"
            size="2xs"
            color="b"
            contrast="low"
          >
            I'm glad you're here! Explore my work and get to know me
            better.
          </Text>
        </div>
      </nav>
    </Flex>
  );
};

export default Header;
