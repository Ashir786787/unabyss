export type JobPosting = {
  slug: string;
  title: string;
  roleType: string;
  level: string;
  schedule: string;
  location: string;
  description: string;
  salary: string;
  about: string[];
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  perks: string[];
  applySubject: string;
};

export const jobPostings: JobPosting[] = [
  {
    slug: "backend-engineer",
    title: "Backend Engineer with DevOps",
    roleType: "Backend Engineer",
    level: "Mid to Senior",
    schedule: "Full-time",
    location: "Remote / Hybrid (Warsaw or Cracow)",
    description:
      "Build and operate the services that keep context synchronized across thousands of integrations and millions of items.",
    salary: "€4,000–€7,000/month gross (€48k–€84k/year)",
    about: [
      "We're building Unabyss - the universal context layer for AI. Users store all their context (background, expertise, preferences, goals) in one place, and any AI tool can access it via MCP and APIs. The user controls what gets shared, with whom, at what depth.",
      "We've just raised pre-seed funding and are assembling the founding engineering team. This is the ground floor of a company building core infrastructure for the AI era.",
    ],
    responsibilities: [
      "Design and implement backend features end-to-end - from data modeling to API endpoints",
      "Build and maintain async processing pipelines and real-time streaming infrastructure",
      "Own and improve the deployment pipeline across staging and production environments",
      "Build out CI/CD pipelines with automated testing, linting, and deployments",
      "Maintain monitoring, alerting, and self-healing infrastructure",
      "Participate in architectural decisions and help shape the technical direction of the product",
      "Help migrate and scale infrastructure as the product grows",
    ],
    requirements: [
      "1+ years of professional experience with Python and Django",
      "Strong understanding of async Python - asyncio, async views, task queues",
      "Experience with AI-first programming - using AI coding tools (Cursor, Claude Code etc.) as a core part of your workflow",
      "Comfortable with Linux server administration and containerized deployments",
      "Ability to work independently, make decisions, and drive features to completion with minimal supervision",
      "Fluent English (written and spoken)",
    ],
    niceToHave: [
      "3+ years of professional experience with Python and Django",
      "LLM/AI integration experience - embedding pipelines, retrieval-augmented generation",
      "Experience with cloud platforms (GCP or similar)",
      "Experience in early-stage / small-team environments",
    ],
    perks: [
      "€4,000-€7,000/month gross (€48k-€84k/year), calibrated to experience and location",
      "Fully remote with full flexibility - work from anywhere within CET ±2h",
      "ESOPs planned as the company scales - you're joining early enough to benefit",
      "Sports benefits",
      "Direct collaboration with the CTO - significant influence over technical decisions and architecture",
      "A clear growth path: evolve into a tech lead / engineering manager role, or deepen into a principal engineer track",
      "The chance to help build something massive from the very beginning",
    ],
    applySubject: "Application: Backend Engineer with DevOps",
  },
  {
    slug: "ml-engineer",
    title: "ML Engineer / LLM Specialist",
    roleType: "Applied Researcher",
    level: "Mid to Senior",
    schedule: "Full-time",
    location: "Remote / Hybrid (Warsaw or Cracow)",
    description:
      "Work on retrieval, ranking, and evaluation of context — making sure the right memory surfaces at the right time.",
    salary: "€5,000–€8,000/month gross (€60k–€96k/year)",
    about: [
      "We're building Unabyss - the universal context layer for AI. Users store all their context (background, expertise, preferences, goals) in one place, and any AI tool can access it via MCP and APIs. The user controls what gets shared, with whom, at what depth.",
      "We've just raised pre-seed funding and are assembling the founding engineering team. This is the ground floor of a company building core infrastructure for the AI era.",
    ],
    responsibilities: [
      "Design and build a knowledge/memory system that structures user context for precise, traceable retrieval",
      "Build data processing pipelines that enrich, classify, and structure information as it flows in",
      "Design retrieval mechanisms that are cheap, accurate, and traceable to their root sources",
      "Implement permission-aware access control at the retrieval layer - enforcing per-app consent boundaries",
      "Evaluate and compare architectural approaches (knowledge graphs, hybrid retrieval, structured extraction) through rapid prototyping and benchmarking",
      "Design prompt engineering strategies and LLM pipeline architectures using commercially available models",
      "Collaborate directly with the CTO to shape the core technical direction of the product",
    ],
    requirements: [
      "2+ years of professional experience building ML/NLP/LLM systems in production",
      "Strong Python proficiency",
      "Deep understanding of retrieval architectures beyond basic RAG - hybrid search, structured extraction, re-ranking, query decomposition",
      "Comfort with rapid prototyping - building POCs, running experiments, measuring results, iterating fast",
      "Experience with AI-first programming - using AI coding tools (Cursor, Claude Code etc.) as a core part of your workflow",
      "Strong algorithmic thinking and ability to reason about trade-offs: precision vs. recall, cost vs. accuracy, latency vs. completeness",
      "Experience designing and evaluating ML pipelines end-to-end",
      "Ability to work independently, make design decisions, and drive research-to-production cycles with minimal supervision",
      "Fluent English (written and spoken)",
    ],
    niceToHave: [
      "Experience with knowledge graphs - construction, querying, integration with LLM pipelines",
      "Background in information theory or information retrieval research",
      "Experience with permission/access-control systems at the data layer",
      "Familiarity with prompt engineering at scale - structured outputs, chain-of-thought, tool use",
      "Experience in early-stage / small-team environments",
      "Published research or open-source contributions in relevant areas",
    ],
    perks: [
      "€5,000-€8,000/month gross (€60k-€96k/year), calibrated to experience and location",
      "Fully remote with full flexibility - work from anywhere within CET ±2h",
      "ESOPs planned as the company scales - you're joining early enough to benefit",
      "Sports benefits",
      "Direct collaboration with the CTO - outsized influence on the product's core architecture",
      "A clear growth path: evolve into Head of ML/AI or deepen into a principal/staff track as the team grows",
      "The chance to help build something massive from the very beginning",
    ],
    applySubject: "Application: ML Engineer / LLM Specialist",
  },
];
