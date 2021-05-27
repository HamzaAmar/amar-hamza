import React from 'react';
import style from './Project.module.css';

const Projects = () => {
  const imageRef = React.useRef(null);

  return (
    <div className={style.container}>
      {new Array(12).fill(9).map((_, index) => (
        <div className={style.card} key={index}>
          <div className={style.imageContainer}>
            <img
              className={style.image}
              src={`https://picsum.photos/id/${121 + index}/400/2000`}
              ref={imageRef}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
