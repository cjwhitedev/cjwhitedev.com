import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Anchor } from "@/EngineDS/Atoms/Anchor/Anchor";

const meta = {
  title: "Engine DS/Atoms/Anchor",
  component: Anchor,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    href: { control: "text" },
    children: { control: "text" },
  },
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/about",
    children: "About",
  },
};

export const ReversedUnderline: Story = {
  args: {
    href: "/about",
    children: "About",
    reversedUnderline: true,
  },
};
