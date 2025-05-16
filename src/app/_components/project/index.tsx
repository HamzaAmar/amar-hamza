"use client";

import Image from "next/image";
import React, { useId } from "react";

import type { ProjectType } from "@constants/project/project.type";

import { Flex, Grid, HeroHeading, Tag, Text } from "@components/core";
import { Figma, Github, Globe } from "@components/icons";
import { PROJECTS } from "@constants/project";
import { c } from "@utils/classnames";

const ICONS = {
  site: <Globe width="20" />,
  figma: <Figma width="20" />,
  github: <Github width="20" />,
} satisfies Record<string, React.ReactNode>;

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
}: Omit<ProjectType, "id">) => {
  const imageRef = React.useRef(null);
  const id = `project-${useId()}-id`;

  return (
    <Flex
      direction="column"
      gap="4"
      className="h-pr l_box-article projects-scroll"
      as="article"
      aria-labelledby={id}
    >
      <div className="h-pr-imgC">
        <Image
          className="h-pr-img"
          src={img.src}
          alt={img.alt}
          ref={imageRef}
          loading="lazy"
          placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0Cdx0BgAD/QIFYj/1qAAAAABJRU5ErkJggg=="
          fill
        />
      </div>
      <Flex items="center" justify="between" gap="3">
        <Text id={id} weight="5" size="5">
          {title}
        </Text>
        <div className="resume__projects l_cluster">
          {links.map((link) => {
            const type
              = link.title.toLowerCase() as keyof typeof ICONS;
            return (
              <a
                key={link.site}
                className="h-pr-lnk Fc"
                href={link.site}
              >
                {ICONS[type]}
                <span>{link.title}</span>
              </a>
            );
          })}
        </div>
      </Flex>
      <Text color="b" low size="4">
        {description}
      </Text>
      <Flex className="h-pr-tags" gap="3" wrap>
        {technologies.map(technology => (
          <Tag
            key={technology}
            color="p"
            title={technology}
            size="4"
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
      className="section Sf-6"
    >
      <HeroHeading
        heading="Innovative Web Projects"
        subHeading="Explore my portfolio of diverse and impactful web projects."
        section="projects"
      />
      <Grid
        gap="6"
        columns="1fr 1fr 1fr"
        {...c("md_grid-two sm_grid-one", {
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
