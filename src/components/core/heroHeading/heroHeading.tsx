import React from 'react';
import { Heading, Text } from '../typography';
import { HeroHeadingProps } from './heroHeading.type';

const heroHeading = ({
  description,
  heading,
  subHeading,
  section,
}: HeroHeadingProps) => {
  return (
    <div className="l_flow__sm">
      <Heading
        className="l_flow__3xs"
        size="sm"
        weight="medium"
        id={`${section}-id-section`}
      >
        <Text
          size="sm"
          transform="uppercase"
          color="primary"
          contrast="low"
        >
          {heading}
        </Text>
        <p>{subHeading}</p>
      </Heading>

      {description && (
        <Text color="slate" contrast="low">
          {description}
        </Text>
      )}
    </div>
  );
};

export default heroHeading;
