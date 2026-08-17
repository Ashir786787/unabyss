import { demos, type Demo } from "@/data/demos";

export type UseCaseDemo = {
  demo: Demo;
  eyebrow: string;
  title: string;
  body: string;
};

export type UseCasePageData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroParagraph: string;
  heroCta: string;
  featured: UseCaseDemo;
  painTitle: string;
  painCards: { title: string; body: string }[];
  painCta?: { title: string; body: string; button: string };
  momentsLabel: string;
  momentsTitle: string;
  momentsDemos: UseCaseDemo[];
  bridgeTitle: string;
  bridgeBody: string;
  bridgeCta: string;
  howTitle: string;
  howBullets: string[];
  byUs?: { eyebrow: string; title: string; body: string };
  closingTitle: string;
  closingBody: string;
  closingCta: string;
};

export const useCaseCompares = [
  {
    title: "Unabyss vs. built-in AI memory",
    body: "Built-in memory is useful, but it's trapped in one tool - what ChatGPT learns stays in ChatGPT, and Claude's memory can't help Cursor. Unabyss is a context layer you own, served to every AI tool over MCP.",
    href: "/unabyss-vs-llm-memory",
  },
  {
    title: "Unabyss vs. context files",
    body: "A context file is a snapshot the moment you write it - stale the minute anything changes. Unabyss stays live and two-way, so every AI reads what's actually happening, not what you remembered to paste.",
    href: "/unabyss-vs-context-files",
  },
  {
    title: "Unabyss vs. building your own context system",
    body: "Building your own means maintaining sync, permissions, and structure yourself - forever. Unabyss does the extraction, structuring, and distribution for you, out of the box.",
    href: "/unabyss-vs-external-knowledge",
  },
  {
    title: "AI memory vs. AI context",
    body: "AI memory is what one tool remembers about a past session. Context is the live picture of who you are, what you're working on, and what just changed - and it's what every tool needs to be useful. Unabyss gives every AI that context.",
    href: "/context-vs-memory",
  },
];

export const useCaseTrust = [
  {
    title: "Granular permissions.",
    body: "Per-app, per-file - share what's relevant, withhold the rest.",
  },
  {
    title: "Never sold.",
    body: "Never used to train models. Your context stays yours.",
  },
];

const byId = (id: string): Demo => {
  const demo = demos.find((d) => d.id === id);
  if (!demo) {
    throw new Error(`Missing demo: ${id}`);
  }
  return demo;
};

