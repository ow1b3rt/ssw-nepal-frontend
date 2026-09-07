import { env } from "@/config/env";

const API_BASE = env.apiUrl;

export const ROUTES = {
  ADMIN_LOGIN: `/admin/login`,
  ADMIN_DASHBOARD: "/admin",

  HOME: "/",
  GALLERY: "/others/gallery",

  TRAININGS: {
    HOME: "/training",
    SINGLE_VIA_ID: (id) => `/trainings/${id}`,
  },

  NOTICES: {
    HOME: "/notices",
    SINGLE_VIA_ID: (id) => `/notices/${id}`,
    SINGLE_VIA_SLUG: (slug) => `/notices/${slug}`,
  },

  LANGUAGE: {
    HOME: "/languages",
    SINGLE_VIA_ID: (id) => `/languages/${id}`,
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
      SINGLE_VIA_SLUG: (slug) => `/others/events/${slug}`,
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

    EVENTS: {
      HOME: (page = 1, limit = 9) => `${API_BASE}/events?page=${page}&limit=${limit}`,
      SINGLE: (id) => `${API_BASE}/events/${id}`,
      SINGLE_VIA_SLUG: (slug) => `${API_BASE}/events/slug/${slug}`,
    },

    NOTICES: {
      HOME: (page = 1, limit = 9) => `${API_BASE}/notices?page=${page}&limit=${limit}`,
      NOTICE: (id) => `${API_BASE}/notices/${id}`,
      NOTICE_VIA_SLUG: (slug) => `${API_BASE}/notices/slug/${slug}`,
    },

    SERVICES: `${API_BASE}/layouts/services`,
    TRAINING: `${API_BASE}/layouts/training`,
    LANGUAGE: `${API_BASE}/layouts/languages`,
    LAYOUT_GALLERY: `${API_BASE}/layouts/gallery`,
    APPOINTMENT: `${API_BASE}/appointments`,
  },
};
