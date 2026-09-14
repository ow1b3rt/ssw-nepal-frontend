import { ROUTES } from "@/constants/routes/routes";

export async function getTrainings() {
  try {
    const res = await fetch(ROUTES.API.TRAINING, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    if (data?.success && data?.layout?.items) return data.layout.items;
    return [];
  } catch {
    return [];
  }
}
