"use client";

import PageContainer from "@/components/layout/PageContainer";
import { blogPosts } from "@/data/blog";
import { fadeUp, fadeUpSmall, viewportOnce } from "@/lib/animations";
import { ArrowUpRight, Brain, Layers3, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const articleIcons = [Brain, Layers3, Sparkles];

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-[#0c0c0c] py-28 sm:py-32 lg:py-36"
    >
      <div className="pointer-events-none absolute left-1/2 top-[42%] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,118,87,0.04),transparent_70%)]" />

      <PageContainer className="relative">
        <div className="mx-auto max-w-[1000px]">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ duration: 0.55 }}
            >
              <p className="text-[9px] uppercase tracking-[0.24em] text-white/18">
                From the blog
              </p>

              <h2 className="mt-4 text-[30px] font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-[40px]">
                Thinking about AI context.
              </h2>

              <p className="mt-4 max-w-[480px] text-[10px] leading-5 text-white/25 sm:text-[11px]">
                Ideas, product updates and practical ways to build better
                workflows around shared AI context.
              </p>
            </motion.div>

            <a
              href="#"
              className="group inline-flex w-fit items-center gap-2 text-[9px] text-white/28 transition-colors hover:text-white/60"
            >
              View all posts

              <ArrowUpRight
                size={11}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="mt-11 grid gap-4 md:grid-cols-3">
            {blogPosts.map((post, index) => {
              const Icon = articleIcons[index % articleIcons.length];

              return (
                <motion.article
                  key={post.title}
                  variants={fadeUpSmall}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.5,
                  }}
                  className="group overflow-hidden rounded-[16px] border border-white/[0.06] bg-[#111111] transition-colors duration-300 hover:border-white/[0.1]"
                >
                  <div className="relative aspect-[1.65/1] overflow-hidden border-b border-white/[0.06] bg-[#141414]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(255,118,87,0.14),transparent_34%),radial-gradient(circle_at_76%_70%,rgba(119,91,255,0.08),transparent_34%)]" />

                    <div className="absolute inset-x-5 bottom-0 top-5 overflow-hidden rounded-t-[12px] border border-white/[0.06] bg-[#181818]">
                      <div className="flex h-8 items-center border-b border-white/[0.05] px-3">
                        <div className="flex gap-1">
                          <span className="size-[4px] rounded-full bg-white/15" />
                          <span className="size-[4px] rounded-full bg-white/10" />
                          <span className="size-[4px] rounded-full bg-white/[0.06]" />
                        </div>

                        <div className="mx-auto h-1.5 w-14 rounded-full bg-white/[0.05]" />
                      </div>

                      <div className="relative flex h-[calc(100%-32px)] items-center justify-center">
                        <div className="absolute left-4 top-4 space-y-2">
                          <div className="h-1.5 w-14 rounded-full bg-white/[0.07]" />
                          <div className="h-1.5 w-9 rounded-full bg-white/[0.035]" />
                        </div>

                        <div className="flex size-12 items-center justify-center rounded-[14px] border border-[#ff7657]/12 bg-[#ff7657]/[0.07] shadow-[0_0_35px_rgba(255,118,87,0.08)]">
                          <Icon size={18} className="text-[#ff8067]/80" />
                        </div>

                        <div className="absolute bottom-4 right-4 flex items-center gap-1.5">
                          <span className="h-1.5 w-7 rounded-full bg-white/[0.04]" />
                          <span className="size-1.5 rounded-full bg-emerald-400/60" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[7px] uppercase tracking-[0.14em] text-[#ff8067]/60">
                        {post.category}
                      </span>

                      <span className="text-[7px] text-white/16">
                        {post.date}
                      </span>
                    </div>

                    <h3 className="mt-4 text-[13px] font-medium leading-5 tracking-[-0.02em] text-white/62 transition-colors duration-200 group-hover:text-white/80">
                      {post.title}
                    </h3>

                    <p className="mt-3 text-[9px] leading-5 text-white/22">
                      {post.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-[8px] text-white/24 transition-colors group-hover:text-white/45">
                      Read article

                      <ArrowUpRight
                        size={9}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}