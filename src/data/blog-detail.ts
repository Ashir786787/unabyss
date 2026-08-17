export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPostDetail = {
  tldr: string;
  sections: BlogSection[];
};

export const blogPostDetail: Record<string, BlogPostDetail> = {
  "openclaw-claude-shared-memory": {
    tldr: "Yes. Run OpenClaw as your always-on agent and Claude for the thinking work, and give both the same live context over MCP. What OpenClaw learns about your week, your projects, and your habits becomes context Claude reads on demand - without dumping raw chat logs between the two.",
    sections: [
      {
        heading: "Why they don't share today",
        paragraphs: [
          "OpenClaw builds a picture of you over time - scheduled jobs, monitoring, reaching you across Slack and Telegram. That picture lives inside OpenClaw's own memory. Claude keeps its own thread-based memory. Neither one knows what the other learned, so every session starts from zero.",
          "The fix isn't forcing the agents to talk to each other. It's giving both of them a shared thing to read: a context layer that reflects what's actually happening, kept current automatically.",
        ],
      },
      {
        heading: "The MCP bridge",
        paragraphs: [
          "Unabyss sits between OpenClaw, Claude, and the tools you already use - Slack, Telegram, Gmail, Calendar, Notion. It pulls from those sources and structures the result into a profile: projects, relationships, decisions, what changed this week.",
          "Both agents connect over MCP. OpenClaw keeps doing its job and writes back what it learns; Claude, on the next prompt, pulls the slice of context that answers the question. Each one reads the same live picture, and neither needs the other's internal memory to do it.",
        ],
      },
      {
        heading: "What changes in practice",
        paragraphs: [
          "Open Claude on Monday morning and ask where the week stands - it already knows what OpenClaw surfaced over the weekend, because the context is shared, not re-typed. Ask OpenClaw to follow up on something you decided in Claude, and it knows the decision without a paste.",
          "The work you do in each tool feeds back into the same layer, so context reflects what's actually happening rather than a snapshot from setup day.",
        ],
      },
      {
        heading: "What you still control",
        paragraphs: [
          "Sharing context doesn't mean sharing everything. Permissions are per-app and per-file: decide what OpenClaw can see, what Claude can see, and keep anything else out. Export everything as Markdown anytime - there's no lock-in.",
        ],
      },
    ],
  },
  "codex-claude-code-shared-context": {
    tldr: "Yes - and it's not about piping one CLI's chat history into the other. Point Codex CLI and Claude Code at the same MCP context server and both read the same structured picture of your repo, your stack, and the decisions behind the code, no matter which terminal you're in.",
    sections: [
      {
        heading: "Two agents, one repo, zero shared knowledge",
        paragraphs: [
          "Codex CLI in one terminal, Claude Code in another, both working the same repository. Each is genuinely good at the work - and each starts every session knowing nothing about how you work, what you decided last week, or why the code is structured this way.",
          "You end up re-explaining the project in both places: the conventions, the rejected approaches, the deployment rules. That's not a model problem, it's a context problem.",
        ],
      },
      {
        heading: "The same context in every terminal",
        paragraphs: [
          "Connect both CLIs to Unabyss over MCP. Unabyss pulls from GitHub, Linear, Notion, Gmail and Calendar, and structures it into a live profile of the project and your working style - pnpm, Biome, tag-only deploys, whatever your real repos say.",
          "Ask Claude Code to scaffold a new module and it already knows your conventions. Switch to Codex CLI for a review and it knows why the last migration shipped the way it did. No re-briefing between sessions.",
        ],
      },
      {
        heading: "Saves tokens, not just time",
        paragraphs: [
          "Because the agent pulls only the lines that answer the question, you're not dumping the whole repo into context every time. The right slice, on demand - which is cheaper and faster than pasting transcripts back and forth.",
        ],
      },
    ],
  },
  "hermes-claude-shared-memory": {
    tldr: "Yes. Hermes learns you over time and handles tasks in the background; Claude does the drafting and reasoning. Give both the same live context over MCP and each one starts with what the other knows - without exporting Hermes' memory into Claude.",
    sections: [
      {
        heading: "Memory versus context",
        paragraphs: [
          "Hermes builds a profile of you the longer you use it - preferences, habits, recurring tasks. Claude's memory works within its own threads. When the two don't share anything, you lose what makes each one useful: Hermes knows you, Claude knows how to reason with what you give it.",
          "The missing piece is a shared, live picture both can read. That's what a context layer provides.",
        ],
      },
      {
        heading: "One layer, two agents",
        paragraphs: [
          "Unabyss connects to your sources and keeps a structured profile current automatically. Hermes connects over MCP and keeps doing background work - it writes back what it learns. Claude connects too and pulls the slice it needs for the task in front of it.",
          "Draft a reply in Claude and it knows the context Hermes gathered this morning. Give Hermes a follow-up task and it knows what you decided in that Claude session. Both read the same source of truth.",
        ],
      },
      {
        heading: "Keeping it yours",
        paragraphs: [
          "Per-app permissions let you decide what each agent can see, and everything is exportable as Markdown. The context belongs to you, not to any one tool or agent.",
        ],
      },
    ],
  },
  "ai-value-formula-context": {
    tldr: "Your results with AI aren't set by the model you pick. Competence and execution both matter, but context multiplies them - the same model with the right context will beat a better model with none, every time.",
    sections: [
      {
        heading: "Why the model is the least interesting variable",
        paragraphs: [
          "It's tempting to chase the newest model release as if the model itself determines your output quality. In practice the model is one factor among several - and it's the one that's hardest to differentiate and easiest to over-index on.",
          "Competence (does the tool know the domain?) and execution (do you know how to use it?) both matter. But both of them are gated by context: without the right information in front of the model, competence has nothing to work on and execution has nothing to direct.",
        ],
      },
      {
        heading: "Context compounds",
        paragraphs: [
          "Give a good model the full picture of your company, your projects, and what changed this week, and it produces better drafts, fewer wrong assumptions, and more useful work than a frontier model asked to guess from a blank prompt.",
          "That's the value of a context layer: it stops making you the integration. Connect once, and every tool you use starts from what's actually happening - not from what you managed to paste into the last prompt.",
        ],
      },
    ],
  },
};
