import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Card, CardProps } from "@/EngineDS/Molecules/Card/Card";

import { Anchor } from "@/EngineDS/Atoms/Anchor/Anchor";
import { Layout, LayoutItem } from "@/EngineDS/Atoms/Layout/Layout";

const meta = {
  title: "Engine DS/Molecules/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    animate: {
      control: "boolean",
      description: "Turns the reveal on scroll on or off.",
      table: { defaultValue: { summary: "true" } },
    },
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
    linkLabel: {
      description:
        "Accessible name for the card link. Required when href is set.",
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
    linkLabel: "Read the card title page",
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

const cardThemes = ["white", "light", "dark", "dark-alt", "dark-plum"] as const;

const cardBody = (
  <>
    <h3>Card Title</h3>
    <p>
      Card description with a <Anchor href="/">link</Anchor>.
    </p>
  </>
);

export const Themes = {
  parameters: { layout: "fullscreen" },
  args: {
    teasersrc: "/media/placeholder.jpg",
    teaseralt: "Placeholder image",
  },
  render: (args: CardProps) => (
    <Layout layout="thirds-from-small" theme="light">
      {cardThemes.map((theme) => (
        <LayoutItem key={theme}>
          <Card {...args} theme={theme}>
            {cardBody}
          </Card>
        </LayoutItem>
      ))}
    </Layout>
  ),
};

export const UseCaseContrast = {
  parameters: { layout: "fullscreen" },
  args: {
    teasersrc: "/media/placeholder.jpg",
    teaseralt: "Placeholder image",
  },
  render: (args: CardProps) => (
    <>
      {cardThemes.map((theme) => (
        <Layout key={theme} layout="thirds-from-small" theme={theme}>
          {[1, 2, 3].map((n) => (
            <LayoutItem key={n}>
              <Card {...args}>
                <h3>Card Title {n}</h3>
                <p>
                  On <code>{theme}</code>, with a <Anchor href="/">link</Anchor>
                  .
                </p>
              </Card>
            </LayoutItem>
          ))}
        </Layout>
      ))}
    </>
  ),
};

export const UseCaseContrastDarkMode = {
  ...UseCaseContrast,
  globals: { theme: "dark" },
};
