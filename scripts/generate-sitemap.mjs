const BASE = "https://devstudio.art";

const staticRoutes = [
  "",
  "/about",
  "/projects",
  "/contact",
  "/blog",
  "/seo-plan-30-days",
  "/privacy",
  "/terms",
];

const projectIds = [1, 2, 3, 4, 5, 6];

const blogSlugs = [
  "bao-gia-thiet-ke-website-doanh-nghiep",
  "quy-trinh-phat-trien-phan-mem-theo-yeu-cau",
  "website-chuan-seo-can-gi",
  "so-sanh-wordpress-va-nextjs",
  "checklist-website-doanh-nghiep",
  "core-web-vitals-cho-website-dich-vu",
  "cach-de-website-len-google-nhanh",
  "thiet-ke-landing-page-chuyen-doi-cao",
];
const now = new Date().toISOString();

const staticEntries = staticRoutes
  .map((path) => {
    const loc = `${BASE}${path}`;
    const changefreq = path === "" || path === "/projects" ? "weekly" : "monthly";
    const priority = path === "" ? "1.0" : path === "/projects" || path === "/contact" ? "0.9" : "0.7";

    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join("\n");

const projectEntries = projectIds
  .map((id) => `  <url>\n    <loc>${BASE}/projects/${id}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`)
  .join("\n");

const blogEntries = blogSlugs
  .map((slug) => `  <url>\n    <loc>${BASE}/blog/${slug}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`)
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries}
${projectEntries}
${blogEntries}
</urlset>
`;

process.stdout.write(xml);
