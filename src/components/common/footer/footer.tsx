import { Flex, Grid, Heading, Text } from '@components/core';
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <Grid
        columns="1fr 1fr"
        className="footer--hero-content md_grid-one"
      >
        <Flex
          items="center"
          justify="center"
          direction="column"
          className="footer--contact l_box"
        >
          <Heading>Thank you</Heading>
          <Text color="slate" contrast="low" align="center">
            Hello thank you for the visit if you like my website and
            you want to see more staff about me please follow me in
            social media
          </Text>
        </Flex>

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
