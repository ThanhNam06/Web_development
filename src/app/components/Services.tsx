import { motion } from "motion/react";
import { Code2, Palette, Globe, Zap, Smartphone, Search } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Thiết kế giao diện hiện đại, tập trung vào trải nghiệm người dùng với các prototype tương tác mượt mà trên Figma.",
    color: "cyan"
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Phát triển website đa nền tảng bằng React, Next.js, và Tailwind CSS, mang lại trải nghiệm nhanh và bảo mật.",
    color: "blue"
  },
  {
    icon: Smartphone,
    title: "Mobile App Design",
    desc: "Tạo ra các ứng dụng di động có thiết kế đột phá, tương thích hoàn hảo trên iOS và Android.",
    color: "indigo"
  },
  {
    icon: Zap,
    title: "Motion & Animation",
    desc: "Thêm sự sống động cho trang web của bạn với các hiệu ứng chuyển động, cuộn trang (scroll) tinh tế và đẹp mắt.",
    color: "orange"
  },
  {
    icon: Globe,
    title: "E-Commerce Solutions",
    desc: "Xây dựng các cửa hàng trực tuyến với quy trình thanh toán tối ưu, giúp doanh nghiệp tăng tỷ lệ chuyển đổi.",
    color: "emerald"
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Tối ưu hóa cấu trúc website và tốc độ tải trang để đạt thứ hạng cao trên các công cụ tìm kiếm.",
    color: "purple"
  }
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "cyan": return "text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]";
    case "blue": return "text-blue-400 group-hover:bg-blue-500/10 group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]";
    case "indigo": return "text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]";
    case "orange": return "text-orange-400 group-hover:bg-orange-500/10 group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]";
    case "emerald": return "text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]";
    case "purple": return "text-purple-400 group-hover:bg-purple-500/10 group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]";
    default: return "text-white group-hover:bg-white/10 group-hover:border-white/50";
  }
};

export function Services() {
  return (
    <section className="py-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-12 h-[2px] bg-cyan-400"></span>
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Giải pháp</span>
            <span className="w-12 h-[2px] bg-cyan-400"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto"
          >
            Dịch vụ <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Chuyên nghiệp</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 transition-all duration-500 hover:-translate-y-2 cursor-pointer ${getColorClasses(service.color)}`}
            >
              <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                {service.title}
              </h3>
              <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}