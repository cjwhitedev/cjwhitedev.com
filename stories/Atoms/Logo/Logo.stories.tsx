import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Logo } from "@/EngineDS/Atoms/Logo/Logo";

const meta = {
  title: "Engine DS/Atoms/Logo",
  component: Logo,
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
