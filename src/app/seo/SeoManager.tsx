import { useEffect } from "react";
import { useLocation } from "react-router";
import { applySeo, type JsonLdObject } from "./applySeo";
import { blogPosts } from "../content/blogPosts";

type SeoConfig = {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  jsonLd?: JsonLdObject | JsonLdObject[];
};

const FALLBACK_SEO: SeoConfig = {
  title: "DEVSTUDIO | Thiết kế website và phần mềm theo yêu cầu",
  description:
    "DEVSTUDIO cung cấp dịch vụ thiết kế website, phát triển phần mềm và web app theo yêu cầu, tối ưu chuyển đổi và SEO cho doanh nghiệp.",
  keywords:
    "thiết kế website, phát triển phần mềm, web app, SaaS, UI UX, DEVSTUDIO, dịch vụ phần mềm",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  noindex: true,
};

const SEO_BY_PATH: Record<string, SeoConfig> = {
  "/": {
    title: "DEVSTUDIO | Thiết kế website và phần mềm theo yêu cầu",
    description:
      "DEVSTUDIO chuyên thiết kế website doanh nghiệp, phát triển web app và phần mềm theo yêu cầu giúp tăng chuyển đổi và doanh thu.",
    keywords:
      "thiết kế website chuyên nghiệp, phát triển phần mềm theo yêu cầu, lập trình web app, làm website doanh nghiệp",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "DEVSTUDIO cung cấp những dịch vụ gì?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DEVSTUDIO cung cấp dịch vụ thiết kế website doanh nghiệp, phát triển web app/SaaS, UI/UX Design và bảo trì hệ thống.",
          },
        },
        {
          "@type": "Question",
          name: "Thời gian hoàn thành một website là bao lâu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tuỳ phạm vi dự án, thời gian thường từ 2 đến 8 tuần. Với hệ thống phức tạp có thể dài hơn và sẽ được thống nhất theo milestone.",
          },
        },
        {
          "@type": "Question",
          name: "DEVSTUDIO có hỗ trợ SEO không?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Có. Mọi website đều được tối ưu nền tảng SEO kỹ thuật: metadata, schema, sitemap, robots, tốc độ tải và cấu trúc nội dung chuẩn index.",
          },
        },
      ],
    },
  },
  "/about": {
    title: "Giới thiệu DEVSTUDIO | Đội ngũ thiết kế web & phần mềm",
    description:
      "Tìm hiểu về DEVSTUDIO: kinh nghiệm triển khai dự án web, quy trình làm việc và năng lực phát triển giải pháp số cho doanh nghiệp.",
    keywords:
      "giới thiệu devstudio, công ty thiết kế website, đội ngũ lập trình phần mềm, đơn vị làm web uy tín",
    image: "https://images.unsplash.com/photo-1753715613373-90b1ea010731?auto=format&fit=crop&w=1200&q=80",
  },
  "/projects": {
    title: "Dự án tiêu biểu | DEVSTUDIO Portfolio thiết kế website & phần mềm",
    description:
      "Xem các dự án tiêu biểu DEVSTUDIO đã triển khai: website doanh nghiệp, web app, fintech dashboard và nền tảng thương mại điện tử.",
    keywords:
      "portfolio thiết kế website, dự án web app, dự án phần mềm theo yêu cầu, case study devstudio",
    image: "https://images.unsplash.com/photo-1577333715735-8fcb0359d906?auto=format&fit=crop&w=1200&q=80",
  },
  "/contact": {
    title: "Liên hệ DEVSTUDIO | Nhận tư vấn website & phần mềm",
    description:
      "Liên hệ DEVSTUDIO để nhận tư vấn giải pháp thiết kế website, phát triển phần mềm và báo giá nhanh trong 24h.",
    keywords:
      "liên hệ thiết kế website, báo giá làm web, tư vấn phần mềm theo yêu cầu, devstudio contact",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  "/blog": {
    title: "Blog SEO DEVSTUDIO | Kiến thức thiết kế website & phần mềm",
    description:
      "Blog DEVSTUDIO chia sẻ kiến thức SEO, thiết kế website, phát triển phần mềm và chiến lược tăng chuyển đổi cho doanh nghiệp.",
    keywords:
      "blog thiết kế website, blog seo doanh nghiệp, kiến thức phát triển phần mềm, devstudio blog",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
  },
  "/seo-plan-30-days": {
    title: "Kế hoạch SEO 30 ngày đầu | DEVSTUDIO",
    description:
      "Kế hoạch content SEO 30 ngày đầu cho DEVSTUDIO với lịch xuất bản, slug, internal links và FAQ schema cho từng bài.",
    keywords:
      "kế hoạch seo 30 ngày, content plan seo, lịch đăng bài seo, devstudio seo plan",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  "/privacy": {
    title: "Chính sách bảo mật | DEVSTUDIO",
    description:
      "Chính sách bảo mật dữ liệu khách hàng khi sử dụng website và gửi yêu cầu tư vấn dịch vụ tại DEVSTUDIO.",
    keywords: "chính sách bảo mật devstudio, bảo mật dữ liệu khách hàng",
    noindex: false,
  },
  "/terms": {
    title: "Điều khoản dịch vụ | DEVSTUDIO",
    description:
      "Điều khoản sử dụng website và nguyên tắc hợp tác dịch vụ thiết kế website, phát triển phần mềm tại DEVSTUDIO.",
    keywords: "điều khoản dịch vụ devstudio, điều khoản hợp tác làm website",
    noindex: false,
  },
};

function getProjectSeo(pathname: string): SeoConfig | null {
  if (!pathname.startsWith("/projects/")) return null;

  const projectId = pathname.replace("/projects/", "");
  if (!projectId) return null;

  return {
    title: `Dự án #${projectId} | DEVSTUDIO Portfolio`,
    description:
      "Chi tiết dự án thực tế DEVSTUDIO đã triển khai: quy trình, công nghệ sử dụng, thách thức và kết quả đạt được.",
    keywords:
      "chi tiết dự án website, case study phần mềm, portfolio devstudio, dự án lập trình web",
    type: "article",
  };
}

function getBlogSeo(pathname: string): SeoConfig | null {
  if (!pathname.startsWith("/blog/")) return null;

  const slug = pathname.replace("/blog/", "");
  if (!slug) return null;

  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) {
    return {
      title: "Blog | DEVSTUDIO",
      description: "Nội dung chia sẻ về thiết kế website, SEO và phát triển phần mềm cho doanh nghiệp.",
      keywords: "blog devstudio, blog seo, thiết kế website",
      noindex: true,
    };
  }

  const articleSchema: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: `2026-04-${String(post.publishedDay).padStart(2, "0")}`,
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "DEVSTUDIO",
    },
    publisher: {
      "@type": "Organization",
      name: "DEVSTUDIO",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://devstudio.art/blog/${post.slug}`,
    },
    inLanguage: "vi-VN",
  };

  const faqSchema = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return {
    title: `${post.title} | DEVSTUDIO`,
    description: post.metaDescription,
    keywords: `${post.focusKeyword}, thiết kế website, phát triển phần mềm, devstudio`,
    type: "article",
    jsonLd: faqSchema ? [articleSchema, faqSchema] : articleSchema,
  };
}

export function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const dynamicProjectSeo = getProjectSeo(location.pathname);
    const dynamicBlogSeo = getBlogSeo(location.pathname);
    const config = dynamicBlogSeo || dynamicProjectSeo || SEO_BY_PATH[location.pathname] || FALLBACK_SEO;

    applySeo({
      title: config.title,
      description: config.description,
      keywords: config.keywords,
      image: config.image,
      noindex: config.noindex,
      type: config.type,
      pathname: location.pathname,
      jsonLd: config.jsonLd,
    });
  }, [location.pathname]);

  return null;
}
