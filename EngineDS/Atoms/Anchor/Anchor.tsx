import type { ComponentProps } from "react";
import Link from "next/link";
import { joinClasses } from "@/EngineDS/_Foundations/classes";
import "./anchor.css";

export type AnchorProps = ComponentProps<typeof Link> & {
  reversedUnderline?: boolean;
};

export const Anchor = ({
  className,
  reversedUnderline,
  ...props
}: AnchorProps) => {
  return (
    <Link
      className={joinClasses(
        "engine-anchor",
        reversedUnderline && "engine-anchor--reversed-underline",
        className,
      )}
      {...props}
    />
  );
};
