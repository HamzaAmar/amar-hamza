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

export const TagPrimary: Story = {};

export const TagSecondary: Story = {
  args: {
    color: 'secondary',
  },
};

export const TagDanger: Story = {
  args: {
    color: 'danger',
  },
};

export const TagSuccess: Story = {
  args: {
    color: 'success',
  },
};

export const TagWarning: Story = {
  args: {
    color: 'warning',
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
