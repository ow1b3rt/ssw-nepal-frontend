import { env } from "@/config/env";

const API_BASE = env.apiUrl;

const BASE_URL = API_BASE;

export async function apiFetch(path, { params, revalidate, tags, ...init } = {}) {
  const base = BASE_URL.endsWith("/") ? BASE_URL : `${BASE_URL}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  const url = new URL(cleanPath, base);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) url.searchParams.set(key, String(value));
    });
  }

  const res = await fetch(url.toString(), {
    ...init,
    ...(revalidate !== undefined || tags ? { next: { revalidate, tags } } : {}),
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${res.statusText} (${url})`);
  }

  return res.json();
}
