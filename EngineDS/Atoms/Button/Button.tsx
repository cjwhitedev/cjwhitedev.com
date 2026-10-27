import { Anchor } from "@/EngineDS/Atoms/Anchor/Anchor";
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
  if (href) {
    return (
      <Anchor
        href={href}
        className={[
          "engine-button",
          hierarchy !== "primary" ? `engine-button--${hierarchy}` : ``,
          size !== "medium" ? `engine-button--${size}` : ``,
        ].join(" ")}
        {...props}
      >
        <>{label}</>
      </Anchor>
    );
  } else {
    return (
      <button
        type="button"
        className={[
          "engine-button",
          hierarchy !== "primary" ? `engine-button--${hierarchy}` : ``,
          size !== "medium" ? `engine-button--${size}` : ``,
        ].join(" ")}
        {...props}
      >
        {label}
      </button>
    );
  }
};
