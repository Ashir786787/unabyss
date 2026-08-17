export type ConnectCta = {
  label: string;
  href: string;
  external?: boolean;
};

export type ConnectStep = {
  number: string;
  title: string;
  body: string;
  copyPrompt?: string;
  primaryCta?: ConnectCta;
  secondaryCta?: ConnectCta;
};

export type ConnectPageData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonical: string;
  label: string;
  title: string;
  subtitle: string;
  tool: string;
  toolClass: "claude" | "chatgpt";
  steps: ConnectStep[];
  ctaTitle: string;
  ctaBody: string;
  ctaPrimary: ConnectCta;
  ctaAlt: ConnectCta;
  mockOnLeft?: boolean;
};

export const connectPages: ConnectPageData[] = [
  {
    slug: "connect-claude",
    metaTitle: "Connect Unabyss to Claude — official connector setup",
    metaDescription:
      "Connect Unabyss to Claude with the official connector: add it in one click, sign in, then say hello and use your real context in every chat.",
    keywords:
      "connect Unabyss to Claude, Unabyss Claude connector, Claude connector directory, Claude MCP connector, Claude context, MCP setup",
    canonical: "https://unabyss.com/connect-claude",
    label: "Connect · Claude",
    title: "Connect Unabyss to Claude",
    subtitle:
      "Add the official Unabyss connector and give Claude your real context. Two steps: add the connector, then say hello.",
    tool: "Claude",
    toolClass: "claude",
    steps: [
      {
        number: "1",
        title: "Add the Unabyss connector",
        body: "Open the official Unabyss connector in Claude's directory and click Connect, then sign in with Unabyss when prompted. No custom-connector form, no server URL to paste — it's a listed connector.",
        primaryCta: {
          label: "Add the connector in",
          href: "https://claude.ai/directory/connectors/unabyss",
          external: true,
        },
        secondaryCta: {
          label: "Open the Claude Desktop app",
          href: "claude://claude.ai/directory/connectors/unabyss",
        },
      },
      {
        number: "2",
        title: "Say hello",
        body: "Open a new chat and send \"Let's set up Unabyss\". Unabyss walks you through the rest.",
        copyPrompt: "Let's set up Unabyss",
        primaryCta: {
          label: "Continue in",
          href: "https://claude.ai/new?q=Let's%20set%20up%20Unabyss",
          external: true,
        },
        secondaryCta: {
          label: "Open the Claude Desktop app",
          href: "claude://claude.ai/new?q=Let's%20set%20up%20Unabyss",
        },
      },
    ],
    ctaTitle: "Ready when you are",
    ctaBody:
      "Connect Claude to Unabyss now, or create your account first and finish setup right inside Claude.",
    ctaPrimary: {
      label: "Create your account",
      href: "https://app.unabyss.com/register",
      external: true,
    },
    ctaAlt: { label: "Using ChatGPT instead?", href: "/connect-chatgpt" },
  },
  {
    slug: "connect-chatgpt",
    metaTitle: "Connect Unabyss to ChatGPT — official plugin setup",
    metaDescription:
      "Connect Unabyss to ChatGPT with the official plugin: add it in one click, sign in, then say hello and use your real context in every chat.",
    keywords:
      "connect Unabyss to ChatGPT, Unabyss ChatGPT plugin, ChatGPT plugin, ChatGPT MCP, ChatGPT context, MCP setup",
    canonical: "https://unabyss.com/connect-chatgpt",
    label: "Connect · ChatGPT",
    title: "Connect Unabyss to ChatGPT",
    subtitle:
      "Add the official Unabyss plugin and give ChatGPT your real context. Two steps: add the plugin, then say hello.",
    tool: "ChatGPT",
    toolClass: "chatgpt",
    steps: [
      {
        number: "1",
        title: "Add the Unabyss plugin",
        body: "Open the official Unabyss plugin in ChatGPT and add it, then sign in with Unabyss when prompted. No Developer mode, no server URL to paste — it's a public plugin.",
        primaryCta: {
          label: "Add the plugin in",
          href: "https://chatgpt.com/plugins/plugin_asdk_app_6a11e118ab748191a479f91ce9e172ad",
          external: true,
        },
        secondaryCta: {
          label: "Open the ChatGPT Desktop app",
          href: "codex://plugins/plugin_asdk_app_6a11e118ab748191a479f91ce9e172ad",
        },
      },
      {
        number: "2",
        title: "Say hello",
        body: "Open a new chat and send \"Let's set up Unabyss\". Unabyss walks you through the rest.",
        copyPrompt: "Let's set up Unabyss",
        primaryCta: {
          label: "Continue in",
          href: "https://chatgpt.com/?q=Let's%20set%20up%20Unabyss",
          external: true,
        },
        secondaryCta: {
          label: "Open the ChatGPT Desktop app",
          href: "codex://new?prompt=Let's%20set%20up%20Unabyss",
        },
      },
    ],
    ctaTitle: "Ready when you are",
    ctaBody:
      "Create your Unabyss account, then connect ChatGPT and let your context follow you into every conversation.",
    ctaPrimary: {
      label: "Create your account",
      href: "https://app.unabyss.com/register",
      external: true,
    },
    ctaAlt: { label: "Using Claude instead?", href: "/connect-claude" },
    mockOnLeft: true,
  },
];
