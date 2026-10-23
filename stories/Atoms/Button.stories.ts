import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "@/EngineDS/Atoms/Button/Button";

const meta = {
  title: "Engine DS/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Button>;

export default meta;
// 👇 Type helper to reduce boilerplate
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "So simple!",
    hierarchy: "primary",
  },
};
