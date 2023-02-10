import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tag } from '..';

export default {
  title: 'Components/Core/Tag',
  component: Tag,
  args: {
    title: 'css',
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => (
  <Tag {...args} />
);
export const TagPrimary = Template.bind({});
export const TagSecondary = Template.bind({});
TagSecondary.args = {
  color: 'secondary',
};
export const TagDanger = Template.bind({});
TagDanger.args = {
  color: 'danger',
};

export const TagSuccess = Template.bind({});
TagSuccess.args = {
  color: 'success',
};

export const TagWarning = Template.bind({});
TagWarning.args = {
  color: 'warning',
};

export const TagSmall = Template.bind({});
TagSmall.args = {
  size: 'sm',
};

export const TagMedium = Template.bind({});
TagMedium.args = {
  size: 'md',
};

export const TagLarge = Template.bind({});
TagLarge.args = {
  size: 'lg',
};
