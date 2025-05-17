import type { Metadata } from "next";
import type React from "react";

import { GoogleAnalytics } from "@next/third-parties/google";

import { DOMAIN } from "@constants/domain";

import "../scss/main.scss";
import { Footer, Header } from "./_components";
import NextThemeProvider from "./_components/theme-provider";

type Meta = {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
};
type LayoutProps = {
  children: React.ReactNode;
} & Meta;

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
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
    default: "Hamza Miloud Amar",
    template: "%s | Hamza Miloud Amar",
  },
  keywords: [
    "JavaScript",
    "TypeScript",
    "React",
    "Performance",
    "Career",
    "Software Development",
    "Hamza Miloud Amar blog",
  ],
  description:
    "Freelancer Frontend Developer & Creator of Pillar UI | Passionate about building accessible, and UX-friendly Design Systems | React, Next,CSS,Remix",
  openGraph: {
    title: "Hamza Miloud Amar",
    description:
      "Freelancer Frontend Developer & Creator of Pillar UI | Passionate about building accessible, and UX-friendly Design Systems | React, Next,CSS,Remix",
    url: DOMAIN,
    siteName: "Hamza Miloud Amar",
    locale: "en_US",
    type: "website",
    images: [`${DOMAIN}/favicon/logo-512X512.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    title: "Hamza Miloud Amar",
    card: "summary_large_image",
    description:
      "Freelancer Frontend Developer & Creator of Pillar UI | Passionate about building accessible, and UX-friendly Design Systems | React, Next,CSS,Remix",
    images: [`${DOMAIN}/favicon/logo-512X512.png`],
  },
  verification: {
    google: "t24Qqb8rPTZw8ne0jClmRF1gv0ma1TGuzkvRwE2EoBU",
  },
};
