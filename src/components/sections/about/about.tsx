import React from 'react';
import { Social } from '@components/ui';
import Link from 'next/link';
import { Arrow, File } from '@components/icons';
import { Button, Flex, Heading, Text } from '@components/core';

const About = () => {
  return (
    <Flex items="center" justify="center" className="about">
      <Social className="about__social-media" direction="vertical" />
      <div className="about--info  center l_flow">
        <Heading as="h1" weight="medium" className="about--name">
          Hamza Amar
        </Heading>
        <p className="about--description">
          Senior Front End Web Developer am interest In building
          Design System with React that is UX friendly and Accessible
          , I also like to work with{' '}
          <span className="about__highlight">React</span>{' '}
          <span className="about__highlight">Next </span>
          <span className="about__highlight">Remix</span>
          and I love Write{' '}
          <span className="about__highlight">CSS </span>,
        </p>
        <div className="l_cluster">
          <Link href="/contact" passHref>
            <Button as="a">Hire Me</Button>
          </Link>
          <Link href="/resume" passHref>
            <Button variant="outline" as="a" icon={<File />}>
              Resume
            </Button>
          </Link>
        </div>
      </div>
      <div className="about-title about-title__top">
        <p>I am a freelance web developer</p>
      </div>

      <div className="about-title__bottom about-title">
        <p>Am Available</p>
      </div>
      <div className="about-title__right">
        <p>
          scroll Down <Arrow width="1em" strokeWidth={3} />
        </p>
      </div>
    </Flex>
  );
};

export default About;
