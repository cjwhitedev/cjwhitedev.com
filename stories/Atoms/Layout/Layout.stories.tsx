import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Layout } from "@/EngineDS/Atoms/Layout/Layout";
import { LayoutItem } from "@/EngineDS/Atoms/Layout/LayoutItem";

const meta = {
  title: "Engine DS/Atoms/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <LayoutItem>
        <p>Layout Item.</p>
      </LayoutItem>
    ),
  },
};

export const LayoutHalves: Story = {
  args: {
    layout: "halves",
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

export const LayoutHalvesFromSmall: Story = {
  args: {
    layout: "halves-from-small",
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
