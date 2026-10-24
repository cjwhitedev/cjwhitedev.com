import "./layout.css";

export interface LayoutProps {
  children: React.ReactNode;
  layout?:
    | "full"
    | "halves"
    | "halves-from-small"
    | "thirds"
    | "thirds-from-small"
    | "fourths"
    | "fourths-from-small"
    | "fourths-from-medium";
  theme?: "light" | "dark";
  align?: "start" | "center" | "end";
  valign?: "start" | "center" | "end";
  gutter?: "none" | "small" | "medium" | "large";
  padding?: "none" | "small" | "medium" | "large";
}

export const Layout = ({
  children,
  layout = "full",
  theme = "light",
  align = "start",
  valign = "start",
  gutter = "medium",
  padding = "medium",
}: LayoutProps) => {
  return (
    <div
      className={["engine-layout__container", `engine--t-${theme}`].join(" ")}
    >
      <div
        className={[
          "engine-layout",
          `engine-layout--l-${layout}`,
          `engine-layout--a-${align}`,
          `engine-layout--v-${valign}`,
          `engine-layout--g-${gutter}`,
          `engine-layout--p-${padding}`,
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
};
