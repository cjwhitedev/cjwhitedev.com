import { Anchor } from "@/EngineDS/Atoms/Anchor/Anchor";
import { Logo } from "@/EngineDS/Atoms/Logo/Logo";
import { Navbar, type NavbarProps } from "@/EngineDS/Molecules/Navbar/Navbar";
import "./header.css";

export interface HeaderProps {
  links: NavbarProps["links"];
  theme?: "light" | "dark";
}

export const Header = ({ links, theme = "dark" }: HeaderProps) => {
  return (
    <header className={`engine--t-${theme} engine-header`}>
      <div className="wrapper">
        <div className="header-container">
          <div className="header-logo">
            <Anchor href={`/`} aria-label="CJ White DEV home">
              <Logo aria-hidden="true" focusable="false" />
            </Anchor>
          </div>
          <Navbar links={links} theme={theme} />
        </div>
      </div>
    </header>
  );
};
