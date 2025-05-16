module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-prettier-scss"],
  plugins: ["stylelint-color-format"],
  customSyntax: "postcss-scss",
  rules: {
    "selector-class-pattern": null,
    "no-descending-specificity": null,
    "value-no-vendor-prefix": [
      true,
      {
        ignoreValues: ["box"],
      },
    ],
    "color-format/format": {
      format: "hsl",
    },
    "declaration-block-no-duplicate-properties": [
      true,
      {
        ignore: ["consecutive-duplicates"],
      },
    ],
  },
};
