import { ROUTES } from "@/constants/routes/routes";

export async function getEvents(page = 1, limit = 9) {
  try {
    console.log("try");
    const res = await fetch(ROUTES.API.EVENTS(page, limit), { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    return data ?? null;
  } catch (error) {
    console.log("bababoe");
    console.error(error);
    return null;
  }
}
