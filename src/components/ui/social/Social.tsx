import {
  Facebook,
  Github,
  Instagram,
  Linkdin,
  Twitter,
} from '@components/icons';
import React from 'react';
// import {
//     FaFacebook,
//     FaTwitter,
//     FaLinkedin,
//     FaGithub,
//     FaInstagram,
// } from 'react-icons/fa'
import style from './Social.module.css';

const Social = () => {
  return (
    <ul className={style.navList}>
      <li>
        <Facebook width={20} height={20} />
      </li>
      <li>
        <Twitter width={20} height={20} />
      </li>
      <li>
        <Linkdin width={20} height={20} />
      </li>
      <li>
        <Github width={20} height={20} />
      </li>
      <li>
        <Instagram width={20} height={20} />
      </li>
    </ul>
  );
};

export default Social;
