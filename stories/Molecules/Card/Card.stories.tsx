import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Card } from "@/EngineDS/Molecules/Card/Card";

const meta = {
  title: "Engine DS/Molecules/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    teaserSrc: "/media/placeholder.jpg",
    teaserAlt: "Placeholder image",
    children: (
      <div>
        <h3>Card Title</h3>
        <p>Card description goes here.</p>
      </div>
    ),
  },
};
