import { motion } from "motion/react";
import { Send, Sparkles } from "lucide-react";
import { Link } from "react-router";

export function CTA() {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-800/20" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-medium text-cyan-200 uppercase tracking-widest">Bắt đầu ngay hôm nay</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
        >
          Sẵn sàng <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">nâng tầm</span> thương hiệu số?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl text-white/70 mb-12 max-w-2xl mx-auto"
        >
          Đừng để website của bạn trông giống hàng ngàn đối thủ khác. Hãy liên hệ để tôi giúp bạn tạo ra một trải nghiệm độc đáo và nổi bật nhất.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/contact" className="group relative px-10 py-5 rounded-full overflow-hidden w-full sm:w-auto text-lg font-semibold shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)] hover:shadow-[0_0_60px_-10px_rgba(34,211,238,0.7)] transition-shadow inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-transform duration-300 group-hover:scale-105" />
            <div className="relative flex items-center justify-center gap-3 text-white">
              Nhận tư vấn miễn phí
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>
          
          <Link to="/projects" className="group relative px-10 py-5 rounded-full bg-white/5 border border-white/20 hover:bg-white/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 text-lg font-semibold text-white">
            Xem báo giá
          </Link>
        </motion.div>
      </div>
    </section>
  );
}