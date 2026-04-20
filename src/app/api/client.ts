const rawBase = (import.meta as any)?.env?.VITE_API_BASE_URL as string | undefined;

export const API_BASE_URL = (rawBase || "http://localhost:4000").replace(/\/$/, "");

export type ProjectCard = {
  id: number;
  title: string;
  category: string;
  img: string;
  color: string;
};

export type ProjectDetail = ProjectCard & {
  client: string;
  timeline: string;
  role: string;
  techStack: string[];
  overview: string;
  challenges: string;
  solutions: string;
  results: string[];
  mockups: string[];
};

type ProjectListResponse = {
  items: ProjectCard[];
  categories: string[];
  total: number;
};

type ContactPayload = {
  name: string;
  email: string;
  service?: string;
  budget?: string;
  message: string;
};

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    ...init,
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(data?.message || `Request failed: ${response.status}`);
  }

  return data as T;
}

export function getProjects(params?: { category?: string; limit?: number }) {
  const query = new URLSearchParams();
  if (params?.category && params.category !== "Tất cả") {
    query.set("category", params.category);
  }
  if (params?.limit && params.limit > 0) {
    query.set("limit", String(params.limit));
  }

  const suffix = query.toString() ? `?${query.toString()}` : "";
  return apiFetch<ProjectListResponse>(`/api/projects${suffix}`);
}

export function getProjectById(id: number) {
  return apiFetch<ProjectDetail>(`/api/projects/${id}`);
}

export function submitContact(payload: ContactPayload) {
  return apiFetch<{ message: string; leadId: string }>(`/api/contact`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function getMeta() {
  return apiFetch<{ brand: string; contact: { email: string; phone: string; location: string } }>(`/api/meta`);
}
