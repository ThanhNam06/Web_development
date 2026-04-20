import { motion } from "motion/react";

export function Privacy() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto flex-grow w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Chính sách bảo mật
        </h1>
        <p className="text-white/60 mb-10">
          Cập nhật lần cuối: 20/04/2026
        </p>

        <div className="space-y-8 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">1. Dữ liệu chúng tôi thu thập</h2>
            <p>
              Khi bạn gửi biểu mẫu liên hệ trên website DEVSTUDIO, chúng tôi có thể thu thập các thông tin:
              họ tên, email, số điện thoại, dịch vụ quan tâm, ngân sách dự kiến và nội dung yêu cầu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">2. Mục đích sử dụng</h2>
            <p>
              Dữ liệu được sử dụng để liên hệ tư vấn, báo giá, trao đổi phạm vi công việc và cải thiện chất lượng dịch vụ.
              Chúng tôi không bán dữ liệu cá nhân của bạn cho bên thứ ba.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">3. Chia sẻ dữ liệu</h2>
            <p>
              DEVSTUDIO chỉ chia sẻ dữ liệu khi cần thiết cho việc cung cấp dịch vụ hoặc khi có yêu cầu hợp pháp từ cơ quan có thẩm quyền.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">4. Lưu trữ và bảo mật</h2>
            <p>
              Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức phù hợp để bảo vệ thông tin liên hệ khỏi truy cập trái phép,
              mất mát hoặc lộ lọt dữ liệu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">5. Quyền của bạn</h2>
            <p>
              Bạn có quyền yêu cầu xem, chỉnh sửa hoặc xoá dữ liệu cá nhân đã cung cấp bằng cách liên hệ qua email hỗ trợ.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">6. Thông tin liên hệ</h2>
            <p>
              Email: <a className="text-cyan-400" href="mailto:admin.support.software@gmail.com">admin.support.software@gmail.com</a><br />
              Điện thoại: <a className="text-cyan-400" href="tel:0836827260">0836827260</a><br />
              Địa chỉ: Bình Dương, thành phố Hồ Chí Minh
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
