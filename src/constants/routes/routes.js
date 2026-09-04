const API_BASE = process.env.NEXT_PUBLIC_API;

export const ROUTES = {
  ADMIN_LOGIN: `/admin/login`,
  ADMIN_DASHBOARD: "/admin",

  HOME: "/",
  GALLERY: "/gallery",
  NOTICES: {
    HOME: "/notices",
    SINGLE_VIA_ID: (id) => `/notices/${id}`,
  },

  VISITOR_LOGIN: "/login",
  VISITOR_REGISTER: "/register",
  KOREAN_LANGUAGE: "/korean-language",
  SCHOLARSHIP: "/scholarships",

  ABOUT_US: {
    HOME: "/about",
    WHY_CHOOSE_US: "/about/why-choose-us",
    SUCCESS_STORY: "/about/success-stories",
    MESSAGE_FROM_CHAIRMAN: "/about/message-from-chairman",
    CONTACT_US: "/about/contact",
  },

  SERVICES: {
    HOME: "/services",
    SINGLE_VIA_SLUG: (slug) => `/services/${slug}`,
  },

  OTHERS: {
    EVENTS: {
      HOME: "/others/events",
      SINGLE_VIA_ID: (id) => `/others/events/${id}`,
    },

    FAQS: "/others/faqs",
    GALLERY: "/others/gallery",
  },

  LANGUAGE: {
    HOME: "/languages",
  },

  APPOINTMENT: "/book-appointment",

  API: {
    VISITOR_REGISTER: `${API_BASE}/auth/register`,
    VISITOR_LOGIN: `${API_BASE}/auth/login`,
    ADMIN_LOGIN: `${API_BASE}/auth/login`,
    VISITOR_LOGOUT: "/api/auth/logout",
    AUTH_ME: `${API_BASE}/auth/me`,
    REFRESH_TOKEN: `${API_BASE}/auth/refreshToken`,
    CONTACT: `${API_BASE}/contact`,
    BECOME_OUR_PARTNER: `${API_BASE}/partners`,
    CREATE_BLOG: `${API_BASE}/blogs`,
    BLOGS: (page = 1, limit = 9) => `${API_BASE}/blogs?page=${page}&limit=${limit}`,

    BLOG: (slug) => `${API_BASE}/blogs/slug/${slug}`,
    NOTICES: (page = 1, limit = 9) => `${API_BASE}/notices?page=${page}&limit=${limit}`,
    NOTICE: (id) => `${API_BASE}/notices/${id}`,

    EVENTS: (page = 1, limit = 9) => `${API_BASE}/events?page=${page}&limit=${limit}`,
    EVENT: (id) => `${API_BASE}/events/${id}`,
    SERVICES: `${API_BASE}/layouts/services`,
    TRAINING: `${API_BASE}/layouts/training`,
    LANGUAGE: `${API_BASE}/layouts/languages`,
  },
};
