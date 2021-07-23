// import React, { ReactNode } from 'react';

// import style from './About.module.css';
// import cn from 'classnames';
// import {
//   Facebook,
//   Github,
//   Linkdin,
//   Twitter,
// } from '@components/icons';
// import { Button } from '../form';
// import facebook from '@components/icons/facebook';

// interface IProps {
//   name: string;
//   icon: ReactNode;
// }

// const item = [
//   { id: 1, icon: <Facebook />, name: 'Facebook' },
//   { id: 2, icon: <Twitter />, name: 'Twitter' },
//   { id: 3, icon: <Linkdin />, name: 'Linkdin' },
//   { id: 4, icon: <Github />, name: 'Github' },
// ];

// const Item = ({ name, icon }: IProps) => {
//   return (
//     <li className={style.articleItem}>
//       <div className={style.iconContainer}>
//         <div className={style.mediaIconContainer}>{icon}</div>
//       </div>
//       <div className={style.articleMediaContainer}>
//         <p>{name}</p>
//       </div>
//     </li>
//   );
// };

// const About = () => {
//   return (
//     <div className={style.container}>
//       <div className={cn(style.GreetingName, style.article)}>
//         <div> Hi , i am </div>
//         <h1 className={style.myName}>Hamza Amar</h1>
//       </div>
//       <div className={cn(style.myDescription, style.article)}>
//         <p className={style.paragraphDescription}>
//           i am a full stack javascript developer am good at react ,
//           javascript , css , nodeJs
//         </p>
//       </div>
//       <div className={cn(style.infoContent, style.article)}>
//         <img src="https://picsum.photos/id/111/300/300" />{' '}
//       </div>
//       <div className={cn(style.media, style.article)}>
//         <ul className={style.articleItems}>
//           {item.map(({ id, ...rest }) => (
//             <Item key={id} {...rest} />
//           ))}
//         </ul>
//       </div>

//       <div className={cn(style.connect, style.article)}>
//         <Button size="fluid">see My CV</Button>
//         <Button size="fluid">Download CV</Button>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from 'react';
import styles from './About.module.css';
import {
  Facebook,
  Github,
  Linkdin,
  Twitter,
} from '@components/icons';
import { Button } from '../form';

interface Socials {
  id: number;
  icon: React.ReactNode;
  name: string;
}

const socials: Socials[] = [
  { id: 1, icon: <Facebook />, name: 'Facebook' },
  { id: 2, icon: <Twitter />, name: 'Twitter' },
  { id: 3, icon: <Linkdin />, name: 'Linkdin' },
  { id: 4, icon: <Github />, name: 'Github' },
];

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContent}>
        <div className={styles.description}>
          <h1 className={styles.myName}>Hamza Amar</h1>
          <p className={styles.info}>
            Senior Front End Developer I Like to write Accessible and
            high performance website With{' '}
            <strong className={styles.strong}>React</strong> ,
            <strong className={styles.strong}>HTML</strong> ,
            <strong className={styles.strong}>CSS</strong>
          </p>
          <div className={styles.buttonContainer}>
            <Button>Hire Me</Button>
          </div>
        </div>
      </div>
      <div className={`${styles.title} ${styles.top}`}>
        <p className={styles.topTitle}>
          I am a freelance web developer
        </p>
      </div>

      <div className={`${styles.title} ${styles.bottom}`}>
        <p className={styles.bottomTitle}>Am Available</p>
      </div>
      <div className={styles.right}>
        <p className={styles.rightTitle}>scroll Down</p>
      </div>
      <ul className={styles.socials}>
        {socials.map(({ id, icon }) => (
          <li className={styles.socialItem} key={id}>
            {icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
