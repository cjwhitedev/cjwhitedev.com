import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Navbar } from "@/EngineDS/Molecules/Navbar/Navbar";

const meta = {
  title: "Engine DS/Molecules/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Navbar>;

export default meta;
// 👇 Type helper to reduce boilerplate
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
};
