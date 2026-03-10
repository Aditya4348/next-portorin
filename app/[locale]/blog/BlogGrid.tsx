"use client";

import { blogPostsData } from "@/data/Content";
import { MotionDiv } from "@/helper/Motion/MotionDiv";
import { ArrowUpRight, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BlogGrid() {
  const t = useTranslations("blog");
  const router = useRouter();

  const [activeCategory, setActiveCategory] = useState(t("categories")[0]);
  const categories = t.raw("categories") as string[];

  //   filtyer blog posts based on active category. If active category is "All", show all posts
  const filteredPosts =
    activeCategory === t("categories")[0]
      ? blogPostsData
      : blogPostsData.filter(
          (p) =>
            p.category === activeCategory ||
            (activeCategory === "Semua" && p.category),
        );

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-purple-accent text-white"
                : "glass text-slate-400 hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, i) => (
          <MotionDiv
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => router.push(`/blog/${post.id}`)}
            className="group glass rounded-[40px] overflow-hidden flex flex-col cursor-pointer"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-900/80 to-transparent" />
              <div className="absolute top-6 right-6 p-3 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-purple-accent" size={20} />
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-purple-accent">
                  {post.category}
                </span>
                <div className="w-1 h-1 bg-slate-600 rounded-full" />
                <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                  <Clock size={10} /> {post.readTime} {t("readTime")}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-accent transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-slate-400 mb-6 line-clamp-3">{post.excerpt}</p>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  {post.date}
                </span>
                <span className="text-purple-accent font-bold text-xs">
                  Read More →
                </span>
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </>
  );
}
