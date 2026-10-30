import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Layout, LayoutItem } from "@/EngineDS/Atoms/Layout/Layout";

import { Anchor } from "@/EngineDS/Atoms/Anchor/Anchor";
import { Card } from "@/EngineDS/Molecules/Card/Card";

const meta = {
  title: "Engine DS/Atoms/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    layout: {
      description: "Options for displaying content in columns.",
    },
    theme: {
      description:
        "Sets specified colorways for the layout and content within.",
    },
    gap: {
      description: "The space between columns.",
    },
    padding: {
      description: "The space above and below the layout layer.",
    },
    align: {
      description: "Used to align the content horizontally.",
    },
    valign: {
      description: "Used to align the content vertically.",
    },
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    layout: ["halves-from-small", "fourths-from-medium"],
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

const themes = ["white", "light", "dark", "dark-alt", "dark-plum"] as const;

export const Themes: Story = {
  args: {
    layout: "halves-from-small",
    children: (
      <>
        <LayoutItem>
          <p>Layout Item 1.</p>
        </LayoutItem>
        <LayoutItem>
          <p>
            Layout Item 2 with a <Anchor href="/">link</Anchor>.
          </p>
        </LayoutItem>
      </>
    ),
  },
  render: (args) => (
    <>
      {themes.map((theme) => (
        <Layout key={theme} {...args} theme={theme} />
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
            teasersrc="/media/placeholder.jpg"
            teaseralt="Placeholder image"
          >
            <h3>Card Title 1</h3>
            <p>Card description goes here.</p>
          </Card>
        </LayoutItem>
        <LayoutItem>
          <Card
            teasersrc="/media/placeholder.jpg"
            teaseralt="Placeholder image"
          >
            <h3>Card Title 1</h3>
            <p>Card description goes here.</p>
          </Card>
        </LayoutItem>
        <LayoutItem>
          <Card
            teasersrc="/media/placeholder.jpg"
            teaseralt="Placeholder image"
          >
            <h3>Card Title 1</h3>
            <p>A slightly longer card description goes here.</p>
          </Card>
        </LayoutItem>
      </>
    ),
  },
};
