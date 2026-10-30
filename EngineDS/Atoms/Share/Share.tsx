import { Anchor } from "@/EngineDS/Atoms/Anchor/Anchor";
import {
  joinClasses,
  nonDefaultModifier,
} from "@/EngineDS/_Foundations/classes";
import { BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";
import { revealClass } from "@/EngineDS/_Foundations/motion/motion";
import "./share.css";

const SOURCES = {
  github: { label: "GitHub", Icon: BsGithub },
  linkedin: { label: "LinkedIn", Icon: BsLinkedin },
  email: { label: "Email", Icon: BsEnvelope },
} as const;

export type ShareSource = {
  name: keyof typeof SOURCES;
  href: string;
};

export type ShareProps = {
  text?: string;
  sources: ShareSource[];
  size?: "small" | "medium";
  align?: "start" | "center" | "end";
  animate?: boolean;
};

export const Share = ({
  text = "Share",
  sources,
  size = "medium",
  align = "start",
  animate = true,
}: ShareProps) => {
  return (
    <div
      className={joinClasses(
        "engine-share",
        nonDefaultModifier("engine-share--s-", size, "medium"),
        nonDefaultModifier("engine-share--a-", align, "start"),
        revealClass(animate),
      )}
    >
      <p className="engine-share__text">{text}</p>
      <ul className="engine-share__list">
        {sources.map(({ name, href }) => {
          const { label, Icon } = SOURCES[name];
          return (
            <li key={name}>
              <Anchor
                href={href}
                className="engine-share__link"
                aria-label={label}
              >
                <Icon aria-hidden="true" />
              </Anchor>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
