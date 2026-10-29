import "./codeblock.css";

export interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <div className="engine-codeblock">
      <pre className="engine-codeblock__pre">
        <code>{code}</code>
      </pre>
    </div>
  );
}
