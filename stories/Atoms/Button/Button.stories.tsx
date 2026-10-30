import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "@/EngineDS/Atoms/Button/Button";
import { Layout, LayoutItem } from "@/EngineDS/Atoms/Layout/Layout";

const meta = {
  title: "Engine DS/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    hierarchy: {
      description:
        "Used to change the button's appearance based on importance.",
    },
    size: {
      description: "will change the size of the button.",
    },
    label: {
      control: "text",
      description: "The text displayed within the button element.",
    },
    onClick: {
      description:
        "Used to pass a function to be fired on interaction with the button.",
    },
    href: {
      description: "Converts button to a stlyed link.",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
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
    <Layout layout="three-tiles">
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
    <Layout layout="three-tiles" valign="center">
      {sizes.map((size) => (
        <LayoutItem key={size}>
          <Button {...args} key={size} size={size} label={size} />
        </LayoutItem>
      ))}
    </Layout>
  ),
};

export const OnClick: Story = {
  args: {
    label: "Alert Button",
    onClick: () => alert("Hello World!"),
  },
};

export const Href: Story = {
  args: {
    label: "Linked Button",
    href: "https://www.google.com/",
  },
};
