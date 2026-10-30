import type { ReactNode } from "react";
import varsCss from "@/EngineDS/_vars.css?raw";
import "./foundations.css";

export type Token = { name: string; value?: string };

// Reads tokens straight from _vars.css so the docs never duplicate values
export const tokensMatching = (pattern: string): Token[] => {
  const found = new Map<string, string>();
  for (const [, name, value] of varsCss.matchAll(
    new RegExp(`(--(?:${pattern}))\\s*:\\s*([^;]+);`, "g"),
  )) {
    // First declaration wins; later ones are overrides such as reduced motion
    if (!found.has(name)) found.set(name, value.replace(/\s+/g, " ").trim());
  }
  return [...found].map(([name, value]) => ({ name, value }));
};

type TokenTableProps = {
  tokens: Token[];
  preview?: (name: string) => ReactNode;
};

export const TokenTable = ({ tokens, preview }: TokenTableProps) => (
  <table className="fnd-table">
    <thead>
      <tr>
        <th>Token</th>
        <th>Value</th>
        {preview && <th>Preview</th>}
      </tr>
    </thead>
    <tbody>
      {tokens.map(({ name, value }) => (
        <tr key={name}>
          <td>
            <code>{name}</code>
          </td>
          <td>
            <code>{value}</code>
          </td>
          {preview && <td>{preview(name)}</td>}
        </tr>
      ))}
    </tbody>
  </table>
);

export const Swatches = ({ tokens }: { tokens: Token[] }) => (
  <div className="fnd-swatches">
    {tokens.map(({ name, value }) => (
      <div key={name} className="fnd-swatch">
        <span style={{ backgroundColor: `var(${name})` }} />
        <code>{name}</code>
        {value && <code>{value}</code>}
      </div>
    ))}
  </div>
);
