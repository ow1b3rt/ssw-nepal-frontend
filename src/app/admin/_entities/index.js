import { defineEntities } from "@/packages/admin/index.jsx";

import { appointments } from "./appointment.js";
import { authors } from "./authors.js";
import { blogs } from "./blogs.js";
import { contact } from "./contacts.js";
import { events } from "./events.js";
import { faqs } from "./faqs.js";
import { gallery } from "./gallery.js";
import { languages } from "./languages.js";
import { notices } from "./notices.js";
import { services } from "./services.js";
import { success } from "./success.js";
import { training } from "./training.js";
import { users } from "./users.js";

export const entities = defineEntities({
  users,
  authors,
  blogs,
  notices,
  faqs,
  gallery,
  events,
  contact,
  appointments,
  "sections/services": services,
  "sections/training": training,
  "sections/languages": languages,

  success,
});
