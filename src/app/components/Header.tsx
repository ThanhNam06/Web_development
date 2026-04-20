import { motion } from "motion/react";
import { Menu, X, Code, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Trang chủ", path: "/" },
    { name: "Dự án", path: "/projects" },
    { name: "Giới thiệu", path: "/about" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center">
            <Code className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            DEVSTUDIO
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors ${
                isActive(link.path) ? "text-cyan-400 font-semibold" : "hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link to="/contact" className="relative group px-6 py-2.5 rounded-full overflow-hidden inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-[1px] bg-black rounded-full transition-colors group-hover:bg-transparent" />
            <span className="relative text-sm font-semibold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors" />
              Liên hệ ngay
            </span>
          </Link>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg ${
                isActive(link.path) ? "text-cyan-400 font-semibold" : "text-white/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-center"
          >
            Liên hệ ngay
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}