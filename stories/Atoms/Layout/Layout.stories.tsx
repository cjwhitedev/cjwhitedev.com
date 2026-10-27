import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Layout } from "@/EngineDS/Atoms/Layout/Layout";
import { LayoutItem } from "@/EngineDS/Atoms/Layout/LayoutItem";

import { Card } from "@/EngineDS/Molecules/Card/Card";

const meta = {
  title: "Engine DS/Atoms/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    layout: "halves-from-small",
    children: (
      <>
        <LayoutItem>
          <p>Layout Item 1.</p>
        </LayoutItem>
        <LayoutItem>
          <p>Layout Item 2.</p>
        </LayoutItem>
      </>
    ),
  },
};

export const LayoutThirds: Story = {
  args: {
    layout: "thirds-from-small",
    children: (
      <>
        <LayoutItem>
          <p>Layout Item 1.</p>
        </LayoutItem>
        <LayoutItem>
          <p>Layout Item 2.</p>
        </LayoutItem>
        <LayoutItem>
          <p>Layout Item 3.</p>
        </LayoutItem>
      </>
    ),
  },
};

const themes = ["light", "dark"] as const;

export const Themes: Story = {
  args: {
    layout: "halves-from-small",
    children: (
      <>
        <LayoutItem>
          <p>Layout Item 1.</p>
        </LayoutItem>
        <LayoutItem>
          <p>Layout Item 2.</p>
        </LayoutItem>
      </>
    ),
  },
  render: (args) => (
    <>
      {themes.map((theme) => (
        <div key={theme} data-theme={theme}>
          <Layout theme={theme} {...args} />
        </div>
      ))}
    </>
  ),
};

export const UseCaseCards: Story = {
  args: {
    layout: "thirds-from-small",
    children: (
      <>
        <LayoutItem>
          <Card
            teaserSrc="/media/placeholder.jpg"
            teaserAlt="Placeholder image"
          >
            <h3>Card Title 1</h3>
            <p>Card description goes here.</p>
          </Card>
        </LayoutItem>
        <LayoutItem>
          <Card
            teaserSrc="/media/placeholder.jpg"
            teaserAlt="Placeholder image"
          >
            <h3>Card Title 1</h3>
            <p>Card description goes here.</p>
          </Card>
        </LayoutItem>
        <LayoutItem>
          <Card
            teaserSrc="/media/placeholder.jpg"
            teaserAlt="Placeholder image"
          >
            <h3>Card Title 1</h3>
            <p>A slightly longer card description goes here.</p>
          </Card>
        </LayoutItem>
      </>
    ),
  },
};