export const useCasePages: UseCasePageData[] = [
  {
    slug: "unabyss-for-founders",
    metaTitle: "Unabyss for Founders: AI That Knows Your Company",
    metaDescription:
      "You run ChatGPT for some things and Claude for others - neither knows the whole business. Unabyss gives every AI tool you use the same full picture.",
    heroTitle: "AI that knows your company like a co-founder",
    heroParagraph:
      "You run ChatGPT for some things and Claude for others - neither knows the whole business. Unabyss gives every AI tool you use the same full picture.",
    heroCta: "Onboard it in seconds",
    featured: {
      demo: byId("ceo-weekly-report"),
      eyebrow: "CEO weekly report",
      title: "A CEO report without chasing every update",
      body: "Ask for what your team did this week, their priorities for next week, and the blockers that need your attention - and AI pulls it straight from your company's context instead of you stitching it together from Slack threads and standups.",
    },
    painTitle: "The problem founders feel every day",
    painCards: [
      {
        title: "You context-switch all day",
        body: "A fundraising call, then a product decision, then a hiring loop, then a customer escalation - all before lunch. You're the most context-switched person in the company.",
      },
      {
        title: "Every AI tool is a blank slate",
        body: "Whatever you reach for starts from zero. It knows nothing about the raise, the roadmap, or the hire you're deciding on right now.",
      },
      {
        title: "Your tools are strangers",
        body: "You use ChatGPT for some work and Claude for others, and what you built up in one is invisible to the next. So you re-explain the company - again - just to get a useful answer.",
      },
    ],
    painCta: {
      title: "Break the cycle",
      body: "Stop re-explaining your company to every tool. Give every AI the full picture and finally take full advantage of it.",
      button: "Get started free",
    },
    momentsLabel: "Everyday use cases",
    momentsTitle: "Use agents like never before",
    momentsDemos: [
      {
        demo: byId("investor-update"),
        eyebrow: "Investor update newsletter",
        title: "Drafting the investor update",
        body: "You open a blank chat and start typing out the quarter - the raise, the metrics, the hires, what shipped - just so the AI can help. With Unabyss it already has the quarter; you ask for the update and it writes from what actually happened.",
      },
      {
        demo: byId("linkedin-strategy"),
        eyebrow: "Founder LinkedIn strategy",
        title: "Founder LinkedIn posts without re-briefing ChatGPT",
        body: "You shaped the month's thought leadership in Claude, then opened ChatGPT to draft posts - and it had none of your recent wins or voice. Unabyss carries the same context into every tool, so the strategy follows you.",
      },
    ],
    bridgeTitle: "Set it up once, then forget it",
    bridgeBody:
      "Connect your sources - Gmail, Calendar, Notion, Slack - and Unabyss builds a structured picture of your company automatically. It stays current as things change: new raise, new hire, new priority. You don't maintain it; it maintains itself.",
    bridgeCta: "Connect your first source",
    howTitle: "Built for how founders actually work",
    howBullets: [
      "Connect once - every AI tool you use pulls the full company picture on demand.",
      "Works across the tools you already use: Claude, ChatGPT, and more.",
      "Stays current automatically from your real sources - no docs to update, no context to re-paste.",
      "Covers everything - identity, company, conversations, relationships, projects, strategy.",
      "Granular, per-app permissions - you decide what each tool can see.",
      "Export everything as Markdown anytime. No lock-in.",
    ],
    byUs: {
      eyebrow: "By founders",
      title: "Built for founders, by founders",
      body: "We run Unabyss on Unabyss. Every investor update, hiring loop, and pricing call at our own company goes through the same context layer we ship to you - so when it's rough for founders, we feel it first.",
    },
    closingTitle: "AI that knows your company",
    closingBody:
      "Connect a source and every AI starts with the full picture - the raise, the roadmap, the hires.",
    closingCta: "Onboard it in seconds",
  },
  {
    slug: "unabyss-for-builders",
    metaTitle: "Unabyss for Builders: One Shared Context for Every Agent",
    metaDescription:
      "You wire up Claude, Cursor, Codex, or n8n - and every one starts from zero. Unabyss gives them one shared context, so what one knows, they all know.",
    heroTitle: "Your agents finally know what you know",
    heroParagraph:
      "You wire up Claude, Cursor, Codex, or n8n - and every one starts from zero. Unabyss gives them one shared context, so what one knows, they all know.",
    heroCta: "Connect your stack - free",
    featured: {
      demo: byId("infra-decision-review"),
      eyebrow: "GCP infrastructure review",
      title: "Infrastructure decisions follow you into Claude",
      body: "You worked through GCP vs AWS in Cursor this morning. Open Claude and it already knows why you chose GCP, what you rejected, and whether current costs mean it's time to reconsider - without re-pasting the thread.",
    },
    painTitle: "The problem builders feel every day",
    painCards: [
      {
        title: "You switch tools all day",
        body: "Claude this morning, Cursor now, an automation after that. Every switch means re-explaining the project, the stack, the decisions you just made.",
      },
      {
        title: "Every agent starts from zero",
        body: "Reopen the repo and your agent has amnesia - conventions, context, where you left off, all gone. You set the scene again before it's useful.",
      },
      {
        title: "Your stack doesn't share",
        body: "A coding agent here, an automation there, a chat assistant for everything else - none of them share what they know. You become the integration.",
      },
    ],
    momentsLabel: "Moment to moment",
    momentsTitle: "What changes, moment to moment",
    momentsDemos: [
      {
        demo: byId("billing-deploy-check"),
        eyebrow: "Billing deploy safety",
        title: "Pick up the billing migration where you left off",
        body: "You reopen your app after a week away. Instead of re-reading PR #212 and digging through Linear, Unabyss surfaces the legacy cohort risk, in-flight tickets, and the safe deploy path.",
      },
      {
        demo: byId("repo-scaffold"),
        eyebrow: "New repo scaffold",
        title: "Spin up a repo the way you always do",
        body: "Your agent or automation used to follow a stale template. Unabyss pulls how you structure projects from past repos - pnpm, Biome, Drizzle, tag-only deploys - so every scaffold matches what you actually ship.",
      },
    ],
    bridgeTitle: "Replace them all with one MCP connection",
    bridgeBody:
      "that stays current automatically. Your context updates itself from GitHub, Linear, Notion - it never goes stale, and you never re-upload it to another tool again.",
    bridgeCta: "Connect your first source",
    howTitle: "Built for how you actually work",
    howBullets: [
      "Connect once - every authorized agent, tool, and automation pulls fresh context on demand.",
      "Works across MCP clients: Claude Desktop & Code, Cursor, Codex - plus Make, n8n, and Zapier.",
      "Stays current automatically from your real sources (GitHub, Linear, Notion, Gmail, Calendar).",
      "Pulls only the lines that answer the question - so you save on tokens instead of dumping raw context.",
      "Granular, per-app and per-file permissions - you decide what each tool sees.",
      "Export everything as Markdown anytime. No lock-in.",
    ],
    closingTitle: "One context for every agent",
    closingBody:
      "Connect a source and your agents answer with context they never had before.",
    closingCta: "Connect your stack - free",
  },
  {
    slug: "unabyss-for-agencies",
    metaTitle: "Unabyss for Agencies: Live Client Context",
    metaDescription:
      "Right now you keep a folder of .md files and a separate LLM project per client. Unabyss is the upgrade: live, structured context for every client, in every tool.",
    heroTitle: "Every client's context, in every workflow",
    heroParagraph:
      "Right now you keep a folder of .md files and a separate LLM project per client. You prep the context, upload it, and start working. Then it goes stale - and it never includes what was actually said on the last call or in Slack. Unabyss is the upgrade: live, structured context for every client, in every tool.",
    heroCta: "Connect - free",
    featured: {
      demo: byId("client-portfolio-status"),
      eyebrow: "Client portfolio status",
      title: "Portfolio status across every client",
      body: "Instead of closing one client's project and re-orienting the AI on the next, ask once for status across the whole book - results, actions, and bottlenecks for every engagement, pulled from live context.",
    },
    painTitle: "How agencies do this today (and why it breaks)",
    painCards: [
      {
        title: "Every client is a context switch",
        body: "Close Client A, open Client B, and re-orient the AI on a different engagement - scope, history, what was agreed - every single time.",
      },
      {
        title: "Your files go stale the moment you write them",
        body: "A .md context file is a snapshot. It never heard today's call or the feedback in Slack, so your AI works from a brief that's already behind.",
      },
      {
        title: "Your tools don't talk to each other",
        body: "The file in one project can't help the next, and ChatGPT and Claude each know only what you pasted. So you maintain a dozen of them by hand.",
      },
    ],
    momentsLabel: "Moment to moment",
    momentsTitle: "What changes, moment to moment",
    momentsDemos: [
      {
        demo: byId("client-weekly-report"),
        eyebrow: "Weekly executive report",
        title: "Weekly report without chasing every update",
        body: "You used to stitch pipeline, projects, financials, and HR from scattered docs and stale .md files. Ask once and Unabyss pulls this week's brief from what actually happened - calls, Slack, CRM, and billing.",
      },
      {
        demo: byId("candidate-placement"),
        eyebrow: "Bartood.ai placement review",
        title: "Past client context when you need it again",
        body: "A client from last quarter used to mean digging through old SOWs and CRM notes. Ask for Bartood.ai and Unabyss surfaces terms, renewal status, and churn or upsell signals from what actually happened since - not a folder you forgot to update.",
      },
    ],
    bridgeTitle: "A better version of your .md files",
    bridgeBody:
      "Keep the per-client context your .md files give you - just stop maintaining it by hand. Unabyss stays current automatically, includes the live relationship, and follows you into every AI tool.",
    bridgeCta: "Connect your first client",
    howTitle: "Built for how agencies actually work",
    howBullets: [
      "Connect once per client - every AI tool pulls that client's live context on demand.",
      "Works across the tools you already use: Claude, ChatGPT, and more - plus Make, n8n, and Zapier.",
      "Includes the relationship - calls, Slack, email, feedback - not just the brief you wrote.",
      "Stays current automatically - no per-client files to update.",
      "Compounds over time - every engagement makes the next one start richer.",
      "Keeps every client cleanly separated, with per-client permissions you control.",
      "Export any client's context as Markdown anytime. No lock-in.",
    ],
    closingTitle: "Live context for every client",
    closingBody:
      "Connect a client and every AI starts already knowing the engagement.",
    closingCta: "Connect - free",
  },
  {
    slug: "unabyss-for-gtm",
    metaTitle: "Unabyss for GTM: AI That Knows What Changed",
    metaDescription:
      "Your go-to-market moves fast - new positioning, new campaign, a deal that shifted yesterday. Unabyss gives every AI tool you use the live picture of what's actually happening across your GTM.",
    heroTitle: "GTM moves daily. Your AI is stuck on the last quarter.",
    heroParagraph:
      "Your go-to-market moves fast - new positioning, new campaign, a deal that shifted yesterday. Your AI knows none of it, so every draft starts with you catching it up. Unabyss gives every AI tool you use the live picture of what's actually happening across your GTM.",
    heroCta: "Connect your stack - free",
    featured: {
      demo: byId("cro-pipeline-report"),
      eyebrow: "CRO pipeline report",
      title: "Pipeline report without re-briefing the CRM",
      body: "You used to paste deal notes, Slack threads, and HubSpot exports into a chat just to get a pipeline view. Ask once and Unabyss pulls top deals, risks, bottlenecks, and split actions for sales vs leadership.",
    },
    painTitle: "The problem GTM teams feel every day",
    painCards: [
      {
        title: "Context changes every week",
        body: "New positioning, a fresh campaign, a deal that moved yesterday. The picture shifts constantly, and keeping every tool current is a job in itself.",
      },
      {
        title: "Every AI tool starts blank",
        body: "Open any assistant and it knows nothing about the brand, the account, or what shipped. You re-explain it all before you get a usable draft.",
      },
      {
        title: "Your tools are strangers",
        body: "You run ChatGPT for some work and Claude for others - what you built up in one is invisible to the next, so the team re-briefs each tool from scratch.",
      },
    ],
    momentsLabel: "Moment to moment",
    momentsTitle: "What changes, moment to moment",
    momentsDemos: [
      {
        demo: byId("marketing-report"),
        eyebrow: "Marketing report",
        title: "Marketing report without stitching the context",
        body: "You used to pull analytics, Slack threads, and campaign notes into a chat before you could see what was urgent. Unabyss surfaces the funnel leak, live tests, and split actions for you vs the team.",
      },
      {
        demo: byId("performance-ad-tests"),
        eyebrow: "Performance ad tests",
        title: "Performance ads grounded in live positioning",
        body: "Your brief used to lag what changed this week - new ICP notes, a positioning shift, channel learnings. Unabyss pulls product context and what's working before the A/B variants get written.",
      },
      {
        demo: byId("audience-strategy"),
        eyebrow: "Meta audience strategy",
        title: "Audience strategy built on who actually converts",
        body: "Meta can't see your CRM, so ad targeting usually runs on guesses. Unabyss pulls your real ICP - best customers, ACV bands, and what triggers a close - so the segments and lookalikes mirror who actually buys.",
      },
      {
        demo: byId("outbound-cadences"),
        eyebrow: "Outbound strategy",
        title: "Outbound cadences aimed at real buying signals",
        body: "Generic sequences blast the wrong accounts. Unabyss grounds your ICPs, buying signals, and disqualifiers in real deals - so the email, LinkedIn, and call cadences target the prospects most likely to close.",
      },
    ],
    bridgeTitle: "One context, every tool you use",
    bridgeBody:
      "You use ChatGPT for some things and Claude for others - Unabyss makes sure both know what's happening across your GTM. The full picture follows you into every AI tool, and into your automations in Make, n8n, and Zapier.",
    bridgeCta: "Connect your first source",
    howTitle: "Built for how GTM teams actually work",
    howBullets: [
      "Connect once - every AI tool pulls the live GTM picture on demand.",
      "Works across the tools you already use: Claude, ChatGPT, and more - plus Make, n8n, and Zapier.",
      "Stays current automatically from your real sources - campaigns, CRM, docs, calls, Slack.",
      "Covers the full picture - brand, product, accounts, conversations, what changed this week.",
      "Granular, per-app permissions - you decide what each tool can see.",
      "Export everything as Markdown anytime. No lock-in.",
    ],
    closingTitle: "Context for every GTM move",
    closingBody:
      "Connect a source and every draft, reply, and prep already knows what's happening across the team.",
    closingCta: "Connect your stack - free",
  },
];
