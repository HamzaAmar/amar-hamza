import { Facebook, Github, Message } from '@components/icons';
import { Meta, StoryFn } from '@storybook/react';

import { Button, Flex } from '../..';

const meta: Meta<typeof Button> = {
  title: 'Components/Core/Button',
  component: Button,
  args: {
    children: 'Connect',
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
};

export default meta;

export const ButtonsColor = () => (
  <Flex gap="sm">
    <Button color="d">Connect</Button>
    <Button color="b">Connect</Button>
    <Button color="s">Connect</Button>
    <Button color="w">Connect</Button>
  </Flex>
);

export const ButtonsVariant = () => (
  <Flex items="center" gap="sm">
    <Button variant="solid">Connect</Button>
    <Button variant="soft">Connect</Button>
    <Button variant="outline">Connect</Button>
    <Button variant="text">Connect</Button>
  </Flex>
);

export const ButtonsSize = () => (
  <Flex items="center" gap="sm">
    <Button size="xs">Connect</Button>
    <Button size="sm">Connect</Button>
    <Button size="md">Connect</Button>
    <Button size="lg">Connect</Button>
    <Button size="xl">Connect</Button>
  </Flex>
);

export const ButtonsIcons = () => (
  <Flex items="center" gap="sm">
    <Button icon={<Message />} size="xs">
      Connect
    </Button>
    <Button icon={<Message />} size="sm">
      Connect
    </Button>
    <Button icon={<Message />} size="md">
      Connect
    </Button>
    <Button icon={<Message />} size="lg">
      Connect
    </Button>
    <Button icon={<Message />} size="xl">
      Connect
    </Button>
  </Flex>
);

export const Playground = {};
