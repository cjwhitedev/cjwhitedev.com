import Image from "next/image";
import "./card.css";

export type CardProps = {
  children: React.ReactNode;
  teaserSrc?: string;
  teaserAlt?: string;
  theme?: "light" | "dark";
};

export function Card({ children, theme = "dark", ...props }: CardProps) {
  return (
    <div className={`engine-card engine--t-${theme}`} {...props}>
      <div className="engine-card__teaser">
        <Image
          src={props.teaserSrc ?? ""}
          alt={props.teaserAlt ?? ""}
          width={300}
          height={200}
        />
      </div>
      <div className="engine-card__content">{children}</div>
    </div>
  );
}
