export type UseCase = {
  id: string;
  label: string;
  description: string;
  href: string;
  tools: string[];
};

export const useCases: UseCase[] = [
  {
    id: "builders",
    label: "Builders",
    description:
      "Your agents code with the full picture - past decisions, conventions, and the state of every repo.",
    href: "/unabyss-for-builders",
    tools: [
      "/images/tools/cursor.svg",
      "/images/tools/claude-code.svg",
      "/images/tools/github.svg",
      "/images/tools/linear.svg",
    ],
  },
  {
    id: "founders",
    label: "Founders",
    description:
      "Every AI you use stays in the loop on your company - strategy, customers, and what shipped.",
    href: "/unabyss-for-founders",
    tools: [
      "/images/tools/claude.svg",
      "/images/tools/chatgpt.svg",
      "/images/tools/slack.svg",
      "/images/tools/notion.svg",
    ],
  },
  {
    id: "agencies",
    label: "Agencies",
    description:
      "Each client's context stays cleanly separated, so every answer is grounded in the right account.",
    href: "/unabyss-for-agencies",
    tools: [
      "/images/tools/notion.svg",
      "/images/tools/obsidian.svg",
      "/images/tools/google-drive.svg",
      "/images/tools/gmail.svg",
    ],
  },
  {
    id: "gtm",
    label: "GTM",
    description:
      "Pipeline, accounts, and call notes unified, so outreach and follow-ups write themselves.",
    href: "/unabyss-for-gtm",
    tools: [
      "/images/tools/hubspot.svg",
      "/images/tools/pipedrive.svg",
      "/images/tools/linkedin.svg",
      "/images/tools/gmail.svg",
    ],
  },
];
