import { motion } from "motion/react";

export function Terms() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto flex-grow w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Điều khoản dịch vụ
        </h1>
        <p className="text-white/60 mb-10">
          Cập nhật lần cuối: 20/04/2026
        </p>

        <div className="space-y-8 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">1. Phạm vi áp dụng</h2>
            <p>
              Các điều khoản này áp dụng cho việc sử dụng website DEVSTUDIO và các yêu cầu tư vấn/giao dịch dịch vụ thông qua biểu mẫu liên hệ.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">2. Nội dung dịch vụ</h2>
            <p>
              DEVSTUDIO cung cấp dịch vụ tư vấn, thiết kế giao diện và phát triển sản phẩm số theo phạm vi được hai bên thống nhất.
              Chi phí, tiến độ và hạng mục bàn giao sẽ được xác nhận riêng theo từng dự án.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">3. Nghĩa vụ của khách hàng</h2>
            <p>
              Khách hàng có trách nhiệm cung cấp thông tin yêu cầu chính xác, phản hồi đúng hạn và phối hợp trong quá trình thực hiện dự án.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">4. Quyền sở hữu và sử dụng</h2>
            <p>
              Quyền sở hữu sản phẩm bàn giao sẽ được chuyển giao theo thoả thuận dự án sau khi hoàn tất nghĩa vụ thanh toán liên quan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">5. Giới hạn trách nhiệm</h2>
            <p>
              DEVSTUDIO không chịu trách nhiệm cho các thiệt hại gián tiếp phát sinh ngoài phạm vi cam kết và kiểm soát hợp lý của dịch vụ.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">6. Chấm dứt và thay đổi điều khoản</h2>
            <p>
              Chúng tôi có thể cập nhật điều khoản để phù hợp thực tế vận hành. Phiên bản mới sẽ được công bố trên website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">7. Thông tin liên hệ</h2>
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
