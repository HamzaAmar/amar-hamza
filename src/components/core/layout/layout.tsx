import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';

import { Footer, Header } from '..';

import style from './layout.module.css';

// import { Cursor } from '@components/ui';

interface Meta {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
}
interface LayoutProps extends Meta {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const {
    children,
    title,
    description,
    image,
    ...customMeta
  } = props;
  const router = useRouter();
  const { NEXT_PUBLIC_DOMAIN_NAME } = process.env;

  const meta: Meta = {
    title: `${title} – Hamza Miloud Amar`,
    description,
    image: `https://miloudamar.com/${image}`,
    ...customMeta,
  };

  return (
    <div className={style.container}>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`${NEXT_PUBLIC_DOMAIN_NAME}${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`${NEXT_PUBLIC_DOMAIN_NAME}${router.asPath}`}
        />

        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Hamza Miloud Amar" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HamzaMiloudAma1" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />

        {meta.date && (
          <meta
            property="article:published_time"
            content={meta.date}
          />
        )}
      </Head>
      {/* <Cursor /> */}
      <Header />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  title: 'JavaScript Developer',
  description: `Senior Front End Developer I like every think about it but I am in love with React HTML CSS`,
  image: 'myImage.jpg',
  type: 'website',
};

export default Layout;
