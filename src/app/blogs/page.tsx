import type { Metadata } from "next";

import Image from "next/image";
import React from "react";

import { Flex, Heading, Text } from "@components/core";
import { getBlogPosts } from "api/blog";
import { Articles } from "app/_components";

export default async function Blog() {
  const posts = getBlogPosts();

  return (
    <div>
      <Flex
        items="center"
        justify="between"
        className="blogs--hero sct"
        wrap
      >
        <div className=" Sf-6" style={{ maxWidth: "80ch" }}>
          <Heading as="h1" size="7" weight="4">
            Frontend Fundamentals & Beyond: Explore In-Depth Articles,
            Step-by-Step Series & Web Development Tips
          </Heading>

          <Text>
            Dive into our
            {" "}
            <strong> frontend development</strong>
            {" "}
            articles and unlock the secrets to building modern,
            interactive websites. From HTML, CSS, and JavaScript
            fundamentals to advanced frameworks like React, our
            in-depth guides and blog series will help you master the
            latest web technologies and create exceptional user
            experiences
          </Text>
        </div>
        <Image
          src="/assets/keyboards.png"
          alt=""
          width={300}
          height={300}
          priority
        />
      </Flex>
      <Articles posts={posts} />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Blogs Posts",
  description:
    "Master Modern Frontend Development: Enhance Your Expertise in JavaScript, TypeScript, React, CSS, Performance Optimization, Accessibility",
};
