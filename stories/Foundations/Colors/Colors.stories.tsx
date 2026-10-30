import { useEffect, useRef, useState } from "react";
import type { StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";
import { Swatches, tokensMatching } from "@/stories/Foundations/tokens";
import { MIN_BODY, MIN_TEXT, tokenContrast } from "./contrast";

const palette = tokensMatching(
  "(?:beige|orange|maroon|purple|near-black|near-white|white|dark-purple|plum)",
);

const roles = ["--fg", "--bg", "--primary", "--secondary"].map((name) => ({
  name,
}));

const themes = ["white", "light", "dark", "dark-alt", "dark-plum"] as const;

const format = (ratio: number) => `${ratio.toFixed(2)}:1`;

const measure = (el: HTMLElement) => ({
  body: tokenContrast(el, "--fg", "--bg"),
  link: tokenContrast(el, "--primary", "--bg"),
  secondary: tokenContrast(el, "--secondary", "--bg"),
});

const ThemePanel = ({ theme }: { theme: (typeof themes)[number] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [ratios, setRatios] = useState<ReturnType<typeof measure>>();

  useEffect(() => {
    if (ref.current) setRatios(measure(ref.current));
  }, []);

  return (
    <div
      ref={ref}
      className={`fnd-panel engine--t-${theme}`}
      data-testid={`panel-${theme}`}
    >
      <h3>{theme}</h3>
      <Swatches tokens={roles} />
      {ratios && (
        <ul>
          <li>
            Body text, <code>--fg</code> on <code>--bg</code>:{" "}
            {format(ratios.body)}
          </li>
          <li>
            Links, <code>--primary</code> on <code>--bg</code>:{" "}
            {format(ratios.link)}
          </li>
          <li>
            Non-text, <code>--secondary</code> on <code>--bg</code>:{" "}
            {format(ratios.secondary)}
          </li>
        </ul>
      )}
    </div>
  );
};

const Colors = () => (
  <>
    <h2>Palette</h2>
    <Swatches tokens={palette} />
    <h2>Themes</h2>
    <div className="fnd-panels">
      {themes.map((theme) => (
        <ThemePanel key={theme} theme={theme} />
      ))}
    </div>
  </>
);

const meta = {
  title: "Engine DS/Foundations/Colors",
  component: Colors,
};

export default meta;
type Story = StoryObj<typeof meta>;

const expectReadable = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  for (const theme of themes) {
    const panel = await canvas.findByTestId(`panel-${theme}`);
    const { body, link } = measure(panel);
    await expect(body, `${theme} body text`).toBeGreaterThanOrEqual(MIN_BODY);
    await expect(link, `${theme} links`).toBeGreaterThanOrEqual(MIN_TEXT);
  }
  return canvas;
};

export const Default: Story = {
  // Fails if any theme drops below WCAG AA for links or AAA for body text
  play: ({ canvasElement }) => expectReadable(canvasElement).then(() => {}),
};

export const DarkMode: Story = {
  globals: { theme: "dark" },
  play: async ({ canvasElement }) => {
    const canvas = await expectReadable(canvasElement);
    const background = async (theme: string) =>
      getComputedStyle(await canvas.findByTestId(`panel-${theme}`))
        .backgroundColor;
    await expect(await background("white")).toBe(await background("dark-alt"));
    await expect(await background("light")).toBe(await background("dark-plum"));
  },
};
