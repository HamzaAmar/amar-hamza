import React from 'react';
import Link from 'next/link';
import { Arrow, File } from '@components/icons';
import { Button, Heading, Social, Text } from '@components/core';

const About = () => {
  return (
    <div className="h-ab-cnt u_center">
      <div className="h-ab-crl" />
      <div className="h-ab-crl h-ab-crl_revert" />
      <div className="h-ab u_center">
        <Social className="h-ab-media" direction="vertical" />
        <div className="h-ab--info  center l_f_sm">
          <h1 className="h-ab-name">
            Miloud Amar
            <span className="u_sr-only">
              A freelancer web developer
            </span>
          </h1>
          <Text
            size="lg"
            color="b"
            contrast="low"
            leading="lg"
            transform="capitalize"
          >
            Experienced Frontend Developer | Passionate about building
            elegant, accessible, and UX-friendly Design Systems with
            React | Skilled in React Next Remix | CSS enthusiast |
            Lover of Clean & Maintainable CSS | Always learning and
            growing.
          </Text>
          <div className="l_cluster u_center">
            <Button as={Link} href="/contact">
              Hire Me
            </Button>
            <Button
              variant="outline"
              icon={<File />}
              as={Link}
              href="/resume"
            >
              Resume
            </Button>
          </div>
        </div>
        <div className="h-ab-ttl h-ab-ttlT">
          <Text size="sm">I am a freelance web developer</Text>
        </div>

        <div className="h-ab-ttlB h-ab-ttl">
          <p>Am Available</p>
        </div>
        <div className="h-ab-ttlR">
          <p>
            scroll Down <Arrow width="1em" strokeWidth={3} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
