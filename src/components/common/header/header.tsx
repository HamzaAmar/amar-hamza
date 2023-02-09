/* eslint-disable no-warning-comments */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, Moon, Sun, TypeScript } from '@components/icons';
import { Button, Flex, IconButton, Text } from '@components/core';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import useBoolean from '@hooks/useBoolean';

import type { ItemProps, MenuProps } from './header.type';

const MENU: MenuProps[] = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Blog', path: '/blogs' },
  { id: 3, name: 'Contact', path: '/contact' },
];

const Switcher = () => {
  const { state: mounted, handleTrue } = useBoolean(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    handleTrue();
  }, [handleTrue]);

  // TODO: Return Skeleton to avoid  Layout Shift
  if (!mounted) {
    return null;
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
      icon={icon}
      title={`Switch to ${nextMode} Mode`}
    />
  );
};

const Item = ({ name, path, pathname, mobile }: ItemProps) => {
  const isCurrentLink = pathname === path;
  const currentLink = isCurrentLink ? 'page' : false;

  return (
    <li className="header--item">
      <Link href={path} passHref>
        <Flex
          as="a"
          items="center"
          justify="center"
          aria-current={currentLink}
          className="header--item-link"
          data-mobile={mobile}
        >
          {name}
        </Flex>
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
  const { state: visible, handleFalse, handleTrue } = useBoolean();
  const router = useRouter();

  const pathname = getFirstPathInTheUrl(router.pathname);

  return (
    <Flex
      justify="between"
      items="center"
      as="header"
      className="header"
    >
      <Link href="/">
        <Flex as="a" items="center" gap="sm">
          <TypeScript width={24} />
          <Text as="span">Hamza Amar</Text>
        </Flex>
      </Link>
      <nav className="header--nav u_flex-1">
        <Flex
          as="ul"
          justify="center"
          items="center"
          className="header--list"
        >
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
        </Flex>
      </nav>
      <Flex gap="xs" items="center">
        <IconButton
          icon={<Menu focusable="false" aria-hidden="true" />}
          title="Toggle Menu"
          onClick={handleTrue}
        />
        <Switcher />
      </Flex>
      <nav className="header--mobile" data-visible={visible === true}>
        <Button
          type="button"
          variant="outline"
          onClick={handleFalse}
          className="header--close-button"
        >
          Close
        </Button>
        <Flex
          as="ul"
          gap="md"
          direction="column"
          items="center"
          justify="center"
          className="header--mobile-list l_flow u_flex-1"
        >
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
        </Flex>
      </nav>
    </Flex>
  );
};

export default Header;
