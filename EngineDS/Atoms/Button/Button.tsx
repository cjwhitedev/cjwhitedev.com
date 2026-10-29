import { Anchor } from "@/EngineDS/Atoms/Anchor/Anchor";
import {
  joinClasses,
  nonDefaultModifier,
} from "@/EngineDS/_Foundations/classes";
import "./button.css";

export interface ButtonProps {
  hierarchy?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
  href?: string;
}

/** Primary UI component for user interaction */
export const Button = ({
  hierarchy = "primary",
  size = "medium",
  label,
  href,
  ...props
}: ButtonProps) => {
  const className = joinClasses(
    "engine-button",
    nonDefaultModifier("engine-button--", hierarchy, "primary"),
    nonDefaultModifier("engine-button--", size, "medium"),
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
