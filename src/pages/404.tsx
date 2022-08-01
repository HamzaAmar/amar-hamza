import React from 'react';
import Link from 'next/link';
import { Layout } from '@components/common';
import { Heading, Text } from '@components/core';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="not-found">
        <div className="not-found--wrapper l_flow">
          <Heading size="xxl">404 Page Not Found </Heading>
          <Text variant="body2">
            We Think that You get Lost and we think that you need help
            please check our map to go fast for the page that you need
          </Text>
          <ul className="not-found--nav">
            <li className="not-found--item">
              <Link href="/">
                <span className="not-found-text">Home </span>
              </Link>
            </li>
            <li className="not-found--item">
              <Link href="blog">
                <span className="not-found-text">Blog </span>
              </Link>
            </li>
            <li className="not-found--item">
              <Link href="/contact">
                <span className="not-found-text">Contact </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
