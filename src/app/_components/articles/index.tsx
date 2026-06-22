"use client";

import {
  Grid,
  HeroHeading,
} from "@components/core";

import type { ArticlesProps } from "./article.type";

import { Article } from "./article";

const articles = ({ posts, description }: ArticlesProps) => {
  return (
    <section
      aria-labelledby="articles-id-section"
      className="sct Sf-6"
    >
      <HeroHeading
        heading="Join Me on My Web Development Journey"
        subHeading="Sharing insights and knowledge gained from my experiences on web development."
        section="articles"
        description={description}
      />
      <Grid
        columns="1fr 1fr 1fr"
        gap="5"
        className="sm_grid-one md_grid-two"
      >
        {posts.map(post => (
          <Article key={post.metadata.slug} {...post.metadata} />
        ))}
      </Grid>
    </section>
  );
};

export default articles;
