import Image from "next/image";
import { Anchor } from "@/EngineDS/Atoms/Anchor/Anchor";
import type { EngineTheme } from "@/EngineDS/_Foundations/themes";
import "./card.css";

export type CardProps = {
  children: React.ReactNode;
  teasersrc: string;
  teaseralt: string;
  theme?: EngineTheme;
  href?: string;
};

export function Card({
  children,
  teasersrc,
  teaseralt,
  theme = "dark",
  href,
}: CardProps) {
  return (
    <div
      className={`engine-card engine--t-${theme} ${href ? "engine-card--linked" : ""}`}
    >
      <div className="engine-card__teaser">
        <Image src={teasersrc} alt={teaseralt} width={380} height={285} />
      </div>
      <div className="engine-card__content">{children}</div>
      {href && <Anchor href={href} className="engine-card__link" />}
    </div>
  );
}
