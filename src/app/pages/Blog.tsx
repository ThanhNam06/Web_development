import { motion } from "motion/react";
import { Link } from "react-router";
import { blogPosts } from "../content/blogPosts";

const categoryBadge: Record<string, string> = {
  BOFU: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  MOFU: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  TOFU: "bg-purple-500/15 text-purple-300 border-purple-500/30",
};

export function Blog() {
  const posts = blogPosts.slice().sort((a, b) => a.publishedDay - b.publishedDay);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto flex-grow w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">DEVSTUDIO</span>
        </h1>
        <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
          Kho nội dung SEO 30 ngày đầu: tập trung tăng index, tăng traffic tự nhiên và tăng lead dịch vụ thiết kế website/phần mềm.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {posts.map((post, idx) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 hover:border-cyan-500/40 transition-colors"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs border ${categoryBadge[post.category]}`}>
                {post.category}
              </span>
              <span className="text-xs text-white/50">Ngày {post.publishedDay}</span>
              <span className="text-xs text-white/50">{post.readTime}</span>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white leading-tight">
              <Link to={`/blog/${post.slug}`} className="hover:text-cyan-400 transition-colors">
                {post.title}
              </Link>
            </h2>

            <p className="text-white/65 leading-relaxed mb-5">{post.excerpt}</p>

            <div className="text-sm text-white/50 mb-6">
              Focus keyword: <span className="text-white/75">{post.focusKeyword}</span>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              {post.internalLinks.map((link) => (
                <Link
                  key={`${post.slug}-${link.to}`}
                  to={link.to}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link to={`/blog/${post.slug}`} className="inline-flex mt-7 text-cyan-400 hover:text-cyan-300 font-semibold">
              Đọc bài chi tiết →
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
