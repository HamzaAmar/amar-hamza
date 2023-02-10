import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar } from '..';

export default {
  title: 'Components/Core/Avatar',
  component: Avatar,
  args: {
    title: 'Hamza Milord Amar',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);
export const AvatarWithoutImagePrimary = Template.bind({});
export const AvatarWithoutImageSecondary = Template.bind({});
AvatarWithoutImageSecondary.args = {
  color: 'secondary',
};
export const AvatarWithoutImageDanger = Template.bind({});
AvatarWithoutImageDanger.args = {
  color: 'danger',
};
export const AvatarWithoutImageSuccess = Template.bind({});
AvatarWithoutImageSuccess.args = {
  color: 'success',
};
export const AvatarWithoutImageWarning = Template.bind({});
AvatarWithoutImageWarning.args = {
  color: 'warning',
};

export const AvatarWithImage = Template.bind({});
AvatarWithImage.args = {
  image: 'https://picsum.photos/id/54/120/120',
};

export const AvatarWithoutImageSmall = Template.bind({});
AvatarWithoutImageSmall.args = {
  size: 'sm',
};

export const AvatarWithoutImageMedium = Template.bind({});
AvatarWithoutImageMedium.args = {
  size: 'md',
};

export const AvatarWithoutImageLarge = Template.bind({});
AvatarWithoutImageLarge.args = {
  size: 'lg',
};

export const AvatarWithoutImageExtraLarge = Template.bind({});
AvatarWithoutImageExtraLarge.args = {
  size: 'xl',
};
