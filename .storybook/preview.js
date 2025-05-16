import "../src/scss/main.scss";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: "dark",
    target: "html",
    list: [
      { name: "dark", class: "dark", color: "hsl(0deg 0% 5%)" },
      { name: "light", class: "light", color: "hsl(0deg 0% 95%)" },
    ],
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  nextRouter: {
    query: {
      foo: "this-is-a-global-override",
    },
  },
};
export const tags = ["autodocs"];
