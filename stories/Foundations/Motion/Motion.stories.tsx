import type { StoryObj } from "@storybook/nextjs-vite";
import Image from "next/image";
import { Layout, LayoutItem } from "@/EngineDS/Atoms/Layout/Layout";
import { Parallax } from "@/EngineDS/_Foundations/motion/Parallax";
import { Reveal } from "@/EngineDS/_Foundations/motion/Reveal";
import { SmoothScroll } from "@/EngineDS/_Foundations/motion/SmoothScroll";
import { TokenTable, tokensMatching } from "@/stories/Foundations/tokens";

const Motion = () => (
  <TokenTable tokens={tokensMatching("duration|easing|focus-offset")} />
);

const meta = {
  title: "Engine DS/Foundations/Motion",
  component: Motion,
};

export default meta;
type Story = StoryObj<typeof meta>;

// Scroll effects need a page to scroll, so these render in their own frame
const scrollParameters = {
  layout: "fullscreen",
  docs: { story: { inline: false, iframeHeight: 420 } },
};

export const Default: Story = {};

const Hint = () => (
  <Layout>
    <LayoutItem animate={false}>
      <p>Scroll down.</p>
    </LayoutItem>
  </Layout>
);

export const RevealOnScroll: Story = {
  parameters: scrollParameters,
  render: () => (
    <>
      <Hint />
      {["First", "Second", "Third", "Fourth"].map((item) => (
        <Layout key={item}>
          <LayoutItem>
            <h2>{item} block</h2>
            <p>
              Content fades in and rises into place as it scrolls into view.
            </p>
          </LayoutItem>
        </Layout>
      ))}
    </>
  ),
};

export const RevealWrapper: Story = {
  parameters: scrollParameters,
  render: () => (
    <>
      <Hint />
      <Layout>
        <LayoutItem animate={false}>
          <Reveal>
            <h2>Wrapped content</h2>
            <p>Reveal brings the same entrance to any content.</p>
          </Reveal>
        </LayoutItem>
      </Layout>
    </>
  ),
};

const speeds = ["subtle", "medium", "strong"] as const;

export const ParallaxSpeeds: Story = {
  parameters: scrollParameters,
  render: () => (
    <>
      <Hint />
      <Layout layout="thirds">
        {speeds.map((speed) => (
          <LayoutItem key={speed}>
            <Parallax speed={speed} ratio="3 / 4">
              <Image src="/media/placeholder.jpg" alt="" fill sizes="33vw" />
            </Parallax>
            <p>{speed}</p>
          </LayoutItem>
        ))}
      </Layout>
      <Hint />
    </>
  ),
};

export const SmoothScrolling: Story = {
  parameters: scrollParameters,
  render: () => (
    <>
      <SmoothScroll />
      {Array.from({ length: 8 }, (_, i) => (
        <Layout key={i}>
          <LayoutItem>
            <h2>Section {i + 1}</h2>
            <p>Scroll with the wheel or trackpad to feel the easing.</p>
          </LayoutItem>
        </Layout>
      ))}
    </>
  ),
};
