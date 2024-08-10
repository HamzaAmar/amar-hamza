import React from 'react';
import Link from 'next/link';
import { Heading, Text } from '@components/core';

const NAV_ITEMS = [
  { path: '/', title: 'Home' },
  { path: '/blogs', title: 'Blogs' },
  { path: '/contact', title: 'Contact' },
  { path: '/resume', title: 'Resume' },
];

const NotFoundPage = () => {
  return (
    <div className="n-f u_center">
      <div className="n-f-cnt l_f_md">
        <Heading size="3xl">404 Page Not Found </Heading>
        <Text size="xl" weight="extra-light" color="b" contrast="low">
          We Think that You get Lost and we think that you need help
          please check our map to go fast for the page that you need
        </Text>
        <ul className="n-f-lst u_column">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <Link className="n-f-txt" href={item.path}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotFoundPage;
