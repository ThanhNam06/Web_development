import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { getProjects, type ProjectCard } from "../api/client";

export function Showcase() {
  const [projects, setProjects] = useState<ProjectCard[]>([]);

  useEffect(() => {
    let active = true;

    getProjects({ limit: 3 })
      .then((res) => {
        if (!active) return;
        setProjects(res.items);
      })
      .catch(() => {
        if (!active) return;
        setProjects([]);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="projects" className="py-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-12 h-[2px] bg-cyan-400"></span>
              <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Case Studies</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Dự án <span className="text-white/60">Tiêu biểu</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/projects"
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors shrink-0"
            >
              <span>Xem tất cả dự án</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {projects.length === 0 ? (
          <div className="text-center text-white/50 py-10">Đang tải dự án...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="group relative block rounded-3xl overflow-hidden cursor-pointer bg-[#0a0a0a]"
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <ImageWithFallback
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-b ${project.color} mix-blend-overlay opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                    />
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
      </div>
    </section>
  );
}