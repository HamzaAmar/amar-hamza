import { Heading, Tag, Text } from '@components/core';
import { Github, Globe } from '@components/icons';
import { PROJECTS } from '@constants/project';
import React from 'react';

const Projects = () => {
  const imageRef = React.useRef(null);

  return (
    <section className="section l_flow">
      <Heading>Projects</Heading>
      <div className="projects l_flow">
        {PROJECTS.map(
          ({ id, img, title, description, technologies, links }) => (
            <div className="project l_cluster" key={id}>
              <div className="project--image-container">
                <img
                  className="project--image"
                  src={img.src}
                  alt={img.alt}
                  ref={imageRef}
                />
              </div>
              <div className="project--info l_flow">
                <div className="project--header l_cluster">
                  <Heading>{title}</Heading>
                  <div className="resume__projects l_cluster">
                    {links.map((link) => {
                      const icon =
                        link.title.toLowerCase() === 'site' ? (
                          <Globe width="20" />
                        ) : (
                          <Github width="20" />
                        );
                      return (
                        <a
                          key={link.site}
                          className="project--link l_cluster"
                          href={link.site}
                        >
                          {icon}
                          <span>{link.title}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
                <Text>{description}</Text>
                <ul className="l_cluster">
                  {technologies.map((technology) => (
                    <Tag
                      key={technology}
                      color="primary"
                      title={technology}
                      size="sm"
                    />
                  ))}
                </ul>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default Projects;
