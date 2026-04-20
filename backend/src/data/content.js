export const siteInfo = {
  brand: "DEVSTUDIO",
  email: "admin.support.software@gmail.com",
  phone: "0836827260",
  location: "Bình Dương, thành phố Hồ Chí Minh",
};

export const projects = [
  {
    id: 1,
    title: "Eco Store UI - Nền tảng TMĐT Xanh",
    category: "E-Commerce",
    img: "https://images.unsplash.com/photo-1577333715735-8fcb0359d906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc3NTk3MTQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-green-500/20 to-emerald-700/20",
    client: "GreenLife Global",
    timeline: "3 Tháng",
    role: "Lead Developer / UI Designer",
    techStack: ["React", "Next.js", "Tailwind CSS", "Stripe API"],
    overview:
      "Eco Store là một nền tảng thương mại điện tử chuyên bán các sản phẩm thân thiện với môi trường. Khách hàng yêu cầu một giao diện hiện đại, tốc độ tải trang siêu tốc và một quy trình thanh toán mượt mà để tăng tỷ lệ chuyển đổi.",
    challenges:
      "Thách thức lớn nhất là xử lý hàng ngàn sản phẩm với nhiều biến thể nhưng vẫn phải đảm bảo tốc độ phản hồi trên các thiết bị di động. Ngoài ra, việc tích hợp cổng thanh toán quốc tế và tính toán phí vận chuyển theo thời gian thực cũng đòi hỏi sự chính xác tuyệt đối.",
    solutions:
      "Sử dụng Next.js với tính năng Static Site Generation (SSG) cho các trang sản phẩm, kết hợp với Redis để cache. Giao diện được xây dựng bằng Tailwind CSS kết hợp với các hiệu ứng tinh tế từ Motion để tạo cảm giác mượt mà nhưng không làm chậm trang.",
    results: [
      "Tăng 45% tỷ lệ chuyển đổi so với website cũ",
      "Tốc độ tải trang dưới 1.5s trên mạng 3G",
      "Giảm 30% tỷ lệ bỏ giỏ hàng nhờ luồng thanh toán 1 bước",
    ],
    mockups: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWNrYWdpbmd8ZW58MXx8fHwxNzc2MTEyMzAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5fGVufDF8fHx8MTc3NjExMjM1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    id: 2,
    title: "Fintech App - Quản lý tài chính cá nhân",
    category: "Mobile UI",
    img: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbnxlbnwxfHx8fDE3NzU5ODI0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-blue-500/20 to-indigo-700/20",
    client: "FinTech Group VN",
    timeline: "5 Tháng",
    role: "Frontend Lead",
    techStack: ["React Native", "TypeScript", "Redux", "Node.js"],
    overview:
      "Ứng dụng di động quản lý tài chính thông minh giúp người dùng theo dõi chi tiêu, lập ngân sách và đầu tư. Giao diện được thiết kế đặc biệt với Dark Mode mặc định để mang lại cảm giác an toàn và cao cấp.",
    challenges:
      "Cần hiển thị dữ liệu tài chính, biểu đồ một cách trực quan, dễ hiểu trên màn hình điện thoại nhỏ. Đồng thời, bảo mật dữ liệu người dùng là ưu tiên hàng đầu.",
    solutions:
      "Áp dụng Recharts để tùy biến các biểu đồ trực quan. Sử dụng kiến trúc Micro-frontend cho React Native để tách biệt các module (Chuyển tiền, Đầu tư, Thống kê) giúp ứng dụng chạy mượt mà và dễ bảo trì.",
    results: [
      "Top 10 ứng dụng tài chính trên App Store VN (T10/2025)",
      "Hơn 100.000 lượt tải xuống trong tháng đầu",
      "Đánh giá trung bình 4.8/5 sao từ người dùng",
    ],
    mockups: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmR8ZW58MXx8fHwxNzc2MDA5MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGFwcHxlbnwxfHx8fDE3NzYxMTI1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    id: 3,
    title: "Neo Agency - Website doanh nghiệp sáng tạo",
    category: "Corporate",
    img: "https://images.unsplash.com/photo-1679173480513-8e2d4f583b86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzc2MDA4NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-purple-500/20 to-pink-700/20",
    client: "Neo Creative",
    timeline: "2 Tháng",
    role: "Fullstack Developer",
    techStack: ["Next.js", "Framer Motion", "GSAP", "Three.js"],
    overview:
      "Neo là một Creative Agency hàng đầu. Họ cần một website khác biệt hoàn toàn so với các đối thủ, thể hiện được sự sáng tạo điên rồ và tư duy nghệ thuật vượt thời gian của họ.",
    challenges:
      "Sử dụng rất nhiều hiệu ứng 3D và WebGL nhưng vẫn phải giữ được điểm SEO cao và thời gian load không quá 2 giây.",
    solutions:
      "Sử dụng Three.js tối ưu hoá render 3D trên Canvas kết hợp với GSAP cho các hiệu ứng cuộn trang (scroll-trigger). Khối lượng ảnh và video lớn được load lazy và nén định dạng WebP/AVIF.",
    results: [
      "Đạt giải thưởng Awwwards 'Site of the Day'",
      "Tăng 200% thời gian trung bình người dùng trên trang",
      "Tăng gấp đôi lượng khách hàng liên hệ qua form",
    ],
    mockups: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRyb3xlbnwxfHx8fDE3NzYxMTMwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdHxlbnwxfHx8fDE3NzYxMTMxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    id: 4,
    title: "Crypto Dashboard - Sàn giao dịch tiền ảo",
    category: "Web App",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmR8ZW58MXx8fHwxNzc2MDA5MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-orange-500/20 to-red-700/20",
    client: "CoinBase Pro",
    timeline: "4 Tháng",
    role: "Senior Frontend Engineer",
    techStack: ["React", "TypeScript", "WebSockets", "Zustand"],
    overview:
      "Hệ thống quản lý và giao dịch tiền điện tử dành cho các nhà đầu tư chuyên nghiệp (Traders). Yêu cầu giao diện Dark Mode tối đa để giảm mỏi mắt khi nhìn màn hình lâu.",
    challenges:
      "Dữ liệu giá cả (tickers) thay đổi hàng mili-giây. Cần cập nhật DOM liên tục mà không gây giật lag (re-render) toàn bộ trang.",
    solutions:
      "Tách biệt các component hiển thị giá và dùng WebSockets kết hợp Zustand để update state cục bộ. Tối ưu hoá việc re-render bằng React.memo và useMemo.",
    results: [
      "Xử lý hơn 10.000 events/giây mượt mà trên trình duyệt",
      "Giao diện chuẩn UI/UX cho trader chuyên nghiệp",
      "Hệ thống ổn định không crash suốt 6 tháng vận hành",
    ],
    mockups: [
      "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXRjb2lufGVufDF8fHx8MTc3NjExMzMwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nfGVufDF8fHx8MTc3NjExMzQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    id: 5,
    title: "Travel Booking - Đặt tour du lịch",
    category: "E-Commerce",
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhcHB8ZW58MXx8fHwxNzc2MDA5MDkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-teal-500/20 to-cyan-700/20",
    client: "Wanderlust",
    timeline: "2.5 Tháng",
    role: "Fullstack Developer",
    techStack: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    overview:
      "Ứng dụng web cho phép người dùng tìm kiếm, so sánh và đặt các tour du lịch độc quyền. Cần một công cụ tìm kiếm mạnh mẽ và giao diện gợi cảm hứng xê dịch.",
    challenges:
      "Hệ thống lọc tìm kiếm phức tạp với nhiều tiêu chí (địa điểm, giá cả, thời tiết, số người).",
    solutions:
      "Xây dựng công cụ tìm kiếm kết hợp Elasticsearch và Next.js API Routes. Thiết kế UI dạng lưới (masonry) để hiển thị ảnh phong cảnh kích thước lớn.",
    results: [
      "Giảm thời gian tìm kiếm tour xuống còn 0.5s",
      "Tăng 60% lượng booking trong mùa du lịch",
      "Giao diện chuẩn Responsive cho mọi thiết bị",
    ],
    mockups: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWx8ZW58MXx8fHwxNzc2MTEzNTAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmV8ZW58MXx8fHwxNzc2MTEzNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    id: 6,
    title: "Minimal Portfolio - Hồ sơ năng lực",
    category: "Corporate",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXJ8ZW58MXx8fHwxNzc2MDA5MTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-gray-500/20 to-slate-700/20",
    client: "John Doe Architecture",
    timeline: "1 Tháng",
    role: "UI/UX Designer",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    overview:
      "Một trang portfolio cá nhân theo phong cách tối giản (minimalism) dành cho một kiến trúc sư nổi tiếng, nơi hình ảnh công trình lên tiếng thay cho câu chữ.",
    challenges:
      "Làm thế nào để trang web không bị nhàm chán khi chỉ sử dụng 2 màu trắng/đen và rất ít text.",
    solutions:
      "Tập trung hoàn toàn vào Typography cao cấp và các hiệu ứng hover (micro-interactions). Sử dụng layout bất đối xứng (asymmetrical layout) để tạo điểm nhấn thị giác.",
    results: [
      "Khẳng định thương hiệu cá nhân đẳng cấp",
      "Website đạt hiệu năng 100/100 trên Lighthouse",
      "Thiết kế trở thành xu hướng tham khảo trên Dribbble",
    ],
    mockups: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MTEzNzAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXNtfGVufDF8fHx8MTc3NjExMzgwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
];

export const projectCards = projects.map((p) => ({
  id: p.id,
  title: p.title.split(" - ")[0],
  category: p.category,
  img: p.img,
  color: p.color,
}));

export const categories = [
  "Tất cả",
  ...Array.from(new Set(projectCards.map((p) => p.category))),
];
