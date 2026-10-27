import "./codeblock.css";

export interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <div className="engine-codeblock__wrapper">
      <pre className={`engine-codeblock`}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
