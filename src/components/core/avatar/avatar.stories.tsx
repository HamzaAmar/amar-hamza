import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '.';
import { Flex } from '../flex';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Core/Avatar',
  component: Avatar,
  args: {
    title: 'Hamza Milord Amar',
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const ButtonsSize = () => (
  <Flex items="center" gap="4">
    <Avatar image="" title="Hello" size="4" />
    <Avatar image="" title="Hello" size="5" />
    <Avatar image="" title="Hello" size="6" />
  </Flex>
);

export const AvatarImage = () => (
  <Flex items="center" gap="4">
    <Avatar
      image="https://picsum.photos/id/25/100/100"
      title="Hello"
    />

    <Avatar title="Hello" />
  </Flex>
);
