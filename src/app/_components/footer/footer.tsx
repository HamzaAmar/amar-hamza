import { Flex, Grid, Heading, Social, Text } from '@components/core';
import React from 'react';

const Footer = () => {
  return (
    <div className="f-o">
      <Grid columns="1fr 1fr" className="f-o-hero md_grid-one">
        <div className="f-o-cnt l_f_md l_box">
          <div className="l_f_xs">
            <Heading weight="medium">
              Connect With Me On Social Media
            </Heading>
            <Text color="b" contrast="low">
              I appreciate your visit to my website. If you find my
              work interesting and would like to know more about me,
              please consider following me on social media. Thank you!
            </Text>
          </div>
          <Social />
        </div>

        <Flex items="center" justify="center" direction="column">
          <Heading>Join the Newsletter</Heading>
          <Text color="b" contrast="low" align="center">
            Please subscribe to our web site to see all new stuff
          </Text>
        </Flex>
      </Grid>
      <Flex justify="center" items="center" className="f-o-cpR">
        <Text>
          © {new Date().getFullYear()} Hamza Miloud Amar. All Rights
          Reserved
        </Text>
      </Flex>
    </div>
  );
};
export default Footer;
