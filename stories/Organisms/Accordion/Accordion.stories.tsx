import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Accordion } from "@/EngineDS/Organisms/Accordion/Accordion";

const meta = {
  title: "Engine DS/Organisms/Accordion",
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
