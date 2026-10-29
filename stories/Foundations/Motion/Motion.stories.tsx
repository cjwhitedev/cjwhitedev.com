import type { StoryObj } from "@storybook/nextjs-vite";
import { TokenTable, tokensMatching } from "@/stories/Foundations/tokens";

const Motion = () => (
  <TokenTable tokens={tokensMatching("duration|easing|focus-offset")} />
);

const meta = {
  title: "Engine DS/Foundations/Motion",
  component: Motion,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
