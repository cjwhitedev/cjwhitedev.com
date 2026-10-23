import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Tabs } from "@/EngineDS/Organisms/Tabs/Tabs";

const meta = {
  title: "Engine DS/Organisms/Tabs",
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
