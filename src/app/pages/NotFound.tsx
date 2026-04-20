import { motion } from "motion/react";
import { Link } from "react-router";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="flex-grow flex items-center justify-center min-h-[70vh] px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto flex flex-col items-center"
      >
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full" />
          <h1 className="text-9xl font-black bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-blue-600 relative z-10">
            404
          </h1>
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4">Trang không tồn tại</h2>
        <p className="text-white/60 text-lg mb-10 leading-relaxed">
          Có vẻ như đường dẫn bạn đang tìm kiếm không hợp lệ hoặc đã bị thay đổi. Đừng lo, hãy quay lại trang chủ để tiếp tục khám phá!
        </p>

        <Link 
          to="/" 
          className="group relative px-8 py-4 rounded-full overflow-hidden w-full sm:w-auto text-lg font-semibold shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)] hover:shadow-[0_0_60px_-10px_rgba(34,211,238,0.7)] transition-shadow inline-flex items-center gap-3"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-transform duration-300 group-hover:scale-105" />
          <div className="relative flex items-center justify-center gap-3 text-white">
            <Home className="w-5 h-5" />
            Về Trang chủ
          </div>
        </Link>
      </motion.div>
    </div>
  );
}