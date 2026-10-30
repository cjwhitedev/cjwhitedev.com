import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Layout, LayoutItem } from "@/EngineDS/Atoms/Layout/Layout";
import { Share } from "@/EngineDS/Atoms/Share/Share";

const meta = {
  title: "Engine DS/Atoms/Share",
  component: Share,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    animate: {
      control: "boolean",
      description: "Turns the reveal on scroll on or off.",
      table: { defaultValue: { summary: "true" } },
    },
    text: {
      control: "text",
      description: "The label displayed above the links.",
      table: {
        defaultValue: { summary: "Share" },
      },
    },
    sources: {
      control: "object",
      description:
        "The links to display. Each has a `name` (github, linkedin or email) and an `href`.",
    },
    size: {
      control: "inline-radio",
      options: ["small", "medium"],
      description: "The size of the icons.",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    align: {
      control: "inline-radio",
      options: ["start", "center", "end"],
      description: "The alignment of the label and icons.",
      table: {
        defaultValue: { summary: "start" },
      },
    },
  },
} satisfies Meta<typeof Share>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sources: [
      { name: "github", href: "https://github.com/" },
      { name: "linkedin", href: "https://www.linkedin.com/" },
      { name: "email", href: "mailto:hello@example.com" },
    ],
  },
};

export const CustomText: Story = {
  args: {
    ...Default.args,
    text: "Connect with me",
  },
};

const sizes = ["small", "medium"] as const;

export const Sizes: Story = {
  args: Default.args,
  render: (args) => (
    <Layout layout="halves" valign="center">
      {sizes.map((size) => (
        <LayoutItem key={size}>
          <Share {...args} size={size} text={size} />
        </LayoutItem>
      ))}
    </Layout>
  ),
};

const alignments = ["start", "center", "end"] as const;

export const Alignments: Story = {
  args: Default.args,
  render: (args) => (
    <>
      {alignments.map((align) => (
        <Layout key={align}>
          <LayoutItem>
            <Share {...args} align={align} text={align} />
          </LayoutItem>
        </Layout>
      ))}
    </>
  ),
};

const themes = ["white", "light", "dark", "dark-alt", "dark-plum"] as const;

export const Themes: Story = {
  args: Default.args,
  render: (args) => (
    <>
      {themes.map((theme) => (
        <Layout key={theme} theme={theme}>
          <LayoutItem>
            <Share {...args} text={theme} />
          </LayoutItem>
        </Layout>
      ))}
    </>
  ),
};
