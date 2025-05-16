import type { Meta, StoryObj } from "@storybook/react";

import { Flex, Spinner } from "..";

const meta: Meta<typeof Spinner> = {
  title: "Components/Core/Spinner",
  component: Spinner,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const SpinnerSize = () => {
  return (
    <Flex gap="4" items="center">
      <Spinner />
      <Spinner size="4" />
      <Spinner size="5" />
      <Spinner size="6" />
    </Flex>
  );
};

export const SpinnerColor = () => {
  return (
    <Flex gap="4">
      <Spinner color="d" />
      <Spinner color="w" />
      <Spinner color="s" />
      <Spinner />
    </Flex>
  );
};

export const playground: Story = {
  args: {},
};
