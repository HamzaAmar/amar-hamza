import { Send } from '@components/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Textarea } from '..';

export default {
  title: 'Components/Core/Textarea',
  component: Textarea,
  args: {
    placeholder: 'Send Mail',
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
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const NormalTextarea = Template.bind({});
NormalTextarea.args = {};

export const TextareaWithIcon = Template.bind({});
TextareaWithIcon.args = {
  icon: <Send width="16" />,
};

export const TextareaWithError = Template.bind({});
TextareaWithError.args = {
  error: 'nice',
  touched: true,
};

export const TextareaWithErrorAndIcon = Template.bind({});
TextareaWithErrorAndIcon.args = {
  error: 'nice',
  touched: true,
  icon: <Send width="16" />,
};

export const TextareaWithVeryLongValue = Template.bind({});
TextareaWithVeryLongValue.args = {
  value:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium commodi ducimus ipsum voluptatibus, a nam tempore, doloremque delectus sint placeat maiores quod perferendis voluptatem distinctio officiis minus repudiandae omnis.  ',
};

export const TextareaWithVeryLongValueAndIcon = Template.bind({});
TextareaWithVeryLongValueAndIcon.args = {
  icon: <Send width="16" />,
  value:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium commodi ducimus ipsum voluptatibus, a nam tempore, doloremque delectus sint placeat maiores quod perferendis voluptatem distinctio officiis minus repudiandae omnis.  ',
};
