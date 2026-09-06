import { ROUTES } from "@/constants/routes/routes";

export async function getGalleryLayout() {
  try {
    const res = await fetch(ROUTES.API.LAYOUT_GALLERY, { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    return data.success ? data.layout : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
