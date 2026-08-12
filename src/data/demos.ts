export type TraceIcon = "find" | "reason" | "tool";

export type TraceStep = {
  icon: TraceIcon;
  text: string;
  result?: boolean;
  request?: string;
  resultText?: string;
  polling?: boolean;
  delay: number;
};

export type AnswerBlock = {
  kind: "h3" | "h4" | "label" | "ul" | "ol";
  text?: string;
  items?: string[];
};

export type Demo = {
  id: string;
  category: string;
  title: string;
  chatTitle: string;
  question: string;
  summary: string;
  modelName: string;
  modelLevel: string;
  video: string;
  videoMs: number;
  cover: string;
  poster: string;
  trace: TraceStep[];
  answerBlocks: AnswerBlock[];
};

export const demos: Demo[] = [
  {
    "id": "ceo-weekly-report",
    "category": "Founders",
    "title": "CEO weekly report",
    "chatTitle": "CEO weekly report",
    "question": "Create a CEO report covering what my team did this week, their priorities for next week and any blockers that need my attention.",
    "summary": "I'll pull this together from Unabyss.",
    "modelName": "Sonnet 5",
    "modelLevel": "Medium",
    "video": "/videos/founder-ceo-report.webm",
    "videoMs": 47940,
    "cover": "/images/hero/cover-ceo-report.webp",
    "poster": "/images/hero/marcin-poster.jpg",
    "trace": [
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "reason",
        "text": "Let me run a deep synthesis query for the weekly review.",
        "delay": 1100
      },
      {
        "icon": "tool",
        "text": "Agentic query",
        "request": "Build a CEO-perspective weekly report covering three things: (1) what the team accomplished this past week across all functions (engineering, product, GTM, sales, ops), (2) the main focuses and priorities for the coming week, and (3) the current blockers or risks that need the CEO's attention. Synthesize across all connected sources - Slack, Linear, Gmail, meetings/transcripts, etc.",
        "delay": 4400
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "pending",
        "polling": true,
        "delay": 3800
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "pending",
        "polling": true,
        "delay": 5200
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "completed",
        "delay": 1400
      }
    ],
    "answerBlocks": [
      {
        "kind": "h3",
        "text": "Week of June 27 - July 3, 2026"
      },
      {
        "kind": "h4",
        "text": "What the team shipped this week"
      },
      {
        "kind": "label",
        "text": "Engineering & Product"
      },
      {
        "kind": "ul",
        "items": [
          "**Scoring model v2 beta landed with promising calibration gains - but several customers flagged score compression at the high end. Sophie + Priya are on feature scaling and recalibration; Marcus is adding granular feature-contribution logging to reproduce the drift on real customer data.**",
          "**Audit log / compliance endpoint progressed in July 1 standups - Sophie and Marcus both reported near-completion (PRs same day).**",
          "**VP Engineering first-round screens ran today, with feedback going to #founders. Mark is the best candidate so far (#2 interview scheduled next week on Tuesday).**"
        ]
      },
      {
        "kind": "label",
        "text": "Sales & GTM"
      },
      {
        "kind": "ul",
        "items": [
          "**AMICA proposal sent July 1 with a 2-week decision window - expected call next week.**",
          "**Nexus Financial security review advancing; due next Thursday.**"
        ]
      },
      {
        "kind": "label",
        "text": "Ops"
      },
      {
        "kind": "ul",
        "items": [
          "**Fundraising prep: deck and the financial model are ready - in review by Anna EOD.**"
        ]
      },
      {
        "kind": "h4",
        "text": "Focuses for next week"
      },
      {
        "kind": "ol",
        "items": [
          "**Deliver Nexus Financial security artifacts by Tuesday.**",
          "**VP Eng - 3 finalists by mid-July.**",
          "**Scoring v2 RCA + fix plan by end of next week - decide broad rollout vs. hotfix.**",
          "**Close AMICA (~July 15) - proposal is out.**",
          "**Customer trust comms - Anna + Rachel to draft a note on the top-decile precision fix; Leo to align marketing copy with release notes.**"
        ]
      },
      {
        "kind": "h4",
        "text": "Blockers needing your attention"
      },
      {
        "kind": "ol",
        "items": [
          "**Nexus deadline (Tuesday) - text Stephen (CISO) if they need anything else from us.**",
          "**Scoring v2 high-end compression - a trust risk with live customers. You'll need to make the rollout call once the RCA lands.**",
          "**VP Eng on the critical path - Mark looks like the best fit, but his salary expectations are a bit higher than our budget. Think if you're able to match them.**"
        ]
      }
    ]
  },
  {
    "id": "infra-decision-review",
    "category": "Builders",
    "title": "Infra decision review",
    "chatTitle": "GCP infrastructure review",
    "question": "Review why we chose GCP, why we rejected the alternatives, and whether any current indicators suggest it's time to reconsider or migrate.",
    "summary": "I'll pull your context from Unabyss and summarize it.",
    "modelName": "Sonnet 5",
    "modelLevel": "Medium",
    "video": "/videos/builder-gcp-review.webm",
    "videoMs": 41420,
    "cover": "/images/hero/cover-infra-review.webp",
    "poster": "/images/hero/stas-poster.jpg",
    "trace": [
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "reason",
        "text": "I need the original decision, rejected options, and current cost signals - not a guess.",
        "delay": 1100
      },
      {
        "icon": "tool",
        "text": "Agentic query",
        "request": "Synthesize why we chose GCP over AWS, Azure, and bare metal in Q2 2024, what tradeoffs we accepted, and whether current cost trends and team maturity suggest it's time to reconsider or migrate.",
        "delay": 4400
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "pending",
        "polling": true,
        "delay": 4000
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "pending",
        "polling": true,
        "delay": 4600
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "completed",
        "delay": 1400
      }
    ],
    "answerBlocks": [
      {
        "kind": "h3",
        "text": "GCP decision and migration assessment"
      },
      {
        "kind": "h4",
        "text": "Why we chose GCP (Q2 2024)"
      },
      {
        "kind": "ul",
        "items": [
          "**BigQuery + Vertex AI** avoided a separate warehouse and dedicated MLOps hire (~**$140K/yr** saved early on).",
          "**GKE Autopilot** fit a **6-person** infra team already running containers.",
          "**Google Workspace data gravity** - ~**70%** of SMB customers on Workspace simplified ingestion."
        ]
      },
      {
        "kind": "h4",
        "text": "Alternatives rejected"
      },
      {
        "kind": "ul",
        "items": [
          "**AWS** - operational complexity for a small team; BigQuery fit spiky analytics better than Redshift.",
          "**Azure** - ICP skewed Workspace; team had little Azure ops experience.",
          "**Bare metal** - **40-60%** cheaper compute but needed **1-2 SRE hires** pre-Series A."
        ]
      },
      {
        "kind": "h4",
        "text": "Should we reconsider?"
      },
      {
        "kind": "ul",
        "items": [
          "**Reconsider:** BigQuery scan cost scaling faster than users; **$150K credits** exhausted by Q1 2026.",
          "**Stay:** GKE + Vertex reliable; migration would cost **2-4 months** during growth sprint."
        ]
      },
      {
        "kind": "h4",
        "text": "Recommendation"
      },
      {
        "kind": "ol",
        "items": [
          "**Do not migrate now** - optimize BigQuery (partitioning, slots) first.",
          "**Negotiate committed-use discount** now that credits are gone.",
          "**Revisit trigger:** optimized infra spend above **~15% of revenue** or a carve-out saves **>30%** net."
        ]
      }
    ]
  },
  {
    "id": "client-portfolio-status",
    "category": "Agencies",
    "title": "Client portfolio status",
    "chatTitle": "Client portfolio status",
    "question": "Prepare a summary of updates across client projects, including status, key actions, and bottlenecks.",
    "summary": "I'll pull your client project context from Unabyss.",
    "modelName": "Sonnet 5",
    "modelLevel": "Medium",
    "video": "/videos/agency-portfolio-status.webm",
    "videoMs": 45750,
    "cover": "/images/hero/cover-client-portfolio.webp",
    "poster": "/images/hero/marcin-poster.jpg",
    "trace": [
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "reason",
        "text": "I need live status across every active client - not guesses from memory.",
        "delay": 1100
      },
      {
        "icon": "tool",
        "text": "Agentic query",
        "request": "Summarize the status of each client project: current status, actions to take, and bottlenecks. Cover all active client projects.",
        "delay": 4400
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "pending",
        "polling": true,
        "delay": 4200
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "pending",
        "polling": true,
        "delay": 4800
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "completed",
        "delay": 1400
      }
    ],
    "answerBlocks": [
      {
        "kind": "h3",
        "text": "BrightArc Media - Client Status Report (June 2026)"
      },
      {
        "kind": "h4",
        "text": "Tier 1 - top clients"
      },
      {
        "kind": "label",
        "text": "NovaGrid Solar - Renewables | $48,000/mo"
      },
      {
        "kind": "ul",
        "items": [
          "**On Track** - ROAS **4.8x** (from 3.9x MoM); CPA down **22%**.",
          "**Action:** Launch YouTube retargeting layer.",
          "**Bottleneck:** Creative fatigue on top 2 ads."
        ]
      },
      {
        "kind": "label",
        "text": "Perch & Co. - DTC Home | $36,500/mo"
      },
      {
        "kind": "ul",
        "items": [
          "**At Risk** - ROAS slipped **4.1x -> 2.8x** after iOS attribution loss.",
          "**Action:** Rebuild pixel via CAPI; refresh creative.",
          "**Bottleneck:** Attribution gap - no server-side tracking."
        ]
      },
      {
        "kind": "label",
        "text": "Halcyon Wellness - Health/Supplements | $29,000/mo"
      },
      {
        "kind": "ul",
        "items": [
          "**On Track** - CAC **$18** vs $30 target; subscription LTV up **31%**.",
          "**Action:** Test TikTok Spark Ads for top-of-funnel.",
          "**Bottleneck:** Landing page load time ~4.2s."
        ]
      },
      {
        "kind": "h4",
        "text": "Portfolio summary"
      },
      {
        "kind": "ul",
        "items": [
          "**20 active clients**, **~$442,500/mo** managed spend.",
          "**11 On Track, 5 Watch, 4 At Risk.**",
          "**High churn risk:** Verdant Foods, Bloom Pediatrics, Ridgeline Gear.",
          "**High upsell:** NovaGrid Solar, Halcyon Wellness, Cobalt Fitness, Solace Travel, Ironclad Auto."
        ]
      }
    ]
  },
  {
    "id": "cro-pipeline-report",
    "category": "GTM",
    "title": "CRO pipeline report",
    "chatTitle": "CRO pipeline report",
    "question": "Prepare a pipeline report (the most important deals, pipeline changes, risks, and bottlenecks). Recommend actions, split between the sales team and myself.",
    "summary": "I'll pull the relevant context from Unabyss to prepare this CRO-focused pipeline report.",
    "modelName": "Sonnet 5",
    "modelLevel": "Medium",
    "video": "/videos/gtm-cro-pipeline.webm",
    "videoMs": 42990,
    "cover": "/images/hero/cover-cro-pipeline.webp",
    "poster": "/images/hero/filip-poster.jpg",
    "trace": [
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "reason",
        "text": "I'll run a deep synthesis query on the pipeline for this report.",
        "delay": 1100
      },
      {
        "icon": "tool",
        "text": "Agentic query",
        "request": "Give me a full CRO pipeline picture: the most important active deals, notable pipeline changes, deals at risk and why, bottlenecks slowing the funnel, and prioritized actions for the sales team vs the CRO.",
        "delay": 4400
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "pending",
        "polling": true,
        "delay": 4200
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "pending",
        "polling": true,
        "delay": 4800
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "completed",
        "delay": 1400
      }
    ],
    "answerBlocks": [
      {
        "kind": "h3",
        "text": "CRO pipeline report"
      },
      {
        "kind": "h4",
        "text": "Top active deals"
      },
      {
        "kind": "ul",
        "items": [
          "**Nexus Financial** - **$120K/yr**, stalled on FINRA DPA + champion risk; close Jul-Aug.",
          "**TerraForm Health** - **$60K**, contract pending **iCIMS** sandbox verification.",
          "**GrowthEngine** - **$42K/yr**, proposal sent; decision end of July."
        ]
      },
      {
        "kind": "h4",
        "text": "Risks and bottlenecks"
      },
      {
        "kind": "ul",
        "items": [
          "**Enterprise security** burned ~40 eng hours; lost **Horizon Capital** without SOC 2 Type II.",
          "**Integration dependencies** gate signatures - CloudScale closed after Greenhouse shipped.",
          "Homepage conversion fell **3.2% -> 1.8%**, thinning qualified pipeline."
        ]
      },
      {
        "kind": "h4",
        "text": "Priority actions"
      },
      {
        "kind": "label",
        "text": "Sales team (this week)"
      },
      {
        "kind": "ul",
        "items": [
          "**Nexus** - lock dated FINRA DPA plan; multi-thread beyond Brian to **Tanya Osei**.",
          "**TerraForm** - schedule 1-week integration test; ship mapping runbook + checklist."
        ]
      },
      {
        "kind": "label",
        "text": "CRO (system fixes)"
      },
      {
        "kind": "ol",
        "items": [
          "**Push SOC 2 Type II** to completion - repeat deal-blocker.",
          "**Elevate iCIMS** to revenue-critical with exec timeline.",
          "**Follow through on SDR hire** (+8 outbound deals) to cut whale dependency."
        ]
      }
    ]
  },
  {
    "id": "investor-update",
    "category": "Founders",
    "title": "Investor update",
    "chatTitle": "Investor update newsletter",
    "question": "Prepare an investor update highlighting only our biggest wins and key milestones. Format it according to my branding guidelines.",
    "summary": "I'll pull your context from Unabyss and build the investor update newsletter.",
    "modelName": "Sonnet 5",
    "modelLevel": "Medium",
    "video": "/videos/founder-investor-update.webm",
    "videoMs": 33590,
    "cover": "/images/hero/cover-investor-update.webp",
    "poster": "/images/hero/dominik-poster.jpg",
    "trace": [
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "tool",
        "text": "Whoami",
        "resultText": "We're still learning about you. Personal context will be available shortly.",
        "delay": 1150
      },
      {
        "icon": "reason",
        "text": "Let me try a direct query to see what context is available.",
        "delay": 1100
      },
      {
        "icon": "tool",
        "text": "Query",
        "request": "What are the biggest recent wins, milestones, and achievements for my company and product? Include metrics, launches, funding, and traction.",
        "delay": 4400
      }
    ],
    "answerBlocks": [
      {
        "kind": "h3",
        "text": "Einstein AI - Investor Update, June 2025"
      },
      {
        "kind": "label",
        "text": "Key metrics"
      },
      {
        "kind": "ul",
        "items": [
          "**$1.13M ARR** (+5.8% MoM)",
          "**$94.3K MRR**, **16 customers** (+2 in June)",
          "**107% net revenue retention**"
        ]
      },
      {
        "kind": "h4",
        "text": "Series A closed"
      },
      {
        "kind": "ul",
        "items": [
          "**$8M** led by Apex Growth Partners, at roughly **4x** prior valuation. Cash position: **$8.7M**."
        ]
      },
      {
        "kind": "h4",
        "text": "Customer wins"
      },
      {
        "kind": "ul",
        "items": [
          "**CloudScale - $85K/yr** - largest deal to date.",
          "**BrightPath Staffing - $36K/yr** signed in June.",
          "Earlier closes: **Momentum Labs ($24K/yr)** and **DataDriven Inc ($18K/yr)**."
        ]
      },
      {
        "kind": "h4",
        "text": "Product milestones"
      },
      {
        "kind": "ul",
        "items": [
          "**Greenhouse ATS integration** live in production with CloudScale.",
          "**Scoring Model v2** deployed to all customers - **+14% F1** improvement.",
          "**Bulk import** now handles up to **500 candidates** per run."
        ]
      },
      {
        "kind": "h4",
        "text": "Team"
      },
      {
        "kind": "ul",
        "items": [
          "**David Park** accepted his offer and starts July 14."
        ]
      }
    ]
  },
  {
    "id": "billing-deploy-check",
    "category": "Builders",
    "title": "Billing + deploy check",
    "chatTitle": "Billing deploy safety",
    "question": "How can I deploy new billing fast without affecting legacy users?",
    "summary": "I'll pull your context from Unabyss and summarize it.",
    "modelName": "Sonnet 5",
    "modelLevel": "Medium",
    "video": "/videos/builder-billing-deploy.webm",
    "videoMs": 34420,
    "cover": "/images/hero/cover-billing-deploy.webp",
    "poster": "/images/hero/dominik-poster.jpg",
    "trace": [
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "reason",
        "text": "I need the live billing setup, in-flight PRs, and legacy cohort risk - not a guess.",
        "delay": 1100
      },
      {
        "icon": "tool",
        "text": "Agentic query",
        "request": "Synthesize current Stripe billing, user segmentation (standard vs legacy grandfathered), in-flight Linear tickets and GitHub PRs, webhook re-pricing risk, and any pricing commitments to early adopters.",
        "delay": 4400
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "pending",
        "polling": true,
        "delay": 4100
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "pending",
        "polling": true,
        "delay": 4700
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "completed",
        "delay": 1400
      }
    ],
    "answerBlocks": [
      {
        "kind": "h3",
        "text": "Meridian Labs - deploy new billing safely"
      },
      {
        "kind": "h4",
        "text": "Where things stand"
      },
      {
        "kind": "ul",
        "items": [
          "**~1,500** active subs - **~1,340** on **$12/mo** standard, **~160** legacy at **$8/mo** (signed up before Mar 2025).",
          "Shipping usage-based **Starter / Pro / Scale** tiers; PR **#212** points checkout at new price IDs.",
          "**NEW_BILLING_ENABLED** flag already wired via LaunchDarkly (MER-79 done)."
        ]
      },
      {
        "kind": "h4",
        "text": "Core risk"
      },
      {
        "kind": "ul",
        "items": [
          "**billing/webhooks.ts** does not branch on cohort - merge as-is re-prices **160 legacy** users on next renewal.",
          "Inbound from **dana@usebrightloop.com** citing founder tweet promising early adopters pricing **forever**."
        ]
      },
      {
        "kind": "h4",
        "text": "Fast safe approach"
      },
      {
        "kind": "ol",
        "items": [
          "**Tag legacy cohort** in DB + Stripe metadata (`legacy_2024`) before deploying.",
          "**Short-circuit webhooks** when `subscription.metadata.cohort === 'legacy_2024'`.",
          "**Ship new checkout behind the flag** - new signups only, 0% blast radius on existing subs."
        ]
      }
    ]
  },
  {
    "id": "client-weekly-report",
    "category": "Agencies",
    "title": "Client weekly report",
    "chatTitle": "Weekly executive report",
    "question": "Prepare a weekly report covering my pipeline, client projects, financials, HR, and other key business updates.",
    "summary": "I'll pull your client project context from Unabyss.",
    "modelName": "Sonnet 5",
    "modelLevel": "Medium",
    "video": "/videos/agency-weekly-report.webm",
    "videoMs": 48240,
    "cover": "/images/hero/cover-client-weekly.webp",
    "poster": "/images/hero/filip-poster.jpg",
    "trace": [
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "reason",
        "text": "I need this week's pipeline, projects, financials, and HR - not a stale snapshot.",
        "delay": 1100
      },
      {
        "icon": "tool",
        "text": "Agentic query",
        "request": "Build a weekly executive brief covering pipeline, active client projects, financials to date, HR and operations, and top priorities for next week. Synthesize across all connected sources.",
        "delay": 4400
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "pending",
        "polling": true,
        "delay": 4000
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "pending",
        "polling": true,
        "delay": 4600
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "completed",
        "delay": 1400
      }
    ],
    "answerBlocks": [
      {
        "kind": "h3",
        "text": "Brightfold Media - Week of June 30 - July 5, 2026"
      },
      {
        "kind": "h4",
        "text": "Pipeline"
      },
      {
        "kind": "ul",
        "items": [
          "Weighted pipeline **~$487K** across **14** active opportunities.",
          "**Northwind Retail** - $72K/yr retainer, verbal yes, signing Monday.",
          "**Meridian SaaS** ($120K) at risk - quiet after proposal; follow-up Tuesday."
        ]
      },
      {
        "kind": "h4",
        "text": "Current projects"
      },
      {
        "kind": "ul",
        "items": [
          "**Aspen Outdoors** - rebrand launched on schedule; engagement **+18%** vs baseline.",
          "**Lumen Health** - CPA **$62** vs $40 target; creative refresh due Wednesday.",
          "**Vela Cosmetics** - scope creep flag; account lead scheduling SOW conversation."
        ]
      },
      {
        "kind": "h4",
        "text": "HR and financials"
      },
      {
        "kind": "ul",
        "items": [
          "Headcount **24**; **Priya Nandi** (Senior Paid Media) starts July 14.",
          "MRR **$198K** (+$4.5K net new); cash **$612K** (~7 months runway).",
          "AR outstanding **$94K** - **$31K** is 30+ days overdue."
        ]
      },
      {
        "kind": "h4",
        "text": "Top 3 for next week"
      },
      {
        "kind": "ol",
        "items": [
          "**Close Northwind Retail** (signing expected Monday).",
          "**Unblock Lumen Health CPA** (creative refresh landing Wednesday).",
          "**Resolve Vela Cosmetics scope** (account lead to hold conversation)."
        ]
      }
    ]
  },
  {
    "id": "marketing-report",
    "category": "GTM",
    "title": "Marketing report",
    "chatTitle": "Marketing report",
    "question": "Give me a marketing report highlighting the most urgent issues and recommended actions.",
    "summary": "I'll pull your context from Unabyss to ground this in your actual marketing situation.",
    "modelName": "Sonnet 5",
    "modelLevel": "Medium",
    "video": "/videos/gtm-marketing-report.webm",
    "videoMs": 37620,
    "cover": "/images/hero/cover-marketing-report.webp",
    "poster": "/images/hero/marcin-poster.jpg",
    "trace": [
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "reason",
        "text": "I need funnel state, live tests, and team bandwidth - not a generic checklist.",
        "delay": 1100
      },
      {
        "icon": "tool",
        "text": "Agentic query",
        "request": "What are the most urgent marketing actions right now? Consider growth targets, funnel state, paid acquisition, team availability, and fundraise timeline. Split what the CEO owns vs the team.",
        "delay": 4400
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "pending",
        "polling": true,
        "delay": 4100
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "pending",
        "polling": true,
        "delay": 4700
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "completed",
        "delay": 1400
      }
    ],
    "answerBlocks": [
      {
        "kind": "h3",
        "text": "Marketing report - as of July 3, 2026"
      },
      {
        "kind": "h4",
        "text": "The one thing that matters most"
      },
      {
        "kind": "ul",
        "items": [
          "Homepage conversion fell **3.2% -> 1.8%** after broadening paid traffic - a **~44%** efficiency drop.",
          "**Variant B** is live on **30%** of traffic - highest-leverage lever until conversion recovers near **3%**."
        ]
      },
      {
        "kind": "h4",
        "text": "Actions for Head of Marketing"
      },
      {
        "kind": "ul",
        "items": [
          "**Own the landing page test** - set win threshold and decision date for Variant B now.",
          "**GrowthEngine ($42K)** - go/no-go against the conversion fix; don't buy growth tooling while the funnel leaks.",
          "**Protect fundraise cadence** - keep newsletter and LinkedIn feeding the narrative."
        ]
      },
      {
        "kind": "h4",
        "text": "Team actions"
      },
      {
        "kind": "ul",
        "items": [
          "**Leo** - ship A/B dashboard widget by EOD; report CTR + signups daily.",
          "**Jacob** - publish newsletter + 2 LinkedIn posts; double down on bias-audit angle (**40 reposts**).",
          "**Pause broad paid traffic** until conversion recovers."
        ]
      }
    ]
  },
  {
    "id": "linkedin-strategy",
    "category": "Founders",
    "title": "LinkedIn strategy",
    "chatTitle": "Founder LinkedIn strategy",
    "question": "Prepare a founder LinkedIn content strategy with 8 posts for this month (2/week), based on my recent context and thought leadership.",
    "summary": "I'll pull your context from Unabyss and build the strategy plus posts.",
    "modelName": "Sonnet 5",
    "modelLevel": "Medium",
    "video": "/videos/founder-linkedin.webm",
    "videoMs": 47110,
    "cover": "/images/hero/cover-infra-review.webp",
    "poster": "/images/hero/filip-poster.jpg",
    "trace": [
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "tool",
        "text": "Whoami",
        "delay": 1150
      },
      {
        "icon": "tool",
        "text": "Query",
        "request": "Who am I? Give my name, role, company, and key facts about what I'm working on.",
        "delay": 2900
      },
      {
        "icon": "reason",
        "text": "Let me pull recent events and voice details for grounding the posts.",
        "delay": 1100
      },
      {
        "icon": "tool",
        "text": "Query",
        "request": "What are the most recent events, milestones, product updates, wins, hires, and lessons from the last 4-6 weeks? Give me specifics I could reference in LinkedIn posts.",
        "delay": 4400
      }
    ],
    "answerBlocks": [
      {
        "kind": "h3",
        "text": "Founder LinkedIn content strategy - July"
      },
      {
        "kind": "h4",
        "text": "Strategy"
      },
      {
        "kind": "ul",
        "items": [
          "Post as an **operator**, not a billboard - one idea per post.",
          "Show tension, end with a **real question** to pull comments.",
          "**Tue/Thu cadence** - two posts per week, eight for the month."
        ]
      },
      {
        "kind": "h4",
        "text": "8 posts grounded in your context"
      },
      {
        "kind": "ol",
        "items": [
          "**Explainability over raw accuracy** - accuracy without explainability does not earn trust.",
          "**Fewer false positives** in shortlists - what customer outcomes actually mean.",
          "**SOC 2 and reproducible scoring pipelines** - scaling beyond PMF is systems work.",
          "**VP Engineering search** - velocity vs. reliability, observability, and SOC 2.",
          "**90-day ROI window** - how you prove value in enterprise hiring deals.",
          "**Faster midsize ATS integrations** - what buyers feel in the first quarter.",
          "**Calibration and customer transparency** - making hiring repeatable and humane.",
          "**Leadership hiring as a scaling lever** - why the VP Eng role matters now."
        ]
      }
    ]
  },
  {
    "id": "repo-scaffold",
    "category": "Builders",
    "title": "Repo scaffold",
    "chatTitle": "New repo scaffold",
    "question": "I'm spinning up a new repo. Set it up the way I usually structure my projects.",
    "summary": "I'll pull your context from Unabyss about your past projects.",
    "modelName": "Sonnet 5",
    "modelLevel": "Medium",
    "video": "/videos/builder-repo-scaffold.webm",
    "videoMs": 34060,
    "cover": "/images/hero/cover-repo-scaffold.webp",
    "poster": "/images/hero/stas-poster.jpg",
    "trace": [
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "reason",
        "text": "I need your real stack, layout, and CI patterns - not a generic template.",
        "delay": 1100
      },
      {
        "icon": "tool",
        "text": "Agentic query",
        "request": "Synthesize my project setup conventions across past repos: language, package manager, build tooling, lint/format, database and ORM, CI/CD patterns, commit conventions, standard folder layout, and what correlates with projects I shipped vs abandoned.",
        "delay": 4400
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "pending",
        "polling": true,
        "delay": 4000
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "pending",
        "polling": true,
        "delay": 4600
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "completed",
        "delay": 1400
      }
    ],
    "answerBlocks": [
      {
        "kind": "h3",
        "text": "Repo scaffold - your conventions"
      },
      {
        "kind": "h4",
        "text": "Stack and tooling"
      },
      {
        "kind": "ul",
        "items": [
          "**TypeScript**, **pnpm**, **Vite** frontend, **Fastify** backend - your last three repos.",
          "**Biome** for lint/format (replaced ESLint+Prettier in Feb).",
          "**Drizzle + Neon** - default DB after the Prisma migration pain."
        ]
      },
      {
        "kind": "h4",
        "text": "CI and layout"
      },
      {
        "kind": "ul",
        "items": [
          "**ci.yml** on every push; deploy **only on tag to main** (post nomad-sync incident).",
          "Tree: src/routes, src/lib, src/db, tests/ (Vitest), .env.example, biome.json.",
          "**Conventional commits** + Changesets flow from ferrous-api."
        ]
      },
      {
        "kind": "h4",
        "text": "Skipped this time"
      },
      {
        "kind": "ul",
        "items": [
          "**No Turborepo** - monorepo overhead not worth it solo.",
          "**No Docker** - added to every repo, used on zero.",
          "**Linear board** linked: Backlog / This Week / In Progress / Shipped."
        ]
      }
    ]
  },
  {
    "id": "candidate-placement",
    "category": "Agencies",
    "title": "Candidate placement",
    "chatTitle": "Bartood.ai placement review",
    "question": "Pull up the Bartood.ai placement from last quarter. Summarize the terms, renewal status, and churn/upsell opportunities based on recent activity.",
    "summary": "I'll pull Bartood.ai context from Unabyss.",
    "modelName": "Sonnet 5",
    "modelLevel": "Medium",
    "video": "/videos/agency-client-context.webm",
    "videoMs": 44360,
    "cover": "/images/hero/cover-infra-review.webp",
    "poster": "/images/hero/dominik-poster.jpg",
    "trace": [
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "reason",
        "text": "I need the Q1 contract, renewal window, and recent signals - not a blank slate.",
        "delay": 1100
      },
      {
        "icon": "tool",
        "text": "Agentic query",
        "request": "Pull together everything on the Bartood.ai account for a quarterly placement review: Q1 contract terms, renewal status and notice deadlines, churn signals from payment and communication patterns, and upsell opportunities from recent activity.",
        "delay": 4400
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "pending",
        "polling": true,
        "delay": 4100
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "pending",
        "polling": true,
        "delay": 4700
      },
      {
        "icon": "tool",
        "text": "Agentic query read",
        "resultText": "completed",
        "delay": 1400
      }
    ],
    "answerBlocks": [
      {
        "kind": "h3",
        "text": "Bartood.ai - Q1 placement account review"
      },
      {
        "kind": "h4",
        "text": "Contract terms"
      },
      {
        "kind": "ul",
        "items": [
          "**3-role** contract engineering placement signed **Feb 4** - 2 Senior ML Engineers, 1 Platform Reliability Engineer.",
          "**$148/hr** blended bill rate, **22%** markup, **Net-30** payment terms.",
          "Account owner: **Rachel Nkemelu**; hiring manager: **Devraj Patel**."
        ]
      },
      {
        "kind": "h4",
        "text": "Renewal status"
      },
      {
        "kind": "ul",
        "items": [
          "Engagement renews **May 4**; **30-day notice window opens April 4**.",
          "Two contractors performing well; **reliability role at risk** (scope mismatch flagged).",
          "Likely **partial renewal (2 of 3)** unless the third role is repositioned."
        ]
      },
      {
        "kind": "h4",
        "text": "Churn and upsell"
      },
      {
        "kind": "ul",
        "items": [
          "**Churn:** payments slipped **Net-30 -> Net-45**; ~3-week email gap in March.",
          "**Upsell:** Series B closed in March; **2 open roles** on careers page not yet sourced.",
          "Devraj interested in an **embedded recruiting pod** - higher-margin expansion."
        ]
      },
      {
        "kind": "h4",
        "text": "Recommended next action"
      },
      {
        "kind": "ol",
        "items": [
          "**Schedule QBR with Devraj before April 4** (ahead of notice window).",
          "Lead with the two strong ML placements; address reliability scope directly.",
          "Float the embedded pod against post-Series B hiring."
        ]
      }
    ]
  },
  {
    "id": "performance-ad-tests",
    "category": "GTM",
    "title": "Performance ad tests",
    "chatTitle": "Performance ad tests",
    "question": "Prepare performance ad messaging with 10 A/B test ideas and brief visual concepts.",
    "summary": "I'll pull your context from Unabyss first, then build the ad tests.",
    "modelName": "Sonnet 5",
    "modelLevel": "Medium",
    "video": "/videos/gtm-performance-ads.webm",
    "videoMs": 38580,
    "cover": "/images/hero/cover-performance-ads.webp",
    "poster": "/images/hero/dominik-poster.jpg",
    "trace": [
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "find",
        "text": "Finding tools",
        "result": true,
        "delay": 850
      },
      {
        "icon": "reason",
        "text": "I need your positioning, ICP, and channel learnings before I write variants.",
        "delay": 1100
      },
      {
        "icon": "tool",
        "text": "Query",
        "request": "What is the product, its positioning, ICP, key differentiators, and activation definition? What channels and CAC benchmarks apply to paid marketing?",
        "delay": 4400
      }
    ],
    "answerBlocks": [
      {
        "kind": "h3",
        "text": "10 A/B test pairs - performance ads"
      },
      {
        "kind": "h4",
        "text": "Hook tests"
      },
      {
        "kind": "ul",
        "items": [
          "**Pain vs aspiration:** \"Your best candidate just accepted another offer\" vs \"Fill VP roles in 12 days, not 12 weeks.\"",
          "**Problem vs social proof:** \"Screening 400 resumes by hand?\" vs \"How a peer cut time-to-hire 45%.\"",
          "**UGC talking-head vs product demo:** Head of Talent to camera vs 15s AI ranking screen capture."
        ]
      },
      {
        "kind": "h4",
        "text": "Message and CTA tests"
      },
      {
        "kind": "ul",
        "items": [
          "**Emotional vs ROI:** \"Monday without a 300-resume backlog\" vs \"Cut cost-per-hire - here's the math.\"",
          "**VP Talent vs recruiter:** Board-ready metrics vs skip the first-round grind.",
          "**Free trial vs demo:** \"Screen your first 100 candidates\" vs \"See it on your live pipeline.\""
        ]
      },
      {
        "kind": "h4",
        "text": "Angle tests"
      },
      {
        "kind": "ul",
        "items": [
          "**AI-native trend** vs **trust/safety:** \"Built for the AI era\" vs \"Bias-audited, compliant screening.\"",
          "**Short hook (8s)** vs **long-form (30s)** - isolate hook length only."
        ]
      },
      {
        "kind": "h4",
        "text": "Testing notes"
      },
      {
        "kind": "ol",
        "items": [
          "**Single-variable tests** - change headline OR visual OR CTA, not all at once.",
          "Judge on **cost per activation**, not CTR; refresh winners every ~2 weeks.",
          "Kill variants once cost-per-activation clears your threshold with significance."
        ]
      }
    ]
  }
];
