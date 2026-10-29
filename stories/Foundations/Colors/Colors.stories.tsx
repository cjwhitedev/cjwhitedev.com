import type { StoryObj } from "@storybook/nextjs-vite";
import themesCss from "@/EngineDS/_Foundations/themes.css?raw";
import { Swatches, tokensMatching } from "@/stories/Foundations/tokens";

const palette = tokensMatching(
  "(?:beige|orange|maroon|purple|near-black|near-white)",
);

// Reads a theme's role mappings from themes.css so the values shown are that theme's
const themeRoles = (theme: string) => {
  const block =
    themesCss.match(
      new RegExp(`\\.engine--t-${theme}\\s*\\{([^}]*)\\}`),
    )?.[1] ?? "";
  return [...block.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map(
    ([, name, value]) => ({ name, value }),
  );
};

const ThemePanel = ({ theme }: { theme: "light" | "dark" }) => (
  <div className={`fnd-panel engine--t-${theme}`}>
    <h3>{theme}</h3>
    <Swatches tokens={themeRoles(theme)} />
  </div>
);

const Colors = () => (
  <>
    <h2>Palette</h2>
    <Swatches tokens={palette} />
    <h2>Themes</h2>
    <div className="fnd-panels">
      <ThemePanel theme="light" />
      <ThemePanel theme="dark" />
    </div>
  </>
);

const meta = {
  title: "Engine DS/Foundations/Colors",
  component: Colors,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
