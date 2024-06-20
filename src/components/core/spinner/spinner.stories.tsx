import { Meta , StoryObj} from '@storybook/react';

import { Flex, Spinner } from '..';

const meta:Meta<typeof Spinner> = {
  title: 'Components/Core/Spinner',
  component: Spinner,
} 

export default meta;


type Story = StoryObj<typeof Spinner>

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
      <Spinner color="danger" />
      <Spinner color="warning" />
      <Spinner color="success" />
      <Spinner />
    </Flex>
  );
};

export const playground:Story = {
  args: {},
};
