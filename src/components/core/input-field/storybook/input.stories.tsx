import { Send } from '@components/icons';
import { Meta } from '@storybook/react';

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
} as Meta<typeof Input>;

export const NormalInput = {
  args: {},
};

export const InputWithIcon = {
  args: {
    icon: <Send width="16" />,
  },
};

export const InputWithError = {
  args: {
    error: 'nice',
    touched: true,
  },
};

export const InputWithErrorAndIcon = {
  args: {
    error: 'nice',
    touched: true,
    icon: <Send width="16" />,
  },
};

export const InputWithVeryLongValue = {
  args: {
    value:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium commodi ducimus ipsum voluptatibus, a nam tempore, doloremque delectus sint placeat maiores quod perferendis voluptatem distinctio officiis minus repudiandae omnis.  ',
  },
};

export const InputWithVeryLongValueAndIcon = {
  args: {
    icon: <Send width="16" />,
    value:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium commodi ducimus ipsum voluptatibus, a nam tempore, doloremque delectus sint placeat maiores quod perferendis voluptatem distinctio officiis minus repudiandae omnis.  ',
  },
};
