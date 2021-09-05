import { PROJECTS } from '@constants/project';
import React from 'react';

import style from './Project.module.css';

const Projects = () => {
  const imageRef = React.useRef(null);

  return (
    <div className={style.container}>
      {PROJECTS.map(({ id, img }) => (
        <div className={style.card} key={id}>
          <div className={style.imageContainer}>
            <img
              className={style.image}
              src={img.src}
              alt={img.alt}
              ref={imageRef}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
