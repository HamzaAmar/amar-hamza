'use client';

/* eslint-disable no-warning-comments */
import React from 'react';
import Link from 'next/link';
import { Menu, TypeScript } from '@components/icons';
import { Button, Flex, IconButton, Text } from '@components/core';
// import { useTheme } from 'next-themes';
import useBoolean from '@hooks/useBoolean';

import type { ItemProps, MenuProps } from './header.type';
import { Social } from '@components/ui';
import { usePathname } from 'next/navigation';
import { NavLink } from '@components/ui/link';

const MENU: MenuProps[] = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Blog', path: '/blogs' },
  { id: 3, name: 'Contact', path: '/contact' },
  { id: 4, name: 'Resume', path: '/resume' },
];

// const Switcher = () => {
//   const { state: mounted, handleTrue } = useBoolean(false);
//   // const { resolvedTheme, setTheme } = useTheme();

//   useEffect(() => {
//     handleTrue();
//   }, [handleTrue]);

//   // TODO: Return Skeleton to avoid  Layout Shift
//   if (!mounted) {
//     return null;
//   }

//   const nextMode = resolvedTheme === 'dark' ? 'light' : 'dark';

//   const icon =
//     resolvedTheme === 'dark' ? (
//       <Sun width="30" aria-hidden="true" focusable="false" />
//     ) : (
//       <Moon width="30" aria-hidden="true" focusable="false" />
//     );

//   return (
//     <IconButton
//       onClick={() => setTheme(nextMode)}
//       icon={icon}
//       title={`Switch to ${nextMode} Mode`}
//     />
//   );
// };

const Item = ({
  name,
  path,
  pathname,
  mobile,
  handleClose,
}: ItemProps) => {
  const isCurrentLink = pathname === path;
  const close = handleClose ? { onClick: handleClose } : {};
  const onlyDesktop = mobile ? {} : ({ justify: 'center' } as const);

  return (
    <li className="header--item" data-mobile={mobile}>
      <NavLink
        className="u_center header--item-link"
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

const getFirstPathInTheUrl = (pathname: string) => {
  const pathNames = pathname.slice(1);
  return `/${pathNames.split('/')[0]}`;
};

const Header = () => {
  const { state: visible, handleFalse, handleTrue } = useBoolean();
  const pathname = usePathname();

  const path = getFirstPathInTheUrl(pathname);

  return (
    <Flex
      justify="between"
      items="center"
      as="header"
      className="header"
    >
      <Flex
        as={Link}
        items="center"
        gap="sm"
        href="/"
        className="header--logo-link"
      >
        <TypeScript width={24} />
        <Text as="span">Hamza Amar </Text>
      </Flex>
      <nav className="header--nav sm_hide u_flex-1">
        <ul className="u_center header--list">
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
          className="toggle__menu hello"
        />
        {/* <Switcher /> */}
      </Flex>
      <nav
        className="header--mobile l_flow__2xl"
        data-visible={visible === true}
      >
        <Button type="button" variant="outline" onClick={handleFalse}>
          Close
        </Button>
        <ul className="header--mobile-list u_flex-1">
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

        <div className="l_flow__lg">
          <Social />
          <Text
            align="center"
            weight="thin"
            size="2xs"
            color="slate"
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
