import Head from 'next/head';
import React, { useState } from 'react';
import style from './layout.module.css';
import { Footer, Header } from '..';
import { useRouter } from 'next/router';

interface IProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
}

interface IMeta {
  title: string;
  description: string;
  image: string;
  type: string;
  date?: string;
}

const Layout = (props: IProps) => {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta: IMeta = {
    title: 'Hamza Miloud Amar – JavaScript Developer',
    description: `Full Stack Developer how like to work React , Next , Css , Node `,
    image: 'https://leerob.io/static/images/banner.png',
    type: 'website',
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
          content={`https://leerob.io${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://leerob.io${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lee Robinson" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leeerob" />
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
      <Header />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
