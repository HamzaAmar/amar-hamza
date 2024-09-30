import React from 'react';
import { getBlogPostsWithLimit } from 'api/blog';
import {
  About,
  Articles,
  Project,
  Service,
  Skill,
} from './_components';
import type { Metadata } from 'next';
import type { Person } from 'schema-dts';

const IndexPage = async () => {
  const posts = getBlogPostsWithLimit(8);

  const JSON_LD: Person = {
    '@type': 'Person',
    name: 'Hamza Miloud Amar',
    url: 'https://www.miloudamar.com/',
    image: 'https://www.miloudamar.com/me.jpg', // Update with your actual profile image URL
    sameAs: [
      'https://www.linkedin.com/in/hamza-miloud-amar-463b24167',
      'https://github.com/HamzaAmar',
      'https://x.com/HamzaMiloudAma1',
      'https://www.facebook.com/hamza.amar.351',
    ],
    email: 'hamzamiloudamar@gmail.com',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hamzamiloudamar@gmail.com',
      telephone: '+212630371320',
    },
    jobTitle: 'Senior Frontend web Developer',
    knowsAbout: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Remix.js',
      'Node.js',
      'Express.js',
    ],
    gender: 'Male',
    knowsLanguage: [
      {
        '@type': 'Language',
        name: 'English',
      },
      {
        '@type': 'Language',
        name: 'French',
      },
      {
        '@type': 'Language',
        name: 'Arabic',
      },
    ],
    description:
      'Hamza Miloud Amar is an Experienced Frontend Developer Passionate about building elegant, accessible, and UX-friendly Design Systems with React, Skilled in React Next Remix ,and CSS enthusiast | Lover of Clean & Maintainable CSS | Always learning and growing.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Marrakech',
      addressRegion: 'Marrakech-Safi',
      addressCountry: 'Morocco',
    },
  };

  return (
    <div className="home">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            ...JSON_LD,
          }),
        }}
      />
      <About />
      <Service />
      <Skill />
      <Articles posts={posts} />
      <Project />
    </div>
  );
};

export default IndexPage;

export const metadata: Metadata = {
  title: 'Home Page Freelancer Web Developer | Hamza Miloud Amar',
};
