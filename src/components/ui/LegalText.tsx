import type { ReactNode } from "react";

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

export function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  let match: RegExpExecArray | null;
  LINK.lastIndex = 0;
  while ((match = LINK.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    nodes.push(
      <a
        key={key++}
        href={match[2]}
        className="text-[var(--gold-text)] no-underline underline-offset-4 transition-colors hover:opacity-80"
      >
        {match[1]}
      </a>
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) {
    nodes.push(text.slice(last));
  }
  return nodes;
}
