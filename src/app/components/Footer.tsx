import { Code, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { getMeta } from "../api/client";

export function Footer() {
  const [contact, setContact] = useState({
    email: "admin.support.software@gmail.com",
    phone: "0836827260",
    location: "Bình Dương, thành phố Hồ Chí Minh",
  });

  useEffect(() => {
    let active = true;

    getMeta()
      .then((res) => {
        if (!active) return;
        setContact(res.contact);
      })
      .catch(() => {
        // fallback giữ nguyên hard-coded
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6 inline-flex">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center">
              <Code className="text-white w-4 h-4" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              DEVSTUDIO
            </span>
          </Link>
          <p className="text-white/60 text-sm max-w-sm mb-8 leading-relaxed">
            Tôi là chuyên gia thiết kế và lập trình website cao cấp, mang đến các giải pháp sáng tạo, hiện đại và tối ưu chuyển đổi cho doanh nghiệp.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-6">Liên kết nhanh</h4>
          <ul className="flex flex-col gap-4 text-sm text-white/60">
            <li><Link to="/about" className="hover:text-cyan-400 transition-colors">Giới thiệu</Link></li>
            <li><Link to="/projects" className="hover:text-cyan-400 transition-colors">Dự án</Link></li>
            <li><Link to="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link></li>
            <li><Link to="/seo-plan-30-days" className="hover:text-cyan-400 transition-colors">Kế hoạch SEO 30 ngày</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Liên hệ</Link></li>
            <li><Link to="/" className="hover:text-cyan-400 transition-colors">Trang chủ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-6">Liên hệ</h4>
          <ul className="flex flex-col gap-4 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              {contact.email}
            </li>
            <li><p>{contact.phone}</p></li>
            <li><p>{contact.location}</p></li>
            <li><p>Sẵn sàng hợp tác từ xa (Remote)</p></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
        <p>© 2026 DEVSTUDIO. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-white transition-colors">Chính sách bảo mật</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Điều khoản dịch vụ</Link>
        </div>
      </div>
    </footer>
  );
}