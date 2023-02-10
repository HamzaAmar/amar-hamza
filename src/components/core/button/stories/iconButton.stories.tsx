import { Flex } from '@components/core/flex';
import { Facebook, Message } from '@components/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';

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
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const IconButtonsSize = () => (
  <Flex items="center" gap="sm">
    <IconButton icon={<Message />} size="xs" title="Connect" />
    <IconButton icon={<Message />} size="sm" title="Connect" />
    <IconButton icon={<Message />} size="md" title="Connect" />
    <IconButton icon={<Message />} size="lg" title="Connect" />
    <IconButton icon={<Message />} size="xl" title="Connect" />
  </Flex>
);

export const Playground = Template.bind({});
