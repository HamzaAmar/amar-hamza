import React from 'react';
// import { FiTrendingUp, FiZap, FiDatabase, FiAirplay } from 'react-icons/fi'
import style from './Service.module.css';

const services = () => {
  return (
    <div className={style.container}>
      <div className={style.service}>
        {/* <FiZap size={35} /> */}
        icons
        <h1>Fast</h1>
        <p>
          create High performent website and improve performance to
          website nice score and work with the latest technology
        </p>
      </div>
      <div className={style.service}>
        {/* <FiTrendingUp size={35} /> */}
        icons
        <h1>SEO</h1>
        <p>
          hello world my name is hamza miloud amar i am a full stack
          javascript developper hello world
        </p>
      </div>
      <div className={style.service}>
        {/* <FiDatabase size={35} /> */}
        icons
        <h1>BackEnd </h1>
        <p>
          hello world my name is hamza miloud amar i am a full stack
          javascript developper hello world
        </p>
      </div>
      <div className={style.service}>
        {/* <FiAirplay size={35} /> */}
        icons
        <h1>FrontEnd </h1>
        <p>
          hello world my name is hamza miloud amar i am a full stack
          javascript developer hello world
        </p>
      </div>
    </div>
  );
};

export default services;
