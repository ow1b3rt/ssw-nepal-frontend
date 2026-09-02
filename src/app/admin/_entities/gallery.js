import { defineEntity } from "@/packages/admin/index.jsx";
import { Newspaper } from "lucide-react";

export const gallery = defineEntity({
  slug: "gallery",
  label: "Gallery",
  icon: Newspaper,
  titleField: "label",
  roles: ["admin"],
  fields: [
    { name: "label", type: "text", label: "Label", required: true },
  ],
  filters: [],
});