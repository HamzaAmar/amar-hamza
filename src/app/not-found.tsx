import React from 'react';
import Link from 'next/link';
import { Heading, Text } from '@components/core';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div className="not-found--wrapper l_flow">
        <Heading size="2xl">404 Page Not Found </Heading>
        <Text size="lg">
          We Think that You get Lost and we think that you need help
          please check our map to go fast for the page that you need
        </Text>
        <ul className="not-found--nav">
          <li className="not-found--item">
            <Link className="not-found-text" href="/">
              Home
            </Link>
          </li>
          <li className="not-found--item">
            <Link className="not-found-text" href="/blog">
              Blog
            </Link>
          </li>
          <li className="not-found--item">
            <Link className="not-found-text" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NotFoundPage;
