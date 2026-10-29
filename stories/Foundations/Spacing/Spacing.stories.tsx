import type { StoryObj } from "@storybook/nextjs-vite";
import { TokenTable, tokensMatching } from "@/stories/Foundations/tokens";

const Spacing = () => (
  <TokenTable
    tokens={tokensMatching("space-[a-z0-9]+")}
    preview={(name) => (
      <span
        style={{
          display: "block",
          height: "1rem",
          width: `var(${name})`,
          backgroundColor: "var(--primary)",
        }}
      />
    )}
  />
);

const meta = {
  title: "Engine DS/Foundations/Spacing",
  component: Spacing,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
