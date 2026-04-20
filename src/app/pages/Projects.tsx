import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { getProjects, type ProjectCard } from "../api/client";

export function Projects() {
  const [allProjects, setAllProjects] = useState<ProjectCard[]>([]);
  const [categories, setCategories] = useState<string[]>(["Tất cả"]);
  const [filter, setFilter] = useState("Tất cả");

  useEffect(() => {
    let active = true;

    getProjects()
      .then((res) => {
        if (!active) return;
        setAllProjects(res.items);
        setCategories(res.categories.length ? res.categories : ["Tất cả"]);
      })
      .catch(() => {
        if (!active) return;
        setAllProjects([]);
        setCategories(["Tất cả"]);
      });

    return () => {
      active = false;
    };
  }, []);

  const filteredProjects = useMemo(
    () =>
      filter === "Tất cả"
        ? allProjects
        : allProjects.filter((p) => p.category === filter),
    [allProjects, filter]
  );

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto flex-grow w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Dự án <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Nổi bật</span>
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          Khám phá các sản phẩm số chất lượng cao tôi đã thiết kế và phát triển. Mỗi dự án là một câu chuyện riêng biệt về sự sáng tạo và kỹ thuật.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-16"
      >
        {categories.map((cat, idx) => (
          <button
            key={`${cat}-${idx}`}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat
                ? "bg-cyan-500 text-white shadow-[0_0_20px_-5px_rgba(34,211,238,0.5)]"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {allProjects.length === 0 ? (
        <div className="text-center py-20 text-white/50">Đang tải danh sách dự án...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Link to={`/projects/${project.id}`} className="group relative block rounded-3xl overflow-hidden cursor-pointer bg-[#0a0a0a]">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <ImageWithFallback
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className={`absolute inset-0 bg-gradient-to-b ${project.color} mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-cyan-400 font-medium text-sm mb-2">{project.category}</p>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 delay-100 shadow-xl shadow-cyan-500/20">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}

      {filteredProjects.length === 0 && allProjects.length > 0 && (
        <div className="text-center py-20 text-white/50">
          Không tìm thấy dự án nào trong danh mục này.
        </div>
      )}

      {filteredProjects.length > 0 && (
        <div className="mt-16 flex justify-center">
          <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white font-medium group">
            Tải thêm dự án
            <ArrowRight className="w-4 h-4 group-hover:translate-y-1 rotate-90 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
}