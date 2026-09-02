'use client'
import { FaqEditable } from "@/components/organisms/Faq/FaqEditable"
import { useGet, useApi } from "@/packages/admin"

export default function FaqPage() {
  const { data } = useGet("/layouts/faqs")
  const { post } = useApi()
  console.log('faq data', data)

  const handleChange = async (updatedSection) => {
    const response = await post("/layouts/faqs", updatedSection);
  };

  return (
    <section className="flex p-4 w-full flex-col gap-8">
      <FaqEditable key={data} section={data?.layout} onSave={handleChange} />
    </section>
  );
}