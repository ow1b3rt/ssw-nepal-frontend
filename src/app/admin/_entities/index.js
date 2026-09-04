import { defineEntities } from "@/packages/admin/index.jsx";

import { users } from "./users.js";
import { layouts } from "./layouts.js";
import { authors } from "./authors.js";
import { blogs } from "./blogs.js";
import { notices } from "./notices.js";
import { faqs } from "./faqs.js";
import { gallery } from "./gallery.js";
import { events } from "./events.js";
import { services } from "./services.js";
import { training } from "./training.js";
import { languages } from "./languages.js";

export const entities = defineEntities({
  users,
  layouts,
  authors,
  blogs,
  notices,
  faqs,
  gallery,
  events,
  "sections/services": services,
  "sections/training": training,
  "sections/languages": languages,
});
