import type { StoryObj } from "@storybook/nextjs-vite";
import { TokenTable, tokensMatching } from "@/stories/Foundations/tokens";

function TypographySamples() {
  return (
    <div>
      <h1>Heading level one</h1>
      <h2>Heading level two</h2>
      <h3>Heading level three</h3>
      <h4>Heading level four</h4>
      <h5>Heading level five</h5>
      <h6>Heading level six</h6>

      <h2>Body text</h2>
      <p>
        Paragraphs use the body typeface, readable line spacing, and a
        comfortable measure.
      </p>
      <p>
        <strong>Strong text</strong> and <em>emphasized text</em> retain their
        semantic meaning.
      </p>

      <h2>Lists</h2>
      <ul>
        <li>Unordered list item</li>
        <li>Another list item</li>
      </ul>

      <ol>
        <li>First ordered list item</li>
        <li>Second ordered list item</li>
      </ol>

      <h2>Quotation</h2>
      <blockquote>
        A blockquote demonstrates a longer quoted passage.
      </blockquote>
    </div>
  );
}

const meta = {
  title: "Engine DS/Foundations/Typography",
  component: TypographySamples,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Scale: Story = {
  render: () => (
    <>
      <h2>Sizes</h2>
      <TokenTable
        tokens={tokensMatching("text-[a-z0-9]+")}
        preview={(name) => (
          <span style={{ fontSize: `var(${name})` }}>The quick brown fox</span>
        )}
      />
      <h2>Weights</h2>
      <TokenTable
        tokens={tokensMatching("weight-[a-z]+")}
        preview={(name) => (
          <span style={{ fontWeight: `var(${name})` }}>
            The quick brown fox
          </span>
        )}
      />
      <h2>Line height</h2>
      <TokenTable tokens={tokensMatching("leading-[a-z]+")} />
    </>
  ),
};
