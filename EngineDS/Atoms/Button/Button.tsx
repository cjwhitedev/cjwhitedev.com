import "./button.css";

export interface ButtonProps {
  hierarchy?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  hierarchy = "primary",
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        "engine-button",
        `engine-button--${hierarchy}`,
        `engine-button--${size}`,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
