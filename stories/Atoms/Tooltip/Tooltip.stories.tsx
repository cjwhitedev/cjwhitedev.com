import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Tooltip } from "@/EngineDS/Atoms/Tooltip/Tooltip";

const meta = {
  title: "Engine DS/Atoms/Tooltip",
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
