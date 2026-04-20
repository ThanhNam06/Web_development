export type JsonLdObject = Record<string, unknown>;

export type SeoPayload = {
  title: string;
  description: string;
  keywords?: string;
  pathname?: string;
  type?: "website" | "article";
  noindex?: boolean;
  image?: string;
  jsonLd?: JsonLdObject | JsonLdObject[];
};

const SITE_NAME = "DEVSTUDIO";
const DEFAULT_TITLE = "DEVSTUDIO | Thiết kế website và phần mềm theo yêu cầu";
const DEFAULT_DESCRIPTION =
  "DEVSTUDIO cung cấp dịch vụ thiết kế website, phát triển phần mềm và web app theo yêu cầu, tối ưu chuyển đổi và SEO cho doanh nghiệp.";

function getSiteUrl() {
  const envSiteUrl = (import.meta as any)?.env?.VITE_SITE_URL as string | undefined;
  if (envSiteUrl) {
    return envSiteUrl.replace(/\/$/, "");
  }

  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  return "https://devstudio.art";
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertCanonical(url: string) {
  let element = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
}

function upsertJsonLd(jsonLd: JsonLdObject | JsonLdObject[]) {
  const scriptId = "devstudio-jsonld";
  const normalized = Array.isArray(jsonLd) ? jsonLd : [jsonLd];

  let script = document.getElementById(scriptId) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = scriptId;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(normalized);
}

export function applySeo(payload: SeoPayload) {
  const siteUrl = getSiteUrl();
  const pathname = payload.pathname || (typeof window !== "undefined" ? window.location.pathname : "/");
  const canonicalUrl = new URL(pathname, `${siteUrl}/`).toString();
  const title = payload.title || DEFAULT_TITLE;
  const description = payload.description || DEFAULT_DESCRIPTION;
  const type = payload.type || "website";
  const robots = payload.noindex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  document.title = title;

  upsertCanonical(canonicalUrl);
  upsertMeta("name", "description", description);
  upsertMeta("name", "keywords", payload.keywords || "thiết kế website, phát triển phần mềm, web app, DEVSTUDIO");
  upsertMeta("name", "robots", robots);
  upsertMeta("name", "author", "DEVSTUDIO");

  upsertMeta("property", "og:site_name", SITE_NAME);
  upsertMeta("property", "og:locale", "vi_VN");
  upsertMeta("property", "og:type", type);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:url", canonicalUrl);

  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);

  if (payload.image) {
    const ogImage = payload.image.startsWith("http") ? payload.image : new URL(payload.image, `${siteUrl}/`).toString();
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("name", "twitter:image", ogImage);
  }

  const baseSchemas: JsonLdObject[] = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: SITE_NAME,
      url: siteUrl,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      telephone: "0836827260",
      email: "admin.support.software@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bình Dương",
        addressCountry: "VN",
      },
      areaServed: "VN",
      serviceType: [
        "Thiết kế website",
        "Phát triển phần mềm theo yêu cầu",
        "Xây dựng web app và SaaS",
        "UI/UX Design",
      ],
      priceRange: "$$",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: siteUrl,
      inLanguage: "vi-VN",
    },
  ];

  if (payload.jsonLd) {
    const pageSchemas = Array.isArray(payload.jsonLd) ? payload.jsonLd : [payload.jsonLd];
    upsertJsonLd([...baseSchemas, ...pageSchemas]);
  } else {
    upsertJsonLd(baseSchemas);
  }
}
