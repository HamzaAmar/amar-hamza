import { Flex } from '@components/core/flex';
import { Facebook, Message } from '@components/icons';
import { type Meta, StoryFn } from '@storybook/react';

import { IconButton } from '..';

export default {
  title: 'Components/Core/IconButton',
  component: IconButton,
  args: {
    icon: <Facebook width="20" />,
    title: 'facebook',
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof IconButton>;

export const IconButtonsSize = () => (
  <Flex items="center" gap="4">
    <IconButton icon={<Message />} size="4" title="Connect" />
    <IconButton icon={<Message />} size="5" title="Connect" />
    <IconButton icon={<Message />} size="6" title="Connect" />
  </Flex>
);

export const Playground = {};
