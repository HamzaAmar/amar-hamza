"use client";

import { Button, Flex, Grid, HeroHeading, Tag, Text } from "@components/core";
import { Figma, Github, Globe } from "@components/icons";
import type { Project as ProjectType } from "@type/project";
import { c } from "@utils/classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ICONS = {
  site: <Globe width="20" />,
  design: <Figma width="20" />,
  github: <Github width="20" />,
} satisfies Record<string, React.ReactNode>;

/*
====================================================================================================
  Project Item Component Section
====================================================================================================
*/

const Project = ({ image, title, links, excerpt, technologies, slug }: ProjectType) => {
  const imageRef = React.useRef(null);

  return (
    <Flex direction="column" gap="2" className="h-pr l_box-article projects-scroll" as="article" aria-labelledby={slug}>
      <div className="h-pr-imgC">
        <Image
          className="h-pr-img"
          src={image.src}
          alt={image.alt}
          ref={imageRef}
          loading="lazy"
          placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0Cdx0BgAD/QIFYj/1qAAAAABJRU5ErkJggg=="
          fill
        />
      </div>
      <div className="Sf-2">
        <Flex gap="2" className="resume__projects l_cluster">
          {links.map((link) => {
            const type = link.title.toLowerCase() as keyof typeof ICONS;
            return (
              <a key={link.site} className="h-pr-lnk Fc" href={link.site}>
                {ICONS[type]}
                <span>{link.title}</span>
              </a>
            );
          })}
        </Flex>
        <Text id={slug} weight="5" size="5">
          {title}
        </Text>
      </div>
      <Text color="b" low size="4">
        {excerpt}
      </Text>
      <Flex className="h-pr-tags" gap="3" wrap>
        {technologies.map((technology) => (
          <Tag key={technology} color="p" title={technology} size="4" />
        ))}
      </Flex>

      <Button as={Link} href={`project/${slug}`}>
        Project Details
      </Button>
    </Flex>
  );
};

/*
====================================================================================================
  Project List Component Section
====================================================================================================
*/

const Projects = ({ className, projects }: { className?: string; projects?: ProjectType[] }) => {
  return (
    <section aria-labelledby="projects-id-section" className="section Sf-6">
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
        {projects?.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </Grid>
    </section>
  );
};

export default Projects;
