"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

type TocItem = { id: string; label: string };

const toc: TocItem[] = [
  { id: "base-url", label: "Base URL" },
  { id: "authentication", label: "Authentication" },
  { id: "json-rpc-envelope", label: "JSON-RPC envelope" },
  { id: "methods", label: "Methods" },
  { id: "first-connection-setup", label: "First-connection setup" },
  { id: "tools", label: "Tools" },
  { id: "error-codes", label: "Error codes" },
  { id: "rate-limits-and-credits", label: "Rate limits and credits" },
  { id: "support", label: "Support" },
];

const markdownSource = `# Unabyss MCP API Reference

Streamable HTTP JSON-RPC API for personal context tools at mcp.unabyss.com. Last updated 10 August 2026.

The Unabyss MCP server exposes a Model Context Protocol (MCP) API over HTTPS. Clients send JSON-RPC 2.0 requests to a single endpoint and receive JSON responses. The server implements MCP protocol version 2025-06-18 with tools and prompts (no resources).

## Base URL

| Item | Value |
| --- | --- |
| MCP endpoint | \`https://mcp.unabyss.com\` |
| Protocol | MCP Streamable HTTP (JSON-RPC 2.0) |
| MCP version | \`2025-06-18\` |
| Server info | \`unabyss-mcp\` \`0.3.0\` |
| Content-Type | \`application/json\` |
| Accept | \`application/json\` (recommended) or \`application/json, text/event-stream\` |

All requests use **POST** with a JSON object body. There is no REST-style path per tool; tools are invoked through the JSON-RPC \`tools/call\` method.

Configure clients with the bare origin above. Any path under the host resolves to the same JSON-RPC entrypoint, but the OAuth resource identifier is exactly \`https://mcp.unabyss.com\` — a client that derives its RFC 8707 \`resource\` from a path-suffixed endpoint URL such as \`https://mcp.unabyss.com/mcp\` is rejected with \`invalid_target\` at the authorize step.

Responses are always a single JSON document — the server never streams SSE frames, even when the client advertises \`text/event-stream\`.

## Authentication

Static bearer tokens and OAuth-issued access tokens **coexist** on the same MCP host. Send either as a bearer on every JSON-RPC request:

\`\`\`http
Authorization: Bearer <token>
Content-Type: application/json
Accept: application/json
\`\`\`

| Credential | Prefix | How you get it |
| --- | --- | --- |
| Static token | \`unby_mcp_\` | Generate at app.unabyss.com/mcp |
| OAuth access token | \`unabyss_mcp_oauth_\` | Authorization-code + PKCE flow (below) |
| OAuth refresh token | \`unabyss_mcp_oauth_refresh_\` | Returned with the access token; use only at \`/oauth/token\` |

Lookup is prefix-routed: one indexed hash lookup for the matching token type. Both credential kinds share the same tool surface, permissions model, throttles, and credit preauth.

### Static bearer tokens

1. Sign in at app.unabyss.com/mcp.
2. Click **Generate token** and copy the plaintext value (shown once).
3. Tokens use the \`unby_mcp_\` prefix.

Revoke or edit token permissions from the same page.

### OAuth 2.1

Unabyss runs a self-hosted **OAuth 2.1** authorization server on the MCP host (authorization code + PKCE, public clients, dynamic client registration). Aligns with the MCP authorization spec revision **2025-11-25**.

Discovery metadata and protocol endpoints:

| Endpoint | Purpose |
| --- | --- |
| \`/.well-known/oauth-protected-resource\` | RFC 9728 protected-resource metadata |
| \`/.well-known/oauth-authorization-server\` | RFC 8414 authorization-server metadata |
| \`/oauth/register\` | Dynamic client registration (RFC 7591) |
| \`/oauth/register/{client_id}\` | Registered client metadata read (RFC 7592) |
| \`/oauth/authorize\` | Authorization request (PKCE \`S256\` required) |
| \`/oauth/token\` | Authorization-code exchange and refresh |
| \`/oauth/revoke\` | Token revocation (RFC 7009) |

**Flow (typical MCP client):**

1. Read \`/.well-known/oauth-protected-resource\` (resource = \`https://mcp.unabyss.com\`) and follow \`authorization_servers\` to the authorization-server metadata.
2. Register via \`/oauth/register\` if the client has no \`client_id\` yet (or use a Client ID Metadata Document when supported).
3. Open \`/oauth/authorize\` with \`response_type=code\`, PKCE (\`code_challenge_method=S256\`), and the requested \`scope\`.
4. The user signs in and consents in the Unabyss app (\`/mcp/consent\`). On approve, the authorize endpoint redirects back to the client's \`redirect_uri\` with an authorization code.
5. Exchange the code at \`/oauth/token\` for an access token (\`unabyss_mcp_oauth_…\`) and refresh token (\`unabyss_mcp_oauth_refresh_…\`).
6. Call the MCP JSON-RPC endpoint with \`Authorization: Bearer unabyss_mcp_oauth_…\`. Refresh via \`/oauth/token\` (\`grant_type=refresh_token\`) before the access token expires.

| Setting | Default |
| --- | --- |
| Scopes | \`read\`, \`write\` |
| Grants | \`authorization_code\`, \`refresh_token\` |
| PKCE | \`S256\` (required) |
| Access token lifetime | 4 hours (\`expires_in\` on the token response) |
| Refresh token lifetime | 30 days |
| Resource / audience | \`https://mcp.unabyss.com\` (RFC 8707), exact match — take it from \`/.well-known/oauth-protected-resource\`, not from your endpoint URL |

A \`401\` on the MCP host includes:

- Header: \`WWW-Authenticate: Bearer realm="mcp", resource_metadata="https://mcp.unabyss.com/.well-known/oauth-protected-resource"\`
- Body field \`error.data.auth_action\`:
  - \`"refresh"\` — access token expired; use the refresh token
  - \`"reauthorize"\` — token revoked, unknown, audience mismatch, or malformed; run the OAuth flow again

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
    "code": -32603,
    "message": "Unauthorized",
    "data": {
      "code": "unauthorized",
      "auth_action": "refresh"
    }
  }
}
\`\`\`

Refresh-token rotation supports a short grace window for concurrent refreshes (default 60 seconds). Replay within that window returns the same token response; after it, reuse is treated as a security event and the token family is revoked.

Manage connected OAuth clients alongside static tokens at app.unabyss.com/mcp.

### Token permissions

Each credential carries its own redaction settings, applied to the context a tool can reach:

- **Exclude private info** — drops personal-life material from results.
- **Exclude company confidential** — drops company-confidential material from results.
- **Excluded apps** — per-integration blocklist; excluded sources never enter a \`query\` or \`agentic_query\` answer.

Two credentials for the same account can therefore return different answers to the same question.

## JSON-RPC envelope

Every request body is a JSON object:

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "<method>",
  "params": {}
}
\`\`\`

Successful responses:

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {}
}
\`\`\`

Errors come in two classes.

**Protocol errors** (unparseable body, missing \`method\`, unknown method) return **HTTP 200** with a standard JSON-RPC numeric code and no \`data\`:

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": { "code": -32601, "message": "Unknown method: 'resources/list'" }
}
\`\`\`

Codes used: \`-32700\` parse error, \`-32600\` invalid request, \`-32601\` method not found, \`-32602\` invalid params.

**Application errors** (auth, throttling, validation, tool failures) use an HTTP status that matches the error class and always carry the numeric code \`-32603\` plus a machine-readable \`data.code\`:

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
    "code": -32603,
    "message": "Human-readable message",
    "data": {
      "code": "unauthorized",
      "auth_action": "reauthorize"
    }
  }
}
\`\`\`

\`data\` may also carry \`auth_action\` (\`unauthorized\`), \`retry_after_seconds\` (rate limits, temporary unavailability), \`topup_url\` and \`preauth_amount\` (\`quota_exceeded\`), or \`limit_kind\` and \`upgrade_url\` (\`tier_limit_exceeded\`). See **Error codes** below.

Tool results never use the \`isError: true\` flag — a failing tool raises an application error envelope instead.

## Methods

| Method | Purpose |
| --- | --- |
| \`initialize\` | Handshake; returns server info, capabilities, and instructions |
| \`tools/list\` | Discover callable tools and their input schemas |
| \`tools/call\` | Invoke a tool |
| \`prompts/list\` | List prompt descriptors (setup guide + one per active skill) |
| \`prompts/get\` | Fetch a prompt's messages by name |

Any other method returns \`-32601\`.

### initialize

**Request**

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "initialize",
  "params": {
    "protocolVersion": "2025-06-18",
    "capabilities": {},
    "clientInfo": {
      "name": "my-client",
      "version": "1.0.0"
    }
  }
}
\`\`\`

**Result (abbreviated)**

\`\`\`json
{
  "protocolVersion": "2025-06-18",
  "serverInfo": {
    "name": "unabyss-mcp",
    "version": "0.3.0"
  },
  "capabilities": {
    "tools": { "listChanged": false },
    "prompts": { "listChanged": false }
  },
  "instructions": "..."
}
\`\`\`

\`clientInfo.name\` is recorded against the credential and used to scope the setup state described in **First-connection setup** below. The \`instructions\` string varies with that state.

### tools/list

Returns the tools the authenticated credential may call. Use this to verify credentials without running a heavy tool.

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/list"
}
\`\`\`

**Result (shape)**

\`\`\`json
{
  "tools": [
    {
      "name": "query",
      "description": "...",
      "inputSchema": { "type": "object", "properties": {}, "required": [] },
      "annotations": { "readOnlyHint": true, "destructiveHint": false, "openWorldHint": false }
    }
  ]
}
\`\`\`

The three skill tools (\`list_skills\`, \`get_skill\`, \`read_skill_file\`) are omitted from the catalog when no active skills exist.

### tools/call

**Request**

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "whoami",
    "arguments": {}
  }
}
\`\`\`

**Result (shape)**

\`\`\`json
{
  "content": [
    {
      "type": "text",
      "text": "Answer or JSON string"
    }
  ],
  "isError": false,
  "structuredContent": {}
}
\`\`\`

- \`content[0].text\` — primary text payload (always present for successful calls).
- \`structuredContent\` — typed JSON, returned only by \`list_integrations\`, \`export_list\`, and \`list_skills\`. Those tools repeat the same JSON in \`content[0].text\`, because many hosts only forward text to the model.
- Other tools that return structured data (\`store\`, \`agentic_query\`, \`export_read\`, \`propose_connection\`) serialize it as a JSON **string** in \`content[0].text\`.
- Text payloads occasionally carry an appended notice — setup guidance, or a trial-expiry note on plan-limited accounts.

### prompts/list and prompts/get

\`prompts/list\` returns the reserved \`unabyss-setup\` descriptor plus one descriptor per active skill (the prompt name is the skill slug). \`prompts/get\` takes \`{"name": "<slug>"}\` and returns \`{"messages": [...]}\`. Fetching a skill prompt counts as a skill use, exactly like \`get_skill\`.

## First-connection setup

Unabyss runs a one-time, per-credential setup flow via \`unabyss_setup\`. The counted steps are numbered **Step N of 3** (apps → preferences → system prompt). Skills are **not** part of the flow.

| Step | Purpose |
| --- | --- |
| \`step1\` (default) | Intro / offer setup |
| \`step2\` | Connect apps (\`list_integrations\` / \`propose_connection\`); requires **≥2** connected integrations before later steps continue |
| \`step3\` | What to save back to Unabyss |
| \`step4\` | Client system prompt; pass \`context_preference\` from step3 (\`save_everything\` | \`save_important\` | \`save_nothing\`) |
| \`first-prompt\` | Normal finish: pass \`instructions_installed\` (bool); records setup \`done\`, unblocks tools, offers a first action |
| \`completed\` / \`skipped\` | Early exit only when the user explicitly chooses |

If the account already has ≥2 connected apps, \`step2\` is skipped and the intro previews the short path. Steps past apps redirect back to \`step2\` until that bar is met. Off-flow skill steps (\`step5\`, \`all-skills\`, \`essential-skills\`, \`<category>-skills\`) stay callable on request but are not linked from the main path.

### Tool gate while setup is unresolved

While a connection's setup is unresolved **and** at least one active skill exists, \`tools/call\` behaves differently:

- These tools always run: \`unabyss_setup\`, \`list_integrations\`, \`propose_connection\`, \`list_skills\`, \`get_skill\`, \`read_skill_file\`.
- Every other tool returns setup guidance as a **normal text result** (HTTP 200) — not an error — so clients don't mistake it for an auth failure.
- \`list_integrations\` still answers during setup, but with reduced \`{name, slug}\` rows plus agent-facing notes.

The gate resolves when setup is recorded as \`done\` (\`first-prompt\` or \`completed\`) or \`skipped\`. Escape hatch: once setup has been started and the skip offer has been shown, the next gated call records \`skipped\` automatically and runs normally from then on. The gate never re-arms for that credential.

## Tools

Call \`tools/list\` for the live catalog including input schemas.

| Tool | Purpose | Arguments |
| --- | --- | --- |
| \`whoami\` | Return the user's identity summary | none |
| \`query\` | Natural-language lookup against stored context | \`question\` (string, max 8 KB) |
| \`agentic_query\` | Deep multi-step synthesis; may return \`pending\` + \`query_id\` | \`question\` (string, max 8 KB) |
| \`agentic_query_read\` | Poll a pending \`agentic_query\` result | \`query_id\` (UUID string) |
| \`store\` | Persist durable text to the knowledge base | \`memory\` (string, max 32 KB) |
| \`update_identity\` | Replace the identity summary | \`content\` (string) |
| \`list_integrations\` | List connected integrations and connectable catalog apps | none |
| \`propose_connection\` | Mint a one-click connect URL for an app | \`app\` (slug), \`agent_name\` (\`[a-zA-Z0-9_-]\`, max 64) |
| \`export_list\` | List markdown exports | \`search\` (optional), \`limit\` (optional int) |
| \`export_read\` | Read full markdown for a ready export | \`export_id\` (UUID string) |
| \`export_create\` | Generate a new export in the background | \`topic\` **or** \`preset_slug\` (not both) |
| \`export_create_from_text\` | Save markdown as an export instantly | \`content\` (required, max 200 KB), \`title\`, \`topic_text\` |
| \`export_refresh\` | Regenerate an existing export | \`export_id\` (UUID string) |
| \`list_skills\` | List available skills (playbooks) | none |
| \`get_skill\` | Load a skill's markdown or \`.skill\` bundle link | \`slug\`, \`type\` (\`markdown\` | \`skill-file\`) |
| \`read_skill_file\` | Read a skill's supporting file | \`slug\`, \`path\` |
| \`unabyss_setup\` | Drive the optional one-time setup flow | \`step\` (optional), \`context_preference\` (optional, for \`step4\`), \`instructions_installed\` (optional bool, for \`first-prompt\`) |

### Example: whoami

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "whoami",
    "arguments": {}
  }
}
\`\`\`

### Example: query

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "query",
    "arguments": {
      "question": "What projects am I working on?"
    }
  }
}
\`\`\`

The answer is plain text in \`content[0].text\`.

### Example: store

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "store",
    "arguments": {
      "memory": "Prefers OAuth over static API keys for third-party integrations."
    }
  }
}
\`\`\`

Writes are asynchronous; the call acknowledges the enqueue as a JSON string:

\`\`\`json
{
  "content": [{ "type": "text", "text": "{\\"status\\": \\"queued\\"}" }],
  "isError": false
}
\`\`\`

### Example: list_integrations

No arguments. Returns two arrays: \`connected\` (one row per live connection with sync metadata) and \`available\` (catalog apps the user has not connected yet).

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "list_integrations",
    "arguments": {}
  }
}
\`\`\`

Structured response:

\`\`\`json
{
  "content": [
    {
      "type": "text",
      "text": "{\\"connected\\":[...],\\"available\\":[...]}"
    }
  ],
  "isError": false,
  "structuredContent": {
    "connected": [
      {
        "slug": "github",
        "display_name": "GitHub",
        "icon_url": null,
        "kinds": ["github_repo"],
        "items_count": 12,
        "last_sync_date": "2026-06-01T10:00:00Z",
        "kind": "oauth",
        "uid": "42",
        "id": null,
        "pipedream_account_id": null
      }
    ],
    "available": [
      {
        "slug": "gmail",
        "display_name": "Gmail",
        "icon_url": null,
        "connect_mechanism": "pipedream",
        "available": true,
        "unavailable_message": null
      }
    ]
  }
}
\`\`\`

Use \`available[].slug\` as the \`app\` argument to \`propose_connection\`. There is no \`include_all\` parameter — both lists are always returned.

### Example: propose_connection

\`\`\`json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "propose_connection",
    "arguments": { "app": "gmail", "agent_name": "my-client" }
  }
}
\`\`\`

Returns a discriminated payload as a JSON string. Business outcomes are successful results, not errors:

\`\`\`json
{
  "status": "ok",
  "reason": null,
  "connection": {
    "app": "gmail",
    "display_name": "Gmail",
    "icon_url": null,
    "connect_url": "https://api.unabyss.com/api/integrations/mcp-connect/<token>/",
    "expires_at": "2026-07-27T12:00:00Z",
    "intro": ""
  }
}
\`\`\`

\`status\` is one of \`ok\`, \`already_connected\`, \`unknown_app\`, \`not_connectable\`, or \`temporarily_unavailable\`. On any non-\`ok\` status, \`connection\` is \`null\` and \`reason\` explains why.

\`connect_url\` is always an Unabyss link — never a provider or vendor URL. For one-click apps it is a redirect endpoint that resolves the real destination (the provider's OAuth screen, or a Pipedream connect link minted at that moment) when the user opens it; apps that must be set up in the UI get a \`/connections\` deep link instead. Give it to the user promptly: when \`expires_at\` is set it is the expiry of that link itself, so a link handed over much later may already be dead.

### Exports

\`export_list\` returns \`{"exports": [{id, title, topic_text, status, kb_stale}]}\` in \`structuredContent\` (default page size 5; raise it with \`limit\`, narrow it with \`search\`).

\`export_read\` returns \`{id, title, topic_text, status, markdown}\` as a JSON string, and fails with \`resource_not_ready\` unless the export status is \`ready\`.

\`export_create\` and \`export_refresh\` enqueue multi-minute background generation and return a short confirmation with the export ID; call them only on explicit user request. Refreshing an export that is already generating returns \`conflict\`. \`export_create_from_text\` is instant and free — it stores the markdown you pass in.

### Skills

\`list_skills\` returns \`{"skills": [{slug, name, description}]}\` in \`structuredContent\`. \`get_skill\` returns the playbook markdown plus its supporting-file manifest, or — with \`type: "skill-file"\` — a link to the packaged \`.skill\` bundle for clients that install skills by file upload. \`read_skill_file\` fetches one supporting file by \`slug\` + \`path\`. Unknown slugs and paths return \`resource_not_found\`.

### Agentic query polling

\`agentic_query\` waits a few seconds for an inline answer. If the job is still running it returns a pending handle:

\`\`\`json
{
  "status": "pending",
  "query_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "poll_after_seconds": 5
}
\`\`\`

Poll \`agentic_query_read\` with the same \`query_id\` until \`status\` is \`completed\` or \`failed\`. Both tools serialize this payload as a JSON string in \`content[0].text\`.

## Error codes

Machine-readable codes appear in \`error.data.code\`:

| Code | HTTP | Meaning |
| --- | --- | --- |
| \`invalid_request\` | 400 | Malformed JSON-RPC body or unknown tool |
| \`unauthorized\` | 401 | Missing, invalid, revoked, or expired bearer; see \`data.auth_action\` (\`refresh\` or \`reauthorize\`) |
| \`query_input_invalid\` | 400 | Tool argument validation failed |
| \`store_payload_rejected\` | 400 | Store payload empty, too large, or invalid |
| \`quota_exceeded\` | 402 | Insufficient Unabyss credits; \`data.topup_url\` points at billing |
| \`setup_required\` | 403 | Account storage mode does not allow MCP (cloud storage required); first-connection setup uses a soft text gate, not this code |
| \`resource_not_found\` | 404 | Export, query, skill, or skill file not found |
| \`resource_not_ready\` | 409 | Export not ready for read |
| \`conflict\` | 409 | Operation already in flight (e.g. export regenerating) |
| \`rate_limit_exceeded\` | 429 | Rate limit hit; retry after \`Retry-After\` |
| \`memory_persist_failed\` | 500 | Write accepted but not persisted |
| \`internal_error\` | 500 | Unexpected server error |
| \`tier_limit_exceeded\` | 500 | Plan limit reached; \`data.limit_kind\` and \`data.upgrade_url\` explain which |
| \`memory_unavailable\` | 503 | Memory backend temporarily unavailable |
| \`service_temporarily_unavailable\` | 503 | Dependency degraded; retry after the hint |

Rate-limited and temporarily-unavailable responses also set the \`Retry-After\` header. If the server is disabled for maintenance, requests return a bodyless \`503\` with \`Retry-After: 60\`.

## Rate limits and credits

Default per-credential caps (per token unless noted):

| Scope | Limit |
| --- | --- |
| \`query\`, \`whoami\`, and other read tools | 1000 / hour |
| \`agentic_query\` | 60 / hour |
| \`store\` | 25 / hour, and 50 / day per account |
| \`export_create\`, \`export_create_from_text\`, \`export_refresh\` | 10 / hour |

\`query\`, \`store\`, and \`agentic_query\` are billed against Unabyss credits, with \`agentic_query\` costing several times a plain query. \`whoami\`, \`update_identity\`, the integration tools, the export tools, and the skill tools are free. Plans also cap total MCP calls and deep queries — those rejections come back as \`tier_limit_exceeded\` rather than \`rate_limit_exceeded\`.

## Support

- Product and token management: app.unabyss.com/mcp
- General inquiries: unabyss.com
- MCP protocol specification: modelcontextprotocol.io
`;

