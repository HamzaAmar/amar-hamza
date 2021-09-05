import React from 'react';
import Link from 'next/link';
import { Layout } from '@components/core';
import style from '@styles/notFound.module.css';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.content}>
          <h1>404</h1>
          <h3>Page Not Found</h3>
          <p>
            We Think that You get Lost and we think that you need help
            please check our map to go fast for the page that you need
          </p>
          <ul className={style.mapContent}>
            <li>
              <Link href="/">
                {/* <FaMapMarker color="red" /> */}
                <span>Home </span>
              </Link>
            </li>
            <li>
              <Link href="blog">
                {/* <FaMapMarker color="red" /> */}
                <span>Blog </span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                {/* <FaMapMarker color="red" /> */}
                <span>Contact </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
