export type CompareColumn = {
  label: string;
  icon?: string;
  highlight?: boolean;
};

export type CompareRow = {
  label: string;
  icon?: string;
  cells: string[];
};

export type CompareTable = {
  minWidth: string;
  columns: CompareColumn[];
  rows: CompareRow[];
};

export type CompareAccordionItem = {
  title: string;
  body: string;
  href: string;
};

export const compareAccordion: CompareAccordionItem[] = [
  {
    title: "Unabyss vs. built-in AI memory",
    body: "Built-in memory is useful, but it's trapped in one tool - what ChatGPT learns stays in ChatGPT, and Claude's memory can't help Cursor. Unabyss is a context layer you own, served to every AI tool over MCP.",
    href: "/unabyss-vs-llm-memory",
  },
  {
    title: "Unabyss vs. context files",
    body: "A .md context file is a snapshot that goes stale within a week, and you re-paste it into every tool. Unabyss stays connected to your sources, so context is always current and delivered automatically everywhere.",
    href: "/unabyss-vs-context-files",
  },
  {
    title: "Unabyss vs. building your own context system",
    body: "A self-hosted brain can't maintain itself without you. Unabyss is the same idea - owned, structured, cross-tool context - made managed, so you get it without operating infrastructure.",
    href: "/unabyss-vs-external-knowledge",
  },
  {
    title: "AI memory vs. AI context",
    body: "AI memory is learned from past conversations and locked inside the platform that built it. Context is who you are, pre-structured from authoritative sources, portable across every tool you use.",
    href: "/context-vs-memory",
  },
];

export const llmMemoryBasicsTable: CompareTable = {
  minWidth: "640px",
  columns: [
    { label: "Default" },
    { label: "Where" },
  ],
  rows: [
    {
      label: "ChatGPT",
      icon: "/images/tools/chatgpt.svg",
      cells: ["On for most plans", "Settings > Personalization > Memory"],
    },
    {
      label: "Claude",
      icon: "/images/tools/claude.svg",
      cells: ["Off - you enable it", "Settings > Capabilities > Memory"],
    },
    {
      label: "Gemini",
      icon: "/images/tools/gemini.svg",
      cells: ["On for consumer accounts", "Settings > Personal context > Memory"],
    },
    {
      label: "Perplexity",
      icon: "/images/tools/perplexity.svg",
      cells: ["On - toggleable", "Settings > Personalize > Manage Memories"],
    },
  ],
};

export const llmMemoryCompareTable: CompareTable = {
  minWidth: "640px",
  columns: [
    { label: "Unabyss", icon: "/images/pages/unabyss-mark.svg", highlight: true },
    { label: "Built-in memory" },
  ],
  rows: [
    {
      label: "Lives",
      cells: ["An independent layer you own", "Inside one tool"],
    },
    {
      label: "Controlled by",
      cells: ["You - per-app, per-file", "The platform"],
    },
    {
      label: "Across tools & agents",
      cells: ["Yes - one vault, every tool", "No"],
    },
    {
      label: "Portable",
      cells: ["Yours to take anywhere", "Limited - only within that vendor's walls"],
    },
    {
      label: "Built from",
      cells: [
        "Your real sources, structured",
        "Chats, attachments, connected apps - in that tool",
      ],
    },
    {
      label: "Audit trail",
      cells: ["Every request logged", "No"],
    },
  ],
};

export const contextFilesCompareTable: CompareTable = {
  minWidth: "640px",
  columns: [
    { label: "Unabyss", icon: "/images/pages/unabyss-mark.svg", highlight: true },
    { label: "Context files" },
  ],
  rows: [
    {
      label: "Stays current",
      cells: ["Yes - updates from your sources", "No - stale within a week"],
    },
    {
      label: "Upkeep",
      cells: ["Automatic", "Manual, forever"],
    },
    {
      label: "Delivered to AI",
      cells: ["Pulled via MCP, every session", "Re-upload per tool"],
    },
    {
      label: "Coverage",
      cells: ["Extracted across all your sources", "Only what you typed"],
    },
    {
      label: "Reflects your AI work",
      cells: ["Yes - pulls from connected AI tools too", "No"],
    },
    {
      label: "Conflicting info",
      cells: ["Flagged automatically", "You sort it out"],
    },
  ],
};

export const externalKnowledgeCompareTable: CompareTable = {
  minWidth: "980px",
  columns: [
    { label: "Unabyss", icon: "/images/pages/unabyss-mark.svg", highlight: true },
    { label: "GitHub repo" },
    { label: "LLM Wiki" },
    { label: "GBrain" },
  ],
  rows: [
    {
      label: "What it is",
      cells: [
        "Managed context layer served to any AI",
        "Markdown files in a repo, fed to AI",
        "A pattern: LLM maintains interlinked markdown from raw sources",
        "Local-first markdown + Postgres brain for agents",
      ],
    },
    {
      label: "Who it's for",
      cells: [
        "Developers and professionals",
        "Developers",
        "Developers / power users",
        "Developers, indie hackers, CTOs",
      ],
    },
    {
      label: "Setup",
      cells: [
        "Connect a source, ~90 seconds",
        "Create & organize repo",
        "Copy the pattern, wire the ingest/query/lint loop",
        "CLI, PGLite/Postgres, embeddings, API keys",
      ],
    },
    {
      label: "Upkeep",
      cells: [
        "Automatic - stays current from your sources",
        "You write & update every file",
        "You feed it and lint it; needs discipline",
        "You run sync jobs, schema, dreaming cycle",
      ],
    },
    {
      label: "Stays current",
      cells: [
        "Yes - connected to live sources",
        "Only when you edit it",
        "Only if you keep ingesting",
        "Only while you operate it",
      ],
    },
    {
      label: "Covers",
      cells: [
        "Everything - identity, work, conversations, projects (and code via GitHub / GitLab / Linear)",
        "A project / codebase",
        "A curated corpus",
        "People, companies, notes you capture",
      ],
    },
    {
      label: "Cross-tool delivery",
      cells: [
        "MCP, built in - every tool",
        "Manual per tool",
        "Manual per tool",
        "MCP (you host it)",
      ],
    },
    {
      label: "Permissions",
      cells: [
        "Granular, per-app, per-file",
        "Repo access only",
        "None built in",
        "You build it",
      ],
    },
    {
      label: "Day-one value",
      cells: [
        "Useful immediately",
        "Low - you build first",
        "Low - compounds over time",
        "Limited - compounds over months",
      ],
    },
    {
      label: "Pulls from your AI tools",
      cells: [
        "Yes - connected agents feed context back",
        "No",
        "No",
        "No - you feed it",
      ],
    },
  ],
};
