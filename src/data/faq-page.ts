export type FaqItem = {
  question: string;
  answer: string[];
};

export type FaqGroup = {
  id: string;
  title: string;
  items: FaqItem[];
};

export const faqGroups: FaqGroup[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    items: [
      {
        question: "What is Unabyss, exactly?",
        answer: [
          "Unabyss is an easy way to deliver the AI context it needs to work correctly. It pulls your information from tools you use daily - Slack, Gmail, Notion, GitHub, meetings - into one structured memory, so Claude, Cursor, ChatGPT, or any MCP-compatible tool can read it. You stop re-explaining yourself every time you switch tools.",
        ],
      },
      {
        question: "How will this change my day-to-day work with AI?",
        answer: [
          "Right now, every chat with AI starts from zero - you re-explain your role, your project, your preferences, every time. What ChatGPT learns stays trapped in ChatGPT. Connect your sources once, and any AI tool that supports MCP already knows your context before you type a word. Never re-explain yourself to an AI again.",
        ],
      },
      {
        question: "How long does setup take?",
        answer: [
          "Under 90 seconds. Connect the sources you want to start with - Unabyss extracts your context stored there. Then connect Unabyss to Claude Desktop or Cursor via MCP, or export your context files directly and paste them into any AI tool.",
        ],
      },
      {
        question: "Which sources can I connect?",
        answer: [
          "You connect the sources you want to start with. Available at launch: LinkedIn, X, your personal website, Gmail, Notion, Slack, Google Docs, Google Calendar, Google Drive, GitHub, and Obsidian.",
          "You can also import existing context from ChatGPT custom instructions and Claude Projects -- so context you've already built elsewhere isn't lost.",
        ],
      },
    ],
  },
  {
    id: "how-it-works",
    title: "How It Works",
    items: [
      {
        question: "How is Unabyss different from ChatGPT Memory or Claude Memory?",
        answer: [
          "ChatGPT Memory and Claude Memory each remember conversations inside that one tool - the memory doesn't travel with you. Unabyss sits above all your tools: it pulls context from where your work actually lives and serves it via MCP. Switch from Claude to Cursor to ChatGPT and the context comes with you, not just what you told one chatbot.",
        ],
      },
      {
        question: "How does this differ from a CLAUDE.md / context file I maintain myself?",
        answer: [
          "A context file works - until it goes stale. It's a snapshot: your role, your project, your priorities change, and the file doesn't. You're stuck manually updating and re-pasting it into every tool. Unabyss stays connected to your actual sources, so it updates itself - and it also pulls from what you do inside Claude, ChatGPT, or Cursor, feeding that back in. A .md file can't do that.",
        ],
      },
      {
        question: "What is the difference between AI context and AI memory?",
        answer: [
          "AI memory is what a platform learns about you from past conversations. It's reactive, unstructured, and locked to the platform that built it -- switch tools and you start from zero. AI context is intentional and pre-extracted: who you are, structured from authoritative sources, ready to serve to any tool before the first message. Memory is a side effect of using AI. Context is infrastructure you own.",
        ],
      },
      {
        question: "What is a personal context layer?",
        answer: [
          "A personal context layer is a structured, portable store of your identity, professional background, and preferences that any AI tool can access -- with your permission -- before the first interaction begins. Unlike AI memory (which is built reactively from past conversations and locked to one platform), a context layer is intentional and pre-extracted from authoritative sources like LinkedIn, Notion, or Gmail. Unabyss is the context layer: the place where your context lives, independent of any single AI tool.",
        ],
      },
      {
        question: "How do I keep my context current?",
        answer: [
          "You don't have to. Unabyss stays connected to your sources and updates your context vault automatically as your situation changes -- new role, new project, new priorities. You can also update any file manually at any time, upload documents, or chat with your context directly to add things the extraction didn't capture.",
        ],
      },
      {
        question: "What is MCP and do I need it to use Unabyss?",
        answer: [
          "MCP (Model Context Protocol) is an open standard, co-developed by Anthropic, OpenAI, and Block, that lets AI tools pull structured data from external sources. When connected via MCP, Claude, Cursor, or any MCP-compatible agent pulls your context automatically at the start of each session.",
          "MCP is the recommended way to use Unabyss, but not the only way. You can also use one of 20+ one-click exports -- pre-formatted context files ready to paste into a specific tool -- or create a custom export. All exports are Markdown files you can upload anywhere.",
        ],
      },
      {
        question: "How is Unabyss different from Mem0?",
        answer: [
          "Mem0 is developer infrastructure -- an API for engineering teams building memory into AI products. Unabyss is for the users of AI tools, not the builders. No SDK, no API, no integration work -- connect your sources, and your context is ready to serve to Claude, Cursor, or any MCP tool, without a single line of code.",
        ],
      },
    ],
  },
  {
    id: "permissions-and-privacy",
    title: "Permissions & Privacy",
    items: [
      {
        question: "Can I control what each AI tool sees?",
        answer: [
          "Yes -- this is a core feature, not a footnote. Your context is organised in three layers:",
          "Identity -- public facts: name, role, company, location. Safe for any tool.",
          "Profile -- professional history, goals, communication style. Shareable with most tools.",
          "Mind -- private notes, reflections. Opt-in only, never shared by default.",
          "When any app requests your context, you see exactly what's being requested and can approve, deny, or edit access per layer and per file.",
        ],
      },
      {
        question: "Is my data safe?",
        answer: [
          "Yes. Your context is encrypted at rest (AES-256) and in transit (TLS 1.3). Every connection uses OAuth, scoped per app and per source -- you see exactly what's shared before approving, and you can revoke access instantly. EU users get EU-hosted data, GDPR-compliant from day one. We don't sell your data or use it to train AI models.",
        ],
      },
      {
        question: "What happens if I revoke an app's access?",
        answer: [
          "All access tokens for that app are invalidated immediately. The app can no longer request your context. You can re-grant access at any time from your permissions dashboard.",
        ],
      },
    ],
  },
  {
    id: "using-unabyss",
    title: "Using Unabyss",
    items: [
      {
        question: "Can I export my context files?",
        answer: [
          "Yes, at any time. Unabyss offers 20+ one-click exports -- pre-formatted context files optimised for specific tools -- as well as custom exports for any format you need. All exports are Markdown files you can upload directly into Claude, ChatGPT, Notion AI, or any other tool that accepts text input.",
        ],
      },
      {
        question: "How does Unabyss handle mistakes or inconsistencies in my context?",
        answer: [
          "Unabyss cross-references facts across all your connected sources. If your LinkedIn says one thing and your Notion says another, Unabyss flags the conflict rather than arbitrarily picking one. This multi-source arbitrage is what makes the output more reliable than pulling from any single source alone.",
          "You can review and edit your context vault at any time, but you don't have to. You can also update any file manually, upload documents, or chat with your context directly to add things the extraction didn't capture.",
        ],
      },
      {
        question: "Does Unabyss require a Chrome extension?",
        answer: [
          "No. Unabyss works natively via MCP -- a single config file edit connects it to Claude Desktop, Cursor, or any MCP-compatible agent. No browser extension required. A Chrome extension is coming soon for users who prefer in-browser context injection.",
        ],
      },
      {
        question: "Can I use Unabyss alongside ChatGPT Memory or Claude Memory?",
        answer: [
          "Yes. They serve different purposes: platform memory records what AI learns from your conversations over time; Unabyss provides structured, intentional context from day one. Many users run both -- Unabyss handles \"who I am and what I'm working on,\" platform memory handles \"what we discussed last time.\"",
        ],
      },
      {
        question: "What AI tools does Unabyss currently work with?",
        answer: [
          "Via MCP: Claude Desktop, Claude Code, Cursor, and any other MCP-compatible agent -- including OpenClaw.",
          "Via exports: any AI tool that accepts text input -- ChatGPT, Gemini, Notion AI, and others. 20+ one-click exports or custom exports, all as Markdown files.",
          "Via REST API: custom integrations for technical users.",
        ],
      },
    ],
  },
];
