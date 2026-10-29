import { Anchor, type AnchorProps } from "@/EngineDS/Atoms/Anchor/Anchor";
import { Layout, LayoutItem } from "@/EngineDS/Atoms/Layout/Layout";
import type { EngineTheme } from "@/EngineDS/_Foundations/themes";
import "./footer.css";

export type FooterProps = {
  links: AnchorProps[];
  theme?: EngineTheme;
};

export const Footer = ({ links, theme = "dark" }: FooterProps) => {
  return (
    <div className="engine-footer">
      <Layout theme={theme} layout="halves-from-small">
        <LayoutItem>hi</LayoutItem>
        <LayoutItem>
          <ul className="engine-footer__list">
            {links.map((link) => (
              <li key={link.id} className="engine-footer__item">
                <Anchor
                  href={link.href}
                  reversedUnderline={link.reversedUnderline}
                >
                  {link.children}
                </Anchor>
              </li>
            ))}
          </ul>
        </LayoutItem>
      </Layout>
    </div>
  );
};
