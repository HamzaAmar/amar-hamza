import React from 'react';
import { Social } from '@components/ui';
import Link from 'next/link';
import { Arrow, File } from '@components/icons';
import { Button, Flex, Heading, Text } from '@components/core';

const About = () => {
  return (
    <div className="about--container">
      <div className="about--circles" />
      <div className="about--circles about--circles__revert" />
      <Flex items="center" justify="center" className="about">
        <Social
          className="about__social-media"
          direction="vertical"
        />
        <div className="about--info  center l_flow">
          <Heading as="h1" className="about--name">
            Hamza Amar
          </Heading>
          <p className="about--description">
            Experienced Frontend Developer | Passionate about building
            elegant, accessible, and UX-friendly Design Systems with
            React | Skilled in React Next Remix | CSS enthusiast |
            Lover of Clean & Maintainable CSS | Always learning and
            growing.
          </p>
          <Flex items="center" justify="center" className="l_cluster">
            <Button size="lg" as={Link} href="/contact">
              Hire Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              icon={<File />}
              as={Link}
              href="/resume"
            >
              Resume
            </Button>
          </Flex>
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
    </div>
  );
};

export default About;
