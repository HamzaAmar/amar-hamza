/* eslint-disable @shopify/jsx-prefer-fragment-wrappers */
import { Flex, Grid, Heading, Text } from '@components/core';
import React from 'react';
import { SERVICES } from './services.data';

const services = () => {
  return (
    <section
      aria-labelledby="services-id-section"
      className="section l_flow__lg"
    >
      {/* <Heading id="services-id-section">Services</Heading> */}

      <Heading weight="medium">
        <Text contrast="low" transform="uppercase" color="primary">
          Insightful Service Overview
        </Text>
        Explore the diverse range of web services that I offer.
      </Heading>

      <Grid gap="lg" columns="1fr 1fr" className="sm_grid-one">
        {SERVICES.map(({ id, title, icon, description }) => (
          <Flex
            gap="sm"
            items="start"
            className="service l_box-article"
            key={id}
            as="article"
          >
            <Flex
              justify="center"
              items="center"
              className="service__icon"
            >
              {icon}
            </Flex>
            <div className="l_flow__2xs">
              <Heading as="h3" weight="normal" size="xs">
                {title}
              </Heading>
              <Text size="sm" color="slate" contrast="low">
                {description}
              </Text>
            </div>
          </Flex>
        ))}
      </Grid>
    </section>
  );
};

export default services;
