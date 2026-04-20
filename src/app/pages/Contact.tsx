import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import { submitContact } from "../api/client";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const formData = new FormData(e.currentTarget);
      await submitContact({
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        service: String(formData.get("service") || ""),
        budget: String(formData.get("budget") || ""),
        message: String(formData.get("message") || ""),
      });

      setIsSuccess(true);
      e.currentTarget.reset();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Gửi form thất bại. Vui lòng thử lại.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto flex-grow w-full relative">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 md:mb-24 relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Sẵn sàng <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">hợp tác?</span>
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          Hãy cho tôi biết về ý tưởng của bạn. Tôi sẽ liên hệ lại trong vòng 24h để trao đổi chi tiết về giải pháp và báo giá.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Thông tin liên hệ</h2>
            <p className="text-white/60 leading-relaxed">
              Tôi làm việc trực tuyến (remote) với các khách hàng trên toàn cầu, nhưng nếu bạn ở Hà Nội, chúng ta có thể hẹn một buổi cà phê.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all">
                <Mail className="w-7 h-7 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-white/50 mb-1 uppercase tracking-wider font-semibold">Email</p>
                <a href="mailto:admin.support.software@gmail.com" className="text-xl text-white font-medium hover:text-cyan-400 transition-colors">admin.support.software@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all">
                <Phone className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-white/50 mb-1 uppercase tracking-wider font-semibold">Điện thoại</p>
                <a href="tel:0836827260" className="text-xl text-white font-medium hover:text-blue-400 transition-colors">0836827260</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all">
                <MapPin className="w-7 h-7 text-indigo-400" />
              </div>
              <div>
                <p className="text-sm text-white/50 mb-1 uppercase tracking-wider font-semibold">Địa chỉ</p>
                <p className="text-xl text-white font-medium">Bình Dương, thành phố Hồ Chí Minh</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/20">
            <h3 className="font-bold text-white mb-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Trạng thái công việc
            </h3>
            <p className="text-white/70 text-sm">
              Hiện tại tôi đang nhận các dự án mới dự kiến bắt đầu vào tháng tới. Vui lòng liên hệ sớm để đặt lịch.
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Form Glow */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
            
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-green-400 to-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Gửi thành công!</h3>
                <p className="text-white/60 mb-8 max-w-sm mx-auto">
                  Cảm ơn bạn đã liên hệ. Tôi sẽ kiểm tra email và phản hồi cho bạn trong thời gian sớm nhất.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white font-medium inline-flex items-center gap-2"
                >
                  Gửi tin nhắn khác <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/70">Họ và tên *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder:text-white/20"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/70">Email *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-white/20"
                      placeholder="email@company.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-sm font-medium text-white/70">Dịch vụ quan tâm</label>
                  <select 
                    id="service"
                    name="service"
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all appearance-none"
                  >
                    <option value="">Chọn dịch vụ...</option>
                    <option value="web">Thiết kế Website Doanh nghiệp</option>
                    <option value="ecommerce">Website Thương mại Điện tử</option>
                    <option value="app">Phát triển Web App / SaaS</option>
                    <option value="ui">Thiết kế UI/UX (Figma)</option>
                    <option value="other">Khác</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="budget" className="text-sm font-medium text-white/70">Ngân sách dự kiến</label>
                  <select 
                    id="budget"
                    name="budget"
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all appearance-none"
                  >
                    <option value="">Chọn khoảng ngân sách...</option>
                    <option value="small">Dưới 20 triệu VNĐ</option>
                    <option value="medium">20 - 50 triệu VNĐ</option>
                    <option value="large">50 - 100 triệu VNĐ</option>
                    <option value="xlarge">Trên 100 triệu VNĐ</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/70">Nội dung chi tiết *</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all placeholder:text-white/20 resize-none"
                    placeholder="Mô tả ngắn gọn về dự án, mục tiêu và các yêu cầu cụ thể của bạn..."
                  />
                </div>

                {submitError && (
                  <p className="text-center text-sm text-red-400">{submitError}</p>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full px-8 py-4 rounded-xl overflow-hidden font-semibold shadow-[0_0_30px_-10px_rgba(34,211,238,0.5)] mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-transform duration-300 group-hover:scale-105" />
                  <div className="relative flex items-center justify-center gap-2 text-white">
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Đang gửi...
                      </span>
                    ) : (
                      <>
                        Gửi yêu cầu ngay
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </div>
                </button>
                <p className="text-center text-xs text-white/40 mt-2">
                  Bằng việc gửi form, bạn đồng ý với chính sách bảo mật của chúng tôi.
                </p>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
}