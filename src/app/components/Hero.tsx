import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Layout, Zap, Smartphone, Search } from "lucide-react";
import { Link } from "react-router";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-black text-white">
      {/* Background glowing effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-600/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-700/20 blur-[150px]" />
        <div className="absolute top-[30%] left-[40%] w-[30%] h-[30%] rounded-full bg-indigo-500/20 blur-[100px]" />
        
        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-sm font-medium text-cyan-200">Đang nhận dự án mới cho Quý 2/2026</span>
          <ChevronRight className="w-4 h-4 text-cyan-400" />
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={itemVariants} className="block text-white/90">
            Biến ý tưởng thành
          </motion.span>
          <motion.span 
            variants={itemVariants} 
            className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600"
          >
            Trải nghiệm số
          </motion.span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-lg md:text-xl text-white/60 mb-12"
        >
          Tôi thiết kế và phát triển các website cao cấp, tập trung vào hiệu suất, UI/UX hiện đại và mang lại chuyển đổi cao cho doanh nghiệp của bạn.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link to="/projects" className="group relative px-8 py-4 rounded-full overflow-hidden w-full sm:w-auto inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-transform duration-300 group-hover:scale-105" />
            <div className="relative flex items-center justify-center gap-2 font-semibold">
              Khám phá dự án
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
          
          <Link to="/contact" className="group relative px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 font-semibold">
            Liên hệ tư vấn
          </Link>
        </motion.div>

        {/* Floating stats / features */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl"
        >
          {[
            { icon: Layout, label: "Giao diện độc quyền", sub: "Không dùng template" },
            { icon: Zap, label: "Hiệu suất tối đa", sub: "Tốc độ load cực nhanh" },
            { icon: Smartphone, label: "Responsive 100%", sub: "Tương thích mọi thiết bị" },
            { icon: Search, label: "Chuẩn SEO", sub: "Thân thiện bộ máy tìm kiếm" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10">
                <item.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-white/90 text-sm">{item.label}</p>
                <p className="text-xs text-white/50 mt-1">{item.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}