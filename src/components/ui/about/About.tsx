import React from 'react';

import style from './About.module.css';
import cn from 'classnames';
import { Button } from '@styles/styles';
import {
  Facebook,
  Github,
  Linkdin,
  Twitter,
} from '@components/icons';

const About = () => {
  return (
    <div className={style.container}>
      <div className={cn(style.GreetingName, style.article)}>
        <div> Hi , i am </div>
        <h1 className={style.myName}>Hamza Amar</h1>
      </div>
      <div className={cn(style.myDescription, style.article)}>
        <div className={style.paragraphDescription}>
          i am a full stack javascript developer am good at react ,
          javascript , css , nodeJs
        </div>
      </div>
      <div className={cn(style.infoContent, style.article)}>
        <img src="https://picsum.photos/id/111/300/300" />{' '}
      </div>
      <div className={cn(style.media, style.article)}>
        <ul className={style.articleItems}>
          <li className={style.articleItem}>
            <div className={style.iconContainer}>
              <div className={style.mediaIconContainer}>
                <Facebook />
              </div>
            </div>
            <div className={style.articleMediaContainer}>
              <p>Facebook</p>
            </div>
          </li>
          <li className={style.articleItem}>
            <div className={style.iconContainer}>
              <div className={style.mediaIconContainer}>
                <Twitter />
              </div>
            </div>
            <div className={style.articleMediaContainer}>
              <p>Twitter</p>
            </div>
          </li>
          <li className={style.articleItem}>
            <div className={style.iconContainer}>
              <div className={style.mediaIconContainer}>
                <Linkdin />
              </div>
            </div>
            <div className={style.articleMediaContainer}>
              <p>Linkdin</p>
            </div>
          </li>
          <li className={style.articleItem}>
            <div className={style.iconContainer}>
              <div className={style.mediaIconContainer}>
                <Github />
              </div>
            </div>
            <div className={style.articleMediaContainer}>
              <p>Github</p>
            </div>
          </li>
        </ul>
      </div>

      <div className={cn(style.connect, style.article)}>
        <button className="button">see My CV</button>
        <button className="button">Download CV</button>
      </div>
    </div>
  );
};

export default About;
