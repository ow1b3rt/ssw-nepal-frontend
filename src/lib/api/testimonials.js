import { apiFetch } from "./client";

export async function getTestimonials(params = {}) {
  const { page = 1, limit = 10, ...rest } = params;
  return apiFetch("/testimonials", {
    params: { page, limit, ...rest },
    tags: ["testimonials"],
  });
}
