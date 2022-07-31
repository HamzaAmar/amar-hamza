import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--contact">
        <h2>Thank you</h2>
        <p>
          Hello thank you for the visit if you like my website and you
          want to see more staff about me please follow me in social
          media
        </p>
      </div>

      <div className="footer--subscription">
        <h2>Join the Newsletter</h2>
        <p>Please subscribe to our web site to see all new stuff</p>
      </div>
      <div className="footer--copy-right">
        <p>
          © {new Date().getFullYear()} Hamza Miloud Amar. All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};
export default Footer;
