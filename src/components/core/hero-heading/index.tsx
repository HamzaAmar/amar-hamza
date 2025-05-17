import React from "react";

import type { HeroHeadingProps } from "./hero-heading.type";

import { Text } from "../typography";

export const HeroHeading = ({
  description,
  heading,
  subHeading,
  section,
}: HeroHeadingProps) => {
  return (
    <div className="Sf-1">
      <Text
        type="heading"
        className="Sf-2 text-scroll"
        size="5"
        weight="5"
        id={`${section}-id-section`}
        as="h2"
      >
        <Text
          className="text-scroll"
          transform="uppercase"
          color="p"
          low
        >
          {heading}
        </Text>
        <span className="text-scroll">{subHeading}</span>
      </Text>

      {description && (
        <Text className="text-scroll" color="b" size="4" low>
          {description}
        </Text>
      )}
    </div>
  );
};
