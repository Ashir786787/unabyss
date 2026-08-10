"use client";

import PageContainer from "@/components/layout/PageContainer";
import { blogPosts } from "@/data/blog";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="relative bg-[#0c0c0c] py-24 sm:py-28 lg:py-32"
    >
      <PageContainer>
        <div className="mx-auto max-w-[940px]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/20">
                From the blog
              </p>

              <h2 className="mt-4 text-[28px] font-semibold tracking-[-0.045em] text-white sm:text-[36px]">
                Thinking about AI context.
              </h2>
            </motion.div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-[10px] text-white/35 transition-colors hover:text-white/65"
            >
              View all posts
              <ArrowUpRight size={12} />
            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.5,
                }}
                className="group overflow-hidden rounded-[15px] border border-white/[0.06] bg-[#111111]"
              >
                <div className="relative aspect-[1.7/1] overflow-hidden border-b border-white/[0.06] bg-[#161616]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(255,111,82,0.18),transparent_38%),radial-gradient(circle_at_70%_65%,rgba(120,90,255,0.12),transparent_35%)]" />

                  <div className="absolute inset-5 rounded-[11px] border border-white/[0.06] bg-black/20 backdrop-blur-sm">
                    <div className="absolute left-4 top-4 h-2 w-16 rounded-full bg-white/10" />
                    <div className="absolute bottom-4 left-4 h-2 w-28 rounded-full bg-white/[0.05]" />
                    <div className="absolute bottom-4 right-4 size-7 rounded-[7px] bg-[#ff6f52]/20" />
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] uppercase tracking-[0.14em] text-[#ff8067]/65">
                      {post.category}
                    </span>

                    <span className="text-[8px] text-white/18">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="mt-4 text-[14px] font-medium leading-5 tracking-[-0.02em] text-white/70 transition-colors group-hover:text-white">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-[10px] leading-5 text-white/25">
                    {post.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-[9px] text-white/28">
                    Read article
                    <ArrowUpRight
                      size={10}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}