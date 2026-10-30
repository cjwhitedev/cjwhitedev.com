import { Anchor } from "@/EngineDS/Atoms/Anchor/Anchor";
import {
  joinClasses,
  nonDefaultModifier,
} from "@/EngineDS/_Foundations/classes";
import { revealClass } from "@/EngineDS/_Foundations/motion/motion";
import "./button.css";

export interface ButtonProps {
  hierarchy?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
  href?: string;
  animate?: boolean;
}

/** Primary UI component for user interaction */
export const Button = ({
  hierarchy = "primary",
  size = "medium",
  label,
  href,
  animate = true,
  ...props
}: ButtonProps) => {
  const className = joinClasses(
    "engine-button",
    nonDefaultModifier("engine-button--", hierarchy, "primary"),
    nonDefaultModifier("engine-button--", size, "medium"),
    revealClass(animate),
  );

  if (href) {
    return (
      <Anchor href={href} className={className} {...props}>
        <>{label}</>
      </Anchor>
    );
  }

  return (
    <button type="button" className={className} {...props}>
      {label}
    </button>
  );
};
