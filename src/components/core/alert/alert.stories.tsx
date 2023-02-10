import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Alert, Flex } from '..';

export default {
  title: 'Components/Core/Alert',
  component: Alert,
  args: {
    message:
      'Hello word from here i like to see it every thing is correct',
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args} />
);

export const AlertColor = () => (
  <Flex gap="sm" direction="column">
    <Alert
      color="danger"
      message="Hello word from here i like to see it every thing is correct"
    />
    <Alert
      color="success"
      message="Hello word from here i like to see it every thing is correct"
    />
    <Alert
      color="warning"
      message="Hello word from here i like to see it every thing is correct"
    />
    <Alert
      color="slate"
      message="Hello word from here i like to see it every thing is correct"
    />
    <Alert message="Hello word from here i like to see it every thing is correct" />
  </Flex>
);

export const Playground = Template.bind({});
Playground.args = {};
