import React from 'react';

import style from './footer.module.css';

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.contact}>
        <h2>Thank you</h2>
        <p>
          Hello thank you for the visit if you like my website and you
          want to see more staff about me please follow me in social
          media
        </p>
      </div>

      <div className={style.subscription}>
        <h2>Join the Newsletter</h2>
        <p>Please subscribe to our web site to see all new stuff</p>
      </div>
      <div className={style.copyRight}>
        <p>© 2020 Hamza Miloud Amar. All Rights Reserved</p>
      </div>
    </div>
  );
};
export default Footer;
