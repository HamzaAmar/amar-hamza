import React from 'react';
import { Heading, Text } from '../typography';
import type { HeroHeadingProps } from './heroHeading.type';

export const HeroHeading = ({
  description,
  heading,
  subHeading,
  section,
}: HeroHeadingProps) => {
  return (
    <div className="Sf-1">
      <Heading
        className="Sf-2 text-scroll"
        size="5"
        weight="5"
        id={`${section}-id-section`}
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
      </Heading>

      {description && (
        <Text className="text-scroll" color="b" size="4" low>
          {description}
        </Text>
      )}
    </div>
  );
};
