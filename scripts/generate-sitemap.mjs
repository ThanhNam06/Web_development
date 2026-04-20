const BASE = "https://devstudio.art";

const staticRoutes = [
  "",
  "/about",
  "/projects",
  "/contact",
  "/privacy",
  "/terms",
];

const projectIds = [1, 2, 3, 4, 5, 6];

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

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries}
${projectEntries}
</urlset>
`;

process.stdout.write(xml);
