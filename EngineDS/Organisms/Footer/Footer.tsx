import { Anchor, type AnchorProps } from "@/EngineDS/Atoms/Anchor/Anchor";
import { Layout, LayoutItem } from "@/EngineDS/Atoms/Layout/Layout";
import { Share, type ShareProps } from "@/EngineDS/Atoms/Share/Share";
import { joinClasses } from "@/EngineDS/_Foundations/classes";
import { themeClass, type EngineTheme } from "@/EngineDS/_Foundations/themes";
import { CopyrightYear } from "./CopyrightYear";
import "./footer.css";

export type FooterProps = {
  title: string;
  children?: React.ReactNode;
  share?: ShareProps;
  links: AnchorProps[];
  copyright?: string;
  theme?: EngineTheme;
};

export const Footer = ({
  title,
  children,
  share,
  links,
  copyright,
  theme = "dark",
}: FooterProps) => {
  return (
    <footer className={joinClasses("engine-footer", themeClass(theme))}>
      <Layout theme="inherit" layout="halves-from-small" gap="large">
        <LayoutItem animate={false}>
          <h2 className="engine-footer__title">{title}</h2>
          {children}
          {share && (
            <div className="engine-footer__share">
              <Share {...share} animate={false} />
            </div>
          )}
        </LayoutItem>
        <LayoutItem animate={false}>
          <ul className="engine-footer__list">
            {links.map((link) => (
              <li key={link.id}>
                <Anchor {...link} />
              </li>
            ))}
          </ul>
        </LayoutItem>
      </Layout>
      {copyright && (
        <Layout theme="inherit" padding="small">
          <p className="engine-footer__copyright">
            © <CopyrightYear /> {copyright}
          </p>
        </Layout>
      )}
    </footer>
  );
};
