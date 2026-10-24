import "./codeblock.css";

export interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <pre className={`engine-codeblock`}>
      <code>{code}</code>
    </pre>
  );
}
