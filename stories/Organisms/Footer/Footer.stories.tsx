import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Footer } from "@/EngineDS/Organisms/Footer/Footer";

const meta = {
  title: "Engine DS/Organisms/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      { children: "Home", href: "/" },
      { children: "About", href: "/about" },
      { children: "Contact", href: "/contact" },
    ],
  },
};
