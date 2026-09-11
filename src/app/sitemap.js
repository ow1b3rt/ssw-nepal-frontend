import { env } from "@/config/env";
import { ROUTES } from "@/constants/routes/routes";
import { getNavData } from "@/lib/api/navitems";

const BASE_URL = env.hostUrl;

// Fetches every page of a paginated list endpoint and returns the flat item array.
async function fetchAllPages(endpointFn, limit = 50) {
  const items = [];
  let page = 1;
  let totalPages = 1;

  do {
    try {
      const res = await fetch(endpointFn(page, limit), { cache: "no-store" });
      if (!res.ok) break;
      const data = await res.json();
      items.push(...(data?.items ?? []));
      totalPages = data?.totalPages ?? 1;
    } catch {
      break;
    }
    page += 1;
  } while (page <= totalPages);

  return items;
}

export default async function sitemap() {
  const staticRoutes = [
    ROUTES.HOME,
    ROUTES.ABOUT_US.HOME,
    ROUTES.ABOUT_US.WHY_CHOOSE_US,
    ROUTES.ABOUT_US.SUCCESS_STORY,
    ROUTES.ABOUT_US.MESSAGE_FROM_CHAIRMAN,
    ROUTES.ABOUT_US.CONTACT_US,
    ROUTES.LANGUAGE.HOME,
    ROUTES.TRAININGS.HOME,
    ROUTES.SERVICES.HOME,
    "/blogs",
    ROUTES.OTHERS.EVENTS.HOME,
    ROUTES.OTHERS.FAQS,
    ROUTES.OTHERS.GALLERY,
    ROUTES.OTHERS.NOTICES.HOME,
    ROUTES.APPOINTMENT,
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const [{ languages, training, services }, blogs, events, notices] = await Promise.all([
    getNavData(),
    fetchAllPages(ROUTES.API.BLOGS),
    fetchAllPages(ROUTES.API.EVENTS.HOME),
    fetchAllPages(ROUTES.API.NOTICES.HOME),
  ]);

  const languageRoutes = languages.map((item) => ({
    url: `${BASE_URL}${item.href}`,
    lastModified: new Date(),
  }));

  const trainingRoutes = training.map((item) => ({
    url: `${BASE_URL}${item.href}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((item) => ({
    url: `${BASE_URL}${item.href}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogs.map((b) => ({
    url: `${BASE_URL}/blogs/${b.slug}`,
    lastModified: b.updatedAt ? new Date(b.updatedAt) : new Date(),
  }));

  const eventRoutes = events.map((e) => ({
    url: `${BASE_URL}${ROUTES.OTHERS.EVENTS.SINGLE_VIA_SLUG(e.slug)}`,
    lastModified: e.updatedAt ? new Date(e.updatedAt) : new Date(),
  }));

  const noticeRoutes = notices.map((n) => ({
    url: `${BASE_URL}${ROUTES.OTHERS.NOTICES.SINGLE_VIA_SLUG(n.slug)}`,
    lastModified: n.updatedAt ? new Date(n.updatedAt) : new Date(),
  }));

  return [
    ...staticRoutes,
    ...languageRoutes,
    ...trainingRoutes,
    ...serviceRoutes,
    ...blogRoutes,
    ...eventRoutes,
    ...noticeRoutes,
  ];
}
