import MobileMenu from "./MobileMenu";
import PageContainer from "./PageContainer";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0c0c0c]/90 backdrop-blur-md">
      <PageContainer className="flex h-[58px] items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-[6px] bg-[#ff6f52] text-[9px] font-bold text-white">
            U
          </span>

          <span className="text-[12px] font-semibold tracking-[-0.02em] text-white">
            unabyss
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          <a
            href="#use-cases"
            className="text-[11px] text-white/45 transition-colors hover:text-white"
          >
            Use Cases
          </a>

          <a
            href="#integrations"
            className="text-[11px] text-white/45 transition-colors hover:text-white"
          >
            Integrations
          </a>

          <a
            href="#pricing"
            className="text-[11px] text-white/45 transition-colors hover:text-white"
          >
            Pricing
          </a>

          <a
            href="#blog"
            className="text-[11px] text-white/45 transition-colors hover:text-white"
          >
            Blog
          </a>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="https://app.unabyss.com"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] font-medium text-white/65 transition-colors hover:text-white"
          >
            Log in
          </a>

          <a
            href="https://app.unabyss.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 items-center rounded-full bg-white px-4 text-[11px] font-medium text-black"
          >
            Start free
          </a>
        </div>

        <MobileMenu />
      </PageContainer>
    </header>
  );
}
