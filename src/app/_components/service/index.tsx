import React from "react";

import { Flex, Grid, HeroHeading, Text } from "@components/core";

import { SERVICES } from "./services.data";

const services = () => {
  return (
    <section
      aria-labelledby="services-id-section"
      className="section Sf-6"
    >
      <HeroHeading
        heading="Building and improving websites"
        subHeading="Freelance Web Developer Specializing in UX, Performance, and Design Systems"
        section="services"
      />

      <Grid gap="4" columns="1fr 1fr" className="sm_grid-one">
        {SERVICES.map(({ id, title, icon, description }) => (
          <Flex
            gap="4"
            items="start"
            className="sv- l_box-article shows-scroll"
            key={id}
            as="article"
          >
            <div className="sv-I Fc">{icon}</div>
            <div className="Sf-2">
              <Text weight="5" size="5">
                {title}
              </Text>
              <Text size="4" color="b" low>
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
