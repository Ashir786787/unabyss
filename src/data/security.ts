export type SecurityPrinciple = {
  title: string;
  body: string;
};

export const securityPrinciples: SecurityPrinciple[] = [
  {
    title: "Encrypted, everywhere",
    body: "Your context is encrypted in transit with TLS 1.2+ and at rest with AES-256. Encryption is not a feature here — it is the baseline.",
  },
  {
    title: "Read-only by design",
    body: "Unabyss reads from your sources. It never writes, edits, or deletes anything in them. What you sync stays as it is.",
  },
  {
    title: "Yours to delete",
    body: "Export or delete everything you've connected at any time. When you say go, it is gone — no copies kept for later.",
  },
];

export type SecuritySection = {
  id: string;
  heading: string;
  body: string[];
};

export const securitySections: SecuritySection[] = [
  {
    id: "never-train",
    heading: "We never train on your data",
    body: [
      "Your context and conversations are never used to train AI models — ours or anyone else's. Processing happens only to provide the functionality you ask for: retrieval, semantic search, and generation of AI output.",
    ],
  },
  {
    id: "how-connections-work",
    heading: "How connections work",
    body: [
      "When you connect a source, Unabyss requests the narrowest set of permissions needed to read your context. Connections use official APIs and OAuth where available — Unabyss never sees your passwords. You can revoke any connection at any time, and the imported context disappears with it.",
    ],
  },
  {
    id: "context-boundary",
    heading: "The context boundary",
    body: [
      "Unabyss holds your context within your workspace and exposes it to your own AI tools through MCP. Once context is delivered to an agent you control, further processing is governed by that agent and your arrangement with it — not by Unabyss.",
      "We do not sell your data, and we do not share it with third parties except the infrastructure providers required to operate the service, each bound by a data processing agreement.",
    ],
  },
  {
    id: "infrastructure",
    heading: "Infrastructure",
    body: [
      "TLS 1.2+ encryption for all traffic in transit.",
      "AES-256 encryption for data at rest.",
      "Automated, encrypted backups of the production database.",
      "Cloudflare edge delivery and DDoS protection.",
      "Role-based access control with least-privilege access for the team.",
      "Audit logging and continuous infrastructure monitoring.",
    ],
  },
  {
    id: "compliance",
    heading: "Compliance",
    body: [
      "Unabyss is pursuing SOC 2 Type II certification — the audit is in progress.",
      "We are GDPR aligned. Data processing for the European Economic Area is governed by the GDPR, and your rights under Articles 12-23 are fully supported — see the Privacy Policy for details.",
    ],
  },
  {
    id: "retention",
    heading: "Data retention & deletion",
    body: [
      "You can export your context in a portable format at any time. When you delete data — a source, a document, or your whole account — it is removed from active storage immediately and purged from backups on their next scheduled rotation.",
    ],
  },
];
