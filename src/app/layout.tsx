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
  const { NEXT_PUBLIC_GA_ID } = process.env;

  console.log(
    '////////////////////////////////////////////////////////////////////////////////////////////////////////',
    '////////////////////////////////////////////////////////////////////////////////////////////////////////',
    'Nice to meet you ',
    NEXT_PUBLIC_GA_ID,
    'Nice to meet you ',
    process.env.NEXT_PUBLIC_GA_ID,
    '////////////////////////////////////////////////////////////////////////////////////////////////////////',
    '////////////////////////////////////////////////////////////////////////////////////////////////////////',
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId={NEXT_PUBLIC_GA_ID!} />
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
  verification: {
    google: 't24Qqb8rPTZw8ne0jClmRF1gv0ma1TGuzkvRwE2EoBU',
  },
};
