import LoomPlayer from "@/components/visuals/LoomPlayer";
import Reveal from "@/components/ui/Reveal";
import { useCases } from "@/data/use-cases";
import { demos } from "@/data/demos";
import { ArrowUpRight } from "lucide-react";

const loomDemo = demos.find((demo) => demo.id === "investor-update") ?? demos[0];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-12">
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal className="mb-12 flex flex-col items-center text-center">
          <span className="v2-print-label">Use cases</span>
          <h2
            className="v2-print-display mt-5 text-white"
            style={{ fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.2 }}
          >
            Built for how you work
          </h2>
        </Reveal>

        <Reveal
          delay={120}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5"
        >
          <div className="col-span-1 flex flex-col sm:col-span-2 lg:col-span-7 lg:row-span-2">
            <LoomPlayer demo={loomDemo} />
          </div>

          {useCases.map((useCase) => (
            <a
              key={useCase.id}
              href={useCase.href}
              className={`v2-shine v2-shine--light v2-card-glass group relative col-span-1 flex min-h-[136px] flex-col justify-between gap-6 rounded-[20px] p-6 no-underline ${useCase.wide ? "lg:col-span-6" : "lg:col-span-5"}`}
            >
              <ArrowUpRight
                strokeWidth={1.8}
                className="absolute right-5 top-5 size-4 text-white/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/80"
              />

              <div className="flex flex-col gap-2 pr-6">
                <span className="text-[19px] font-medium text-white/90 transition-colors group-hover:text-white sm:text-[21px]">
                  {useCase.label}
                </span>
                <span className="text-[13.5px] font-light leading-[1.6] text-white/55">
                  {useCase.description}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {useCase.tools.map((tool) => {
                  const toolName = tool.split("/").pop()?.replace(/\.\w+$/, "") ?? tool;
                  return (
                    <span
                      key={tool}
                      title={toolName}
                      className="flex size-8 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.05] transition-colors group-hover:border-white/20"
                    >
                      <img src={tool} alt="" className="size-[18px] object-contain" loading="lazy" />
                    </span>
                  );
                })}
              </div>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
