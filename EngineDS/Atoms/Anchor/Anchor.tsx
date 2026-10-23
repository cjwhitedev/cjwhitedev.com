import type { ComponentProps } from "react";
import Link from "next/link";
import "./anchor.css";

export type AnchorProps = ComponentProps<typeof Link>;

export function Anchor({ className, ...props }: AnchorProps) {
  return (
    <Link
      className={["engine-link", className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
