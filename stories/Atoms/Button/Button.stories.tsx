import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/EngineDS/Atoms/Button/Button";

const meta = {
  title: "Engine DS/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

const hierarchies = ["primary", "secondary", "tertiary"] as const;

const sizes = ["small", "medium", "large"] as const;

export default meta;
// 👇 Type helper to reduce boilerplate
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "button",
  },
};

export const Hierarchies: Story = {
  args: {
    label: "Button",
    size: "medium",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem" }}>
      {hierarchies.map((hierarchy) => (
        <Button
          {...args}
          key={hierarchy}
          hierarchy={hierarchy}
          label={hierarchy}
        />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    label: "Button",
    hierarchy: "primary",
  },
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      {sizes.map((size) => (
        <Button {...args} key={size} size={size} label={size} />
      ))}
    </div>
  ),
};
