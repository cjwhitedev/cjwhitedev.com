import { Anchor, type AnchorProps } from "@/EngineDS/Atoms/Anchor/Anchor";
import { Layout, LayoutItem } from "@/EngineDS/Atoms/Layout/Layout";
import { joinClasses } from "@/EngineDS/_Foundations/classes";
import { themeClass, type EngineTheme } from "@/EngineDS/_Foundations/themes";
import "./footer.css";

export type FooterProps = {
  links: AnchorProps[];
  theme?: EngineTheme;
};

export const Footer = ({ links, theme = "dark" }: FooterProps) => {
  return (
    <footer className={joinClasses("engine-footer", themeClass(theme))}>
      <Layout theme="inherit" layout="halves-from-small">
        <LayoutItem>hi</LayoutItem>
        <LayoutItem>
          <ul className="engine-footer__list">
            {links.map((link) => (
              <li key={link.id} className="engine-footer__item">
                <Anchor {...link} />
              </li>
            ))}
          </ul>
        </LayoutItem>
      </Layout>
    </footer>
  );
};
