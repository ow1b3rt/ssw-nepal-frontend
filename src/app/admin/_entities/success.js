import { defineEntity } from "@/packages/admin/index.jsx";
import { Trophy } from "lucide-react";

export const success = defineEntity({
  slug: "success",
  label: "Success Stories",
  icon: Trophy,
  titleField: "title",
  roles: ["admin", "staff"],
  fields: [
    { name: "name", type: "text", label: "Name", required: true },
    { name: "batch", type: "text", label: "Batch" },
    { name: "description", type: "textarea", label: "Story" },

    {
      name: "profilePic:image",
      type: "image",
      label: "Profile Picture",
      invisible: true,
      column: "right",
    },
  ],
});
