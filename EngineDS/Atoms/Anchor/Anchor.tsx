import type { ComponentProps } from "react";
import Link from "next/link";
import "./anchor.css";

export type AnchorProps = ComponentProps<typeof Link> & {
  reversedUnderline?: boolean;
};

export function Anchor({
  className,
  reversedUnderline,
  ...props
}: AnchorProps) {
  return (
    <Link
      className={[
        "engine-link",
        reversedUnderline && "engine-link--reversed-underline",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
