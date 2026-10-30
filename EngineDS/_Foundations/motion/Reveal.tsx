export interface RevealProps {
  children: React.ReactNode;
}

export const Reveal = ({ children }: RevealProps) => {
  return <div className="engine-reveal">{children}</div>;
};
