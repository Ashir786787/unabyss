export default function SecuritySection() {
  return (
    <div className="relative z-10 mx-auto max-w-[1100px] px-6 pb-24 pt-28 sm:px-10 sm:pt-32 lg:px-12">
      <div className="legal-body mx-auto max-w-3xl">
        <h1>Security &amp; Trust</h1>
        <p>
          Unabyss is a context layer for AI. It pulls together who you are — your
          work, your projects, your history across the tools you already use —
          and makes that context available to the AI tools you choose. That only
          works if you trust us with the raw material of your professional life.
          So we treat security as the product, not a feature bolted onto it.
        </p>
        <p>
          This page explains, plainly, how we protect your data, what we can and
          can&apos;t do with it, and where we are on the formal compliance track.
        </p>
        <div className="my-10 flex items-center gap-5">
          <div className="inline-flex w-fit items-center gap-4 rounded-[14px] border border-dashed border-white/20 px-3 py-2">
            <img
              src="/images/soc-type-2-small.png"
              alt="SOC 2 Type II"
              className="h-20 w-auto"
            />
            <img
              src="/images/gdpr.svg"
              alt="GDPR aligned"
              className="h-20 w-auto"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[14px] font-light text-white/80">
              SOC 2 Type II
              <span className="italic text-white/50">(in progress)</span>
            </span>
            <span className="text-[14px] font-light text-white/80">
              GDPR aligned
            </span>
          </div>
        </div>
        <hr />
        <h2>Your data stays yours</h2>
        <p>Three principles govern everything we build.</p>
        <p>
          <strong>Encrypted, in transit and at rest.</strong>
          All data moving between you, our systems, and your connected apps is
          encrypted over TLS. Data at rest lives in secure cloud storage with
          encryption applied. No one browses your data — only your account can
          read what belongs to you.
        </p>
        <p>
          <strong>Read-only by design.</strong>
          When you connect an app, Unabyss only imports. It cannot post, reply,
          edit, delete, or take any other action inside your connected tools. The
          permission model is deliberately narrow: we ask for the least access
          needed to read your context, and nothing more. This isn&apos;t a policy we
          promise to honor — it&apos;s the scope of access we request in the first
          place.
        </p>
        <p>
          <strong>Yours to delete, any time.</strong>
          You can disconnect any app whenever you want. When you do, we stop
          importing from it. And you can permanently wipe everything Unabyss has
          imported. Your context is yours to keep or to erase, on your terms.
        </p>
        <hr />
        <h2>We never train on your data</h2>
        <p>Your context is never used to train models. Full stop.</p>
        <p>
          We use large language models to distill and organize your context, and
          we route your data to the AI tools you connect. But your data is input
          to those systems for your benefit — it is never harvested as training
          data.
        </p>
        <hr />
        <h2>How connections work</h2>
        <p>
          Every integration is initiated and authorized by you. Nothing connects
          on its own.
        </p>
        <ul>
          <li>
            Connections are established through<strong>OAuth</strong>
            where the provider supports it, or through<strong>API keys</strong>
            where it doesn&apos;t. We never see or store your passwords.
          </li>
          <li>
            We request<strong>read-only scopes</strong>. Unabyss imports context;
            it does not act on your behalf inside connected apps.
          </li>
          <li>
            <strong>Disconnecting stops future imports immediately.</strong>
            Previously imported context remains until you choose to delete it —
            so disconnecting never silently erases what you&apos;ve built, and
            deleting is always in your hands.
          </li>
          <li>
            You decide<strong>which context is shared with which AI tool</strong>.
            Sharing is granular and always under your direction.
          </li>
        </ul>
        <hr />
        <h2>The context boundary</h2>
        <p>
          Unabyss serves your context to external AI tools through
          <strong>MCP</strong>(Model Context Protocol) — a standard, streamable
          HTTP endpoint that clients like Claude, GPT, Cursor, and others connect
          to at your instruction.
        </p>
        <p>Two things worth being clear about:</p>
        <ol>
          <li>
            <strong>Nothing leaves without your say-so.</strong>
            Context is distributed only when you connect a tool and direct it to
            pull. You control the connection and the scope.
          </li>
          <li>
            <strong>Once context reaches a third-party tool, that tool&apos;s own
              terms govern it.</strong>
            We secure your data up to and through the moment it&apos;s delivered to a
            tool you&apos;ve chosen. What that tool then does with it is governed by
            its policies — so we encourage reviewing the terms of any AI client
            you connect. This is the same trust boundary that applies to any data
            you paste into an AI tool today; Unabyss just makes the flow explicit
            and controllable.
          </li>
        </ol>
        <hr />
        <h2>Infrastructure</h2>
        <ul>
          <li>
            <strong>Transport security:</strong>
            TLS on all connections.
          </li>
          <li>
            <strong>Encryption at rest:</strong>
            applied to stored context in our cloud storage layer.
          </li>
          <li>
            <strong>Backups:</strong>
            regular database backups to protect against data loss.
          </li>
          <li>
            <strong>Hosting:</strong>
            our application and landing surfaces run on Cloudflare&apos;s edge
            network; our API runs on hardened, access-controlled servers. File
            storage sits behind a proxy layer so raw storage is never directly
            exposed.
          </li>
          <li>
            <strong>Access control:</strong>
            internal access to production systems is restricted on a
            need-to-know basis.
          </li>
        </ul>
        <hr />
        <h2>Compliance</h2>
        <p>
          <strong>SOC 2 Type II — in progress (audit-ready).</strong>
          We have implemented the controls, policies, and monitoring required for
          SOC 2 Type II and are engaged in the formal audit process.
        </p>
        <p>
          <strong>GDPR — aligned.</strong>
          We follow GDPR principles for handling personal data: lawful basis for
          processing, data minimization, purpose limitation, and honoring your
          rights over your own data — including access, portability, and erasure.
          Personal data is retained only as long as necessary for the purpose it
          was collected, unless a longer period is required by law.
        </p>
        <p>
          If you&apos;re conducting a security review and need documentation beyond
          what&apos;s on this page, reach out — we&apos;ll share what we have and keep you
          posted as our SOC 2 report is finalized.
        </p>
        <hr />
        <h2>Data retention &amp; deletion</h2>
        <p>
          We retain your context only as long as it&apos;s serving you. You can delete
          individual imported data or wipe everything Unabyss holds at any time.
          If you close your account, your context and generated artifacts are
          permanently deleted after a short retention window.
        </p>
        <p>
          We don&apos;t guarantee to be your system of record — we encourage you to
          keep your own copies of anything critical. Unabyss is a layer over your
          data, not a replacement for the sources it draws from.
        </p>
        <hr />
        <h2>Reporting a vulnerability</h2>
        <p>
          If you believe you&apos;ve found a security issue, we want to hear about it.
          Email<strong>
            <a href="mailto:security@unabyss.com">security@unabyss.com</a>
          </strong>
          with the details and we&apos;ll respond quickly. We&apos;re grateful to
          researchers who help us keep Unabyss safe and will work with you in
          good faith.
        </p>
        <hr />
        <p>
          <em>
            Security is a moving target, and this page reflects where we are
            today. As our controls mature and our SOC 2 Type II audit completes,
            we&apos;ll update it here. Questions? Reach us at
            <a href="mailto:security@unabyss.com">security@unabyss.com</a>.
          </em>
        </p>
      </div>
    </div>
  );
}
