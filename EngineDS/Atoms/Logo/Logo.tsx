import type { SVGProps } from "react";
import LogoSvg from "./logo.svg?react";
import "./logo.css";

export interface LogoProps extends Omit<SVGProps<SVGSVGElement>, "color"> {
  color?: "inherit" | "primary" | "secondary" | "tertiary";
}

export function Logo({ color = "inherit", className, ...props }: LogoProps) {
  return (
    <LogoSvg
      className={["engine-logo", `engine-logo--${color}`, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
