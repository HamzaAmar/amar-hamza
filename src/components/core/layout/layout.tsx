import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import style from './layout.module.css';
import { Footer, Header } from '..';
import { useRouter } from 'next/router';
import cn from 'classnames';
// import { Cursor } from '@components/ui';

interface IProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
}

interface IMeta {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
}

const Layout = (props: IProps) => {
  const { children, title, description, ...customMeta } = props;
  const router = useRouter();
  const { NEXT_PUBLIC_DOMAIN_NAME } = process.env;

  const meta: IMeta = {
    title: `Hamza Miloud Amar – ${title}`,
    description: description,
    image: 'https://miloudamar.com/myImage.jpg',
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
  description: `Full Stack Developer how like to work React , Next , Css , Node `,
};

export default Layout;
