import { defineEntities } from "@/packages/admin/index.jsx";

import { users } from "./users.js";
import { layouts } from "./layouts.js";
import { authors } from "./authors.js";
import { blogs } from "./blogs.js";
import { notices } from "./notices.js";
import { faqs } from "./faqs.js";
import { gallery } from "./gallery.js";

export const entities = defineEntities({
  users,
  layouts,
  authors,
  blogs,
  notices,
  faqs,
  gallery,
});
