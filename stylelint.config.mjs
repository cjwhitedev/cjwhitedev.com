const name = "[a-z0-9]+(?:-[a-z0-9]+)*";

/** @type {import("stylelint").Config} */
const config = {
  extends: ["stylelint-config-standard"],
  rules: {
    "selector-class-pattern": [
      `^engine(?:-${name}(?:__${name})?)?(?:--${name})?$`,
      {
        message: (selector) =>
          `Expected "${selector}" to match engine-block__element--modifier`,
      },
    ],
    "declaration-no-important": true,
    "color-no-hex": true,
    "color-named": ["never", { ignore: ["inside-function"] }],
    "custom-property-empty-line-before": null,
    "import-notation": "string",
    "property-disallowed-list": [
      [
        "left",
        "right",
        "/^(margin|padding)-(left|right)$/",
        "/^border-(left|right)(-.+)?$/",
      ],
      { message: "Use logical properties (inline-start / inline-end)" },
    ],
    "declaration-property-value-disallowed-list": {
      "text-align": ["left", "right"],
    },
    "media-feature-range-notation": "prefix",
  },
  overrides: [{ files: ["**/_vars.css"], rules: { "color-no-hex": null } }],
};

export default config;
