import type { EngineTheme } from "@/EngineDS/_Foundations/themes";
import {
  joinClasses,
  nonDefaultModifier,
} from "@/EngineDS/_Foundations/classes";
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
  theme?: EngineTheme;
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

  const containerClasses = joinClasses(
    "engine-layout__container",
    `engine--t-${theme}`,
  );

  const layoutClasses = joinClasses(
    "engine-layout",
    nonDefaultModifier("engine-layout--g-", gap, DEFAULTS.gap),
    nonDefaultModifier("engine-layout--p-", padding, DEFAULTS.padding),
    nonDefaultModifier("engine-layout--a-", align, DEFAULTS.align),
    nonDefaultModifier("engine-layout--v-", valign, DEFAULTS.valign),
    ...layouts.map((l) =>
      nonDefaultModifier("engine-layout--l-", l, DEFAULTS.layout),
    ),
  );

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
  return (
    <div
      className={joinClasses(
        "engine-layout__item",
        `engine-layout__item--cs-${columnStart}`,
      )}
    >
      {children}
    </div>
  );
};
