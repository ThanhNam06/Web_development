import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Alex Trần",
    role: "CEO @ TechNova",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGV8ZW58MXx8fHwxNzc2MDA5NTc5fDA&ixlib=rb-4.1.0&q=80&w=200",
    text: "DEVSTUDIO thực sự đã biến đổi hoàn toàn diện mạo số của chúng tôi. Từ một website cũ kỹ, giờ đây chúng tôi có một nền tảng mượt mà, tốc độ tải cực nhanh và tỷ lệ chuyển đổi tăng 40% trong tháng đầu tiên."
  },
  {
    name: "Mai Phương",
    role: "Marketing Director @ EcoLife",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGV8ZW58MXx8fHwxNzc2MDA5NTc5fDA&ixlib=rb-4.1.0&q=80&w=200",
    text: "Quy trình làm việc cực kỳ chuyên nghiệp. Không chỉ viết code, DEVSTUDIO còn tư vấn rất kỹ về UI/UX và các điểm chạm khách hàng (touchpoints). Giao diện tối (dark mode) của dự án thực sự là một kiệt tác."
  },
  {
    name: "John Đỗ",
    role: "Founder @ FinApp",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGV8ZW58MXx8fHwxNzc2MDA5NTc5fDA&ixlib=rb-4.1.0&q=80&w=200",
    text: "Điều tôi ấn tượng nhất là các hiệu ứng animation (chuyển động). Mọi thứ đều mượt mà, tự nhiên mà không hề làm chậm trang. Khách hàng của chúng tôi luôn khen ngợi mỗi khi truy cập vào app."
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />
      
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
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Đánh giá</span>
            <span className="w-12 h-[2px] bg-cyan-400"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto"
          >
            Khách hàng nói gì về <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">DEVSTUDIO</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-[#0a0a0a] border border-white/5 relative overflow-hidden"
            >
              {/* Glowing border effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <Quote className="w-10 h-10 text-cyan-500/20 absolute top-6 right-6 group-hover:text-cyan-400/20 transition-colors" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                ))}
              </div>
              
              <p className="text-white/70 mb-8 leading-relaxed italic relative z-10 text-lg">
                "{testi.text}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10 mt-auto border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-cyan-400/50 transition-colors">
                  <ImageWithFallback 
                    src={testi.img} 
                    alt={testi.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testi.name}</h4>
                  <p className="text-sm text-cyan-400">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}