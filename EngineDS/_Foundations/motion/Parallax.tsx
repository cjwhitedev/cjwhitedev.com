import type { CSSProperties } from "react";
import {
  joinClasses,
  nonDefaultModifier,
} from "@/EngineDS/_Foundations/classes";
import "./parallax.css";

export interface ParallaxProps {
  children: React.ReactNode;
  speed?: "subtle" | "medium" | "strong";
  ratio?: string;
}

export const Parallax = ({
  children,
  speed = "medium",
  ratio = "16 / 9",
}: ParallaxProps) => {
  return (
    <div
      className={joinClasses(
        "engine-parallax",
        nonDefaultModifier("engine-parallax--s-", speed, "medium"),
      )}
      style={{ "--parallax-ratio": ratio } as CSSProperties}
    >
      <div className="engine-parallax__layer">{children}</div>
    </div>
  );
};
