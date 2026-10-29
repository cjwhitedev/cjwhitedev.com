import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Logo } from "@/EngineDS/Atoms/Logo/Logo";

import { Layout, LayoutItem } from "@/EngineDS/Atoms/Layout/Layout";

const meta = {
  title: "Engine DS/Atoms/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const colors = ["primary", "secondary"] as const;

export const ColorOptions: Story = {
  render: () => (
    <Layout layout="three-tiles" align="center">
      {colors.map((color) => (
        <LayoutItem key={color}>
          <Logo color={color} />
        </LayoutItem>
      ))}
    </Layout>
  ),
};
