import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Footer } from "@/EngineDS/Organisms/Footer/Footer";

const meta = {
  title: "Engine DS/Organisms/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: {
      control: "text",
      description: "The heading displayed on the left.",
    },
    children: {
      control: "text",
      description: "The content displayed below the title.",
    },
    share: {
      control: "object",
      description:
        "Props for a Share displayed below the content. Omit to hide it.",
    },
    links: {
      control: "object",
      description: "The links displayed on the right.",
    },
    copyright: {
      control: "text",
      description:
        "The name shown in the copyright line, after the current year. Omit to hide the line.",
    },
    theme: {
      control: "select",
      description: "The theme applied to the footer.",
      table: {
        defaultValue: { summary: "dark" },
      },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "CJ White",
    children: <p>Design systems and front-end engineering.</p>,
    links: [
      { id: "home-footer", children: "Home", href: "/" },
      { id: "about-footer", children: "About", href: "/about" },
      { id: "contact-footer", children: "Contact", href: "/contact" },
    ],
    copyright: "CJ White",
  },
};

export const WithShare: Story = {
  args: {
    ...Default.args,
    share: {
      text: "Connect with me",
      sources: [
        { name: "github", href: "https://github.com/" },
        { name: "linkedin", href: "https://www.linkedin.com/" },
        { name: "email", href: "mailto:hello@example.com" },
      ],
    },
  },
};

export const Theme: Story = {
  args: {
    ...WithShare.args,
    theme: "dark-plum",
  },
};
