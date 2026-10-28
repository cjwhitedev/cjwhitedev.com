import Image from "next/image";
import { Anchor } from "@/EngineDS/Atoms/Anchor/Anchor";
import "./card.css";

export type CardProps = {
  children: React.ReactNode;
  teasersrc: string;
  teaseralt: string;
  theme?: "light" | "dark";
  href?: string;
};

export function Card({ children, theme = "dark", href, ...props }: CardProps) {
  return (
    <div
      className={`engine-card engine--t-${theme} ${href ? "engine-card--linked" : ""}`}
      {...props}
    >
      <div className="engine-card__teaser">
        <Image
          src={props.teasersrc ?? ""}
          alt={props.teaseralt ?? ""}
          width={380}
          height={285}
        />
      </div>
      <div className="engine-card__content">{children}</div>
      {href && <Anchor href={href} className="engine-card__link" />}
    </div>
  );
}
