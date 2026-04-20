import { Outlet, ScrollRestoration } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { motion, useScroll, useSpring } from "motion/react";
import { Spotlight } from "../components/Spotlight";

export function Root() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-black min-h-screen text-white selection:bg-cyan-500/30 selection:text-cyan-200 font-sans flex flex-col relative">
      {/* Hiệu ứng ánh sáng Spotlight toàn cục (sẽ tự động ẩn trên các trang Dự án) */}
      <Spotlight />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Header />
      
      <main className="flex-grow flex flex-col relative z-10">
        <Outlet />
      </main>

      <Footer />
      <ScrollRestoration />
    </div>
  );
}