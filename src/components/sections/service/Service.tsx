import { Heading, Text } from '@components/core';
import React from 'react';
// import { FiTrendingUp, FiZap, FiDatabase, FiAirplay } from 'react-icons/fi'

import styles from './Service.module.css';
import { SERVICES } from './services.data';

const services = () => {
  return (
    <section className="section flow">
      <Heading variant="hero">Services</Heading>
      <div className="services l_grid">
        {SERVICES.map(({ id, title, icon, description }) => (
          <div className="service l_flow" key={id}>
            <div className="service__icon u_bothCenter u_circle">
              {icon}
            </div>
            <Heading as="h2" size="xs">
              {title}
            </Heading>
            <Text>{description}</Text>
          </div>
        ))}
      </div>
    </section>
  );
};

export default services;
