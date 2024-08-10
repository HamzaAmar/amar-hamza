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
      className="section l_f_lg"
    >
      <HeroHeading
        heading="Building and improving websites"
        subHeading="Freelance Web Developer Specializing in UX, Performance, and Design Systems"
        section="services"
      />

      <Grid gap="lg" columns="1fr 1fr" className="sm_grid-one">
        {SERVICES.map(({ id, title, icon, description }) => (
          <Flex
            gap="sm"
            items="start"
            className="h-sr l_box-article"
            key={id}
            as="article"
          >
            <div className="h-sr-icn u_center">{icon}</div>
            <div className="l_f_2xs">
              <Text weight="medium" size="md">
                {title}
              </Text>
              <Text size="sm" color="b" contrast="low">
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
