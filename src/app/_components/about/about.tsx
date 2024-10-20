import React from 'react';
import Link from 'next/link';
import { Arrow, File } from '@components/icons';
import { Button, Heading, Social, Text } from '@components/core';

const About = () => {
  return (
    <div className="ab-C Fc">
      <div className="ab-B" />
      <div className="ab-B ab-B-revert" />
      <div className="ab- Fc">
        <Social className="ab-M" direction="vertical" />
        <div className="ab-I  center Sf-4">
          <h2 className="ab-N">
            Miloud Amar
            <span className="Sr">A freelancer web developer</span>
          </h2>
          <Text
            size="6"
            color="b"
            low
            leading="lg"
            transform="capitalize"
          >
            Experienced Frontend Developer | Passionate about building
            elegant, accessible, and UX-friendly Design Systems with
            React | Skilled in React Next Remix | CSS enthusiast |
            Lover of Clean & Maintainable CSS | Always learning and
            growing.
          </Text>
          <div className="l_cluster Fc">
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
        <div className="ab-T ab-TT">
          <Text size="4">I am a freelance web developer</Text>
        </div>

        <div className="ab-TB ab-T">
          <p>Am Available</p>
        </div>
        <div className="ab-TR">
          <p>
            scroll Down <Arrow width="1em" strokeWidth={3} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
