import { navigationItems } from "@/data/navigation";
import PageContainer from "./PageContainer";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#0d0d0d]/80 backdrop-blur-xl">
      <PageContainer className="flex h-[73px] items-center justify-between">
        <a
          href="#top"
          aria-label="Unabyss home"
          className="flex items-center gap-2"
        >
          <span className="flex size-7 items-center justify-center rounded-lg bg-[#ff7657] text-xs font-black text-white">
            U
          </span>

          <span className="text-sm font-semibold tracking-[-0.02em] text-white">
            unabyss
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/55 transition-colors hover:bg-white/[0.05] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="#login"
            className="rounded-full px-4 py-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            Log in
          </a>

          <a
            href="#pricing"
            className="inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
          >
            Get started
          </a>
        </div>

        <MobileMenu />
      </PageContainer>
    </header>
  );
}
