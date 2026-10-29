import type { StoryObj } from "@storybook/nextjs-vite";
import { TokenTable, tokensMatching } from "@/stories/Foundations/tokens";

const Shape = () => (
  <>
    <h2>Radius</h2>
    <TokenTable
      tokens={tokensMatching("radius(?:-[a-z]+)?")}
      preview={(name) => (
        <span className="fnd-box" style={{ borderRadius: `var(${name})` }} />
      )}
    />
    <h2>Stroke</h2>
    <TokenTable
      tokens={tokensMatching("stroke")}
      preview={(name) => (
        <span
          className="fnd-box"
          style={{ borderWidth: `var(${name})`, borderStyle: "solid" }}
        />
      )}
    />
  </>
);

const meta = {
  title: "Engine DS/Foundations/Shape",
  component: Shape,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
