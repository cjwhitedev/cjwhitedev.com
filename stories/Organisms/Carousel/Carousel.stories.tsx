import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Carousel } from "@/EngineDS/Organisms/Carousel/Carousel";

const meta = {
  title: "Engine DS/Organisms/Carousel",
  component: Carousel,
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
