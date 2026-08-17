export const seeWhatUnabyssCanDoPrompt = `Use my Unabyss MCP to look at my actual context — the sources I've connected and what's in them. Then show me 3–5 areas of my work where Unabyss would change how I operate day to day.
I don't want one-off tasks. I want the domains where having my context available to AI matters — and within each, a concrete example grounded in my real data so I can see it's not hypothetical.
Rules:
- Pull real context first. Use the Unabyss Query tool to see what's actually in my connected sources before you answer. Don't guess.
- Think in areas, not tasks. Each item should be a recurring part of my work — a type of thinking or output I do repeatedly — not a single errand. "Follow up with this person" is a task. "Staying on top of every open thread across my tools without re-reading everything" is an area.
- Ground each area in something real. Name an actual project, recurring workflow, set of people, or body of work from my context that proves this area is real for me — not a generic guess.
- For each area give me: (1) the area in one line, (2) why my context makes AI meaningfully better here than AI without it, (3) one concrete example prompt I could run today as an entry point into that area.
- Rank by where having my context available would compound most over time — the areas I'd come back to weekly, not once.
If only a few areas are genuinely supported by my context, give me fewer. Don't invent areas to hit five.`;

export const wouldUnabyssHelpPrompt = `Draw on what you know about my work. Where would a tool like unabyss.com actually help me, and where would it add little? Give concrete examples tied to what you know about me and lead with a 1–10 score plus the biggest reason for it.`;

export function agentLink(kind: "claude" | "chatgpt", prompt: string): string {
  const base = kind === "claude" ? "https://claude.ai/new?q=" : "https://chatgpt.com/?q=";
  return base + encodeURIComponent(prompt);
}
