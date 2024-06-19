import React from 'react';
import { GoogleTagManager } from '@next/third-parties/google';
import { Footer, Header } from './_components';
import '../scss/main.scss';
import { NextThemeProvider } from './_components/themeProvider';
import { Metadata } from 'next';
import { DOMAIN } from '@constants/domain';

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
  const { children } = props;
  const { GA_TRACKING_ID } = process.env;

  // const meta: Meta = {
  //   title: `${title} – Hamza Miloud Amar`,
  //   description,
  //   image: `https://miloudamar.com/${image}`,
  //   ...customMeta,
  // };

  {
    /* <Head>
        <meta name="robots" content="follow, index" />
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
      </Head> */
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId={GA_TRACKING_ID!} />
      <body>
        <NextThemeProvider>
          <Header />
          <main className="blog--container">{children}</main>
          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  );
};

export default Layout;

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: 'Hamza Miloud Amar',
    template: '%s | Hamza Miloud Amar',
  },
  description:
    'Frontend Developer & Creator of Pillar UI | Passionate about building elegant, accessible, and UX-friendly Design Systems with React | React, Next,CSS,Remix',
  openGraph: {
    title: 'Hamza Miloud Amar',
    description:
      'Frontend Developer & Creator of Pillar UI | Passionate about building elegant, accessible, and UX-friendly Design Systems with React | React, Next,CSS,Remix',
    url: DOMAIN,
    siteName: 'Hamza Miloud Amar',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    title: 'Hamza Miloud Amar',
    card: 'summary_large_image',
  },
};
