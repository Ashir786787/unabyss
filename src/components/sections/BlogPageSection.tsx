"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import {
  blogPosts,
  featuredPost,
  knowledgePosts,
  productPosts,
  type BlogPost,
} from "@/data/blog";

type Tag = "all" | "product" | "knowledge";

const FIRST_PAGE_COUNT = 4;
const PAGE_SIZE = 6;

function matchesQuery(post: BlogPost, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    post.title.toLowerCase().includes(q) ||
    post.excerpt.toLowerCase().includes(q) ||
    post.author.toLowerCase().includes(q)
  );
}

function paginationItems(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const set = new Set<number>();
  set.add(1);
  if (current <= 3) {
    set.add(2);
    set.add(3);
    set.add(4);
  } else if (current >= total - 2) {
    set.add(total - 3);
    set.add(total - 2);
    set.add(total - 1);
  } else {
    set.add(current - 1);
    set.add(current);
    set.add(current + 1);
  }
  set.add(total);
  const sorted = [...set].sort((a, b) => a - b);
  const items: (number | "ellipsis")[] = [];
  let prev = 0;
  for (const p of sorted) {
    if (p - prev > 1) items.push("ellipsis");
    items.push(p);
    prev = p;
  }
  return items;
}

function pageHref(tag: Tag, page: number): string {
  if (tag === "knowledge") {
    return page === 1 ? "/blog?tag=knowledge" : `/blog?page=${page}&tag=knowledge`;
  }
  return page === 1 ? "/blog" : `/blog?page=${page}`;
}

