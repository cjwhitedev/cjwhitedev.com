import type { SVGProps } from "react";
import LogoSvg from "./logo.svg?react";
import "./logo.css";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return <LogoSvg className="engine-logo" {...props} />;
}
