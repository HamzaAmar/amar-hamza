import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Flex } from '.';

export default {
  title: 'COMPONENTS/CORE/Flex',
  component: Flex,
  args: {
    children: 'Hello world',
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args} />
);

export const RegularFlex = Template.bind({});
