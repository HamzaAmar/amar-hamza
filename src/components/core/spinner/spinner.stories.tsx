import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex, Spinner } from '..';

export default {
  title: 'Components/Core/Spinner',
  component: Spinner,
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
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

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

export const playground = Template.bind({});
playground.args = {};
