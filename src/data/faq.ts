export const faqItems = [
  {
    question: "What is Unabyss, exactly?",
    answer:
      "Unabyss is an easy way to deliver the AI context it needs to work correctly. It pulls your information from tools you use daily - Slack, Gmail, Notion, GitHub, meetings - into one structured memory, so Claude, Cursor, ChatGPT, or any MCP-compatible tool can read it. You stop re-explaining yourself every time you switch tools.",
  },
  {
    question: "How will this change my day-to-day work with AI?",
    answer:
      "Right now, every chat with AI starts from zero - you re-explain your role, your project, your preferences, every time. What ChatGPT learns stays trapped in ChatGPT. Connect your sources once, and any AI tool that supports MCP already knows your context before you type a word. Never re-explain yourself to an AI again.",
  },
  {
    question:
      "How is Unabyss different from ChatGPT Memory or Claude Memory?",
    answer:
      "ChatGPT Memory and Claude Memory each remember conversations inside that one tool - the memory doesn't travel with you. Unabyss sits above all your tools: it pulls context from where your work actually lives and serves it via MCP. Switch from Claude to Cursor to ChatGPT and the context comes with you, not just what you told one chatbot.",
  },
  {
    question:
      "How does this differ from a CLAUDE.md / context file I maintain myself?",
    answer:
      "A context file works - until it goes stale. It's a snapshot: your role, your project, your priorities change, and the file doesn't. You're stuck manually updating and re-pasting it into every tool. Unabyss stays connected to your actual sources, so it updates itself - and it also pulls from what you do inside Claude, ChatGPT, or Cursor, feeding that back in. A .md file can't do that.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Under 90 seconds. Connect the sources you want to start with - Unabyss extracts your context stored there. Then connect Unabyss to Claude Desktop or Cursor via MCP, or export your context files directly and paste them into any AI tool.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes. Your context is encrypted at rest (AES-256) and in transit (TLS 1.3). Every connection uses OAuth, scoped per app and per source -- you see exactly what's shared before approving, and you can revoke access instantly. EU users get EU-hosted data, GDPR-compliant from day one. We don't sell your data or use it to train AI models.",
  },
];
