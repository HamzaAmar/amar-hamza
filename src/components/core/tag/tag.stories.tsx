import { Meta, StoryObj } from '@storybook/react';

import { Tag } from '..';

const meta: Meta<typeof Tag> = {
  title: 'Components/Core/Tag',
  component: Tag,
  args: {
    title: 'css',
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Tagpri: Story = {};

export const TagDanger: Story = {
  args: {
    color: 'd',
  },
};

export const TagSuccess: Story = {
  args: {
    color: 's',
  },
};

export const TagWarning: Story = {
  args: {
    color: 'w',
  },
};

export const TagSmall: Story = {
  args: {
    size: 'sm',
  },
};

export const TagMedium: Story = {
  args: {
    size: 'md',
  },
};

export const TagLarge: Story = {
  args: {
    size: 'lg',
  },
};
