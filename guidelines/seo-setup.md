# DEVSTUDIO SEO Quick Start

## 1) Cấu hình env (Vercel Project -> Settings -> Environment Variables)
- VITE_GA_MEASUREMENT_ID=G-0KHCMGQ016
- VITE_SITE_URL=https://devstudio.art

Sau khi thêm env, redeploy production.

## 2) Các hạng mục SEO đã được thêm vào code
- Dynamic SEO manager cho từng route:
  - title, description, canonical
  - robots, OpenGraph, Twitter tags
  - JSON-LD (ProfessionalService, WebSite, FAQ)
- robots.txt tại `public/robots.txt`
- sitemap.xml tại `public/sitemap.xml`
- script tạo sitemap: `npm run sitemap`
- GA4 page view tracking qua `GoogleAnalytics` component.

## 3) Submit trong Google Search Console
1. Mở Search Console property của domain `sc-domain:devstudio.art`
2. Vào Sitemaps
3. Submit: `sitemap.xml`
4. Dùng URL Inspection để Request indexing cho:
   - /
   - /about
   - /projects
   - /contact

## 4) Theo dõi sau triển khai
- Coverage/Pages: kiểm tra trạng thái indexed
- Core Web Vitals: theo dõi mobile + desktop
- Search results: impression/click/query theo tuần

## 5) Gợi ý tăng thứ hạng trong 4-12 tuần
- Mỗi tuần xuất bản 2 bài blog theo file keyword strategy
- Thêm liên kết nội bộ từ blog -> trang dịch vụ -> liên hệ
- Mỗi case study dự án thêm 1 landing có từ khóa riêng
- Tối ưu ảnh (WebP/AVIF) và tốc độ LCP cho trang chủ
