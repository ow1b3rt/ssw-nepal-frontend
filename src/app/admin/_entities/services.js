import { defineEntity } from "@/packages/admin/index.jsx";
import { Newspaper } from "lucide-react";

export const services = defineEntity({
  slug: "services",
  label: "Services",
  icon: Newspaper,
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
