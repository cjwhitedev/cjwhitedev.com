import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CodeBlock } from "@/EngineDS/Atoms/CodeBlock/CodeBlock";

const meta = {
  title: "Engine DS/Atoms/CodeBlock",
  component: CodeBlock,
  argTypes: {
    animate: {
      control: "boolean",
      description: "Turns the reveal on scroll on or off.",
      table: { defaultValue: { summary: "true" } },
    },
    code: {
      description: "The main content to be displayed as a code snippet.",
    },
  },
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    code: `function helloWorld() {
  console.log("Hello, world!");
}`,
  },
};
