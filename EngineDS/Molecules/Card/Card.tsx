import Image from "next/image";
import { Anchor } from "@/EngineDS/Atoms/Anchor/Anchor";
import {
  themeClass,
  type EngineTheme,
  type RelativeTheme,
} from "@/EngineDS/_Foundations/themes";
import { joinClasses } from "@/EngineDS/_Foundations/classes";
import "./card.css";

type CardBaseProps = {
  children: React.ReactNode;
  teasersrc: string;
  teaseralt: string;
  theme?: EngineTheme | RelativeTheme;
};

type CardLinkProps =
  | { href?: undefined; linkLabel?: undefined }
  | { href: string; linkLabel: string };

export type CardProps = CardBaseProps & CardLinkProps;

export const Card = ({
  children,
  teasersrc,
  teaseralt,
  theme = "contrast",
  href,
  linkLabel,
}: CardProps) => {
  return (
    <div
      className={joinClasses(
        "engine-card",
        themeClass(theme),
        href && "engine-card--linked",
      )}
    >
      <div className="engine-card__teaser">
        <Image src={teasersrc} alt={teaseralt} width={380} height={285} />
      </div>
      <div className="engine-card__content">{children}</div>
      {href && (
        <Anchor
          href={href}
          className="engine-card__link"
          aria-label={linkLabel}
        />
      )}
    </div>
  );
};
