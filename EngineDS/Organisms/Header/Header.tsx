import { Anchor } from "@/EngineDS/Atoms/Anchor/Anchor";
import { Layout } from "@/EngineDS/Atoms/Layout/Layout";
import { Logo } from "@/EngineDS/Atoms/Logo/Logo";
import { Navbar, type NavbarProps } from "@/EngineDS/Molecules/Navbar/Navbar";
import type { EngineTheme } from "@/EngineDS/_Foundations/themes";
import "./header.css";

export interface HeaderProps {
  links: NavbarProps["links"];
  theme?: EngineTheme;
}

export const Header = ({ links, theme = "dark" }: HeaderProps) => {
  return (
    <header className={`engine--t-${theme} engine-header`}>
      <Layout theme={theme} padding="small">
        <div className="engine-header__container">
          <div className="engine-header__logo">
            <Anchor href={`/`} aria-label="CJ White DEV home">
              <Logo aria-hidden="true" focusable="false" />
            </Anchor>
          </div>
          <Navbar links={links} theme={theme} />
        </div>
      </Layout>
    </header>
  );
};
