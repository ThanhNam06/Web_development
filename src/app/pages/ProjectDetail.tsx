import { motion } from "motion/react";
import { useParams, Link, Navigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowLeft, Calendar, Code, User, Briefcase } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { getProjectById, getProjects, type ProjectCard, type ProjectDetail } from "../api/client";

export function ProjectDetail() {
  const { id } = useParams();
  const currentId = Number(id);

  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [cards, setCards] = useState<ProjectCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    let active = true;

    setLoading(true);
    setNotFound(false);

    Promise.all([getProjectById(currentId), getProjects()])
      .then(([detail, list]) => {
        if (!active) return;
        setProject(detail);
        setCards(list.items);
      })
      .catch(() => {
        if (!active) return;
        setProject(null);
        setCards([]);
        setNotFound(true);
      })
      .finally(() => {
        if (!active) return;
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [currentId]);

  const nextProject = useMemo(() => {
    if (!cards.length) return null;
    const currentIndex = cards.findIndex((p) => p.id === currentId);
    if (currentIndex === -1) return cards[0] ?? null;
    return cards[(currentIndex + 1) % cards.length] ?? null;
  }, [cards, currentId]);

  if (loading) {
    return <div className="pt-32 pb-24 text-center text-white/60">Đang tải chi tiết dự án...</div>;
  }

  if (notFound || !project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 flex-grow flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-6 w-full mb-12">
        <Link to="/projects" className="inline-flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-colors mb-10 group text-sm font-medium">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Trở về Danh sách
        </Link>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider border border-cyan-500/20">
              {project.category}
            </span>
            <span className="text-white/40 text-sm">Dự án #{project.id}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight max-w-4xl">{project.title}</h1>
        </motion.div>
      </div>

      <div className="w-full px-6 max-w-[100rem] mx-auto mb-20">
        <motion.div
          key={`img-${project.id}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[21/9] md:aspect-[21/8] rounded-3xl overflow-hidden border border-white/10 group"
        >
          <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} mix-blend-overlay z-10`} />
          <ImageWithFallback src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="lg:col-span-1">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 sticky top-32">
            <h3 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4">Thông tin Dự án</h3>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <User className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <p className="text-xs text-white/50 mb-1 uppercase tracking-wider">Khách hàng</p>
                  <p className="font-medium text-white/90">{project.client}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Calendar className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <p className="text-xs text-white/50 mb-1 uppercase tracking-wider">Thời gian</p>
                  <p className="font-medium text-white/90">{project.timeline}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Briefcase className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <p className="text-xs text-white/50 mb-1 uppercase tracking-wider">Vai trò</p>
                  <p className="font-medium text-white/90">{project.role}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Code className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <p className="text-xs text-white/50 mb-3 uppercase tracking-wider">Công nghệ</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="lg:col-span-2 prose prose-invert prose-cyan max-w-none prose-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">Tổng quan</h2>
          <p className="text-white/70 leading-relaxed mb-12">{project.overview}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 border-l-4 border-l-orange-500">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Thách thức</h3>
              <p className="text-white/70 text-sm leading-relaxed">{project.challenges}</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 border-l-4 border-l-emerald-500">
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Giải pháp</h3>
              <p className="text-white/70 text-sm leading-relaxed">{project.solutions}</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-white">Kết quả đạt được</h2>
          <div className="space-y-4">
            {project.results.map((res, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm shrink-0">{i + 1}</div>
                <p className="text-white/80 pt-1 font-medium">{res}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.mockups.map((mockupImg, idx) => (
              <div key={idx} className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/10 border border-white/10 group relative">
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} mix-blend-overlay z-10 opacity-30 group-hover:opacity-0 transition-opacity duration-500`} />
                <ImageWithFallback src={mockupImg} alt={`Mockup ${idx + 1}`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {nextProject && (
        <div className="border-t border-white/10 pt-16 pb-8 text-center max-w-7xl mx-auto w-full px-6">
          <p className="text-white/50 mb-4 text-sm uppercase tracking-wider font-semibold">Dự án tiếp theo</p>
          <Link to={`/projects/${nextProject.id}`} className="text-3xl md:text-5xl font-bold text-white hover:text-cyan-400 transition-colors inline-block relative group">
            {nextProject.title.split(" - ")[0]}
            <div className="h-[2px] bg-cyan-400 absolute bottom-0 left-0 right-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-2" />
          </Link>
        </div>
      )}
    </motion.div>
  );
}
