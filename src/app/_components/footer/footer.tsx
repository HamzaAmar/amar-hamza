import { Flex, Grid, Heading, Social, Text } from '@components/core';
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <Grid
        columns="1fr 1fr"
        className="footer--hero-content md_grid-one"
      >
        <div className="footer--contact l_flow__md l_box">
          <div className="l_flow__xs">
            <Heading weight="medium">
              Connect With Me On Social Media
            </Heading>
            <Text color="slate" contrast="low">
              I appreciate your visit to my website. If you find my
              work interesting and would like to know more about me,
              please consider following me on social media. Thank you!
            </Text>
          </div>
          <Social
            className="about__social-media"
            // direction="vertical"
          />
        </div>

        <Flex
          items="center"
          justify="center"
          direction="column"
          className="footer--subscription"
        >
          <Heading>Join the Newsletter</Heading>
          <Text color="slate" contrast="low" align="center">
            Please subscribe to our web site to see all new stuff
          </Text>
        </Flex>
      </Grid>
      <Flex
        justify="center"
        items="center"
        className="footer--copy-right"
      >
        <Text>
          © {new Date().getFullYear()} Hamza Miloud Amar. All Rights
          Reserved
        </Text>
      </Flex>
    </div>
  );
};
export default Footer;
