import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Header } from "@/EngineDS/Organisms/Header/Header";

const meta = {
  title: "Engine DS/Organisms/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      { id: "portfolio-header", children: "Portfolio", href: "/" },
      { id: "github-header", children: "GitHub", href: "/" },
      { id: "resume-header", children: "Resume", href: "/" },
      { id: "contact-header", children: "Contact", href: "/" },
    ],
  },
};

export const Theme: Story = {
  args: {
    theme: "white",
    links: [
      { id: "portfolio-header", children: "Portfolio", href: "/" },
      { id: "github-header", children: "GitHub", href: "/" },
      { id: "resume-header", children: "Resume", href: "/" },
      { id: "contact-header", children: "Contact", href: "/" },
    ],
  },
};
