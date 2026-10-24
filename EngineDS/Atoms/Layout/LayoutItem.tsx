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
