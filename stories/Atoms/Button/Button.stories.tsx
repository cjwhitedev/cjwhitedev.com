import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/EngineDS/Atoms/Button/Button";
import { Layout } from "@/EngineDS/Atoms/Layout/Layout";
import { LayoutItem } from "@/EngineDS/Atoms/Layout/LayoutItem";

const meta = {
  title: "Engine DS/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
// 👇 Type helper to reduce boilerplate
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "button",
  },
};

const hierarchies = ["primary", "secondary", "tertiary"] as const;

export const Hierarchies: Story = {
  args: {
    label: "Button",
    size: "medium",
  },
  render: (args) => (
    <Layout layout="thirds-from-small">
      {hierarchies.map((hierarchy) => (
        <LayoutItem key={hierarchy}>
          <Button
            {...args}
            key={hierarchy}
            hierarchy={hierarchy}
            label={hierarchy}
          />
        </LayoutItem>
      ))}
    </Layout>
  ),
};

const sizes = ["small", "medium", "large"] as const;

export const Sizes: Story = {
  args: {
    label: "Button",
    hierarchy: "primary",
  },
  render: (args) => (
    <Layout layout="tiles" valign="center">
      {sizes.map((size) => (
        <LayoutItem key={size}>
          <Button {...args} key={size} size={size} label={size} />
        </LayoutItem>
      ))}
    </Layout>
  ),
};
