import { defineEntity } from "@/packages/admin/index.jsx";
import { CalendarClock } from "lucide-react";

export const appointments = defineEntity({
  slug: "appointments",
  label: "Appointments",
  icon: CalendarClock,
  titleField: "title",
  roles: ["admin", "staff"],
  fields: [
    { name: "firstName", type: "text", label: "Name" },
    { name: "email", type: "text", label: "Email" },
    { name: "phone", type: "text", label: "Phone", invisible: "true" },
    { name: "createdAt:date", type: "date", label: "Received at" },
    { name: "appointmentType", type: "text", label: "Appointment Type", invisible: true },
    { name: "preferredTime", type: "text", label: "Time", invisible: true },
    {
      name: "status",
      type: "select",
      label: "Status",
      invisible: true,
      options: ["pending", "completed"],
    },
    {
      name: "additionalInfo",
      type: "textarea",
      label: "Additional Info",
      invisible: true,
      column: "right",
    },
  ],
});
