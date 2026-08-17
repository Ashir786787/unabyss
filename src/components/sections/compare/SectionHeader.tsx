import Reveal from "@/components/ui/Reveal";

export default function SectionHeader({
  label,
  title,
  paragraph,
}: {
  label: string;
  title: string;
  paragraph?: string;
}) {
  return (
    <Reveal className="mb-12 flex flex-col items-center text-center">
      <span className="v2-print-label">{label}</span>
      <h2
        className="v2-print-display mt-5 max-w-[24ch] text-white"
        style={{ fontSize: "clamp(26px, 3.2vw, 40px)", lineHeight: 1.2 }}
      >
        {title}
      </h2>
      {paragraph ? (
        <p className="mt-5 max-w-[58ch] text-[15px] font-light leading-[1.7] text-white/60">
          {paragraph}
        </p>
      ) : null}
    </Reveal>
  );
}