function CopyAsMd() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(markdownSource);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = markdownSource;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-white/10"
    >
      {copied ? (
        <Check className="size-3.5 text-emerald-300" strokeWidth={2.2} />
      ) : (
        <Copy className="size-3.5" />
      )}
      {copied ? "Copied" : "Copy as MD"}
    </button>
  );
}

function CodeBlock({ code, title }: { code: string; title?: string }) {
  return (
    <div className="overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#0a0a0a]">
      {title ? (
        <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-2">
          <span className="v2-mono text-[10.5px] tracking-[0.14em] text-white/45">
            {title}
          </span>
        </div>
      ) : null}
      <pre className="overflow-x-auto p-4">
        <code className="v2-mono block whitespace-pre text-[12.5px] leading-[1.7] text-white/75">
          {code}
        </code>
      </pre>
    </div>
  );
}

function SectionTitle({
  id,
  children,
  className = "mt-11",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`scroll-mt-28 border-b border-white/10 pb-2.5 text-[22px] font-semibold leading-[1.25] text-white/95 ${className}`}
    >
      {children}
    </h2>
  );
}

function SubTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h3
      id={id}
      className="scroll-mt-28 mt-8 text-[18px] font-medium leading-[1.3] text-white/95"
    >
      {children}
    </h3>
  );
}

