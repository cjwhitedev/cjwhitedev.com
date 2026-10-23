import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Card } from "@/EngineDS/Molecules/Card/Card";

const meta = {
  title: "Engine DS/Molecules/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
