export interface LayoutItemProps {
  children: React.ReactNode;
}

export const LayoutItem = ({ children }: LayoutItemProps) => {
  return <div className="engine-layout-item">{children}</div>;
};
