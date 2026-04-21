import { motion } from "motion/react";
import { Link } from "react-router";
import { contentPlan30Days } from "../content/blogPosts";

export function SeoPlan() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto flex-grow w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Kế hoạch SEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">30 ngày</span>
        </h1>
        <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
          Lộ trình xuất bản nội dung thực thi ngay: 8 bài trong 30 ngày, bám sát intent TOFU-MOFU-BOFU và internal links về trang chuyển đổi.
        </p>
      </motion.div>

      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0a0a0a]">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 text-white/80">
            <tr>
              <th className="px-4 py-3">Ngày</th>
              <th className="px-4 py-3">Tiêu đề</th>
              <th className="px-4 py-3">Slug</th>
              <th className="px-4 py-3">FAQ Schema</th>
              <th className="px-4 py-3">Internal Links</th>
            </tr>
          </thead>
          <tbody>
            {contentPlan30Days.map((item) => (
              <tr key={item.slug} className="border-t border-white/10 align-top">
                <td className="px-4 py-4 text-white/80">{item.day}</td>
                <td className="px-4 py-4 text-white">{item.title}</td>
                <td className="px-4 py-4 text-cyan-300">/blog/{item.slug}</td>
                <td className="px-4 py-4 text-white/80">{item.hasFaqSchema ? "Có" : "Không"}</td>
                <td className="px-4 py-4 text-white/70">
                  <ul className="space-y-1">
                    {item.internalLinks.map((link) => (
                      <li key={`${item.slug}-${link.to}`}>
                        {link.label} → {link.to}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link to="/blog" className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold">
          Xem danh sách bài blog
        </Link>
        <Link to="/contact" className="px-6 py-3 rounded-full border border-white/20 hover:border-cyan-400/60 text-white transition-colors">
          Liên hệ triển khai SEO
        </Link>
      </div>
    </div>
  );
}
