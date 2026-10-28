import "./layout.css";

export const LAYOUT_OPTIONS = [
  "full",
  "halves",
  "halves-from-small",
  "thirds",
  "thirds-from-small",
  "fourths",
  "fourths-from-small",
  "fourths-from-medium",
  "three-tiles",
] as const;

export type LayoutOption = (typeof LAYOUT_OPTIONS)[number];

export interface LayoutProps {
  children: React.ReactNode;
  layout?: LayoutOption | LayoutOption[];
  theme?: "light" | "dark";
  gap?: "none" | "small" | "medium" | "large";
  padding?: "none" | "small" | "medium" | "large";
  align?: "start" | "center" | "end";
  valign?: "start" | "center" | "end";
}

const DEFAULTS = {
  layout: "full",
  theme: "light",
  gap: "medium",
  padding: "medium",
  align: "start",
  valign: "start",
} as const;

// Returns the modifier class, or undefined if the value is the default
const modifier = (prefix: string, value: string, defaultValue: string) =>
  value === defaultValue ? undefined : `${prefix}${value}`;

export const Layout = ({
  children,
  layout = DEFAULTS.layout,
  theme = DEFAULTS.theme,
  gap = DEFAULTS.gap,
  padding = DEFAULTS.padding,
  align = DEFAULTS.align,
  valign = DEFAULTS.valign,
}: LayoutProps) => {
  const layouts = Array.isArray(layout) ? layout : [layout];

  const containerClasses = [
    "engine-layout__container",
    `engine--t-${theme}`,
  ].join(" ");

  const layoutClasses = [
    "engine-layout",
    modifier("engine-layout--g-", gap, DEFAULTS.gap),
    modifier("engine-layout--p-", padding, DEFAULTS.padding),
    modifier("engine-layout--a-", align, DEFAULTS.align),
    modifier("engine-layout--v-", valign, DEFAULTS.valign),
    ...layouts.map((l) => modifier("engine-layout--l-", l, DEFAULTS.layout)),
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses}>
      <div className={layoutClasses}>{children}</div>
    </div>
  );
};

export interface LayoutItemProps {
  children: React.ReactNode;
  columnStart?: "1" | "2" | "3" | "4";
}

export const LayoutItem = ({
  children,
  columnStart = "1",
}: LayoutItemProps) => {
  // return <div className="engine-layout-item">{children}</div>;
  return (
    <div
      className={[
        "engine-layout-item",
        `engine-layout-item--cs-${columnStart}`,
      ].join(" ")}
    >
      {children}
    </div>
  );
};
