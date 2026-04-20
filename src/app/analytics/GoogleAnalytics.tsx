import { useEffect } from "react";
import { useLocation } from "react-router";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID =
  ((import.meta as any)?.env?.VITE_GA_MEASUREMENT_ID as string | undefined) || "G-0KHCMGQ016";

function injectGaScript(measurementId: string) {
  if (document.getElementById("ga-loader")) return;

  const script = document.createElement("script");
  script.id = "ga-loader";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer.push(args as unknown as Record<string, unknown>);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: false,
  });
}

export function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    injectGaScript(GA_MEASUREMENT_ID);
  }, []);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window.gtag !== "function") return;

    window.gtag("event", "page_view", {
      page_path: `${location.pathname}${location.search}`,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [location.pathname, location.search]);

  return null;
}
