// white and light alternate on pages; dark-alt and dark-plum replace them in dark mode
export type EngineTheme = "white" | "light" | "dark" | "dark-alt" | "dark-plum";

// inherit adds no class; contrast picks the dark theme furthest from the parent
export type RelativeTheme = "inherit" | "contrast";

export const themeClass = (theme: EngineTheme | RelativeTheme) =>
  theme === "inherit" ? undefined : `engine--t-${theme}`;
