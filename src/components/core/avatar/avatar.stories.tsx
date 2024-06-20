import { Meta, StoryObj } from '@storybook/react';

import Avatar from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Core/Avatar',
  component: Avatar,
  args: {
    title: 'Hamza Milord Amar',
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const AvatarWithoutImagePrimary: Story = {};
export const AvatarWithoutImageSecondary: Story = {
  args: {
    color: 'secondary',
  },
};

export const AvatarWithoutImageDanger: Story = {
  args: {
    color: 'danger',
  },
};

export const AvatarWithoutImageSuccess: Story = {
  args: {
    color: 'success',
  },
};

export const AvatarWithoutImageWarning: Story = {
  args: {
    color: 'warning',
  },
};

export const AvatarWithImage: Story = {
  args: {
    image: 'https://picsum.photos/id/54/120/120',
  },
};

export const AvatarWithoutImageSmall: Story = {
  args: {
    size: 'sm',
  },
};

export const AvatarWithoutImageMedium: Story = {
  args: {
    size: 'md',
  },
};

export const AvatarWithoutImageLarge: Story = {
  args: {
    size: 'lg',
  },
};

export const AvatarWithoutImageExtraLarge: Story = {
  args: {
    size: 'xl',
  },
};
