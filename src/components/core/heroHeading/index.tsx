import React from 'react';
import { Heading, Text } from '../typography';
import { HeroHeadingProps } from './heroHeading.type';

export const HeroHeading = ({
  description,
  heading,
  subHeading,
  section,
}: HeroHeadingProps) => {
  return (
    <div className="l_f_3xs">
      <Heading
        className="l_f_2xs"
        size="md"
        weight="medium"
        id={`${section}-id-section`}
      >
        <Text transform="uppercase" color="p" contrast="low">
          {heading}
        </Text>
        {subHeading}
      </Heading>

      {description && (
        <Text color="b" size="sm" contrast="low">
          {description}
        </Text>
      )}
    </div>
  );
};