function M({ children }: { children: React.ReactNode }) {
  return <code className="v2-mono text-[12.5px] text-white/80">{children}</code>;
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-[var(--gold-text)] underline-offset-4 hover:underline"
    >
      {children}
    </a>
  );
}

function DocsTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: React.ReactNode[][];
}) {
  return (
    <div className="overflow-hidden rounded-[14px] border border-white/[0.08]">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-white/[0.08] bg-white/[0.03]">
            {headers.map((header) => (
              <th
                key={header}
                className="v2-mono px-4 py-3 text-[10.5px] font-medium uppercase tracking-[0.14em] text-white/50"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="border-b border-white/[0.05] last:border-b-0"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 align-top text-[13px] font-light leading-[1.6] text-white/60"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function McpDocsSection() {
  const [activeId, setActiveId] = useState<string>(toc[0].id);

  return (
    <>
      <section className="relative px-6 pb-2 pt-28 sm:px-10 sm:pt-32 lg:px-12">
        <div className="relative mx-auto max-w-[1060px]">
          <Reveal className="flex flex-col items-start">
            <h1 className="text-[1.5rem] font-semibold leading-[1.25] text-white sm:text-[1.75rem]">
              Unabyss MCP API Reference
            </h1>
            <p className="mt-3 text-[15px] font-light leading-[1.65] text-white/60">
              Streamable HTTP JSON-RPC API for personal context tools at
              mcp.unabyss.com
            </p>
            <p className="mt-4 text-[13px] text-white/45">
              Last updated 10 August 2026
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-10 sm:px-10 sm:py-14 lg:px-12">
        <div className="relative mx-auto grid max-w-[1060px] gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start lg:gap-12 xl:gap-16">
          <Reveal className="hidden lg:block">
            <nav
              className="sticky top-24 flex flex-col gap-1"
              aria-label="Documentation contents"
            >
              <span className="v2-mono mb-2 text-[10px] uppercase tracking-[0.2em] text-white/40">
                On this page
              </span>
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onMouseEnter={() => setActiveId(item.id)}
                  className={`rounded-lg px-3 py-1.5 text-[13px] font-light no-underline transition-colors ${
                    activeId === item.id
                      ? "text-white"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </Reveal>

          <Reveal delay={60}>
            <div className="min-w-0">
              <nav className="mb-8 lg:hidden" aria-label="Documentation contents">
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="shrink-0 whitespace-nowrap rounded-lg border border-white/10 px-3 py-1.5 text-[12px] font-light text-white/55 no-underline transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </nav>

              <div className="mb-6 flex justify-end">
                <CopyAsMd />
              </div>

              <div className="flex flex-col">
                <p className="text-[15px] font-light leading-[1.7] text-white/60">
                  The Unabyss MCP server exposes a{" "}
                  <strong>Model Context Protocol (MCP)</strong> API over HTTPS.
                  Clients send JSON-RPC 2.0 requests to a single endpoint and
                  receive JSON responses. The server implements MCP protocol
                  version <strong>2025-06-18</strong> with <strong>tools</strong>{" "}
                  and <strong>prompts</strong> (no resources).
                </p>

                <section className="flex flex-col gap-4">
                  <SectionTitle id="base-url" className="mt-7">
                    Base URL
                  </SectionTitle>
                  <DocsTable
                    headers={["Item", "Value"]}
                    rows={[
                      [
                        "MCP endpoint",
                        <M key="v">https://mcp.unabyss.com</M>,
                      ],
                      [
                        "Protocol",
                        "MCP Streamable HTTP (JSON-RPC 2.0)",
                      ],
                      ["MCP version", <M key="v">2025-06-18</M>],
                      [
                        "Server info",
                        <span key="v">
                          <M>unabyss-mcp</M> <M>0.3.0</M>
                        </span>,
                      ],
                      ["Content-Type", <M key="v">application/json</M>],
                      [
                        "Accept",
                        <span key="v">
                          <M>application/json</M> (recommended) or{" "}
                          <M>application/json, text/event-stream</M>
                        </span>,
                      ],
                    ]}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    All requests use <strong>POST</strong> with a JSON object
                    body. There is no REST-style path per tool; tools are
                    invoked through the JSON-RPC <M>tools/call</M> method.
                  </p>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Configure clients with the bare origin above. Any path under
                    the host resolves to the same JSON-RPC entrypoint, but the
                    OAuth resource identifier is exactly{" "}
                    <M>https://mcp.unabyss.com</M> — a client that derives its
                    RFC 8707 <M>resource</M> from a path-suffixed endpoint URL
                    such as <M>https://mcp.unabyss.com/mcp</M> is rejected with{" "}
                    <M>invalid_target</M> at the authorize step.
                  </p>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Responses are always a single JSON document — the server
                    never streams SSE frames, even when the client advertises{" "}
                    <M>text/event-stream</M>.
                  </p>
                </section>

                <section className="flex flex-col gap-4">
                  <SectionTitle id="authentication">Authentication</SectionTitle>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Static bearer tokens and OAuth-issued access tokens{" "}
                    <strong>coexist</strong> on the same MCP host. Send either as
                    a bearer on every JSON-RPC request:
                  </p>
                  <CodeBlock
                    title="Http"
                    code={`Authorization: Bearer <token>
Content-Type: application/json
Accept: application/json`}
                  />
                  <DocsTable
                    headers={["Credential", "Prefix", "How you get it"]}
                    rows={[
                      [
                        "Static token",
                        <M key="p">unby_mcp_</M>,
                        <Link key="h" href="https://app.unabyss.com/mcp">
                          app.unabyss.com/mcp
                        </Link>,
                      ],
                      [
                        "OAuth access token",
                        <M key="p">unabyss_mcp_oauth_</M>,
                        "Authorization-code + PKCE flow (below)",
                      ],
                      [
                        "OAuth refresh token",
                        <M key="p">unabyss_mcp_oauth_refresh_</M>,
                        <span key="h">
                          Returned with the access token; use only at{" "}
                          <M>/oauth/token</M>
                        </span>,
                      ],
                    ]}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Lookup is prefix-routed: one indexed hash lookup for the
                    matching token type. Both credential kinds share the same
                    tool surface, permissions model, throttles, and credit
                    preauth.
                  </p>

                  <SubTitle id="static-bearer-tokens">Static bearer tokens</SubTitle>
                  <ol className="flex list-decimal flex-col gap-2 pl-5 text-[15px] font-light leading-[1.7] text-white/60">
                    <li>
                      Sign in at{" "}
                      <Link href="https://app.unabyss.com/mcp">
                        app.unabyss.com/mcp
                      </Link>
                      .
                    </li>
                    <li>
                      Click <strong>Generate token</strong> and copy the
                      plaintext value (shown once).
                    </li>
                    <li>
                      Tokens use the <M>unby_mcp_</M> prefix.
                    </li>
                  </ol>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Revoke or edit token permissions from the same page.
                  </p>

                  <SubTitle id="oauth-2-1">OAuth 2.1</SubTitle>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Unabyss runs a self-hosted <strong>OAuth 2.1</strong>{" "}
                    authorization server on the MCP host (authorization code +
                    PKCE, public clients, dynamic client registration). Aligns
                    with the MCP authorization spec revision{" "}
                    <strong>2025-11-25</strong>.
                  </p>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Discovery metadata and protocol endpoints:
                  </p>
                  <DocsTable
                    headers={["Endpoint", "Purpose"]}
                    rows={[
                      [
                        <M key="e">/.well-known/oauth-protected-resource</M>,
                        "RFC 9728 protected-resource metadata",
                      ],
                      [
                        <M key="e">/.well-known/oauth-authorization-server</M>,
                        "RFC 8414 authorization-server metadata",
                      ],
                      [
                        <M key="e">/oauth/register</M>,
                        "Dynamic client registration (RFC 7591)",
                      ],
                      [
                        <M key="e">/oauth/register/{`{client_id}`}</M>,
                        "Registered client metadata read (RFC 7592)",
                      ],
                      [
                        <M key="e">/oauth/authorize</M>,
                        <span key="p">
                          Authorization request (PKCE <M>S256</M> required)
                        </span>,
                      ],
                      [
                        <M key="e">/oauth/token</M>,
                        "Authorization-code exchange and refresh",
                      ],
                      [
                        <M key="e">/oauth/revoke</M>,
                        "Token revocation (RFC 7009)",
                      ],
                    ]}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    <strong>Flow (typical MCP client):</strong>
                  </p>
                  <ol className="flex list-decimal flex-col gap-2 pl-5 text-[15px] font-light leading-[1.7] text-white/60">
                    <li>
                      Read <M>/.well-known/oauth-protected-resource</M> (resource
                      = <M>https://mcp.unabyss.com</M>) and follow{" "}
                      <M>authorization_servers</M> to the authorization-server
                      metadata.
                    </li>
                    <li>
                      Register via <M>/oauth/register</M> if the client has no{" "}
                      <M>client_id</M> yet (or use a Client ID Metadata Document
                      when supported).
                    </li>
                    <li>
                      Open <M>/oauth/authorize</M> with{" "}
                      <M>response_type=code</M>, PKCE (
                      <M>code_challenge_method=S256</M>), and the requested{" "}
                      <M>scope</M>.
                    </li>
                    <li>
                      The user signs in and consents in the Unabyss app (
                      <M>/mcp/consent</M>). On approve, the authorize endpoint
                      redirects back to the client&apos;s <M>redirect_uri</M> with an
                      authorization code.
                    </li>
                    <li>
                      Exchange the code at <M>/oauth/token</M> for an access
                      token (<M>unabyss_mcp_oauth_…</M>) and refresh token (
                      <M>unabyss_mcp_oauth_refresh_…</M>).
                    </li>
                    <li>
                      Call the MCP JSON-RPC endpoint with{" "}
                      <M>Authorization: Bearer unabyss_mcp_oauth_…</M>. Refresh
                      via <M>/oauth/token</M> (<M>grant_type=refresh_token</M>)
                      before the access token expires.
                    </li>
                  </ol>
                  <DocsTable
                    headers={["Setting", "Default"]}
                    rows={[
                      ["Scopes", <span key="v"><M>read</M>, <M>write</M></span>],
                      [
                        "Grants",
                        <span key="v">
                          <M>authorization_code</M>, <M>refresh_token</M>
                        </span>,
                      ],
                      ["PKCE", <span key="v"><M>S256</M> (required)</span>],
                      [
                        "Access token lifetime",
                        <span key="v">
                          4 hours (<M>expires_in</M> on the token response)
                        </span>,
                      ],
                      ["Refresh token lifetime", "30 days"],
                      [
                        "Resource / audience",
                        <span key="v">
                          <M>https://mcp.unabyss.com</M> (RFC 8707), exact match
                          — take it from{" "}
                          <M>/.well-known/oauth-protected-resource</M>, not from
                          your endpoint URL
                        </span>,
                      ],
                    ]}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    A <M>401</M> on the MCP host includes:
                  </p>
                  <ul className="flex list-disc flex-col gap-2 pl-5 text-[15px] font-light leading-[1.7] text-white/60">
                    <li>
                      Header:{" "}
                      <M>
                        {`WWW-Authenticate: Bearer realm="mcp", resource_metadata="https://mcp.unabyss.com/.well-known/oauth-protected-resource"`}
                      </M>
                    </li>
                    <li>
                      Body field <M>error.data.auth_action</M>:
                      <ul className="mt-2 flex list-disc flex-col gap-2 pl-5">
                        <li>
                          <M>{`"refresh"`}</M> — access token expired; use the
                          refresh token
                        </li>
                        <li>
                          <M>{`"reauthorize"`}</M> — token revoked, unknown,
                          audience mismatch, or malformed; run the OAuth flow
                          again
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <CodeBlock
                    title="JSON"
                    code={`{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
    "code": -32603,
    "message": "Unauthorized",
    "data": {
      "code": "unauthorized",
      "auth_action": "refresh"
    }
  }
}`}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Refresh-token rotation supports a short grace window for
                    concurrent refreshes (default 60 seconds). Replay within that
                    window returns the same token response; after it, reuse is
                    treated as a security event and the token family is revoked.
                  </p>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Manage connected OAuth clients alongside static tokens at{" "}
                    <Link href="https://app.unabyss.com/mcp">
                      app.unabyss.com/mcp
                    </Link>
                    .
                  </p>

                  <SubTitle id="token-permissions">Token permissions</SubTitle>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Each credential carries its own redaction settings, applied
                    to the context a tool can reach:
                  </p>
                  <ul className="flex list-disc flex-col gap-2 pl-5 text-[15px] font-light leading-[1.7] text-white/60">
                    <li>
                      <strong>Exclude private info</strong> — drops personal-life
                      material from results.
                    </li>
                    <li>
                      <strong>Exclude company confidential</strong> — drops
                      company-confidential material from results.
                    </li>
                    <li>
                      <strong>Excluded apps</strong> — per-integration blocklist;
                      excluded sources never enter a <M>query</M> or{" "}
                      <M>agentic_query</M> answer.
                    </li>
                  </ul>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Two credentials for the same account can therefore return
                    different answers to the same question.
                  </p>
                </section>

                <section className="flex flex-col gap-4">
                  <SectionTitle id="json-rpc-envelope">JSON-RPC envelope</SectionTitle>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Every request body is a JSON object:
                  </p>
                  <CodeBlock
                    title="JSON"
                    code={`{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "<method>",
  "params": {}
}`}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Successful responses:
                  </p>
                  <CodeBlock
                    title="JSON"
                    code={`{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {}
}`}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Errors come in two classes.
                  </p>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    <strong>Protocol errors</strong> (unparseable body, missing{" "}
                    <M>method</M>, unknown method) return <strong>HTTP 200</strong>{" "}
                    with a standard JSON-RPC numeric code and no <M>data</M>:
                  </p>
                  <CodeBlock
                    title="JSON"
                    code={`{
  "jsonrpc": "2.0",
  "id": 1,
  "error": { "code": -32601, "message": "Unknown method: 'resources/list'" }
}`}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Codes used: <M>-32700</M> parse error, <M>-32600</M> invalid
                    request, <M>-32601</M> method not found, <M>-32602</M>{" "}
                    invalid params.
                  </p>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    <strong>Application errors</strong> (auth, throttling,
                    validation, tool failures) use an HTTP status that matches
                    the error class and always carry the numeric code{" "}
                    <M>-32603</M> plus a machine-readable <M>data.code</M>:
                  </p>
                  <CodeBlock
                    title="JSON"
                    code={`{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
    "code": -32603,
    "message": "Human-readable message",
    "data": {
      "code": "unauthorized",
      "auth_action": "reauthorize"
    }
  }
}`}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    <M>data</M> may also carry <M>auth_action</M> (
                    <M>unauthorized</M>), <M>retry_after_seconds</M> (rate
                    limits, temporary unavailability), <M>topup_url</M> and{" "}
                    <M>preauth_amount</M> (<M>quota_exceeded</M>), or{" "}
                    <M>limit_kind</M> and <M>upgrade_url</M> (
                    <M>tier_limit_exceeded</M>). See{" "}
                    <strong>Error codes</strong> below.
                  </p>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Tool results never use the <M>isError: true</M> flag — a
                    failing tool raises an application error envelope instead.
                  </p>
                </section>

                <section className="flex flex-col gap-4">
                  <SectionTitle id="methods">Methods</SectionTitle>
                  <DocsTable
                    headers={["Method", "Purpose"]}
                    rows={[
                      [
                        <M key="m">initialize</M>,
                        "Handshake; returns server info, capabilities, and instructions",
                      ],
                      [
                        <M key="m">tools/list</M>,
                        "Discover callable tools and their input schemas",
                      ],
                      [<M key="m">tools/call</M>, "Invoke a tool"],
                      [
                        <M key="m">prompts/list</M>,
                        "List prompt descriptors (setup guide + one per active skill)",
                      ],
                      [
                        <M key="m">prompts/get</M>,
                        "Fetch a prompt's messages by name",
                      ],
                    ]}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Any other method returns <M>-32601</M>.
                  </p>

                  <SubTitle id="initialize">initialize</SubTitle>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    <strong>Request</strong>
                  </p>
                  <CodeBlock
                    title="JSON"
                    code={`{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "initialize",
  "params": {
    "protocolVersion": "2025-06-18",
    "capabilities": {},
    "clientInfo": {
      "name": "my-client",
      "version": "1.0.0"
    }
  }
}`}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    <strong>Result (abbreviated)</strong>
                  </p>
                  <CodeBlock
                    title="JSON"
                    code={`{
  "protocolVersion": "2025-06-18",
  "serverInfo": {
    "name": "unabyss-mcp",
    "version": "0.3.0"
  },
  "capabilities": {
    "tools": { "listChanged": false },
    "prompts": { "listChanged": false }
  },
  "instructions": "..."
}`}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    <M>clientInfo.name</M> is recorded against the credential and
                    used to scope the setup state described in{" "}
                    <strong>First-connection setup</strong> below. The{" "}
                    <M>instructions</M> string varies with that state.
                  </p>

                  <SubTitle id="tools-list">tools/list</SubTitle>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Returns the tools the authenticated credential may call. Use
                    this to verify credentials without running a heavy tool.
                  </p>
                  <CodeBlock
                    title="JSON"
                    code={`{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/list"
}`}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    <strong>Result (shape)</strong>
                  </p>
                  <CodeBlock
                    title="JSON"
                    code={`{
  "tools": [
    {
      "name": "query",
      "description": "...",
      "inputSchema": { "type": "object", "properties": {}, "required": [] },
      "annotations": { "readOnlyHint": true, "destructiveHint": false, "openWorldHint": false }
    }
  ]
}`}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    The three skill tools (<M>list_skills</M>, <M>get_skill</M>,{" "}
                    <M>read_skill_file</M>) are omitted from the catalog when no
                    active skills exist.
                  </p>

                  <SubTitle id="tools-call">tools/call</SubTitle>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    <strong>Request</strong>
                  </p>
                  <CodeBlock
                    title="JSON"
                    code={`{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "whoami",
    "arguments": {}
  }
}`}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    <strong>Result (shape)</strong>
                  </p>
                  <CodeBlock
                    title="JSON"
                    code={`{
  "content": [
    {
      "type": "text",
      "text": "Answer or JSON string"
    }
  ],
  "isError": false,
  "structuredContent": {}
}`}
                  />
                  <ul className="flex list-disc flex-col gap-2 pl-5 text-[15px] font-light leading-[1.7] text-white/60">
                    <li>
                      <M>content[0].text</M> — primary text payload (always
                      present for successful calls).
                    </li>
                    <li>
                      <M>structuredContent</M> — typed JSON, returned only by{" "}
                      <M>list_integrations</M>, <M>export_list</M>, and{" "}
                      <M>list_skills</M>. Those tools repeat the same JSON in{" "}
                      <M>content[0].text</M>, because many hosts only forward
                      text to the model.
                    </li>
                    <li>
                      Other tools that return structured data (<M>store</M>,{" "}
                      <M>agentic_query</M>, <M>export_read</M>,{" "}
                      <M>propose_connection</M>) serialize it as a JSON{" "}
                      <strong>string</strong> in <M>content[0].text</M>.
                    </li>
                    <li>
                      Text payloads occasionally carry an appended notice — setup
                      guidance, or a trial-expiry note on plan-limited accounts.
                    </li>
                  </ul>

                  <SubTitle id="prompts-list-and-prompts-get">
                    prompts/list and prompts/get
                  </SubTitle>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    <M>prompts/list</M> returns the reserved{" "}
                    <M>unabyss-setup</M> descriptor plus one descriptor per
                    active skill (the prompt name is the skill slug).{" "}
                    <M>prompts/get</M> takes <M>{`{"name": "<slug>"}`}</M> and
                    returns <M>{`{"messages": [...]}`}</M>. Fetching a skill
                    prompt counts as a skill use, exactly like <M>get_skill</M>.
                  </p>
                </section>

                <section className="flex flex-col gap-4">
                  <SectionTitle id="first-connection-setup">
                    First-connection setup
                  </SectionTitle>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Unabyss runs a one-time, per-credential setup flow via{" "}
                    <M>unabyss_setup</M>. The counted steps are numbered{" "}
                    <strong>Step N of 3</strong> (apps → preferences → system
                    prompt). Skills are <strong>not</strong> part of the flow.
                  </p>
                  <DocsTable
                    headers={["Step", "Purpose"]}
                    rows={[
                      [
                        <span key="s">
                          <M>step1</M> (default)
                        </span>,
                        "Intro / offer setup",
                      ],
                      [
                        <M key="s">step2</M>,
                        <span key="p">
                          Connect apps (<M>list_integrations</M> /{" "}
                          <M>propose_connection</M>); requires <strong>≥2</strong>{" "}
                          connected integrations before later steps continue
                        </span>,
                      ],
                      [<M key="s">step3</M>, "What to save back to Unabyss"],
                      [
                        <M key="s">step4</M>,
                        <span key="p">
                          Client system prompt; pass <M>context_preference</M>{" "}
                          from step3 (<M>save_everything</M> |{" "}
                          <M>save_important</M> | <M>save_nothing</M>)
                        </span>,
                      ],
                      [
                        <M key="s">first-prompt</M>,
                        <span key="p">
                          Normal finish: pass <M>instructions_installed</M>{" "}
                          (bool); records setup <M>done</M>, unblocks tools,
                          offers a first action
                        </span>,
                      ],
                      [
                        <span key="s">
                          <M>completed</M> / <M>skipped</M>
                        </span>,
                        "Early exit only when the user explicitly chooses",
                      ],
                    ]}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    If the account already has ≥2 connected apps, <M>step2</M>{" "}
                    is skipped and the intro previews the short path. Steps past
                    apps redirect back to <M>step2</M> until that bar is met.
                    Off-flow skill steps (<M>step5</M>, <M>all-skills</M>,{" "}
                    <M>essential-skills</M>, <M>&lt;category&gt;-skills</M>) stay
                    callable on request but are not linked from the main path.
                  </p>

                  <SubTitle id="tool-gate-while-setup-is-unresolved">
                    Tool gate while setup is unresolved
                  </SubTitle>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    While a connection&apos;s setup is unresolved{" "}
                    <strong>and</strong> at least one active skill exists,{" "}
                    <M>tools/call</M> behaves differently:
                  </p>
                  <ul className="flex list-disc flex-col gap-2 pl-5 text-[15px] font-light leading-[1.7] text-white/60">
                    <li>
                      These tools always run: <M>unabyss_setup</M>,{" "}
                      <M>list_integrations</M>, <M>propose_connection</M>,{" "}
                      <M>list_skills</M>, <M>get_skill</M>,{" "}
                      <M>read_skill_file</M>.
                    </li>
                    <li>
                      Every other tool returns setup guidance as a{" "}
                      <strong>normal text result</strong> (HTTP 200) — not an
                      error — so clients don&apos;t mistake it for an auth failure.
                    </li>
                    <li>
                      <M>list_integrations</M> still answers during setup, but
                      with reduced <M>{`{name, slug}`}</M> rows plus agent-facing
                      notes.
                    </li>
                  </ul>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    The gate resolves when setup is recorded as <M>done</M> (
                    <M>first-prompt</M> or <M>completed</M>) or <M>skipped</M>.
                    Escape hatch: once setup has been started and the skip offer
                    has been shown, the next gated call records <M>skipped</M>{" "}
                    automatically and runs normally from then on. The gate never
                    re-arms for that credential.
                  </p>
                </section>

                <section className="flex flex-col gap-4">
                  <SectionTitle id="tools">Tools</SectionTitle>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Call <M>tools/list</M> for the live catalog including input
                    schemas.
                  </p>
                  <DocsTable
                    headers={["Tool", "Purpose", "Arguments"]}
                    rows={[
                      [
                        <M key="t">whoami</M>,
                        "Return the user's identity summary",
                        "none",
                      ],
                      [
                        <M key="t">query</M>,
                        "Natural-language lookup against stored context",
                        <span key="a">
                          <M>question</M> (string, max 8 KB)
                        </span>,
                      ],
                      [
                        <M key="t">agentic_query</M>,
                        <span key="p">
                          Deep multi-step synthesis; may return <M>pending</M> +{" "}
                          <M>query_id</M>
                        </span>,
                        <span key="a">
                          <M>question</M> (string, max 8 KB)
                        </span>,
                      ],
                      [
                        <M key="t">agentic_query_read</M>,
                        <span key="p">
                          Poll a pending <M>agentic_query</M> result
                        </span>,
                        <span key="a">
                          <M>query_id</M> (UUID string)
                        </span>,
                      ],
                      [
                        <M key="t">store</M>,
                        "Persist durable text to the knowledge base",
                        <span key="a">
                          <M>memory</M> (string, max 32 KB)
                        </span>,
                      ],
                      [
                        <M key="t">update_identity</M>,
                        "Replace the identity summary",
                        <span key="a">
                          <M>content</M> (string)
                        </span>,
                      ],
                      [
                        <M key="t">list_integrations</M>,
                        "List connected integrations and connectable catalog apps",
                        "none",
                      ],
                      [
                        <M key="t">propose_connection</M>,
                        "Mint a one-click connect URL for an app",
                        <span key="a">
                          <M>app</M> (slug), <M>agent_name</M> (
                          <M>[a-zA-Z0-9_-]</M>, max 64)
                        </span>,
                      ],
                      [
                        <M key="t">export_list</M>,
                        "List markdown exports",
                        <span key="a">
                          <M>search</M> (optional), <M>limit</M> (optional int)
                        </span>,
                      ],
                      [
                        <M key="t">export_read</M>,
                        "Read full markdown for a ready export",
                        <span key="a">
                          <M>export_id</M> (UUID string)
                        </span>,
                      ],
                      [
                        <M key="t">export_create</M>,
                        "Generate a new export in the background",
                        <span key="a">
                          <M>topic</M> <strong>or</strong> <M>preset_slug</M>{" "}
                          (not both)
                        </span>,
                      ],
                      [
                        <M key="t">export_create_from_text</M>,
                        "Save markdown as an export instantly",
                        <span key="a">
                          <M>content</M> (required, max 200 KB), <M>title</M>,{" "}
                          <M>topic_text</M>
                        </span>,
                      ],
                      [
                        <M key="t">export_refresh</M>,
                        "Regenerate an existing export",
                        <span key="a">
                          <M>export_id</M> (UUID string)
                        </span>,
                      ],
                      [
                        <M key="t">list_skills</M>,
                        "List available skills (playbooks)",
                        "none",
                      ],
                      [
                        <M key="t">get_skill</M>,
                        <span key="p">
                          Load a skill&apos;s markdown or <M>.skill</M> bundle link
                        </span>,
                        <span key="a">
                          <M>slug</M>, <M>type</M> (<M>markdown</M> |{" "}
                          <M>skill-file</M>)
                        </span>,
                      ],
                      [
                        <M key="t">read_skill_file</M>,
                        "Read a skill's supporting file",
                        <span key="a">
                          <M>slug</M>, <M>path</M>
                        </span>,
                      ],
                      [
                        <M key="t">unabyss_setup</M>,
                        "Drive the optional one-time setup flow",
                        <span key="a">
                          <M>step</M> (optional), <M>context_preference</M>{" "}
                          (optional, for <M>step4</M>),{" "}
                          <M>instructions_installed</M> (optional bool, for{" "}
                          <M>first-prompt</M>)
                        </span>,
                      ],
                    ]}
                  />

                  <SubTitle id="example-whoami">Example: whoami</SubTitle>
                  <CodeBlock
                    title="JSON"
                    code={`{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "whoami",
    "arguments": {}
  }
}`}
                  />

                  <SubTitle id="example-query">Example: query</SubTitle>
                  <CodeBlock
                    title="JSON"
                    code={`{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "query",
    "arguments": {
      "question": "What projects am I working on?"
    }
  }
}`}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    The answer is plain text in <M>content[0].text</M>.
                  </p>

                  <SubTitle id="example-store">Example: store</SubTitle>
                  <CodeBlock
                    title="JSON"
                    code={`{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "store",
    "arguments": {
      "memory": "Prefers OAuth over static API keys for third-party integrations."
    }
  }
}`}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Writes are asynchronous; the call acknowledges the enqueue as
                    a JSON string:
                  </p>
                  <CodeBlock
                    title="JSON"
                    code={`{
  "content": [{ "type": "text", "text": "{\\"status\\": \\"queued\\"}" }],
  "isError": false
}`}
                  />

                  <SubTitle id="example-list-integrations">
                    Example: list_integrations
                  </SubTitle>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    No arguments. Returns two arrays: <M>connected</M> (one row
                    per live connection with sync metadata) and <M>available</M>{" "}
                    (catalog apps the user has not connected yet).
                  </p>
                  <CodeBlock
                    title="JSON"
                    code={`{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "list_integrations",
    "arguments": {}
  }
}`}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Structured response:
                  </p>
                  <CodeBlock
                    title="JSON"
                    code={`{
  "content": [
    {
      "type": "text",
      "text": "{\\"connected\\":[...],\\"available\\":[...]}"
    }
  ],
  "isError": false,
  "structuredContent": {
    "connected": [
      {
        "slug": "github",
        "display_name": "GitHub",
        "icon_url": null,
        "kinds": ["github_repo"],
        "items_count": 12,
        "last_sync_date": "2026-06-01T10:00:00Z",
        "kind": "oauth",
        "uid": "42",
        "id": null,
        "pipedream_account_id": null
      }
    ],
    "available": [
      {
        "slug": "gmail",
        "display_name": "Gmail",
        "icon_url": null,
        "connect_mechanism": "pipedream",
        "available": true,
        "unavailable_message": null
      }
    ]
  }
}`}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Use <M>available[].slug</M> as the <M>app</M> argument to{" "}
                    <M>propose_connection</M>. There is no <M>include_all</M>{" "}
                    parameter — both lists are always returned.
                  </p>

                  <SubTitle id="example-propose-connection">
                    Example: propose_connection
                  </SubTitle>
                  <CodeBlock
                    title="JSON"
                    code={`{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "propose_connection",
    "arguments": { "app": "gmail", "agent_name": "my-client" }
  }
}`}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Returns a discriminated payload as a JSON string. Business
                    outcomes are successful results, not errors:
                  </p>
                  <CodeBlock
                    title="JSON"
                    code={`{
  "status": "ok",
  "reason": null,
  "connection": {
    "app": "gmail",
    "display_name": "Gmail",
    "icon_url": null,
    "connect_url": "https://api.unabyss.com/api/integrations/mcp-connect/<token>/",
    "expires_at": "2026-07-27T12:00:00Z",
    "intro": ""
  }
}`}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    <M>status</M> is one of <M>ok</M>, <M>already_connected</M>,{" "}
                    <M>unknown_app</M>, <M>not_connectable</M>, or{" "}
                    <M>temporarily_unavailable</M>. On any non-<M>ok</M> status,{" "}
                    <M>connection</M> is <M>null</M> and <M>reason</M> explains
                    why.
                  </p>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    <M>connect_url</M> is always an Unabyss link — never a
                    provider or vendor URL. For one-click apps it is a redirect
                    endpoint that resolves the real destination (the provider&apos;s
                    OAuth screen, or a Pipedream connect link minted at that
                    moment) when the user opens it; apps that must be set up in
                    the UI get a <M>/connections</M> deep link instead. Give it
                    to the user promptly: when <M>expires_at</M> is set it is the
                    expiry of that link itself, so a link handed over much later
                    may already be dead.
                  </p>

                  <SubTitle id="exports">Exports</SubTitle>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    <M>export_list</M> returns{" "}
                    <M>{`{"exports": [{id, title, topic_text, status, kb_stale}]}`}</M>{" "}
                    in <M>structuredContent</M> (default page size 5; raise it
                    with <M>limit</M>, narrow it with <M>search</M>).
                  </p>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    <M>export_read</M> returns{" "}
                    <M>{`{id, title, topic_text, status, markdown}`}</M> as a JSON
                    string, and fails with <M>resource_not_ready</M> unless the
                    export status is <M>ready</M>.
                  </p>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    <M>export_create</M> and <M>export_refresh</M> enqueue
                    multi-minute background generation and return a short
                    confirmation with the export ID; call them only on explicit
                    user request. Refreshing an export that is already generating
                    returns <M>conflict</M>. <M>export_create_from_text</M> is
                    instant and free — it stores the markdown you pass in.
                  </p>

                  <SubTitle id="skills">Skills</SubTitle>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    <M>list_skills</M> returns{" "}
                    <M>{`{"skills": [{slug, name, description}]}`}</M> in{" "}
                    <M>structuredContent</M>. <M>get_skill</M> returns the
                    playbook markdown plus its supporting-file manifest, or —
                    with <M>{`type: "skill-file"`}</M> — a link to the packaged{" "}
                    <M>.skill</M> bundle for clients that install skills by file
                    upload. <M>read_skill_file</M> fetches one supporting file by{" "}
                    <M>slug</M> + <M>path</M>. Unknown slugs and paths return{" "}
                    <M>resource_not_found</M>.
                  </p>

                  <SubTitle id="agentic-query-polling">
                    Agentic query polling
                  </SubTitle>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    <M>agentic_query</M> waits a few seconds for an inline
                    answer. If the job is still running it returns a pending
                    handle:
                  </p>
                  <CodeBlock
                    title="JSON"
                    code={`{
  "status": "pending",
  "query_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "poll_after_seconds": 5
}`}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Poll <M>agentic_query_read</M> with the same <M>query_id</M>{" "}
                    until <M>status</M> is <M>completed</M> or <M>failed</M>.
                    Both tools serialize this payload as a JSON string in{" "}
                    <M>content[0].text</M>.
                  </p>
                </section>

                <section className="flex flex-col gap-4">
                  <SectionTitle id="error-codes">Error codes</SectionTitle>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Machine-readable codes appear in <M>error.data.code</M>:
                  </p>
                  <DocsTable
                    headers={["Code", "HTTP", "Meaning"]}
                    rows={[
                      [
                        <M key="c">invalid_request</M>,
                        "400",
                        "Malformed JSON-RPC body or unknown tool",
                      ],
                      [
                        <M key="c">unauthorized</M>,
                        "401",
                        <span key="m">
                          Missing, invalid, revoked, or expired bearer; see{" "}
                          <M>data.auth_action</M> (<M>refresh</M> or{" "}
                          <M>reauthorize</M>)
                        </span>,
                      ],
                      [
                        <M key="c">query_input_invalid</M>,
                        "400",
                        "Tool argument validation failed",
                      ],
                      [
                        <M key="c">store_payload_rejected</M>,
                        "400",
                        "Store payload empty, too large, or invalid",
                      ],
                      [
                        <M key="c">quota_exceeded</M>,
                        "402",
                        <span key="m">
                          Insufficient Unabyss credits; <M>data.topup_url</M>{" "}
                          points at billing
                        </span>,
                      ],
                      [
                        <M key="c">setup_required</M>,
                        "403",
                        "Account storage mode does not allow MCP (cloud storage required); first-connection setup uses a soft text gate, not this code",
                      ],
                      [
                        <M key="c">resource_not_found</M>,
                        "404",
                        "Export, query, skill, or skill file not found",
                      ],
                      [
                        <M key="c">resource_not_ready</M>,
                        "409",
                        "Export not ready for read",
                      ],
                      [
                        <M key="c">conflict</M>,
                        "409",
                        "Operation already in flight (e.g. export regenerating)",
                      ],
                      [
                        <M key="c">rate_limit_exceeded</M>,
                        "429",
                        <span key="m">
                          Rate limit hit; retry after <M>Retry-After</M>
                        </span>,
                      ],
                      [
                        <M key="c">memory_persist_failed</M>,
                        "500",
                        "Write accepted but not persisted",
                      ],
                      [
                        <M key="c">internal_error</M>,
                        "500",
                        "Unexpected server error",
                      ],
                      [
                        <M key="c">tier_limit_exceeded</M>,
                        "500",
                        <span key="m">
                          Plan limit reached; <M>data.limit_kind</M> and{" "}
                          <M>data.upgrade_url</M> explain which
                        </span>,
                      ],
                      [
                        <M key="c">memory_unavailable</M>,
                        "503",
                        "Memory backend temporarily unavailable",
                      ],
                      [
                        <M key="c">service_temporarily_unavailable</M>,
                        "503",
                        "Dependency degraded; retry after the hint",
                      ],
                    ]}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Rate-limited and temporarily-unavailable responses also set
                    the <M>Retry-After</M> header. If the server is disabled for
                    maintenance, requests return a bodyless <M>503</M> with{" "}
                    <M>Retry-After: 60</M>.
                  </p>
                </section>

                <section className="flex flex-col gap-4">
                  <SectionTitle id="rate-limits-and-credits">
                    Rate limits and credits
                  </SectionTitle>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    Default per-credential caps (per token unless noted):
                  </p>
                  <DocsTable
                    headers={["Scope", "Limit"]}
                    rows={[
                      [
                        <span key="s">
                          <M>query</M>, <M>whoami</M>, and other read tools
                        </span>,
                        "1000 / hour",
                      ],
                      [<M key="s">agentic_query</M>, "60 / hour"],
                      [<M key="s">store</M>, "25 / hour, and 50 / day per account"],
                      [
                        <span key="s">
                          <M>export_create</M>, <M>export_create_from_text</M>,{" "}
                          <M>export_refresh</M>
                        </span>,
                        "10 / hour",
                      ],
                    ]}
                  />
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    <M>query</M>, <M>store</M>, and <M>agentic_query</M> are
                    billed against Unabyss credits, with <M>agentic_query</M>{" "}
                    costing several times a plain query. <M>whoami</M>,{" "}
                    <M>update_identity</M>, the integration tools, the export
                    tools, and the skill tools are free. Plans also cap total MCP
                    calls and deep queries — those rejections come back as{" "}
                    <M>tier_limit_exceeded</M> rather than{" "}
                    <M>rate_limit_exceeded</M>.
                  </p>
                </section>

                <section className="flex flex-col gap-4">
                  <SectionTitle id="support">Support</SectionTitle>
                  <ul className="flex list-disc flex-col gap-2 pl-5 text-[15px] font-light leading-[1.7] text-white/60">
                    <li>
                      Product and token management:{" "}
                      <Link href="https://app.unabyss.com/mcp">
                        app.unabyss.com/mcp
                      </Link>
                    </li>
                    <li>
                      General inquiries:{" "}
                      <Link href="https://unabyss.com">unabyss.com</Link>
                    </li>
                    <li>
                      MCP protocol specification:{" "}
                      <Link href="https://modelcontextprotocol.io">
                        modelcontextprotocol.io
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
