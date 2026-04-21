export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  focusKeyword: string;
  category: "BOFU" | "MOFU" | "TOFU";
  publishedDay: number;
  readTime: string;
  internalLinks: Array<{ label: string; to: string }>;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
  faqs?: BlogFaq[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "bao-gia-thiet-ke-website-doanh-nghiep",
    title: "Báo giá thiết kế website doanh nghiệp: Cách tính chi phí minh bạch",
    metaDescription:
      "Bảng giá làm website doanh nghiệp theo phạm vi thực tế: hạng mục bắt buộc, chi phí phát sinh và cách tối ưu ngân sách mà vẫn giữ hiệu quả.",
    excerpt:
      "Bài viết giúp doanh nghiệp hiểu rõ các cấu phần tạo nên báo giá website để tránh chi phí ẩn và ra quyết định nhanh hơn.",
    focusKeyword: "báo giá làm website doanh nghiệp",
    category: "BOFU",
    publishedDay: 1,
    readTime: "8 phút",
    internalLinks: [
      { label: "Trang chủ dịch vụ DEVSTUDIO", to: "/" },
      { label: "Xem dự án đã triển khai", to: "/projects" },
      { label: "Liên hệ nhận báo giá", to: "/contact" },
    ],
    sections: [
      {
        heading: "Vì sao báo giá website thường chênh lệch lớn?",
        paragraphs: [
          "Một website có thể cùng giao diện nhưng khác hoàn toàn ở kiến trúc kỹ thuật, hiệu năng, bảo mật và khả năng mở rộng. Đó là lý do mức giá giữa các đơn vị có thể chênh nhau đáng kể.",
          "Khi nhận báo giá, doanh nghiệp nên yêu cầu tách rõ phần giao diện, backend, tích hợp bên thứ ba, tối ưu SEO kỹ thuật và bảo hành vận hành để tránh hiểu sai phạm vi.",
        ],
      },
      {
        heading: "Khung ngân sách tham khảo theo mục tiêu",
        paragraphs: [
          "Website giới thiệu doanh nghiệp: ưu tiên tốc độ, nội dung rõ ràng, CTA tốt và tracking đầy đủ. Mức ngân sách thường thấp hơn web app tùy biến.",
          "Web app hoặc hệ thống SaaS: chi phí tăng theo số module nghiệp vụ, phân quyền người dùng, tích hợp thanh toán, email automation và yêu cầu bảo mật dữ liệu.",
        ],
      },
      {
        heading: "Checklist giúp chốt báo giá nhanh trong 1 buổi",
        paragraphs: [
          "Chuẩn bị mục tiêu kinh doanh chính, nhóm người dùng mục tiêu, danh sách tính năng bắt buộc và mốc thời gian cần go-live.",
          "Nếu đã có nội dung cơ bản, quá trình ước lượng sẽ nhanh hơn và giảm rủi ro phát sinh trong giai đoạn triển khai.",
        ],
      },
    ],
    faqs: [
      {
        question: "Làm sao để nhận báo giá nhanh trong 24h?",
        answer:
          "Bạn chỉ cần gửi mục tiêu website, số trang dự kiến và tính năng bắt buộc qua trang Liên hệ. DEVSTUDIO sẽ phản hồi bản ước lượng sơ bộ trong 24h.",
      },
      {
        question: "Chi phí có thay đổi trong quá trình làm không?",
        answer:
          "Nếu phạm vi công việc giữ nguyên theo tài liệu đã chốt thì chi phí không đổi. Chỉ phát sinh khi bổ sung tính năng mới ngoài phạm vi ban đầu.",
      },
    ],
  },
  {
    slug: "quy-trinh-phat-trien-phan-mem-theo-yeu-cau",
    title: "Quy trình phát triển phần mềm theo yêu cầu từ A-Z",
    metaDescription:
      "Quy trình triển khai phần mềm theo yêu cầu gồm discovery, thiết kế, phát triển, kiểm thử và vận hành để giảm rủi ro cho doanh nghiệp.",
    excerpt:
      "Nắm rõ quy trình giúp bạn kiểm soát tiến độ, ngân sách và chất lượng ngay từ giai đoạn đầu của dự án phần mềm.",
    focusKeyword: "quy trình phát triển phần mềm theo yêu cầu",
    category: "MOFU",
    publishedDay: 4,
    readTime: "10 phút",
    internalLinks: [
      { label: "Tìm hiểu năng lực đội ngũ", to: "/about" },
      { label: "Xem case study dự án", to: "/projects" },
      { label: "Trao đổi yêu cầu dự án", to: "/contact" },
    ],
    sections: [
      {
        heading: "Bước 1: Discovery và xác định phạm vi",
        paragraphs: [
          "Đây là bước quan trọng nhất để tránh làm sai hướng. Hai bên cần thống nhất mục tiêu kinh doanh, KPI và danh sách tính năng bắt buộc trước khi bắt đầu code.",
          "Một tài liệu scope ngắn gọn nhưng rõ ràng sẽ giúp dự án tiết kiệm rất nhiều thời gian chỉnh sửa về sau.",
        ],
      },
      {
        heading: "Bước 2: Thiết kế luồng và giao diện",
        paragraphs: [
          "Thiết kế UI/UX nên bám sát hành vi người dùng thật. Ưu tiên luồng thao tác ngắn, ít bước, dễ hiểu và nhất quán giữa desktop và mobile.",
          "Ở giai đoạn này cần thống nhất đầy đủ các trạng thái quan trọng: loading, empty state, error state và thông báo thành công.",
        ],
      },
      {
        heading: "Bước 3: Phát triển, QA, release và theo dõi",
        paragraphs: [
          "Dự án nên chia milestone nhỏ để demo liên tục, kiểm thử sớm và giảm rủi ro dồn lỗi vào cuối kỳ.",
          "Sau khi release, cần theo dõi dữ liệu thực tế bằng GA4 và log backend để tối ưu liên tục theo hành vi người dùng.",
        ],
      },
    ],
  },
  {
    slug: "website-chuan-seo-can-gi",
    title: "Website chuẩn SEO cần gì? 12 hạng mục kỹ thuật phải có",
    metaDescription:
      "Danh sách 12 hạng mục SEO kỹ thuật bắt buộc cho website mới: metadata, sitemap, robots, schema, tốc độ tải, internal link và tracking.",
    excerpt:
      "Một checklist kỹ thuật dễ áp dụng để website được crawl và index ổn định ngay từ tháng đầu tiên.",
    focusKeyword: "website chuẩn SEO cần những gì",
    category: "MOFU",
    publishedDay: 8,
    readTime: "9 phút",
    internalLinks: [
      { label: "Trang chủ DEVSTUDIO", to: "/" },
      { label: "Dự án đã tối ưu SEO", to: "/projects" },
      { label: "Liên hệ audit SEO", to: "/contact" },
    ],
    sections: [
      {
        heading: "Nền tảng index: robots, sitemap, canonical",
        paragraphs: [
          "Google cần biết trang nào nên crawl và phiên bản URL chuẩn để index chính xác. Vì vậy robots.txt, sitemap.xml và canonical là bộ ba bắt buộc.",
          "Với website dùng SPA, cần kiểm tra kỹ việc serve robots/sitemap ở production để tránh bị rewrite sang index.html.",
        ],
      },
      {
        heading: "Metadata và structured data",
        paragraphs: [
          "Mỗi trang quan trọng cần có title, description, Open Graph, Twitter card và schema phù hợp để tăng khả năng hiển thị rich result.",
          "Đừng lặp lại title/description giống nhau cho mọi trang vì sẽ làm yếu tín hiệu ngữ nghĩa và CTR.",
        ],
      },
      {
        heading: "Tối ưu trải nghiệm và tốc độ",
        paragraphs: [
          "Core Web Vitals, bố cục dễ đọc và internal link hợp lý ảnh hưởng trực tiếp đến khả năng giữ người dùng ở lại trang.",
          "SEO bền vững luôn đi cùng UX tốt: nội dung đúng nhu cầu, điều hướng rõ và CTA tự nhiên.",
        ],
      },
    ],
    faqs: [
      {
        question: "Website mới mất bao lâu để có index đầu tiên?",
        answer:
          "Nếu setup kỹ thuật chuẩn và submit URL qua Search Console, thường có tín hiệu index đầu tiên trong vài ngày đến vài tuần tùy mức độ cạnh tranh.",
      },
      {
        question: "Có cần schema cho mọi trang không?",
        answer:
          "Không cần nhồi schema cho tất cả trang. Nên dùng đúng loại schema cho trang phù hợp như Organization, WebSite, FAQPage hoặc Article.",
      },
    ],
  },
  {
    slug: "so-sanh-wordpress-va-nextjs",
    title: "So sánh WordPress và Next.js cho website doanh nghiệp",
    metaDescription:
      "Nên chọn WordPress hay Next.js? Bài viết phân tích theo chi phí vận hành, SEO kỹ thuật, tốc độ, bảo trì và khả năng mở rộng.",
    excerpt:
      "Không có nền tảng tốt nhất cho mọi dự án. Quan trọng là chọn đúng theo mục tiêu tăng trưởng của doanh nghiệp.",
    focusKeyword: "so sánh wordpress và nextjs cho doanh nghiệp",
    category: "MOFU",
    publishedDay: 12,
    readTime: "11 phút",
    internalLinks: [
      { label: "Giới thiệu phương pháp triển khai", to: "/about" },
      { label: "Dự án thực tế từ DEVSTUDIO", to: "/projects" },
      { label: "Nhận tư vấn kiến trúc", to: "/contact" },
    ],
    sections: [
      {
        heading: "Khi nào nên chọn WordPress",
        paragraphs: [
          "WordPress phù hợp khi doanh nghiệp cần go-live nhanh, ngân sách ban đầu vừa phải và đội nội dung cần tự cập nhật bài viết thường xuyên.",
          "Tuy nhiên cần kiểm soát plugin chặt chẽ để tránh nặng hệ thống và rủi ro bảo mật.",
        ],
      },
      {
        heading: "Khi nào nên chọn Next.js",
        paragraphs: [
          "Next.js phù hợp với website ưu tiên hiệu năng cao, khả năng tùy biến sâu và mở rộng thành web app trong tương lai.",
          "Mức đầu tư ban đầu có thể cao hơn nhưng đổi lại là trải nghiệm nhanh, ổn định và dễ tối ưu kỹ thuật dài hạn.",
        ],
      },
      {
        heading: "Khung quyết định trong 15 phút",
        paragraphs: [
          "Nếu mục tiêu chính là nội dung + marketing nhanh: WordPress có lợi thế. Nếu mục tiêu là sản phẩm số dài hạn và tích hợp phức tạp: Next.js thường phù hợp hơn.",
          "Trong thực tế, nhiều doanh nghiệp bắt đầu bằng website nhẹ rồi nâng cấp dần theo giai đoạn tăng trưởng.",
        ],
      },
    ],
  },
  {
    slug: "checklist-website-doanh-nghiep",
    title: "Checklist website doanh nghiệp trước khi chạy quảng cáo",
    metaDescription:
      "Checklist thực chiến trước khi đổ ngân sách quảng cáo: tốc độ, CTA, tracking, biểu mẫu liên hệ, bằng chứng uy tín và trang đích chuyển đổi.",
    excerpt:
      "Đừng chạy ads khi website chưa sẵn sàng. Checklist này giúp bạn tránh lãng phí ngân sách trong 30 ngày đầu.",
    focusKeyword: "checklist website doanh nghiệp",
    category: "TOFU",
    publishedDay: 16,
    readTime: "7 phút",
    internalLinks: [
      { label: "Trang chủ DEVSTUDIO", to: "/" },
      { label: "Tham khảo dự án chuyển đổi cao", to: "/projects" },
      { label: "Tối ưu landing cùng DEVSTUDIO", to: "/contact" },
    ],
    sections: [
      {
        heading: "Nhóm hạ tầng bắt buộc",
        paragraphs: [
          "Website cần HTTPS, tốc độ tải ổn định, giao diện mobile tốt và biểu mẫu gửi dữ liệu chính xác về hệ thống.",
          "Nếu form lỗi hoặc không có tracking sự kiện, doanh nghiệp sẽ mất dữ liệu lead ngay từ ngày đầu chạy quảng cáo.",
        ],
      },
      {
        heading: "Nhóm nội dung và chuyển đổi",
        paragraphs: [
          "Tiêu đề phải nói rõ lợi ích, CTA nổi bật và bằng chứng uy tín xuất hiện đúng vị trí để tăng tỷ lệ chuyển đổi.",
          "Nội dung nên tập trung giải quyết pain point thay vì mô tả chung chung về dịch vụ.",
        ],
      },
      {
        heading: "Nhóm đo lường",
        paragraphs: [
          "Thiết lập GA4, theo dõi page_view, click CTA, submit form và nguồn traffic để biết kênh nào mang lại khách hàng tiềm năng chất lượng.",
          "Không đo lường thì không tối ưu được chi phí marketing.",
        ],
      },
    ],
  },
  {
    slug: "core-web-vitals-cho-website-dich-vu",
    title: "Core Web Vitals cho website dịch vụ: Cách cải thiện nhanh",
    metaDescription:
      "Hướng dẫn tối ưu LCP, CLS, INP cho website dịch vụ để tăng trải nghiệm người dùng và củng cố tín hiệu SEO kỹ thuật.",
    excerpt:
      "Tối ưu Core Web Vitals không chỉ để đạt điểm đẹp mà còn giúp giảm bounce và tăng tỷ lệ liên hệ.",
    focusKeyword: "core web vitals cho website dịch vụ",
    category: "TOFU",
    publishedDay: 20,
    readTime: "8 phút",
    internalLinks: [
      { label: "Xem trang chủ tối ưu tốc độ", to: "/" },
      { label: "Xem case study hiệu năng", to: "/projects" },
      { label: "Nhận tư vấn tối ưu tốc độ", to: "/contact" },
    ],
    sections: [
      {
        heading: "Ưu tiên tối ưu LCP trước",
        paragraphs: [
          "Ảnh hero và tài nguyên render đầu trang thường là nguyên nhân chính kéo chậm LCP. Hãy tối ưu ảnh, preload hợp lý và giảm JavaScript không cần thiết.",
          "Chỉ cần cải thiện LCP rõ rệt đã có thể giúp trải nghiệm trang chủ tốt hơn đáng kể.",
        ],
      },
      {
        heading: "Ổn định bố cục để giảm CLS",
        paragraphs: [
          "Khai báo kích thước ảnh/video từ đầu và tránh chèn phần tử mới làm nhảy layout trong lúc người dùng đang đọc nội dung.",
          "Một giao diện ổn định giúp tăng cảm giác tin cậy và chuyên nghiệp cho thương hiệu.",
        ],
      },
      {
        heading: "INP và trải nghiệm tương tác",
        paragraphs: [
          "Giảm tác vụ JavaScript nặng, chia nhỏ chunk và ưu tiên các tương tác chính như menu, form, button CTA.",
          "Với website dịch vụ, phản hồi nhanh khi người dùng thao tác là yếu tố then chốt để giữ khách hàng tiềm năng.",
        ],
      },
    ],
  },
  {
    slug: "cach-de-website-len-google-nhanh",
    title: "Cách để website lên Google nhanh trong giai đoạn mới launch",
    metaDescription:
      "Hướng dẫn thực hành để website mới xuất hiện trên Google nhanh hơn: cấu hình kỹ thuật, submit sitemap và request indexing đúng cách.",
    excerpt:
      "Đây là checklist ưu tiên cho 2 tuần đầu sau khi launch để tăng tốc độ được crawl và index.",
    focusKeyword: "cách để website lên google nhanh",
    category: "TOFU",
    publishedDay: 24,
    readTime: "8 phút",
    internalLinks: [
      { label: "Trang chủ DEVSTUDIO", to: "/" },
      { label: "Giới thiệu năng lực triển khai", to: "/about" },
      { label: "Liên hệ xử lý SEO kỹ thuật", to: "/contact" },
    ],
    sections: [
      {
        heading: "Chuẩn hóa technical SEO trước khi submit",
        paragraphs: [
          "Hãy xác nhận title/description/canonical hoạt động đúng trên từng trang quan trọng và robots không chặn nhầm đường dẫn cần index.",
          "Sitemap cần chứa URL thật, trả về mã 200 và có thể truy cập công khai.",
        ],
      },
      {
        heading: "Dùng GSC đúng thứ tự để tiết kiệm thời gian",
        paragraphs: [
          "Submit sitemap trước, sau đó dùng URL Inspection để request indexing cho các trang ưu tiên chuyển đổi: trang chủ, dịch vụ, dự án, liên hệ.",
          "Theo dõi trạng thái crawl trong mục Pages và xử lý lỗi ngay khi có cảnh báo.",
        ],
      },
      {
        heading: "Đẩy tín hiệu nội dung trong 30 ngày đầu",
        paragraphs: [
          "Xuất bản đều 2 bài/tuần, liên kết nội bộ rõ ràng về các trang dịch vụ chính và cập nhật nội dung mới có giá trị thực cho người đọc.",
          "Tần suất ổn định giúp Google hiểu website đang được vận hành tích cực.",
        ],
      },
    ],
    faqs: [
      {
        question: "Request indexing bao nhiêu URL mỗi ngày là hợp lý?",
        answer:
          "Chỉ nên ưu tiên các URL quan trọng vừa cập nhật. Không cần submit hàng loạt URL chất lượng thấp vì không giúp index nhanh hơn.",
      },
      {
        question: "Nếu đã submit sitemap nhưng chưa index thì sao?",
        answer:
          "Hãy kiểm tra chất lượng nội dung, internal link, tốc độ tải và trạng thái crawl trong Search Console. Index cần thời gian và phụ thuộc mức độ cạnh tranh.",
      },
    ],
  },
  {
    slug: "thiet-ke-landing-page-chuyen-doi-cao",
    title: "Thiết kế landing page chuyển đổi cao cho dịch vụ B2B",
    metaDescription:
      "Cấu trúc landing page giúp tăng tỷ lệ chuyển đổi cho dịch vụ B2B: thông điệp rõ, bằng chứng mạnh, CTA đúng vị trí và form ngắn gọn.",
    excerpt:
      "Landing page tốt cần vừa dễ đọc vừa dẫn dắt hành động rõ ràng. Bài viết này đưa ra khung triển khai thực tế.",
    focusKeyword: "landing page chuyển đổi cao",
    category: "BOFU",
    publishedDay: 28,
    readTime: "9 phút",
    internalLinks: [
      { label: "Xem dịch vụ tại DEVSTUDIO", to: "/" },
      { label: "Tham khảo dự án thực tế", to: "/projects" },
      { label: "Nhận tư vấn landing page", to: "/contact" },
    ],
    sections: [
      {
        heading: "Phần đầu trang quyết định 80% hiệu quả",
        paragraphs: [
          "Tiêu đề cần nói rõ kết quả khách hàng nhận được, không chỉ mô tả dịch vụ. Subheadline nên bổ sung bằng lợi ích định lượng nếu có.",
          "CTA đầu trang phải nổi bật và dẫn tới một hành động duy nhất để tránh phân tán.",
        ],
      },
      {
        heading: "Bằng chứng và giảm rủi ro quyết định",
        paragraphs: [
          "Case study, testimonial và quy trình làm việc rõ ràng giúp tăng độ tin cậy trước khi khách hàng để lại thông tin.",
          "Thêm FAQ ở cuối trang giúp xử lý phản đối phổ biến và giảm tỷ lệ thoát ở bước cân nhắc.",
        ],
      },
      {
        heading: "Tối ưu form để tăng số lượng lead",
        paragraphs: [
          "Form càng ngắn càng dễ chuyển đổi. Chỉ giữ các trường thật sự cần cho bước tư vấn đầu tiên.",
          "Sau khi thu lead, có thể dùng email hoặc cuộc gọi ngắn để khai thác thêm nhu cầu chi tiết.",
        ],
      },
    ],
    faqs: [
      {
        question: "Một landing page B2B nên dài bao nhiêu?",
        answer:
          "Độ dài nên đủ để giải thích giá trị, năng lực và bằng chứng. Không có số dòng cố định; quan trọng là mỗi phần đều phục vụ quyết định liên hệ.",
      },
      {
        question: "Có nên đặt nhiều CTA trên cùng trang không?",
        answer:
          "Có thể lặp lại cùng một CTA tại nhiều vị trí, nhưng không nên dùng nhiều mục tiêu khác nhau vì dễ làm giảm tỷ lệ chuyển đổi.",
      },
    ],
  },
];

export const contentPlan30Days = blogPosts
  .slice()
  .sort((a, b) => a.publishedDay - b.publishedDay)
  .map((post) => ({
    day: post.publishedDay,
    title: post.title,
    slug: post.slug,
    internalLinks: post.internalLinks,
    hasFaqSchema: Boolean(post.faqs?.length),
  }));
