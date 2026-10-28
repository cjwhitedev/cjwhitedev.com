import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Navbar } from "@/EngineDS/Molecules/Navbar/Navbar";

const meta = {
  title: "Engine DS/Molecules/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    links: {
      description:
        "An array of objects each with args passed to the Anchor component",
    },
    theme: {
      description:
        "Sets specified colorways for the navbar and content within.",
    },
    title: {
      description: "A short string to be displayed on the left of the navbar.",
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
// 👇 Type helper to reduce boilerplate
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Navbar Demo",
    links: [
      { children: "Home", href: "/" },
      { children: "About", href: "/about" },
      { children: "Contact", href: "/contact" },
    ],
  },
};

export const Theme: Story = {
  args: {
    title: "Navbar Demo",
    theme: "light",
    links: [
      { children: "Home", href: "/" },
      { children: "About", href: "/about" },
      { children: "Contact", href: "/contact" },
    ],
  },
};
