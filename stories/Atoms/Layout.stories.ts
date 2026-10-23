import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Layout } from "@/EngineDS/Atoms/Layout/Layout";

const meta = {
  title: "Engine DS/Atoms/Layout",
  component: Layout,
  tags: ["autodocs"],
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
