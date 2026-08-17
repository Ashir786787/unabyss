export type ChangelogSection = {
  heading: string;
  items: string[];
};

export type ChangelogEntry = {
  version: string;
  slug: string;
  title: string;
  date: string;
  dateIso: string;
  datePublished?: string;
  summary: string;
  major?: boolean;
  lead?: string;
  sections?: ChangelogSection[];
};

export const changelogEntries: ChangelogEntry[] = [
  {
    version: "1.16.0",
    slug: "v1-16-0",
    title: "Agent setup for Vellum, Hermes, and file-based agents",
    date: "11 August 2026",
    dateIso: "2026-08-11",
    datePublished: "2026-08-11T09:30:46Z",
    summary: "Dedicated setup for Vellum Assistant and Hermes; file-based agents install the system prompt automatically.",
    sections: [
      {
        heading: "New",
        items: ["Vellum Assistant and Hermes -- each agent now has its own setup instructions on /mcp, like Claude and ChatGPT."],
      },
      {
        heading: "Improved",
        items: ["File-based agents -- agents such as Cursor and Copilot now install the Unabyss system prompt to their global instructions file during setup, instead of asking you to paste it."],
      },
    ],
  },
  {
    version: "1.15.1",
    slug: "v1-15-1",
    title: "Connections card order",
    date: "10 August 2026",
    dateIso: "2026-08-10",
    datePublished: "2026-08-10T13:57:44Z",
    summary: "Disabled integration cards move to the bottom of Connections.",
    sections: [
      {
        heading: "Changed",
        items: ["Connections -- disabled cards (coming soon, temporarily unavailable, or plan-blocked) sort after every connectable card, even when a disabled provider still has a leftover connected account."],
      },
    ],
  },
  {
    version: "1.15.0",
    slug: "v1-15-0",
    title: "Multiple Google accounts and Drive sync scope",
    date: "10 August 2026",
    dateIso: "2026-08-10",
    datePublished: "2026-08-10T10:57:29Z",
    summary: "Connect several Gmail, Drive, and Calendar accounts; pick exactly what each Drive account syncs; clearer agent connection state on MCP setup.",
    major: true,
    sections: [
      {
        heading: "New",
        items: ["Multiple Google accounts -- Gmail, Google Drive, and Google Calendar each support more than one account on Max and Team. Every account gets its own card on Connections (import, configure, schedule, reconnect, disconnect), plus an Add another account card when your plan allows it.","Google Drive sync scope -- before the first import, choose Everything, selected locations (My Drive, Shared with me, Shared Drives, computer folders), or exact folders and files. Narrowing later asks whether to keep or remove already-imported files.","Import history -- when an app has more than one Google account, each import row shows which account it belongs to.","MCP agent cards -- a green dot once connected (ChatGPT and Codex count together), and an amber Last step required when setup never finished, which opens that last step directly."],
      },
      {
        heading: "Improved",
        items: ["Google connect -- connecting confirms against the server instead of only the popup, with clearer errors when a connection fails, expires, or hits an account or plan limit. Drive no longer imports automatically on connect -- the scope picker opens first.","Onboarding -- finishing the wizard is tracked on your account, so agent-onboarded users land straight in the app, and a fresh browser no longer skips the remaining steps after connect-apps. The first step leads with Let's set up in app.","Agent setup dialogs -- Claude, ChatGPT/Codex, and Grok confirm an existing connection and hide reconnect behind an opt-in. Claude Team plan users see a note to ask their admin to add the Unabyss connector. The last guided step turns golden with You're almost done! when handed off to the agent."],
      },
      {
        heading: "Fixed",
        items: ["Google Calendar -- saving calendars on a second account no longer fails, and accounts no longer stay stuck on Configure without Import or a sync schedule.","Google Drive -- saving scope on a second account, folder browsing, and enrolling a new account in recurring sync all work again.","Reconnect -- removing an account then reconnecting it no longer deletes the new account's imports; abandoned connect attempts no longer block retry."],
      },
    ],
  },
  {
    version: "1.14.0",
    slug: "v1-14-0",
    title: "Upload your files and connect your agent in onboarding",
    date: "5 August 2026",
    dateIso: "2026-08-05",
    datePublished: "2026-08-05T20:25:01Z",
    summary: "File upload on Pick your apps, a Connect your agent onboarding step, past-due Team billing fixes, MCP docs layout, and mobile-friendly agent cards.",
    major: true,
    sections: [
      {
        heading: "New",
        items: ["Team billing -- when a Team invoice fails, admins get a payment-failed email with an Update payment method CTA.","Onboarding file upload -- Pick your apps has an Upload files card with a dropzone for notes, docs, and spreadsheets; any upload counts as one app toward the two-app requirement.","Connect your agent -- new onboarding step after Pick your apps with the same agent cards and setup dialogs as the MCP page; hosts you have already connected show a green dot."],
      },
      {
        heading: "Improved",
        items: ["Past-due Team billing -- a past-due Team now shows Past due with an Update payment method button instead of a workspace card that still read Active.","Onboarding on mobile -- agents that need a desktop to finish setup sort to the bottom as inert cards on the MCP page and in onboarding, leaving Claude, ChatGPT, and Grok actionable.","MCP docs -- /mcp-docs is now a proper docs layout with sticky TOC, Copy as MD, and updated OAuth 2.1 setup reference; linked from footer Resources above Blog."],
      },
      {
        heading: "Fixed",
        items: ["Onboarding -- pressing Space on a focused app card no longer starts that app's connect and skips the step at the same time."],
      },
    ],
  },
  {
    version: "1.13.0",
    slug: "v1-13-0",
    title: "MCP setup handoff and Obsidian sync fix",
    date: "4 August 2026",
    dateIso: "2026-08-04",
    datePublished: "2026-08-04T12:05:08Z",
    summary: "MCP setup is now three steps with a guided first prompt at the end; Obsidian and Trello sync work again after Clear all context.",
    major: true,
    sections: [
      {
        heading: "New",
        items: ["MCP setup handoff -- after setup finishes, choose I want to see what Unabyss can do for me for a guided prompt over your real context, or I'll ask myself to drive from here."],
      },
      {
        heading: "Improved",
        items: ["MCP setup -- three steps now: connect apps, choose what to save, add the system prompt. The skills step is gone; skills stay available whenever you ask for them.","MCP setup pickers -- each option shows its recommendation and trade-off again instead of losing that context.","MCP setup system prompt -- the last step closes on a clear add-or-skip picker."],
      },
      {
        heading: "Fixed",
        items: ["Obsidian sync -- notes sync into memory again after Clear all context. Notes still appeared as sources, but sync failed and nothing was indexed; the next sync recovers affected notes with no reconnect needed.","Trello -- the same fix applies to Trello Power-Up push after Clear all context.","Obsidian and Trello sync -- a sync you deliberately abort (vault disconnected mid-sync, context purged) no longer reports a misleading Import stale (no heartbeat) failure three minutes later."],
      },
    ],
  },
  {
    version: "1.12.0",
    slug: "v1-12-0",
    title: "Clearer account deletion and Obsidian sync fixes",
    date: "3 August 2026",
    dateIso: "2026-08-03",
    datePublished: "2026-08-03T11:32:02Z",
    summary: "Delete-account and Clear all context dialogs spell out what gets removed; Obsidian upload reliability fixes; account deletion revokes MCP access.",
    major: true,
    sections: [
      {
        heading: "Improved",
        items: ["Delete account -- delete-account and Clear all context dialogs now list what each action actually removes. The leaving-reason picker uses the in-app select instead of the browser dropdown.","Account deletion -- deleting your account now revokes MCP tokens and OAuth grants tied to your agents."],
      },
      {
        heading: "Fixed",
        items: ["Delete account -- the leaving-reason list loads correctly so the confirm button is no longer stuck disabled.","Obsidian sync -- uploads no longer fail when a note title exceeds 512 characters, or when one note in a batch is blank (empty notes are skipped instead of rejecting the whole batch).","Memory -- reliability improvements for memory promotion after extraction."],
      },
    ],
  },
  {
    version: "1.11.2",
    slug: "v1-11-2",
    title: "Fathom import and reliability",
    date: "1 August 2026",
    dateIso: "2026-08-01",
    datePublished: "2026-08-01T12:03:56Z",
    summary: "Fathom OAuth imports no longer get stuck at Starting, plus broader service reliability improvements.",
    sections: [
      {
        heading: "Fixed",
        items: ["Fathom -- OAuth imports no longer stay stuck in Starting when the first backfill does not advance.","Reliability -- fixes for intermittent service errors caused by Redis connection limits."],
      },
    ],
  },
  {
    version: "1.11.1",
    slug: "v1-11-1",
    title: "Service reliability",
    date: "31 July 2026",
    dateIso: "2026-07-31",
    datePublished: "2026-07-31T23:52:33Z",
    summary: "Behind-the-scenes improvements to keep the service dependable.",
    sections: [
      {
        heading: "Improved",
        items: ["Service stays more dependable with faster turnaround on backend reliability fixes."],
      },
    ],
  },
  {
    version: "1.11.0",
    slug: "v1-11-0",
    title: "Claude official connector and more agents",
    date: "31 July 2026",
    dateIso: "2026-07-31",
    datePublished: "2026-07-31T18:49:23Z",
    summary: "One-click Claude connect via the official connector, Grok and more agents on /mcp, Refer a friend in the menu, and Fathom OAuth.",
    major: true,
    sections: [
      {
        heading: "New",
        items: ["Claude official connector -- connecting Claude opens the official Unabyss listing in Claude's directory: one click, nothing to paste. Same path in the app, onboarding, and the marketing connect guides (now two steps: connect, then send \"Let's setup Unabyss\").","Grok, Gemini CLI, Antigravity, and Codex on /mcp -- Grok gets a guided two-step connect dialog; Gemini CLI and Antigravity mint a bearer token with a host-specific setup prompt; Codex uses the same OpenAI-plugin flow as ChatGPT. Login and onboarding show the new agents as greyed-out tiles until after signup.","Refer a friend -- in the avatar menu, above Billing, when the referral program is available to you; jumps to referral rewards on the billing page.","Fathom OAuth -- /connections connects Fathom with native OAuth instead of an API key; legacy connections get a reconnect path and start the first import after OAuth returns."],
      },
      {
        heading: "Improved",
        items: ["Error toasts -- problem toasts include a Tell support button that opens chat support in the app.","MCP sign-in -- fewer unnecessary reauthentication prompts when your agent reconnects."],
      },
    ],
  },
  {
    version: "1.10.0",
    slug: "v1-10-0",
    title: "Team plan and referrals pages",
    date: "30 July 2026",
    dateIso: "2026-07-30",
    datePublished: "2026-07-30T12:11:08Z",
    summary: "A Team plan page with real per-seat pricing, a referral program page, and clearer plan limits inside chat.",
    major: true,
    sections: [
      {
        heading: "New",
        items: ["Team plan page -- /teams covers the shared workspace, seat entitlements, and what admins can and cannot see. Pricing now shows real per-seat rates instead of \"Contact us\": $29/seat/mo, $25 annual, minimum 3 seats.","Referral program page -- /referrals explains the rewards -- a free second month of Pro for your friend, a month of Pro off your next invoice, and a month of Claude Pro at three referrals -- with the timing and eligibility rules."],
      },
      {
        heading: "Improved",
        items: ["The conversation limit is visible -- on Basic, the chat home names the reset date, disables starter prompts, and offers an upgrade instead of a dead message box. Deleting your last conversation asks for confirmation first, since the slot doesn't come back until the period rolls over.","X asks for a reconnect -- the X card flags when its permissions are too narrow to import likes and following, rather than failing quietly. Everything else keeps importing meanwhile."],
      },
    ],
  },
  {
    version: "1.9.1",
    slug: "v1-9-1",
    title: "Trial upgrade in final days",
    date: "28 July 2026",
    dateIso: "2026-07-28",
    datePublished: "2026-07-28T20:08:01Z",
    summary: "Trialing users can upgrade to Pro or Max in their last two trial days.",
    sections: [
      {
        heading: "Fixed",
        items: ["Billing -- trialing users can now choose Pro or Max in the final two days of a trial; checkout charges immediately instead of waiting until trial end."],
      },
    ],
  },
  {
    version: "1.9.0",
    slug: "v1-9-0",
    title: "ChatGPT plugin connect",
    date: "28 July 2026",
    dateIso: "2026-07-28",
    datePublished: "2026-07-28T15:56:10Z",
    summary: "One-click ChatGPT connect via the official plugin, plus an updated MCP API reference on the site.",
    major: true,
    sections: [
      {
        heading: "New",
        items: ["ChatGPT connect -- one-click connect via the official Unabyss plugin; no Developer mode or MCP server URL to paste. Applies in the app and on the marketing site connect guides."],
      },
      {
        heading: "Improved",
        items: ["MCP API reference -- /mcp-docs updated to match the current MCP server (skills, setup gate, OAuth, rate limits).","MCP Activity -- accepted auth connections no longer flood the activity log; rejections still appear."],
      },
    ],
  },
  {
    version: "1.8.2",
    slug: "v1-8-2",
    title: "MCP Activity log and memory reliability",
    date: "27 July 2026",
    dateIso: "2026-07-27",
    datePublished: "2026-07-27T09:34:52Z",
    summary: "MCP Activity page now shows all read, write, and auth events with filters, plus memory and import indexing reliability improvements.",
    sections: [
      {
        heading: "New",
        items: ["MCP Activity -- one unified table for read, write, and auth events, with combinable token and event-type filters. Delete remains store-only."],
      },
      {
        heading: "Fixed",
        items: ["Memory and imports -- reliability improvements for memory indexing and ingest progress."],
      },
    ],
  },
  {
    version: "1.8.1",
    slug: "v1-8-1",
    title: "Referral reliability",
    date: "24 July 2026",
    dateIso: "2026-07-24",
    datePublished: "2026-07-24T22:39:27Z",
    summary: "Reliability improvements for the referral program.",
    sections: [
      {
        heading: "Fixed",
        items: ["Referral program -- reliability improvements for background processing."],
      },
    ],
  },
  {
    version: "1.8.0",
    slug: "v1-8-0",
    title: "Referrals and product help in chat",
    date: "24 July 2026",
    dateIso: "2026-07-24",
    datePublished: "2026-07-24T21:39:24Z",
    summary: "Referral rewards on the billing page, context chat that answers Unabyss product questions, MCP setup guide updates, and import progress fixes.",
    major: true,
    sections: [
      {
        heading: "New",
        items: ["Referral rewards -- on the billing page when the program is enabled for your account: share link, email invites, unlockable reward slots, and referral activity.","Product help in context chat -- ask what Unabyss is, how plans and trials work, or what your current limits are; replies link to the right in-app pages."],
      },
      {
        heading: "Improved",
        items: ["MCP setup guides -- in-app guides tell agents to save context more liberally and add a Skills section (list_skills / get_skill).","Context chat links -- in-app links in replies open in the same tab; external links still open in a new tab."],
      },
      {
        heading: "Fixed",
        items: ["Social import progress -- imports stay \"in progress\" until memories are actually ready, and indexing failures surface clearly.","Referral invitation page -- /ref/ shows a \"just a moment\" retry screen when the service is rate-limited instead of a generic dead end."],
      },
    ],
  },
  {
    version: "1.7.2",
    slug: "v1-7-2",
    title: "MCP improvements",
    date: "23 July 2026",
    dateIso: "2026-07-23",
    datePublished: "2026-07-23T11:25:04Z",
    summary: "General MCP reliability and agent compatibility improvements.",
    sections: [
      {
        heading: "Improved",
        items: ["MCP -- reliability and compatibility improvements for third-party agents."],
      },
    ],
  },
  {
    version: "1.7.1",
    slug: "v1-7-1",
    title: "Guided connect dialog polish",
    date: "21 July 2026",
    dateIso: "2026-07-21",
    datePublished: "2026-07-21T21:24:51Z",
    summary: "Clearer Claude and ChatGPT setup dialog layout and toasts that stay above the support bubble.",
    sections: [
      {
        heading: "Improved",
        items: ["Claude and ChatGPT setup dialogs -- each step now leads with a labeled preview of what you will see, then the action button below it, with step-by-step guidance copy."],
      },
      {
        heading: "Fixed",
        items: ["Toasts -- bottom-right notifications now render above the Chatwoot support bubble instead of hiding behind it."],
      },
    ],
  },
  {
    version: "1.7.0",
    slug: "v1-7-0",
    title: "Integration requests and MCP setup status",
    date: "21 July 2026",
    dateIso: "2026-07-21",
    datePublished: "2026-07-21T13:29:19Z",
    summary: "Request missing integrations on Connections, see and finish per-agent MCP setup from the MCP and Context pages, plus weekly-learnings and subscription fixes.",
    major: true,
    sections: [
      {
        heading: "New",
        items: ["Request an integration -- the Connections page has a card to ask for an app Unabyss does not support yet; type-ahead surfaces apps others already requested so votes aggregate instead of duplicating.","MCP setup status -- the MCP page token table gains a Setup column with agent logos; clicking an unfinished connection opens a guided finish-setup popup that launches Claude or ChatGPT with a prefilled \"Let's setup Unabyss\" message (or copies it for other agents). The Context page agents card shows setup state (corner dot, orange dashed border, \"Setup required\"), and a bottom-left widget nudges you through one connection at a time."],
      },
      {
        heading: "Improved",
        items: ["Connections cards -- not-yet-connected apps show a short \"what you get\" line (matching onboarding); connected cards use a slightly lighter gradient and border.","Context on mobile -- connected apps and agents cap at three columns each; the weekly recap progress bar switches from gold to light at the halfway mark instead of blending smoothly."],
      },
      {
        heading: "Fixed",
        items: ["Weekly learnings -- trailing-week recaps no longer mix in immature integration backfills.","Canceled trial re-subscribe -- starting a new subscription after a canceled trial no longer leaves you stuck on Basic."],
      },
    ],
  },
  {
    version: "1.6.0",
    slug: "v1-6-0",
    title: "Claude and ChatGPT connect guides",
    date: "18 July 2026",
    dateIso: "2026-07-18",
    datePublished: "2026-07-18T22:16:50Z",
    summary: "Step-by-step Claude and ChatGPT connect guides on the site and in the app, mobile post-onboarding tour with a Context step, and ChatGPT connector links fixed everywhere.",
    major: true,
    sections: [
      {
        heading: "New",
        items: ["Connect guides on the site -- new step-by-step pages at /connect-claude and /connect-chatgpt with recreated agent-UI previews, copy-URL actions, and prefilled magic-link buttons; linked from the footer.","MCP page connect walkthroughs -- guided step-by-step dialogs for ChatGPT (enable Developer mode, create connector, prefilled setup chat with UI previews) and Claude (connect card, Continue in Claude prompt), plus a two-step how-to on the page.","Post-onboarding tour on mobile -- the walkthrough now runs on phones and adds a final Context step after MCP, Chat, and Connections."],
      },
      {
        heading: "Improved",
        items: ["ChatGPT connector links -- the create-connector link now works from the in-app MCP page, auth and onboarding agent popups, and the marketing site (the old #settings/Connectors deep link no longer worked)."],
      },
    ],
  },
  {
    version: "1.5.2",
    slug: "v1-5-2",
    title: "Integration connect fix",
    date: "17 July 2026",
    dateIso: "2026-07-17",
    datePublished: "2026-07-17T11:41:39Z",
    summary: "Connecting a new integration no longer errors when subscriptions are enabled.",
    sections: [
      {
        heading: "Fixed",
        items: ["Connections -- connecting a new integration no longer errors when subscriptions are enabled."],
      },
    ],
  },
  {
    version: "1.5.1",
    slug: "v1-5-1",
    title: "Recap cadence and trial fixes",
    date: "17 July 2026",
    dateIso: "2026-07-17",
    datePublished: "2026-07-17T10:21:38Z",
    summary: "Weekly learnings recap countdown follows your personal 7-day cadence; fixes for Max trials, LinkedIn imports, and MCP queries.",
    sections: [
      {
        heading: "Improved",
        items: ["Weekly learnings -- the \"Next recap\" progress bar now counts down from your last recap on a 7-day cadence instead of toward a fixed day, and stays hidden until your first recap exists.","Homepage -- the Product Hunt \"Unabyss for Claude\" featured badge is now the lead hero badge."],
      },
      {
        heading: "Fixed",
        items: ["Max trial -- users whose Stripe trial has ended but who lack a local subscription record now receive a fresh Max trial.","LinkedIn -- connecting LinkedIn now starts the Max trial so your first import is not blocked by pre-trial AI limits.","MCP -- OAuth deep queries settle and sanitize after the answer lands.","File imports -- re-importing identical memory content no longer fails."],
      },
    ],
  },
  {
    version: "1.5.0",
    slug: "v1-5-0",
    title: "Context dashboard and shareable skills",
    date: "16 July 2026",
    dateIso: "2026-07-16",
    datePublished: "2026-07-16T22:55:38Z",
    summary: "A new Context home in the app with usage metrics and weekly learnings, plus shareable skill pages and a Product Hunt launch kit on the site.",
    major: true,
    sections: [
      {
        heading: "New",
        items: ["Context -- new dashboard at /context (nav between Chat and Connections) with a rolling 90-day donut for time saved, agent calls, and memories stored; a weekly learnings recap with a countdown to your next one; an \"About you\" identity summary with chat CTAs; and connected-apps and agents grids sized to your plan, with an upgrade cell at the limit.","Shareable skill pages -- each skill in the Skills Library now has its own URL at /skills/.","Product Hunt Launch Kit -- new Growth skill in the Skills Library."],
      },
      {
        heading: "Improved",
        items: ["Weekly learnings -- your first recap generates about an hour after onboarding, then on your personal 7-day cadence (not a single global schedule)."],
      },
      {
        heading: "Fixed",
        items: ["Connection pickers -- calendar, GitHub, GitLab, Linear, e-sign, Slack, sync-out connect, and API-key credential flows no longer hit intermittent \"Event loop is closed\" errors.","Weekly learnings -- generation no longer stops for your whole account when one memory source fails to resolve."],
      },
    ],
  },
  {
    version: "1.4.3",
    slug: "v1-4-3",
    title: "Fewer false maintenance screens",
    date: "16 July 2026",
    dateIso: "2026-07-16",
    datePublished: "2026-07-16T11:19:04Z",
    summary: "Brief network blips no longer flash the full-screen maintenance overlay; the app confirms an outage before degrading.",
    sections: [
      {
        heading: "Fixed",
        items: ["Maintenance overlay -- short network blips (Wi-Fi handoff, laptop wake, brief DNS) no longer flash the full-screen maintenance screen; the app re-checks health before treating the outage as real."],
      },
    ],
  },
  {
    version: "1.4.2",
    slug: "v1-4-2",
    title: "Skip MCP first-connect setup",
    date: "15 July 2026",
    dateIso: "2026-07-15",
    datePublished: "2026-07-15T18:47:42Z",
    summary: "MCP agents can skip an unfinished first-connect setup so blocked tool calls unblock without finishing onboarding.",
    sections: [
      {
        heading: "Improved",
        items: ["MCP first-connect setup -- if unabyss_setup is open but you have not finished, a blocked tool call offers to skip setup; accepting records the setup as skipped and unblocks your tools."],
      },
    ],
  },
  {
    version: "1.4.1",
    slug: "v1-4-1",
    title: "Onboarding agent setup step",
    date: "15 July 2026",
    dateIso: "2026-07-15",
    datePublished: "2026-07-15T14:17:16Z",
    summary: "A guided \"set up in your agent\" onboarding step after picking an MCP host, plus a fix for context chat failing on the first message.",
    sections: [
      {
        heading: "New",
        items: ["Onboarding agent setup -- after you pick an MCP agent on the \"set up in your agent\" path, a new step offers Continue in {agent} (opens a prefilled \"Let's setup Unabyss\" chat in Claude or ChatGPT, or copies the message for CLI/IDE hosts), Claude-specific Add the connector and Connect & authorize screens when Claude is selected, and I'll do it later to stay in the app."],
      },
      {
        heading: "Fixed",
        items: ["Context chat no longer returns a generic error when you send the first message in a conversation."],
      },
    ],
  },
  {
    version: "1.4.0",
    slug: "v1-4-0",
    title: "Onboarding polish and mobile UX",
    date: "15 July 2026",
    dateIso: "2026-07-15",
    datePublished: "2026-07-15T12:58:17Z",
    summary: "Onboarding app-picker copy, mobile chat and billing layout fixes, and steadier chat scrolling during replies.",
    sections: [
      {
        heading: "Improved",
        items: ["Onboarding \"Pick your apps\" -- each integration card shows what you get from that app; the CTA reads \"Connected apps x/2\" until two apps connect, then \"See memory in action\".","Mobile chat -- conversations toggle pinned to the top, assistant messages span full width, and the hover-only imports chip is hidden on touch.","Billing plan cards on mobile -- narrower cards so the next plan peeks in from the edge; slightly lighter frosted-glass tint in dark mode."],
      },
      {
        heading: "Fixed",
        items: ["Chat no longer yanks you back to the bottom while an assistant reply is streaming -- scroll up to pause auto-follow, scroll back to the bottom to resume.","Linear sync no longer runs on a schedule when OAuth is disconnected but a team selection is still saved.","Background imports respect upstream rate-limit backoff more reliably when providers return 429 responses."],
      },
    ],
  },
  {
    version: "1.3.0",
    slug: "v1-3-0",
    title: "Pro and Max subscriptions and MCP setup",
    date: "13 July 2026",
    dateIso: "2026-07-13",
    datePublished: "2026-07-13T09:30:52Z",
    summary: "Pro and Max subscription billing with a 7-day Max trial, smarter MCP onboarding, and Gbrain local sync on Connections.",
    major: true,
    sections: [
      {
        heading: "New",
        items: ["Pro and Max subscriptions on Settings -> Billing -- monthly/annual toggle, Stripe checkout, and subscription portal; navbar shows tier, trial countdown, and billing CTA for subscription users.","7-day Max trial on signup when subscriptions are enabled (replaces the signup-credits welcome flow).","Login and register -- featured Claude MCP connect card and an agent picker for other one-click hosts.","MCP setup -- choose how much the agent saves back to Unabyss (everything, important only, or nothing); finishing setup offers a query preview of what Unabyss already learned.","Gbrain local sync on /connections -- Local instance tab collects gbrain URL and write bearer, builds a ~/.gbrain/.unabyss-sync state file with one Copy action."],
      },
      {
        heading: "Improved",
        items: ["MCP setup runs onboarding-first -- connect at least two apps, choose what to save back, add the system prompt, then browse skills.","MCP connect popups open with a locked overlay until you finish or return to Unabyss; connected-via-agent confirmation appears as each app connects.","Onboarding tuned for mobile -- swipeable \"Your data stays yours\" cards, four featured apps, and no \"press Space\" hint on touch devices."],
      },
      {
        heading: "Fixed",
        items: ["Onboarding step cards no longer overflow on narrow mobile screens.","Pipedream apps (Gmail, Google Drive, Google Calendar, Google Ads, HubSpot) flip to Connected without a page refresh.","Google login links a verified Google email to an existing email/password account on first sign-in."],
      },
    ],
  },
  {
    version: "1.2.4",
    slug: "v1-2-4",
    title: "Connection setup fixes",
    date: "3 July 2026",
    dateIso: "2026-07-03",
    datePublished: "2026-07-03T10:33:50Z",
    summary: "GitHub repo picker opens right after OAuth; integration lists retry transient load errors before failing.",
    sections: [
      {
        heading: "Improved",
        items: ["Integration lists automatically retry transient load failures up to three times before showing an error (repos, channels, teams, calendars, vaults, and similar pickers)."],
      },
      {
        heading: "Fixed",
        items: ["GitHub repo picker opens after OAuth on onboarding and Connections when no repositories are selected yet — same behaviour as Slack, GitLab, Linear, and Jira."],
      },
    ],
  },
  {
    version: "1.2.3",
    slug: "v1-2-3",
    title: "Per-memory cost limit",
    date: "2 July 2026",
    dateIso: "2026-07-02",
    datePublished: "2026-07-02T13:57:12Z",
    summary: "Oversized file imports are capped before expensive processing runs; syncs skip over-limit items instead of failing.",
    sections: [
      {
        heading: "New",
        items: ["Per-memory cost ceiling — individual store operations above the cost limit are rejected before expensive LLM and embedding work starts."],
      },
      {
        heading: "Improved",
        items: ["Imports skip items that exceed the cost ceiling and continue the rest of the sync instead of failing the whole import."],
      },
      {
        heading: "Fixed",
        items: ["MCP billing log no longer marks zero-cost tools (whoami, initialize, and similar) as lost settlements."],
      },
    ],
  },
  {
    version: "1.2.2",
    slug: "v1-2-2",
    title: "More reliable imports",
    date: "2 July 2026",
    dateIso: "2026-07-02",
    datePublished: "2026-07-02T11:12:22Z",
    summary: "Behind-the-scenes improvements to keep imports and syncing dependable.",
    sections: [
      {
        heading: "Improved",
        items: ["Service stays more dependable with faster turnaround on import reliability fixes."],
      },
    ],
  },
  {
    version: "1.2.1",
    slug: "v1-2-1",
    title: "Integration availability fix",
    date: "1 July 2026",
    dateIso: "2026-07-01",
    datePublished: "2026-07-01T12:05:42Z",
    summary: "The integrations availability status loads correctly again instead of erroring.",
    sections: [
      {
        heading: "Fixed",
        items: ["Integration availability — the catalog correctly shows which connections are temporarily unavailable."],
      },
    ],
  },
  {
    version: "1.2.0",
    slug: "v1-2-0",
    title: "FAQ page",
    date: "1 July 2026",
    dateIso: "2026-07-01",
    datePublished: "2026-07-01T11:14:11Z",
    summary: "A new FAQ page with 19 grouped Q&As, search, and a support CTA at support@unabyss.com.",
    sections: [
      {
        heading: "New",
        items: ["/faq — 19 grouped Q&As with search, accordion layout, and a support CTA at support@unabyss.com."],
      },
    ],
  },
  {
    version: "1.1-Karamba",
    slug: "v1-1-0",
    title: "Unabyss 1.1 - Karamba",
    date: "26 June 2026",
    dateIso: "2026-06-26",
    datePublished: "2026-06-26T23:53:08Z",
    summary: "A platform-wide leap forward — deeper ingestion, more integrations, and a smarter, simpler MCP experience that makes Unabyss better everywhere you use it.",
    sections: [
      {
        heading: "Improved",
        items: ["MCP first-connect onboarding — one optional step-based unabyss_setup tool replaces the older setup tools; agents offer skills (all, by category, or essentials) and gentler, relevance-gated context instructions.","Skills Library — skills grouped into business categories with a curated essentials set."],
      },
      {
        heading: "Fixed",
        items: ["MCP setup returns Claude context instructions on step 3, preserves skill download links when agents reformat the list, and asks before marking setup complete or skipped."],
      },
      {
        heading: "Removed",
        items: ["Legacy MCP tools get_setup_guide and confirm_setup_complete (folded into unabyss_setup)."],
      },
    ],
  },
  {
    version: "0.9.0",
    slug: "v0-9-0",
    title: "DocuSign, Jira, and Google Ads",
    date: "25 June 2026",
    dateIso: "2026-06-25",
    datePublished: "2026-06-25T11:38:41Z",
    summary: "DocuSign and Jira on Connections, Google Ads out of coming-soon, stronger import rate-limit recovery, and MCP OAuth fixes for Claude web.",
    major: true,
    sections: [
      {
        heading: "New",
        items: ["DocuSign on Connections — OAuth connect, account picker, manual resync with progress polling.","Jira on Connections — Atlassian OAuth connect, Cloud site picker, manual resync with progress polling.","Google Ads on Connections — Pipedream connect and import enabled; coming-soon badge removed on /integrations."],
      },
      {
        heading: "Improved",
        items: ["Imports across all connected providers recover from upstream rate limits instead of failing.","Rate-limit errors show provider-specific messages instead of a generic failure.","MCP first-connect onboarding enforced — non-setup tool calls return setup guidance until onboarding is complete."],
      },
      {
        heading: "Fixed",
        items: ["Claude web MCP OAuth no longer fails when the vendor adds extra grant types.","Website sync rejects social media URLs (LinkedIn, Instagram, Facebook, X) with inline validation."],
      },
    ],
  },
  {
    version: "0.8.0",
    slug: "v0-8-0",
    title: "MCP onboarding, auto-recharge, and Pipedrive",
    date: "24 June 2026",
    dateIso: "2026-06-24",
    datePublished: "2026-06-24T15:26:55Z",
    summary: "First-connect MCP setup for LLM clients, auto-recharge on billing, invoice history, Pipedrive on Connections, and a clearer clear-all-context flow.",
    major: true,
    sections: [
      {
        heading: "New",
        items: ["MCP first-connect onboarding for LLM clients — get_setup_guide and confirm_setup_complete tools, unabyss-setup slash-command prompt, and a setup directive on initialize until onboarding is complete.","Auto-recharge on /settings/billing — gold settings panel; toggle saves immediately; set low-balance threshold, top-up amount, and monthly limit on Save; Connect card to activate opens Stripe Checkout when no default card is on file.","Billing invoices table on /settings/billing — paginated invoice history with PDF download; failed invoices link Contact support.","Pipedrive on Connections, onboarding, and context chat — OAuth connect, import, and scheduled re-sync.","Clear-all-context locked waiting screen at /clear-context after you start a full context purge; completion email when the purge finishes.","Skills Library downloads prefer backend .skill bundles and fall back to the bundled static file when needed."],
      },
      {
        heading: "Improved",
        items: ["Help & Guide documents auto top-up on Billing & Plans and Settings tabs."],
      },
      {
        heading: "Fixed",
        items: ["Public .skill downloads route correctly on the MCP host."],
      },
    ],
  },
  {
    version: "0.7.0",
    slug: "v0-7-0",
    title: "Skills Library and Asana and Xodo Sign",
    date: "23 June 2026",
    dateIso: "2026-06-23",
    datePublished: "2026-06-23T11:17:44Z",
    summary: "Browse skills and integrations on the site, connect Asana and Xodo Sign, and discover Unabyss Skills over MCP.",
    major: true,
    sections: [
      {
        heading: "New",
        items: ["Integrations catalog at /integrations — MCP clients and connected apps in two groups; linked from the homepage and footer.","Unabyss Skills Library at /skills — browse, filter, search, and download 67 context-aware Claude skills; preview SKILL.md in a modal.","Asana on Connections — OAuth connect, auto-import on connect, manual resync, and scheduled re-sync.","Xodo Sign on Connections — API access key connect, business picker, multi-business import, and scheduled re-sync.","Unabyss Skills over MCP — LLM clients can discover and run skills via list_skills, get_skill, and read_skill_file; each active skill is also exposed as an MCP prompt.","MCP integration catalog now lists Gmail, Google Calendar, HubSpot, and GitLab alongside your connected apps."],
      },
      {
        heading: "Improved",
        items: ["MCP list_integrations separates connected and available apps instead of a flat list."],
      },
      {
        heading: "Fixed",
        items: ["Long-running imports no longer fail when OAuth tokens expire mid-run — Slack, GitLab, Linear, X, Pipedrive, OneNote, Todoist, and Notion refresh tokens proactively and on 401.","MCP list_skills, list_integrations, and export_list return full JSON catalogs instead of count-only summaries."],
      },
    ],
  },
  {
    version: "0.6.8",
    slug: "v0-6-8",
    title: "Steadier background imports",
    date: "19 June 2026",
    dateIso: "2026-06-19",
    datePublished: "2026-06-19T17:26:34Z",
    summary: "Background import reliability improvements behind the scenes.",
    sections: [
      {
        heading: "Improved",
        items: ["Interrupted background imports recover more predictably after worker restarts — recent syncs retry; older interrupted runs finalize instead of staying stuck."],
      },
      {
        heading: "Fixed",
        items: ["Stale failed-import cleanup no longer trips on imports still linked to saved memories."],
      },
    ],
  },
  {
    version: "0.6.7",
    slug: "v0-6-7",
    title: "GitLab, ClickUp, Monday, Todoist, and Pipedrive",
    date: "19 June 2026",
    dateIso: "2026-06-19",
    datePublished: "2026-06-19T13:41:33Z",
    summary: "Five new Connections integrations and clearer sync cards for Website and Obsidian.",
    major: true,
    sections: [
      {
        heading: "New",
        items: ["GitLab on Connections — OAuth connect, pick projects, Save & Sync now, manual resync, scheduled re-sync (24h default), and disconnect with optional data removal.","ClickUp on Connections — OAuth connect, auto-import on connect, manual sync, scheduled re-import, and disconnect with optional data removal.","Monday.com on Connections — OAuth connect, auto-import on connect, manual sync, scheduled re-import, and disconnect with optional data removal.","Todoist on Connections — OAuth connect, auto-import on connect, manual sync, scheduled re-import, and disconnect with optional data removal.","Pipedrive on Connections — OAuth connect, auto-import on connect, manual resync, Manage companies for multi-company accounts, and disconnect with optional data removal."],
      },
      {
        heading: "Improved",
        items: ["Website sync connected card shows a Configure sync link; Obsidian connected card shows Sync on update in the vault.","MCP quota errors include a billing top-up link in the message."],
      },
      {
        heading: "Fixed",
        items: ["Google Calendar import history no longer shows partial success or a misleading item count when day-bucket coverage is complete.","Markdown links in chat, upload detail, and export preview open in a new browser tab instead of navigating away from the app."],
      },
    ],
  },
  {
    version: "0.6.6",
    slug: "v0-6-6",
    title: "Tour fix and cleaner import logs",
    date: "17 June 2026",
    dateIso: "2026-06-17",
    datePublished: "2026-06-17T23:42:50Z",
    summary: "Post-onboarding tour no longer sticks around after you leave a step, and import logs show clearer authorization errors.",
    sections: [
      {
        heading: "Improved",
        items: ["Connections import logs show Authorization issues instead of operator-facing error text when permissions block a sync."],
      },
      {
        heading: "Fixed",
        items: ["Post-onboarding guided tour card no longer stays docked after you navigate away from the active step."],
      },
    ],
  },
  {
    version: "0.6.5",
    slug: "v0-6-5",
    title: "Clearer LinkedIn errors",
    date: "17 June 2026",
    dateIso: "2026-06-17",
    datePublished: "2026-06-17T21:02:02Z",
    summary: "Clearer message when LinkedIn imports hit authorization issues.",
    sections: [
      {
        heading: "Improved",
        items: ["LinkedIn imports now show a clearer Authorization issues message when permissions block the sync."],
      },
    ],
  },
  {
    version: "0.6.4",
    slug: "v0-6-4",
    title: "MCP guide and guided tour",
    date: "17 June 2026",
    dateIso: "2026-06-17",
    datePublished: "2026-06-17T19:37:40Z",
    summary: "MCP guide video, post-onboarding tour, uploads hub, and exports grid view.",
    sections: [
      {
        heading: "New",
        items: ["MCP guide video — open from the MCP page, Help tab, bottom widget, or post-onboarding tour; docks to a corner for picture-in-picture while you work.","Post-onboarding guided tour on desktop after your first chat — golden spotlight walks you through Exports, MCP, and Connections.","Uploads hub at /uploads — browse memory sources and open detail views; legacy /sources URLs redirect.","Exports grid view — switch between list and grid on the exports hub."],
      },
      {
        heading: "Improved",
        items: ["Post-onboarding tour adds an MCP watch card, golden nav buttons, and smoother spotlight motion.","MCP page — cleaner subnav, link spacing, and card layout.","Connections — app sources, import logs, and uploads cards with live connection status dots."],
      },
    ],
  },
  {
    version: "0.6.3",
    slug: "v0-6-3",
    title: "More reliable updates",
    date: "16 June 2026",
    dateIso: "2026-06-16",
    datePublished: "2026-06-16T15:48:46Z",
    summary: "Reliability improvements behind the scenes.",
    sections: [
      {
        heading: "Improved",
        items: ["Service stays more stable when we ship updates to production."],
      },
    ],
  },
  {
    version: "0.6.2",
    slug: "v0-6-2",
    title: "Calendar and mobile",
    date: "16 June 2026",
    dateIso: "2026-06-16",
    datePublished: "2026-06-16T15:32:03Z",
    summary: "Faster Google Calendar sync and a tidier Connections page on mobile.",
    sections: [
      {
        heading: "Improved",
        items: ["Google Calendar sync runs faster and backfills missing day buckets when coverage was incomplete.","Google Calendar memories on Sources show daily summaries only."],
      },
      {
        heading: "Fixed",
        items: ["Import history on Connections is readable on mobile — status, item counts, and dates no longer get crushed.","See all integrations closes before opening schedule, picker, or disconnect dialogs so the follow-up dialog shows on mobile.","Live import progress reconnects cleanly after a dropped connection."],
      },
    ],
  },
  {
    version: "0.6.1",
    slug: "v0-6-1",
    title: "Steadier service",
    date: "15 June 2026",
    dateIso: "2026-06-15",
    datePublished: "2026-06-15T22:40:43Z",
    summary: "Reliability improvements behind the scenes.",
    sections: [
      {
        heading: "Improved",
        items: ["Platform updates roll out more smoothly, with fewer interruptions during releases."],
      },
    ],
  },
  {
    version: "0.6.0",
    slug: "v0-6-0",
    title: "Obsidian sync and HubSpot",
    date: "15 June 2026",
    dateIso: "2026-06-15",
    datePublished: "2026-06-15T12:00:00Z",
    summary: "Obsidian two-way sync, HubSpot on Connections, and Fathom, Fireflies, Granola, Google Drive, and Slack back online.",
    major: true,
    sections: [
      {
        heading: "New",
        items: ["Obsidian plugin — two-way OAuth sync between your vaults and Unabyss; manage vaults, export targets, and per-vault disconnect on Connections.","HubSpot on Connections — import contacts, companies, and deals with scheduled sync.","Fathom, Fireflies, Granola, Google Drive, and Slack back on Connections and onboarding."],
      },
      {
        heading: "Improved",
        items: ["Google Calendar memories grouped by day with a six-month future window.","Obsidian vault sync shows live progress and embeds notes in parallel.","Website sync UX and clearer export retry messaging.","X (Twitter) incremental sync for likes and bookmarks."],
      },
      {
        heading: "Fixed",
        items: ["OAuth connect errors for GitHub, OneNote, Slack, Notion, and Linear.","LinkedIn and X sync reliability — duplicate items, pagination, and company backfill.","Context chat stream ordering, waiting indicator, and connection logos.","Onboarding OAuth return flow and Slack channel picker."],
      },
    ],
  },
  {
    version: "0.5.0",
    slug: "v0-5-0",
    title: "Website sync and Linear",
    date: "12 June 2026",
    dateIso: "2026-06-12",
    datePublished: "2026-06-12T12:00:00Z",
    summary: "Website sync and Linear on Connections, clearer credits in the navbar, and live import progress.",
    major: true,
    sections: [
      {
        heading: "New",
        items: ["Website sync on Connections — add up to 10 site URLs, first crawl on save, manual re-sync per site, and optional 7-day schedules.","Linear on Connections — sign in with Linear, choose teams, automatic first import, and scheduled workspace sync.","Navbar credits coin with balance on hover and a quick path to buy more."],
      },
      {
        heading: "Improved",
        items: ["Connections and import history refresh right away after OAuth connect or when you start a sync.","Profile menu warns Get more credits when balance is low, or Account paused when you're out.","Live import progress on Connections (including Website sync); schedule controls stay usable while a sync runs."],
      },
      {
        heading: "Fixed",
        items: ["Turning automatic sync off no longer fails when a custom interval was set.","Imports stop before your credits go negative; several background sync reliability fixes."],
      },
    ],
  },
  {
    version: "0.4.0",
    slug: "v0-4-0",
    title: "Connections keep up",
    date: "9 June 2026",
    dateIso: "2026-06-09",
    datePublished: "2026-06-09T12:00:00Z",
    summary: "Live import progress, Hermes in MCP connect, local-time-aware chat, and steadier background syncs.",
    major: true,
    sections: [
      {
        heading: "New",
        items: ["Hermes Agent in the MCP connect grid with Copy command for quick OAuth setup."],
      },
      {
        heading: "Improved",
        items: ["Import history on Connections shows live step, progress, and item counts while a sync runs.","Context chat answers with your local date and time in mind.","Slack, GitHub, and Google Calendar setup shows Reconnect when you need to sign in again.","Background imports and syncs recover faster after platform updates and stop before credits run out.","Chat surfaces a clear notice when a thread hits its turn limit, memory is briefly unavailable, or an attached file cannot be opened."],
      },
    ],
  },
  {
    version: "0.3.4",
    slug: "v0-3-4",
    title: "Steadier under load",
    date: "3 June 2026",
    dateIso: "2026-06-03",
    datePublished: "2026-06-03T09:40:36Z",
    summary: "Background imports and syncs stay more reliable when the platform is busy.",
    sections: [
      {
        heading: "Improved",
        items: ["Background imports and syncs run more steadily during heavy use and platform updates."],
      },
    ],
  },
  {
    version: "0.3.3",
    slug: "v0-3-3",
    title: "Smoother signup and chat",
    date: "27 May 2026",
    dateIso: "2026-05-27",
    datePublished: "2026-05-27T10:11:33Z",
    summary: "A clearer sign-up path and tidier replies in context chat.",
    sections: [
      {
        heading: "New",
        items: ["Sign-up walks you through account creation in two steps, with promo codes tucked away until you need one."],
      },
      {
        heading: "Improved",
        items: ["Answers to the assistant's follow-up questions stay on the same card.","Chat reasoning reads cleaner as a reply wraps up."],
      },
    ],
  },
  {
    version: "0.3.2",
    slug: "v0-3-2",
    title: "Easier billing paperwork",
    date: "25 May 2026",
    dateIso: "2026-05-25",
    datePublished: "2026-05-25T01:47:04Z",
    summary: "Polish invoices reach KSeF without an extra step on your side.",
    sections: [
      {
        heading: "Improved",
        items: ["Polish invoices are filed to KSeF automatically when they are created."],
      },
    ],
  },
  {
    version: "0.3.1",
    slug: "v0-3-1",
    title: "Billing and calendar control",
    date: "25 May 2026",
    dateIso: "2026-05-25",
    datePublished: "2026-05-25T00:45:09Z",
    summary: "Manage payment details yourself and choose which Google Calendars to sync.",
    sections: [
      {
        heading: "New",
        items: ["Manage billing in Settings opens Stripe so you can update cards and billing details.","Open the app with a chat prompt already loaded via a shareable link."],
      },
      {
        heading: "Improved",
        items: ["Clear all context resets Connections right away while keeping MCP access in place.","Google Calendar sync starts only after you pick which calendars to include.","Chat home rotates starter prompts so you always have a way in."],
      },
    ],
  },
  {
    version: "0.3.0",
    slug: "v0-3-0",
    title: "Smarter context chat",
    date: "24 May 2026",
    dateIso: "2026-05-24",
    datePublished: "2026-05-24T20:28:35Z",
    summary: "Clarification cards, inline reasoning, promo codes, and a faster path into your first chat.",
    major: true,
    sections: [
      {
        heading: "New",
        items: ["Promo codes at sign-up for bonus credits.","Low-balance email alerts in Settings.","Context chat asks quick follow-ups with preset options on the same card.","Rotating Try asking starters on the chat home screen.","Save as export on assistant messages."],
      },
      {
        heading: "Improved",
        items: ["New accounts receive $5 welcome credits.","Billing brings buy credits and low-balance alerts into one clearer view.","Slack and Google Calendar are easier to configure; sync options live on each integration card.","Chat shows reasoning inline as the assistant works, including after a refresh.","Onboarding reaches your first chat sooner once your identity summary is ready."],
      },
    ],
  },
];

export function getChangelogEntry(slug: string): ChangelogEntry | undefined {
  return changelogEntries.find((entry) => entry.slug === slug);
}

export const latestChangelogVersion: ChangelogEntry = changelogEntries[0];