import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "motion/react";
import { useLocation } from "react-router";

export function Spotlight() {
  // Phục hồi lại Hook useLocation để tránh lỗi HMR của React khi thay đổi số lượng Hook
  const location = useLocation();
  
  const [isVisible, setIsVisible] = useState(false);

  // Lưu tọa độ chuột
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

  // Lò xo mượt mà bám theo chuột
  const springConfig = { damping: 40, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isVisible]);

  // 1. Ma trận Chấm tròn Đẳng cự (Isometric Dot Matrix):
  // Tối giản hóa: Giảm kích thước các chấm, loại bỏ hoàn toàn các dấu cộng/hồng tâm thừa
  // Giữ lại ảo giác tổ ong cực kỳ tinh tế và sang trọng.
  const dotPattern = `data:image/svg+xml,%3Csvg width='40' height='34.64' viewBox='0 0 40 34.64' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='0' cy='0' r='1' fill='%2338bdf8' opacity='0.3'/%3E%3Ccircle cx='40' cy='0' r='1' fill='%2338bdf8' opacity='0.3'/%3E%3Ccircle cx='0' cy='34.64' r='1' fill='%2338bdf8' opacity='0.3'/%3E%3Ccircle cx='40' cy='34.64' r='1' fill='%2338bdf8' opacity='0.3'/%3E%3Ccircle cx='20' cy='17.32' r='1.5' fill='%230ea5e9' opacity='0.7'/%3E%3C/svg%3E`;

  // Masks hiển thị theo chuột
  const maskImageDots = useMotionTemplate`radial-gradient(400px circle at ${smoothX}px ${smoothY}px, black 0%, transparent 100%)`;
  
  // Hook giả (Dummy Hook) để giữ nguyên số lượng Hook như phiên bản cũ, khắc phục triệt để lỗi "Rendered fewer hooks" của bộ nạp HMR React
  const dummyMask = useMotionTemplate`radial-gradient(0px circle at ${smoothX}px ${smoothY}px, transparent 0%, transparent 100%)`;
  
  const bgAmbient = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(14, 165, 233, 0.05) 0%, rgba(34, 211, 238, 0.015) 50%, transparent 100%)`;
  const bgCore = useMotionTemplate`radial-gradient(120px circle at ${smoothX}px ${smoothY}px, rgba(56, 189, 248, 0.25) 0%, rgba(255, 255, 255, 0.1) 25%, transparent 100%)`;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="pointer-events-none fixed inset-0 z-[90] overflow-hidden"
    >
      {/* Lớp 1: Isometric Dot Matrix (Cảm giác tổ ong tàng hình tối giản) */}
      <motion.div
        className="absolute inset-0 transition-opacity duration-300 mix-blend-screen"
        style={{
          backgroundImage: `url("${dotPattern}")`,
          backgroundSize: "40px 34.64px",
          WebkitMaskImage: maskImageDots,
          maskImage: maskImageDots,
        }}
      />
    </motion.div>
  );
}