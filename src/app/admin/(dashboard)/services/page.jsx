"use client";

import { HomeServicesEditable } from "@/components/organisms/HomeServices/HomeServicesEditable";
import { useGet, useApi } from "@/packages/admin";

export default function ServicesPage() {
  const { data } = useGet("/layouts/services");
  const { post } = useApi();

  const handleSave = async (updatedSection) => {
    await post("/layouts/services", updatedSection);
  };

  return (
    <section className="flex w-full flex-col gap-8 p-4">
      <HomeServicesEditable
        key={data}
        section={data?.layout}
        onSave={handleSave}
      />
    </section>
  );
}
