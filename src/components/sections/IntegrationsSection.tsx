import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { apps, mcpClients, type Integration } from "@/data/integrations";

function IntegrationTile({ item }: { item: Integration }) {
  return (
    <div
      className={`v2-shine v2-glass-panel group flex flex-col items-center justify-center gap-4 rounded-[18px] px-4 py-8 ${
        item.soon ? "opacity-60" : ""
      }`}
    >
      <div className="flex h-11 items-center justify-center">
        <img
          src={item.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className={`h-9 w-auto ${
            item.soon
              ? "opacity-60 grayscale"
              : "transition-transform duration-300 group-hover:scale-105"
          }`}
        />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[14px] font-medium text-white/85">{item.name}</span>
        {item.soon ? (
          <span className="v2-mono rounded-full border border-white/15 bg-white/[0.05] px-2 py-0.5 text-[9px] uppercase tracking-[0.16em] text-white/50">
            Soon
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default function IntegrationsSection() {
  return (
    <>
      <section className="relative px-6 pb-10 pt-28 sm:px-10 sm:pt-32 lg:px-12">
        <div className="relative mx-auto max-w-[860px]">
          <Reveal className="flex flex-col items-center text-center">
            <span className="v2-print-label">Integrations</span>
            <h1
              className="v2-print-display mt-5 max-w-[16ch] text-white"
              style={{ fontSize: "clamp(38px, 5.4vw, 66px)", lineHeight: 1.05 }}
            >
              Everything Unabyss connects to
            </h1>
            <p className="mt-6 max-w-[54ch] text-[17px] font-light leading-[1.7] text-white/65 sm:text-[18px]">
              Plug your context into the agents you work in, and pull it from
              the apps you already use. New integrations land regularly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-14 sm:px-10 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <Reveal className="mb-6 flex flex-col gap-1">
            <h2
              className="v2-print-display text-white"
              style={{ fontSize: "clamp(22px, 2.6vw, 30px)", lineHeight: 1.3 }}
            >
              MCP clients
            </h2>
            <p className="text-[15px] font-light leading-[1.7] text-white/55">
              Agents and LLMs that connect to Unabyss over MCP and read your
              context on demand.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-7">
            {mcpClients.map((client) => (
              <IntegrationTile key={client.name} item={client} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-14 sm:px-10 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <Reveal className="mb-6 flex flex-col gap-1">
            <h2
              className="v2-print-display text-white"
              style={{ fontSize: "clamp(22px, 2.6vw, 30px)", lineHeight: 1.3 }}
            >
              Apps
            </h2>
            <p className="text-[15px] font-light leading-[1.7] text-white/55">
              Data sources you connect into Unabyss so your context stays
              current automatically.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
            {apps.map((app) => (
              <IntegrationTile key={app.name} item={app} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-24 pt-14 sm:px-10 sm:pb-28 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <Reveal>
            <div className="mt-20 flex flex-col items-center gap-4 text-center">
              <p className="text-[15px] font-light text-white/60">
                Don&apos;t see what you need? New integrations ship
                continuously.
              </p>
              <a
                href="https://app.unabyss.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-[14px] font-medium text-black no-underline transition-all hover:bg-white/90"
              >
                Try now
                <ArrowUpRight
                  strokeWidth={1.8}
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
