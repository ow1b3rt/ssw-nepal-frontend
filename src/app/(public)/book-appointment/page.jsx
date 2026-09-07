"use client";

import { useState } from "react";
import { ROUTES } from "@/constants/routes/routes";

import { submitForm } from "@/lib/helpers/form-submit";
import { toast } from "@/components/ui/toast";
import { AppointmentForm } from "@/components/organisms/forms/AppointmentForm";

export default function Appointment() {
  const [loading, setLoading] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const handleSubmit = async (data) => {
    if (
      !data.firstName?.trim() ||
      !data.lastName?.trim() ||
      !data.email?.trim() ||
      !data.phone?.trim()
    ) {
      toast.add({
        type: "error",
        description: "Please fill in all required fields (Name, Email, and Phone).",
      });
      return;
    }

    setLoading(true);

    try {
      await submitForm({
        url: ROUTES.API.APPOINTMENT,
        data,
        useAuth: false,
        onSuccess: () => {
          toast.add({
            type: "success",
            description:
              "Your appointment has been submitted successfully! We will get back to you soon.",
          });
          setFormKey((prev) => prev + 1);
        },
        onError: (error) => {
          toast.add({
            type: "error",
            description: error?.message || "Unable to submit your appointment. Please try again.",
          });
        },
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unable to submit your appointment. Please try again.";
      toast.add({
        type: "error",
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return <AppointmentForm loading={loading} onSubmit={handleSubmit} />;
}
