import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Anchor } from "@/EngineDS/Atoms/Anchor/Anchor";

const meta = {
  title: "Engine DS/Atoms/Anchor",
  component: Anchor,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    href: {
      control: "text",
      description: "The target address of the anchor link.",
    },
    children: {
      control: "text",
      description: "The text displayed within the anchor tag.",
    },
    reversedUnderline: {
      control: "boolean",
      description:
        "Hides the default visible underline to be revealed on hover.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/",
    children: "ipsum",
  },
  render: (args) => (
    <p>
      Lorem <Anchor {...args} /> dolor sit amet.
    </p>
  ),
};

export const ReversedUnderline: Story = {
  parameters: {
    // Demo only: this variant is meant for standalone links, not inline text
    a11y: {
      config: { rules: [{ id: "link-in-text-block", enabled: false }] },
    },
  },
  args: {
    href: "/",
    children: "ipsum",
    reversedUnderline: true,
  },
  render: (args) => (
    <p>
      Lorem <Anchor {...args} /> dolor sit amet.
    </p>
  ),
};
