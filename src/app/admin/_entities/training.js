import { defineEntity } from "@/packages/admin/index.jsx";
import { WrenchOff } from "lucide-react";

export const training = defineEntity({
  slug: "sections/training",
  label: "Training",
  icon: WrenchOff,
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
