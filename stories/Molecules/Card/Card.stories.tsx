import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Card, CardProps } from "@/EngineDS/Molecules/Card/Card";

import { Layout, LayoutItem } from "@/EngineDS/Atoms/Layout/Layout";

const meta = {
  title: "Engine DS/Molecules/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: "text",
      description: "The content to be displayed below the image.",
    },
    teasersrc: {
      description: "The path to the image meant to be displayed on the card.",
    },
    teaseralt: {
      description: "A description of the image necessary for accessiblity.",
    },
    theme: {
      description: "Sets specified colorways for the card and content within.",
    },
    href: {
      description:
        "Provide a link to turn the card itself into a clickable link.",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    teasersrc: "/media/placeholder.jpg",
    teaseralt: "Placeholder image",
    children: (
      <div>
        <h3>Card Title</h3>
        <p>Card description goes here.</p>
      </div>
    ),
  },
};

export const Linked: Story = {
  args: {
    teasersrc: "/media/placeholder.jpg",
    teaseralt: "Placeholder image",
    href: "/linked-page",
    children: (
      <div>
        <h3>Card Title</h3>
        <p>Card description goes here.</p>
      </div>
    ),
  },
};

export const UseCaseLayoutThirds = {
  args: {
    teasersrc: "/media/placeholder.jpg",
    teaseralt: "Placeholder image",
  },
  render: (args: CardProps) => (
    <Layout layout="thirds-from-small">
      <LayoutItem>
        <Card {...args}>
          <h3>Card Title 1</h3>
          <p>Card description goes here.</p>
        </Card>
      </LayoutItem>
      <LayoutItem>
        <Card {...args}>
          <h3>Card Title 1</h3>
          <p>Card description goes here.</p>
        </Card>
      </LayoutItem>
      <LayoutItem>
        <Card {...args}>
          <h3>Card Title 1</h3>
          <p>Card description goes here.</p>
        </Card>
      </LayoutItem>
    </Layout>
  ),
};
