/* eslint-disable @shopify/jsx-prefer-fragment-wrappers */
import {
  Flex,
  Grid,
  Heading,
  HeroHeading,
  Text,
} from '@components/core';
import React from 'react';
import { SERVICES } from './services.data';

const services = () => {
  return (
    <section
      aria-labelledby="services-id-section"
      className="section l_flow__lg"
    >
      <HeroHeading
        heading="Insightful Service Overview"
        subHeading="Explore the diverse range of web services that I offer."
        section="services"
      />

      <Grid gap="lg" columns="1fr 1fr" className="sm_grid-one">
        {SERVICES.map(({ id, title, icon, description }) => (
          <Flex
            gap="sm"
            items="start"
            className="service l_box-article"
            key={id}
            as="article"
          >
            <div className="service__icon u_center">{icon}</div>
            <div className="l_flow__3xs">
              <Heading as="h3" weight="black" size="xs">
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
