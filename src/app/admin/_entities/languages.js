import { defineEntity } from "@/packages/admin/index.jsx";
import { Languages } from "lucide-react";

export const languages = defineEntity({
  slug: "sections/languages",
  label: "Languages",
  icon: Languages,
  titleField: "title",
  roles: ["admin"],
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
    },
    {
      name: "image",
      type: "image",
      label: "Image",
      column: "right",
    },
  ],
  filters: [],
});
