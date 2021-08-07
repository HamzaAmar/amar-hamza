import { BackEnd, Fast, FrontEnd } from '@components/icons';
import React from 'react';
// import { FiTrendingUp, FiZap, FiDatabase, FiAirplay } from 'react-icons/fi'
import styles from './Service.module.css';

const servicesData = [
  {
    id: 1,
    icon: <Fast width={60} />,
    title: 'High Performance',
    description:
      ' create High perforament website and improve performance to website nice score and work with the latest technology',
  },
  {
    id: 3,
    icon: <BackEnd width={60} />,
    title: 'Accessible',
    description:
      'website designed and developed to provide equal access and equal opportunity to people with disabilities',
  },
  {
    id: 4,
    icon: <FrontEnd width={60} />,
    title: 'UI/UX',
    description:
      ' create High perforament website and improve performance to website nice score and work with the latest technology',
  },
];

const services = () => {
  return (
    <div className={styles.container}>
      {servicesData.map(({ id, title, icon, description }) => (
        <div className={styles.service} key={id}>
          <div className={styles.iconContainer}>{icon}</div>

          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default services;
