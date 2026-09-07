import { ROUTES } from "@/constants/routes/routes";

export async function getEvents(page = 1, limit = 9) {
  try {
    const res = await fetch(ROUTES.API.EVENTS.HOME(page, limit), { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    return data ?? null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getEvent(slug) {
  try {
    const res = await fetch(ROUTES.API.EVENTS.SINGLE_VIA_SLUG(slug), { cache: "no-store" });

    if (!res.ok) return null;

    const data = await res.json();
    return data.item ?? null;
  } catch {
    return null;
  }
}
