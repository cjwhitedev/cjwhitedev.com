// white and light alternate on pages; dark-sec and dark-ter replace them in dark mode
export type EngineTheme = "white" | "light" | "dark" | "dark-sec" | "dark-ter";

// inherit adds no class; contrast picks the dark theme furthest from the parent
export type RelativeTheme = "inherit" | "contrast";

export const themeClass = (theme: EngineTheme | RelativeTheme) =>
  theme === "inherit" ? undefined : `engine--t-${theme}`;
