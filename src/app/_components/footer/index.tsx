import { Button, Flex, Grid, Social, Text } from '@components/core';
import React from 'react';
import Link from 'next/link';
import { Logo } from '../logo';

const Footer = () => {
  return (
    <div className="fo-">
      <Grid columns="1fr 1fr" className="fo-H md_grid-one">
        <div className="l_box Sf-4">
          <Link aria-label="Go to Home page" href="/">
            <Logo width="120" />
          </Link>

          <Text>
            Experienced Frontend Developer | Passionate about building
            elegant, accessible, and UX-friendly Design Systems with
            React | Skilled in React Next Remix | CSS enthusiast |
            Lover of Clean & Maintainable CSS | Always learning and
            growing.
          </Text>

          <Button as={Link} href="/contact">
            Let's Connect
          </Button>
        </div>
        <div className="fo-C Sf-5 l_box">
          <div className="Sf-3">
            <Text weight="5" size="6">
              Connect With Me On Social Media
            </Text>
            <Text color="b" low>
              I appreciate your visit to my website. If you find my
              work interesting and would like to know more about me,
              please consider following me on social media. Thank you!
            </Text>
          </div>
          <Social />
        </div>
      </Grid>
      <Flex justify="center" items="center" className="fo-R">
        <Text>
          © {new Date().getFullYear()} Hamza Miloud Amar. All Rights
          Reserved
        </Text>
      </Flex>
    </div>
  );
};
export default Footer;
