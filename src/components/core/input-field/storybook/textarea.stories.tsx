import type { Meta } from "@storybook/react";

import { Send } from "@components/icons";

import { Textarea } from "..";

export default {
  title: "Components/Core/Textarea",
  component: Textarea,
  args: {
    placeholder: "Send Mail",
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
} as Meta<typeof Textarea>;

export const NormalTextarea = {
  args: {},
};

export const TextareaWithIcon = {
  args: {
    icon: <Send width="16" />,
  },
};

export const TextareaWithError = {
  args: {
    error: "nice",
    touched: true,
  },
};

export const TextareaWithErrorAndIcon = {
  args: {
    error: "nice",
    touched: true,
    icon: <Send width="16" />,
  },
};

export const TextareaWithVeryLongValue = {
  args: {
    value:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium commodi ducimus ipsum voluptatibus, a nam tempore, doloremque delectus sint placeat maiores quod perferendis voluptatem distinctio officiis minus repudiandae omnis.  ",
  },
};

export const TextareaWithVeryLongValueAndIcon = {
  args: {
    icon: <Send width="16" />,
    value:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium commodi ducimus ipsum voluptatibus, a nam tempore, doloremque delectus sint placeat maiores quod perferendis voluptatem distinctio officiis minus repudiandae omnis.  ",
  },
};
