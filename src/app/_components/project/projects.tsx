'use client';

/* eslint-disable import/extensions */
import React, { useId } from 'react';
import {
  Flex,
  Grid,
  Heading,
  HeroHeading,
  Tag,
  Text,
} from '@components/core';
import { PROJECTS } from '@constants/project';
import { Github, Globe } from '@components/icons';
import type { ProjectType } from '@constants/project/project.type';
import { classnames } from '@utils/classnames';
import Image from 'next/image';

/*
====================================================================================================
  Project Item Component Section
====================================================================================================
*/

const Project = ({
  img,
  title,
  links,
  description,
  technologies,
}: Omit<ProjectType, 'id'>) => {
  const imageRef = React.useRef(null);
  const id = `project-${useId()}-id`;

  return (
    <Flex
      direction="column"
      gap="sm"
      className="project l_box-article"
      as="article"
      aria-labelledby={id}
    >
      <div className="project--image-container">
        <Image
          className="project--image"
          src={img.src}
          alt={img.alt}
          ref={imageRef}
          loading="lazy"
          placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0Cdx0BgAD/QIFYj/1qAAAAABJRU5ErkJggg=="
          fill
        />
      </div>
      <Flex items="center" justify="between" gap="xs">
        <Text id={id} weight="medium" size="md">
          {title}
        </Text>
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
      </Flex>
      <Text color="slate" contrast="low" size="sm">
        {description}
      </Text>
      <Flex className="project--technologies" gap="xs" wrap>
        {technologies.map((technology) => (
          <Tag
            key={technology}
            color="primary"
            title={technology}
            size="sm"
          />
        ))}
      </Flex>
    </Flex>
  );
};

/*
====================================================================================================
  Project List Component Section
====================================================================================================
*/

const Projects = ({ className }: { className?: string }) => {
  return (
    <section
      aria-labelledby="projects-id-section"
      className="section l_flow__lg"
    >
      <HeroHeading
        heading="Innovative Web Projects"
        subHeading="Explore my portfolio of diverse and impactful web projects."
        section="projects"
      />
      <Grid
        gap="lg"
        columns="1fr 1fr 1fr"
        {...classnames(`md_grid-two sm_grid-one`, {
          [className!]: className,
        })}
      >
        {PROJECTS.map(({ id, ...rest }) => (
          <Project key={id} {...rest} />
        ))}
      </Grid>
    </section>
  );
};

export default Projects;
