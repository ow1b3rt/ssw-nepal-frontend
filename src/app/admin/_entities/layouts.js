import { defineEntity } from "@/packages/admin/index.jsx";
import { PenSquare } from "lucide-react";

export const layouts = defineEntity({
  slug: "layouts",
  label: "Layouts",
  icon: PenSquare,
  titleField: "userId",
  roles: ["admin", "staff"],
  fields: [{ name: "name", type: "text", label: "Name" }],
});
