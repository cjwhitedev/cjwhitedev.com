import type { Preview } from "@storybook/nextjs-vite";

import "@/EngineDS/main.css";
import "./preview.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },

    options: {
      storySort: {
        method: "alphabetical",
        includeNames: true,
        order: [
          "Engine DS",
          [
            "Welcome",
            "Foundations",
            ["*", ["Docs", "*"]],
            "Atoms",
            ["*", ["Docs", "*"]],
            "Molecules",
            ["*", ["Docs", "*"]],
            "Organisms",
            ["*", ["Docs", "*"]],
          ],
        ],
      },
    },
  },
};

export default preview;
