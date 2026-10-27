import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Card } from "@/EngineDS/Molecules/Card/Card";

import { LayoutItem } from "@/EngineDS/Atoms/Layout/LayoutItem";
import { Layout } from "@/EngineDS/Atoms/Layout/Layout";

const meta = {
  title: "Engine DS/Molecules/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
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

export const Linked: Story = {
  args: {
    teaserSrc: "/media/placeholder.jpg",
    teaserAlt: "Placeholder image",
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
    teaserSrc: "/media/placeholder.jpg",
    teaserAlt: "Placeholder image",
  },
  render: (args) => (
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
