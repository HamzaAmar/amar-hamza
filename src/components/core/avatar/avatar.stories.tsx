import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '.';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Core/Avatar',
  component: Avatar,
  args: {
    title: 'Hamza Milord Amar',
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const AvatarWithoutImagepri: Story = {};

export const AvatarWithoutImageDanger: Story = {
  args: {
    color: 'd',
  },
};

export const AvatarWithoutImageSuccess: Story = {
  args: {
    color: 's',
  },
};

export const AvatarWithoutImageWarning: Story = {
  args: {
    color: 'w',
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
