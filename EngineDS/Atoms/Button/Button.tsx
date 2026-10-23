import "./button.css";

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  hierarchy?: "primary" | "secondary" | "tertiary";
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
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
        "engine-btn",
        `engine-btn--${hierarchy}`,
        `engine-btn--${size}`,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
