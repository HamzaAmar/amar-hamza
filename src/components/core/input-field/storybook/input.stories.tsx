import { Send } from '@components/icons';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from '..';

export default {
  title: 'Components/Core/Input',
  component: Input,
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
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

export const NormalInput = Template.bind({});
NormalInput.args = {};

export const InputWithIcon = Template.bind({});
InputWithIcon.args = {
  icon: <Send width="16" />,
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  error: 'nice',
  touched: true,
};

export const InputWithErrorAndIcon = Template.bind({});
InputWithErrorAndIcon.args = {
  error: 'nice',
  touched: true,
  icon: <Send width="16" />,
};

export const InputWithVeryLongValue = Template.bind({});
InputWithVeryLongValue.args = {
  value:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium commodi ducimus ipsum voluptatibus, a nam tempore, doloremque delectus sint placeat maiores quod perferendis voluptatem distinctio officiis minus repudiandae omnis.  ',
};

export const InputWithVeryLongValueAndIcon = Template.bind({});
InputWithVeryLongValueAndIcon.args = {
  icon: <Send width="16" />,
  value:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium commodi ducimus ipsum voluptatibus, a nam tempore, doloremque delectus sint placeat maiores quod perferendis voluptatem distinctio officiis minus repudiandae omnis.  ',
};
