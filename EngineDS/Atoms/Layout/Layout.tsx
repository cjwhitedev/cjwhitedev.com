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
    | "fourths-from-medium"
    | "three-tiles";
  theme?: "light" | "dark";
  gap?: "none" | "small" | "medium" | "large";
  padding?: "none" | "small" | "medium" | "large";
  valign?: "start" | "center" | "end";
}

export const Layout = ({
  children,
  layout = "full",
  theme = "light",
  gap = "medium",
  padding = "medium",
  valign = "start",
}: LayoutProps) => {
  return (
    <div
      className={["engine-layout__container", `engine--t-${theme}`].join(" ")}
    >
      <div
        className={[
          "engine-layout",
          `engine-layout--l-${layout}`,
          `engine-layout--g-${gap}`,
          `engine-layout--p-${padding}`,
          `engine-layout--v-${valign}`,
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  );
};
