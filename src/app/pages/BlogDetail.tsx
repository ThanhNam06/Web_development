import { motion } from "motion/react";
import { Link, Navigate, useParams } from "react-router";
import { blogPosts } from "../content/blogPosts";

export function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto flex-grow w-full">
      <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <Link to="/blog" className="inline-flex text-sm text-white/60 hover:text-cyan-400 transition-colors mb-6">
          ← Quay lại danh sách Blog
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs border border-cyan-500/35 text-cyan-300 bg-cyan-500/10">{post.category}</span>
          <span className="text-xs text-white/50">Ngày {post.publishedDay}</span>
          <span className="text-xs text-white/50">{post.readTime}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight text-white">{post.title}</h1>
        <p className="text-lg text-white/65 leading-relaxed mb-10">{post.excerpt}</p>

        <div className="space-y-9">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold text-white mb-4">{section.heading}</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={`${section.heading}-${index}`}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-bold text-white mb-4">Liên kết nội bộ đề xuất</h3>
          <ul className="space-y-3 text-white/75">
            {post.internalLinks.map((link) => (
              <li key={`${post.slug}-${link.to}`}>
                <Link to={link.to} className="hover:text-cyan-300 transition-colors underline underline-offset-4">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {post.faqs?.length ? (
          <section className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-5">FAQ</h3>
            <div className="space-y-4">
              {post.faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-5">
                  <h4 className="text-lg font-semibold text-white mb-2">{faq.question}</h4>
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-12">
          <Link to="/contact" className="inline-flex px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold">
            Liên hệ để triển khai SEO cho website của bạn
          </Link>
        </div>
      </motion.article>
    </div>
  );
}
