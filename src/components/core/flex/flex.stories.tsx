import type { Meta } from "@storybook/react";

import { Flex } from ".";

export default {
  title: "COMPONENTS/CORE/Flex",
  component: Flex,
  args: {
    children: "Hello world",
  },
} as Meta<typeof Flex>;

export const RegularFlex = {};
