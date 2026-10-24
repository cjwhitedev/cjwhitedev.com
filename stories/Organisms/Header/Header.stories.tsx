import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Header } from "@/EngineDS/Organisms/Header/Header";

const meta = {
  title: "Engine DS/Organisms/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

const themes = ["light", "dark"];

export default meta;
// 👇 Type helper to reduce boilerplate
type Story = StoryObj<typeof meta>;

// 👇 A story named Primary that renders `<Button primary label="Button" />`
export const Default: Story = {
  args: {
    links: [
      { label: "Portfolio", href: "/" },
      { label: "GitHub", href: "/" },
      { label: "Resume", href: "/" },
      { label: "Contact", href: "/" },
    ],
  },
};

export const Themes: Story = {
  args: {
    links: [
      { label: "Portfolio", href: "/" },
      { label: "GitHub", href: "/" },
      { label: "Resume", href: "/" },
      { label: "Contact", href: "/" },
    ],
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {themes.map((theme) => (
        <Header {...args} key={theme} theme={theme} />
      ))}
    </div>
  ),
};
