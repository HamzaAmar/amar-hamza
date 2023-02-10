/* eslint-disable @shopify/jsx-prefer-fragment-wrappers */
import { Flex, Heading, Text } from '@components/core';
import React from 'react';
// import { FiTrendingUp, FiZap, FiDatabase, FiAirplay } from 'react-icons/fi'

import styles from './Service.module.css';
import { SERVICES } from './services.data';

const services = () => {
  return (
    <section className="section l_flow">
      <Heading>Services</Heading>
      <div className="services l_grid">
        {SERVICES.map(({ id, title, icon, description }) => (
          <Flex
            gap="sm"
            items="start"
            className="service l_box-article"
            key={id}
          >
            <Flex
              justify="center"
              items="center"
              className="service__icon"
            >
              {icon}
            </Flex>
            <div>
              <Heading as="h2" size="sm">
                {title}
              </Heading>
              <Text size="sm" color="slate" contrast="low">
                {description}
              </Text>
            </div>
          </Flex>
        ))}
      </div>
    </section>
  );
};

export default services;
