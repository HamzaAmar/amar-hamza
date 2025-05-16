import type { Meta } from "@storybook/react";

import { Message } from "@components/icons";

import { Button, Flex } from "../..";

const meta: Meta<typeof Button> = {
  title: "Components/Core/Button",
  component: Button,
  args: {
    children: "Connect",
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
  <Flex gap="4">
    <Button color="d">Connect</Button>
    <Button color="b">Connect</Button>
    <Button color="s">Connect</Button>
    <Button color="w">Connect</Button>
  </Flex>
);

export const ButtonsVariant = () => (
  <Flex items="center" gap="4">
    <Button variant="solid">Connect</Button>
    <Button variant="soft">Connect</Button>
    <Button variant="outline">Connect</Button>
    <Button variant="text">Connect</Button>
  </Flex>
);

export const ButtonsSize = () => (
  <Flex items="center" gap="4">
    <Button size="4">Connect</Button>
    <Button size="5">Connect</Button>
    <Button size="6">Connect</Button>
  </Flex>
);

export const ButtonsIcons = () => (
  <Flex items="center" gap="4">
    <Button icon={<Message />} size="4">
      Connect
    </Button>
    <Button icon={<Message />} size="5">
      Connect
    </Button>
    <Button icon={<Message />} size="6">
      Connect
    </Button>
  </Flex>
);

export const Playground = {};
