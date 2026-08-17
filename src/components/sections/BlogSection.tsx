import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { blogPosts } from "@/data/blog";

export default function BlogSection({ limit }: { limit?: number }) {
  const posts = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <section id="blog" className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-12">
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal className="mb-14 flex flex-col items-center gap-3 text-center">
          <span className="v2-print-label">Blog</span>
          <h2
            className="v2-print-display max-w-[24ch] text-white"
            style={{ fontSize: "clamp(34px, 4.5vw, 56px)", lineHeight: 1.2 }}
          >
            From the Unabyss Vault
          </h2>
          <p className="max-w-[52ch] text-[14.5px] font-light leading-[1.75] text-white/65">
            Guides on personal context for AI - what it is, how to build it,
            and why it matters.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal
              key={post.title}
              delay={120 + index * 90}
              className="v2-shine v2-shine--light v2-glass-panel group relative flex flex-col overflow-hidden rounded-[16px] no-underline transition-colors"
            >
              <a href={post.href} className="flex flex-1 flex-col no-underline">
                <div className="relative aspect-[64/27] overflow-hidden">
                  <img
                    src={post.cover}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="blog-cover-image transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span className="absolute right-2.5 top-2.5 z-10 flex items-center gap-1 text-[12px] font-medium text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.65)] transition-colors group-hover:text-white">
                    Read article
                    <ArrowUpRight
                      strokeWidth={1.8}
                      className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-[18px] font-medium leading-tight text-white group-hover:text-white/95">
                    {post.title}
                  </h3>
                  <p className="mb-6 flex-1 text-[14px] font-light leading-[1.6] text-white/55">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3 text-[12px] text-white/40">
                    <div className="flex min-w-0 items-center gap-2">
                      <img
                        src={post.avatar}
                        alt=""
                        aria-hidden="true"
                        className="size-6 shrink-0 rounded-full object-cover"
                      />
                      <span className="truncate font-medium text-white/55">
                        {post.author}
                      </span>
                    </div>
                    <p className="shrink-0 text-right">
                      {post.date} <span className="mx-2">&middot;</span>{" "}
                      {post.readTime}
                    </p>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={360} className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-white/70 no-underline transition-colors hover:text-white"
          >
            View all articles
            <ArrowUpRight
              strokeWidth={1.8}
              className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
