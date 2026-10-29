import type { SVGProps } from "react";
import LogoSvg from "./logo.svg?react";
import { joinClasses } from "@/EngineDS/_Foundations/classes";
import "./logo.css";

export interface LogoProps extends Omit<SVGProps<SVGSVGElement>, "color"> {
  color?: "inherit" | "primary" | "secondary";
}

export const Logo = ({ color, className, ...props }: LogoProps) => {
  return (
    <LogoSvg
      className={joinClasses(
        "engine-logo",
        color && `engine-logo--${color}`,
        className,
      )}
      {...props}
    />
  );
};
