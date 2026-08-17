export type Integration = {
  name: string;
  src: string;
  soon?: boolean;
};

export const mcpClients: Integration[] = [
  { name: "Claude", src: "/images/tools/claude.svg" },
  { name: "Cursor", src: "/images/tools/cursor.svg" },
  { name: "Claude Code", src: "/images/tools/claude-code.svg" },
  { name: "OpenClaw", src: "/images/tools/openclaw.svg" },
  { name: "ChatGPT", src: "/images/tools/chatgpt.svg" },
  { name: "Grok", src: "/images/tools/grok.svg" },
  { name: "Vellum", src: "/images/tools/vellum.svg" },
  { name: "Hermes", src: "/images/tools/hermes.webp" },
  { name: "VS Code", src: "/images/tools/vs-code.svg" },
  { name: "OpenCode", src: "/images/tools/opencode.svg" },
  { name: "Codex", src: "/images/tools/codex.svg" },
  { name: "Gemini CLI", src: "/images/tools/gemini.svg" },
  { name: "Antigravity", src: "/images/tools/antigravity.svg" },
  { name: "Perplexity", src: "/images/tools/perplexity.svg", soon: true },
];

export const apps: Integration[] = [
  { name: "LinkedIn", src: "/images/tools/linkedin.svg" },
  { name: "Website sync", src: "/images/tools/website-sync.svg" },
  { name: "Obsidian", src: "/images/tools/obsidian.svg" },
  { name: "X / Twitter", src: "/images/tools/x-twitter.svg" },
  { name: "Notion", src: "/images/tools/notion.svg" },
  { name: "Slack", src: "/images/tools/slack.svg" },
  { name: "GitHub", src: "/images/tools/github.svg" },
  { name: "GitLab", src: "/images/tools/gitlab.svg" },
  { name: "Linear", src: "/images/tools/linear.svg" },
  { name: "Jira", src: "/images/tools/jira.svg" },
  { name: "Gmail", src: "/images/tools/gmail.svg" },
  { name: "Google Drive", src: "/images/tools/google-drive.svg" },
  { name: "Google Calendar", src: "/images/tools/google-calendar.svg" },
  { name: "HubSpot", src: "/images/tools/hubspot.svg" },
  { name: "Pipedrive", src: "/images/tools/pipedrive.svg" },
  { name: "Todoist", src: "/images/tools/todoist.svg" },
  { name: "ClickUp", src: "/images/tools/clickup.svg" },
  { name: "Monday.com", src: "/images/tools/monday.svg" },
  { name: "tl;dv", src: "/images/tools/tldv.svg" },
  { name: "Fathom", src: "/images/tools/fathom.svg" },
  { name: "Fireflies", src: "/images/tools/fireflies.svg" },
  { name: "Granola", src: "/images/tools/granola.svg" },
  { name: "Xodo Sign", src: "/images/tools/xodo-sign.svg" },
  { name: "DocuSign", src: "/images/tools/docusign.svg" },
  { name: "Asana", src: "/images/tools/asana.svg" },
  { name: "Google Ads", src: "/images/tools/google-ads.svg" },
  { name: "Discord", src: "/images/tools/discord.svg", soon: true },
  { name: "Trello", src: "/images/tools/trello.svg", soon: true },
  { name: "OneNote", src: "/images/tools/onenote.svg", soon: true },
];
