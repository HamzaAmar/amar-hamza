import type { Meta, StoryObj } from '@storybook/react';

import { Alert, Flex } from '..';

const meta: Meta<typeof Alert> = {
  title: 'Components/Core/Alert',
  component: Alert,
  args: {
    message:
      'Hello word from here i like to see it every thing is correct',
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const AlertColor: Story = {
  render: () => {
    return (
      <Flex gap="2xl" direction="column">
        <Alert
          color="d"
          message="Hello word from here i like to see it every thing is correct"
          title="warning"
        />
        <Alert
          color="p"
          message="Hello word from here i like to see it every thing is correct"
          title="warning"
        />
        <Alert
          color="s"
          message="Hello word from here i like to see it every thing is correct"
          title="warning"
        />
        <Alert
          color="w"
          message="Hello word from here i like to see it every thing is correct"
          title="warning"
        />
        <Alert
          color="b"
          message="Hello word from here i like to see it every thing is correct"
          title="warning"
        />
        <Alert
          title="warning"
          message="Hello word from here i like to see it every thing is correct"
        />
      </Flex>
    );
  },
};

export const Playground: Story = {};
