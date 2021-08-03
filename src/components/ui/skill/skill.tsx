import React, { ReactNode } from 'react';
import style from './skill.module.css';

import { skills } from '../../../constants';
import { CircleProgress } from '..';

interface IList {
  title: string;
  level: number;
  icon: ReactNode;
}

const SkillsContainer = () => {
  return (
    <div className={style.container}>
      <ul className={style.skillsList}>
        {skills.map((list) => {
          return (
            <li className={style.skillItem} key={list.title}>
              <div className={style.skillContainer}>
                {list.icon ? (
                  <div className={style.iconContainer}>
                    <div className={style.icon}>{list.icon}</div>
                  </div>
                ) : null}
                <h2 className={style.skillIconTitle}>{list.title}</h2>
              </div>
              <div className={style.progressContainer}>
                <CircleProgress
                  width="100%"
                  height="100%"
                  color="orange"
                  lvl={list.level}
                >
                  <tspan>{list.level}%</tspan>
                </CircleProgress>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsContainer;
