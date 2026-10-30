import { joinClasses } from "@/EngineDS/_Foundations/classes";
import { revealClass } from "@/EngineDS/_Foundations/motion/motion";
import "./codeblock.css";

export interface CodeBlockProps {
  code: string;
  animate?: boolean;
}

export const CodeBlock = ({ code, animate = true }: CodeBlockProps) => {
  return (
    <div className={joinClasses("engine-codeblock", revealClass(animate))}>
      <pre className="engine-codeblock__pre">
        <code>{code}</code>
      </pre>
    </div>
  );
};
