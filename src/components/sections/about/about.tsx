import React from 'react';
import { Social } from '@components/ui';
import Link from 'next/link';
import { File } from '@components/icons';
import { Button, Text } from '@components/core';

const About = () => {
  return (
    <div className="about u_bothCenter">
      <Social className="about__socialMedia" direction="vertical" />
      <div className="about__info  center l_flow">
        <h1 className="about__name">Hamza Amar</h1>
        <Text variant="body2">
          Senior Front End Developer I Like to write
          <span className="about__highlight"> CSS</span>,
          <span className="about__highlight"> Typescript</span> and
          <span className="about__highlight"> React</span> I
        </Text>
        <div className="l_cluster">
          <Link href="/contact" passHref>
            <Button as="a">Hire Me</Button>
          </Link>
          <Link href="/resume" passHref>
            <Button
              variant="outline"
              as="a"
              icon={<File width={40} stroke="white" />}
            >
              Resume
            </Button>
          </Link>
        </div>
      </div>
      <div className="about-title about-title__top">
        <Text variant="caption">I am a freelance web developer</Text>
      </div>

      <div className="about-title__bottom about-title">
        <Text variant="caption">Am Available</Text>
      </div>
      <div className="about-title__right">
        <p>scroll Down</p>
      </div>
    </div>
  );
};

export default About;
