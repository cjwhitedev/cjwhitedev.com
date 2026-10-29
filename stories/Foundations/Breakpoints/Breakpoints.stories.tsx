import type { StoryObj } from "@storybook/nextjs-vite";
import breakpointsCss from "@/EngineDS/_breakpoints.css?raw";
import { TokenTable, tokensMatching } from "@/stories/Foundations/tokens";

const queries = [
  ...breakpointsCss.matchAll(/@custom-media\s+(--[\w-]+)\s+\(([^)]+)\)/g),
].map(([, name, value]) => ({ name: `@media (${name})`, value }));

const Breakpoints = () => (
  <>
    <TokenTable tokens={queries} />
    <TokenTable tokens={tokensMatching("max-width")} />
  </>
);

const meta = {
  title: "Engine DS/Foundations/Breakpoints",
  component: Breakpoints,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
