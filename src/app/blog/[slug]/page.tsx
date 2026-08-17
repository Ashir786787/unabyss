import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { blogPostDetail } from "@/data/blog-detail";
import { blogPosts, featuredPost, type BlogPost } from "@/data/blog";

const allPosts = [featuredPost, ...blogPosts];

function getPost(slug: string): BlogPost | undefined {
  return allPosts.find((post) => post.href === `/blog/${slug}`);
}

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.href.replace("/blog/", ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return {};
  }
  return {
    title: `${post.title} | Unabyss`,
    description: post.excerpt,
  };
}

function RelatedCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={post.href}
      className="v2-shine v2-shine--light v2-glass-panel group relative flex flex-col overflow-hidden rounded-[16px] no-underline transition-colors"
    >
      <div className="relative aspect-[64/27] overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          loading="lazy"
          decoding="async"
          className="blog-cover-image transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[16px] font-medium leading-tight text-white group-hover:text-white/95">
          {post.title}
        </h3>
        <div className="mt-4 flex items-center justify-between gap-3 text-[12px] text-white/40">
          <span className="truncate font-medium text-white/55">{post.author}</span>
          <p className="shrink-0">
            {post.date} <span className="mx-2">&middot;</span> {post.readTime}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    notFound();
  }
  const detail = blogPostDetail[slug];
  const related = allPosts.filter((p) => p.href !== post.href).slice(0, 3);

  return (
    <>
      <section className="relative isolate flex flex-col overflow-hidden px-6 pb-10 pt-32 sm:px-10 sm:pt-40 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 50% 30%, rgba(255,255,255,0.06), transparent 70%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-[760px]">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-white/60 no-underline transition-colors hover:text-white"
          >
            <ArrowLeft
              strokeWidth={1.8}
              className="size-3.5 transition-transform group-hover:-translate-x-0.5"
            />
            All articles
          </Link>

          <div className="mt-8 flex flex-col gap-4">
            <span className="v2-print-label">Blog</span>
            <h1
              className="v2-print-display max-w-[22ch] text-white"
              style={{ fontSize: "clamp(30px, 4.4vw, 52px)", lineHeight: 1.1 }}
            >
              {post.title}
            </h1>
            <p className="max-w-[60ch] text-[15.5px] font-light leading-[1.75] text-white/65">
              {post.excerpt}
            </p>

            <div className="mt-2 flex items-center gap-3 text-[13px] text-white/45">
              <img
                src={post.avatar}
                alt={post.author}
                className="size-9 rounded-full object-cover"
              />
              <div className="flex flex-col gap-0.5">
                <span className="font-medium text-white/80">{post.author}</span>
                <span>
                  {post.date} <span className="mx-1.5">&middot;</span> {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
        <div className="relative mx-auto max-w-[760px]">
          <div className="overflow-hidden rounded-[22px] border border-white/[0.07]">
            <div className="aspect-[64/27] overflow-hidden">
              <img
                src={post.cover}
                alt={post.title}
                className="blog-cover-image h-full w-full object-cover"
              />
            </div>
          </div>

          {detail ? (
            <>
              <div className="mt-10 rounded-[20px] border border-amber-200/20 bg-amber-200/[0.05] p-6 sm:p-7">
                <span className="v2-mono text-[10px] uppercase tracking-[0.2em] text-amber-200/70">
                  TL;DR
                </span>
                <p className="mt-3 text-[15px] font-light leading-[1.75] text-white/80">
                  {detail.tldr}
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-9">
                {detail.sections.map((section) => (
                  <div key={section.heading ?? section.paragraphs[0]?.slice(0, 24)}>
                    {section.heading ? (
                      <h2 className="text-[20px] font-medium leading-snug text-white sm:text-[22px]">
                        {section.heading}
                      </h2>
                    ) : null}
                    <div className="mt-3 flex flex-col gap-4">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 24)}
                          className="text-[15px] font-light leading-[1.8] text-white/65"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-col items-center gap-4 rounded-[20px] border border-white/[0.07] bg-white/[0.02] p-8 text-center">
                <p className="max-w-[48ch] text-[14.5px] font-light leading-[1.7] text-white/60">
                  Want to try it? Connect your sources and see every AI tool
                  start with the full picture.
                </p>
                <a
                  href="https://app.unabyss.com/register"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-11 items-center gap-1.5 rounded-full bg-white px-6 text-[13.5px] font-medium text-black transition-all hover:bg-white/90"
                >
                  Try Unabyss
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </>
          ) : null}
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <h2 className="mb-8 text-[24px] font-medium text-white">Related articles</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {related.map((item) => (
              <RelatedCard key={item.href} post={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
