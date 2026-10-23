import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CodeBlock } from "@/EngineDS/Atoms/CodeBlock/CodeBlock";

const meta = {
  title: "Engine DS/Atoms/CodeBlock",
  component: CodeBlock,
  tags: ["autodocs"],
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
