import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Briefcase, GraduationCap, Code } from "lucide-react";

export function About() {
  const skills = [
    { name: "React / Next.js", level: 95 },
    { name: "UI/UX Design (Figma)", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "TypeScript", level: 85 },
    { name: "Motion & Animation", level: 80 },
    { name: "Node.js / Express", level: 75 }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto flex-grow flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Về <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">DEVSTUDIO</span>
        </h1>
        <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
          Tôi không chỉ viết code, tôi xây dựng các giải pháp kỹ thuật số giúp doanh nghiệp của bạn phát triển mạnh mẽ và nổi bật trên Internet.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 mix-blend-overlay z-10" />
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1753715613373-90b1ea010731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBkYXJrfGVufDF8fHx8MTc3NjAwODg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Workspace" 
            className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-6">Câu chuyện của tôi</h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            Với hơn 5 năm kinh nghiệm trong lĩnh vực phát triển web và thiết kế UI/UX, tôi đã hợp tác với hàng chục doanh nghiệp từ startup nhỏ đến các công ty quy mô vừa để xây dựng các sản phẩm số chất lượng cao.
          </p>
          <p className="text-white/70 mb-8 leading-relaxed">
            Triết lý thiết kế của tôi tập trung vào sự tối giản (minimalism) nhưng không kém phần nổi bật, kết hợp với các hiệu ứng chuyển động mượt mà để mang lại trải nghiệm người dùng hoàn hảo nhất.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-4xl font-black text-cyan-400 mb-2">50+</h3>
              <p className="text-sm text-white/60">Dự án hoàn thành</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-4xl font-black text-blue-500 mb-2">5+</h3>
              <p className="text-sm text-white/60">Năm kinh nghiệm</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold">Kỹ năng Chuyên môn</h2>
          </div>
          
          <div className="flex flex-col gap-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-white/90">{skill.name}</span>
                  <span className="text-white/50">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold">Kinh nghiệm</h2>
          </div>
          
          <div className="flex flex-col gap-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {[
              { year: "2023 - Nay", role: "Freelance Senior Developer", desc: "Tập trung thiết kế và phát triển các ứng dụng web đặc biệt cho khách hàng quốc tế." },
              { year: "2021 - 2023", role: "Frontend Lead tại TechNova", desc: "Dẫn dắt đội ngũ 5 thành viên xây dựng nền tảng SaaS cho ngành giáo dục." },
              { year: "2019 - 2021", role: "Web Designer / Developer", desc: "Phát triển hàng chục trang web thương mại điện tử với WordPress và React." }
            ].map((exp, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black text-cyan-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                  <Award className="w-5 h-5" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">{exp.role}</div>
                  </div>
                  <div className="text-xs font-semibold text-cyan-400 mb-2">{exp.year}</div>
                  <div className="text-white/60 text-sm leading-relaxed">{exp.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}