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
// 👇 Type helper to reduce boilerplate
type Story = StoryObj<typeof meta>;

// 👇 A story named Primary that renders `<Button primary label="Button" />`
export const Default: Story = {
  args: {
    links: [
      { children: "Portfolio", href: "/" },
      { children: "GitHub", href: "/" },
      { children: "Resume", href: "/" },
      { children: "Contact", href: "/" },
    ],
  },
};

export const Theme: Story = {
  args: {
    theme: "light",
    links: [
      { children: "Portfolio", href: "/" },
      { children: "GitHub", href: "/" },
      { children: "Resume", href: "/" },
      { children: "Contact", href: "/" },
    ],
  },
};
