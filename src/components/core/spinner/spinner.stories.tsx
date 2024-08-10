import { Meta, StoryObj } from '@storybook/react';

import { Flex, Spinner } from '..';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Core/Spinner',
  component: Spinner,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const SpinnerSize = () => {
  return (
    <Flex gap="sm" items="center">
      <Spinner />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </Flex>
  );
};

export const SpinnerColor = () => {
  return (
    <Flex gap="sm">
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
