import React from 'react';
import style from './skill.module.css';

import { skills } from '../../../constants';
import { CircleProgress } from '..';

const SkillsContainer = () => {
  return (
    <div className={style.container}>
      {skills.map(([skill, lists]) => {
        return (
          <div className={style.skill}>
            <h1 className={style.skillTitle}> {skill} </h1>
            <ul className={style.skillsList}>
              {lists.map((list) => {
                return (
                  <li className={style.skillItem} key={list.title}>
                    <div className={style.skillContainer}>
                      {list.icon ? (
                        <div className={style.iconContainer}>
                          <div className={style.icon}>
                            {list.icon}
                          </div>
                        </div>
                      ) : null}
                      <h2 className={style.skillIconTitle}>
                        {list.title}
                      </h2>
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
      })}
    </div>
  );
};

export default SkillsContainer;
