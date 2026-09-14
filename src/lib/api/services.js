import { ROUTES } from "@/constants/routes/routes";

export async function getServices() {
  try {
    const res = await fetch(ROUTES.API.SERVICES, {
      cache: "no-store",
    });
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    if (data?.success && data?.layout?.items) {
      return data.layout.items;
    }
    return [];
  } catch {
    return [];
  }
}