export default function BlogPageSection({
  tag,
  page,
}: {
  tag: Tag;
  page: number;
}) {
  const [query, setQuery] = useState("");

  const isAll = tag === "all";
  const base = isAll ? blogPosts : tag === "product" ? productPosts : knowledgePosts;

  const showFeatured = (isAll && page === 1) || tag === "product";

  const totalPages = isAll
    ? 1 + Math.ceil((blogPosts.length - FIRST_PAGE_COUNT) / PAGE_SIZE)
    : tag === "product"
      ? 1
      : Math.ceil(knowledgePosts.length / PAGE_SIZE);

  const safePage = Math.min(page, totalPages);
  const offset = isAll
    ? safePage === 1
      ? 0
      : FIRST_PAGE_COUNT + (safePage - 2) * PAGE_SIZE
    : (safePage - 1) * PAGE_SIZE;
  const pageSize =
    safePage === 1 && (isAll || tag === "product")
      ? tag === "product"
        ? base.length
        : FIRST_PAGE_COUNT
      : PAGE_SIZE;
  const pagePosts = base.slice(offset, offset + pageSize);

  const visible = useMemo(
    () => pagePosts.filter((post) => matchesQuery(post, query)),
    [pagePosts, query],
  );
  const featuredVisible =
    showFeatured && matchesQuery(featuredPost, query);

  const items = paginationItems(safePage, totalPages);

  return (
    <div className="relative z-10 mx-auto max-w-[1100px] px-6 pb-24 pt-28 sm:px-10 sm:pt-32 lg:px-12">
      <div className="mb-16 max-w-3xl">
        <p className="v2-mono mb-3 text-[10px] uppercase tracking-[0.22em] text-white/40">
          Blog
        </p>
        <h1 className="v2-print-display text-[clamp(28px,4vw,42px)] font-medium leading-tight text-white">
          The Unabyss Vault
        </h1>
        <p className="mt-6 text-[15px] font-light leading-[1.75] text-white/65">
          Everything we know about personal context for AI - what it is, how it
          works, how to build it, and why the difference between context and
          memory matters more than it sounds. Written for people who use AI
          tools seriously and want to get more out of them.
        </p>
        <p className="mt-4 text-[14px] font-light leading-[1.7] text-white/45">
          <Link
            href="/changelog"
            className="text-white/55 no-underline transition-colors hover:text-white"
          >
            Product changelog →
          </Link>
        </p>
      </div>

      <nav
        className="mb-10 flex flex-wrap items-center gap-2"
        aria-label="Filter articles by topic"
      >
        <Link
          href="/blog"
          className={`v2-mono rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.14em] no-underline transition-colors ${
            tag === "all"
              ? "border-white/20 bg-white/10 text-white"
              : "border-white/10 bg-transparent text-white/50 hover:border-white/20 hover:text-white/80"
          }`}
          aria-current={tag === "all" ? "page" : undefined}
        >
          All
        </Link>
        <Link
          href="/blog?tag=product"
          className={`v2-mono rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.14em] no-underline transition-colors ${
            tag === "product"
              ? "border-white/20 bg-white/10 text-white"
              : "border-white/10 bg-transparent text-white/50 hover:border-white/20 hover:text-white/80"
          }`}
          aria-current={tag === "product" ? "page" : undefined}
        >
          Product
        </Link>
        <Link
          href="/blog?tag=knowledge"
          className={`v2-mono rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.14em] no-underline transition-colors ${
            tag === "knowledge"
              ? "border-white/20 bg-white/10 text-white"
              : "border-white/10 bg-transparent text-white/50 hover:border-white/20 hover:text-white/80"
          }`}
          aria-current={tag === "knowledge" ? "page" : undefined}
        >
          Knowledge
        </Link>
        <div className="relative ml-auto mt-3 w-full sm:mt-0 sm:w-auto">
          <Search
            strokeWidth={1.8}
            className="pointer-events-none absolute left-3.5 top-1/2 size-3.5 -translate-y-1/2 text-white/35"
          />
          <input
            type="search"
            placeholder="Search articles"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="blog-search-input v2-mono w-full rounded-full border border-white/10 bg-transparent py-2 pl-9 pr-4 text-[11px] uppercase tracking-[0.14em] text-white placeholder:text-white/35 transition-colors focus:border-white/25 focus:outline-none sm:w-[300px]"
            aria-label="Search articles"
          />
        </div>
      </nav>

      {featuredVisible ? (
        <a
          href={featuredPost.href}
          className="v2-shine v2-shine--light v2-glass-panel group relative mb-10 flex flex-col overflow-hidden rounded-[20px] no-underline transition-colors"
        >
          <div className="relative aspect-[28/9] overflow-hidden sm:aspect-[56/9]">
            <img
              src={featuredPost.cover}
              alt="AI value formula - competence, execution, and context"
              loading="lazy"
              decoding="async"
              className="blog-cover-image transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <span className="absolute right-3 top-3 z-10 flex items-center gap-1 text-[13px] font-medium text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.65)] transition-colors group-hover:text-white sm:right-4 sm:top-4 sm:text-[14px]">
              Read article
              <ArrowUpRight
                strokeWidth={1.8}
                className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </div>
          <div className="flex flex-col p-6 sm:p-8">
            <p className="v2-mono mb-3 text-[10px] uppercase tracking-[0.22em] text-white/40">
              Featured
            </p>
            <h2 className="text-[clamp(22px,3vw,30px)] font-medium leading-tight text-white group-hover:text-white/95">
              {featuredPost.title}
            </h2>
            {featuredPost.sub ? (
              <p className="mt-3 text-[15px] font-light leading-[1.6] text-white/60">
                {featuredPost.sub}
              </p>
            ) : null}
            <p className="mt-4 text-[14px] font-light leading-[1.7] text-white/55">
              {featuredPost.excerpt}
            </p>
            <div className="mt-6 flex items-center justify-between gap-4 text-[13px] text-white/45">
              <div className="flex min-w-0 items-center gap-2.5">
                <img
                  src={featuredPost.avatar}
                  alt=""
                  aria-hidden="true"
                  className="size-7 shrink-0 rounded-full object-cover"
                />
                <span className="truncate font-medium text-white/60">
                  {featuredPost.author}
                </span>
              </div>
              <p className="shrink-0 text-right">
                {featuredPost.date} <span className="mx-2">·</span>{" "}
                {featuredPost.readTime}
              </p>
            </div>
          </div>
        </a>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        {visible.map((post) => (
          <a
            key={post.href}
            href={post.href}
            className="v2-shine v2-shine--light v2-glass-panel group relative flex flex-col overflow-hidden rounded-[16px] no-underline transition-colors"
          >
            <div className="relative aspect-[64/27] overflow-hidden sm:aspect-[128/27]">
              <img
                src={post.cover}
                alt={post.title}
                loading="lazy"
                decoding="async"
                className="blog-cover-image transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <span className="absolute right-2.5 top-2.5 z-10 flex items-center gap-1 text-[12px] font-medium text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.65)] transition-colors group-hover:text-white sm:right-3 sm:top-3 sm:text-[13px]">
                Read article
                <ArrowUpRight
                  strokeWidth={1.8}
                  className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-3.5"
                />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h2 className="mb-2 text-[18px] font-medium leading-tight text-white group-hover:text-white/95">
                {post.title}
              </h2>
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
                  {post.date} <span className="mx-2">·</span> {post.readTime}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {totalPages > 1 ? (
        <nav
          className="mt-12 flex flex-wrap items-center justify-center gap-1.5"
          aria-label="Blog pagination"
        >
          {safePage > 1 ? (
            <a
              href={pageHref(tag, safePage - 1)}
              className="rounded-full px-3 py-1.5 text-[13px] font-medium text-white/55 no-underline transition-colors hover:text-white"
            >
              Previous
            </a>
          ) : null}
          {items.map((item, index) =>
            item === "ellipsis" ? (
              <span
                key={`ellipsis-${index}`}
                className="px-1 font-medium text-[13px] text-white/35"
                aria-hidden="true"
              >
                ...
              </span>
            ) : (
              <a
                key={item}
                href={pageHref(tag, item)}
                className={`flex size-8 items-center justify-center rounded-full text-[13px] font-medium no-underline transition-colors ${
                  item === safePage
                    ? "bg-white/12 text-white"
                    : "text-white/50 hover:text-white/85"
                }`}
                aria-current={item === safePage ? "page" : undefined}
              >
                {item}
              </a>
            ),
          )}
          {safePage < totalPages ? (
            <a
              href={pageHref(tag, safePage + 1)}
              className="rounded-full px-3 py-1.5 text-[13px] font-medium text-white/55 no-underline transition-colors hover:text-white"
            >
              Next
            </a>
          ) : null}
        </nav>
      ) : null}
    </div>
  );
}
