const API_BASE = process.env.NEXT_PUBLIC_API;

export const ROUTES = {
  ADMIN_LOGIN: `/admin/login`,
  ADMIN_DASHBOARD: "/admin",

  HOME: "/",

  NOTICES: "/notices",
  NOTICE: (id) => `/notices/${id}`,

  VISITOR_LOGIN: "/login",
  VISITOR_REGISTER: "/register",
  KOREAN_LANGUAGE: "/korean-language",
  SCHOLARSHIP: "/scholarships",
  CORPORATE: {
    HOME: "/corporate",
    BECOME_OUR_PARTNER: "/corporate/become-our-partner",
    NOTICES: "/corporate/notices",
    VISITOR_FORM: "/corporate/visitor-form",
  },
  ABOUT_US: {
    HOME: "/about",
    WHO_ARE_WE: "/about/who-are-we",
    WHY_ENLIGHTEN: "/about/why-enlighten",
    OUR_TEAM: "/about/our-team",
    MESSAGE_FROM_CHAIRMAN: "/about/message-from-chairman",
    MESSAGE_FROM_ED: "/about/message-from-ed",
  },

  SERVICES: {
    HOME: "/services",
    CARRER_COUNSELLING: "/services/career-counselling",
  },

  LEARNING_CENTER: {
    HOME: "/learning-center",
    IELTS: "/learning-center/ielts",
    TOEFL: "/learning-center/toefl",
    PTE: "/learning-center/pte",
    SAT: "/learning-center/sat",
    GRE: "/learning-center/gre",
    GMAT: "/learning-center/gmat",
    JAPANESE_LANGUAGE: "/learning-center/japanese-language-tests",
    KOREAN: "/learning-center/korean-language",
    HOUSEWIFE: "/learning-center/housewife-english",
    PCJ_BRIDGE: "/learning-center/pcj-bridge",
  },
  CONTACT: "/contact",

  STUDY_ABROAD: {
    HOME: "/study-abroad",
    STUDY_IN_AUSTRALIA: "/study-abroad/study-in-australia",
    OVERVIEW: (slug) => `/study-abroad/${slug}`,
    APPLICATION_STEPS: (slug) => `/study-abroad/${slug}/application-steps`,
    ELIGIBILITY: (slug) => `/study-abroad/${slug}/eligibility`,
    FINANCIALS: (slug) => `/study-abroad/${slug}/financials`,
    OPPORTUNITIES: (slug) => `/study-abroad/${slug}/opportunities`,
  },

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
    NOTICES: `${API_BASE}/notices`,
    NOTICE: (id) => `${API_BASE}/notices/${id}`,
  },
};
