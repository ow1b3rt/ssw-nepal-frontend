import { fetcher } from "@/packages/admin";

import { FaqSection } from "@/components/organisms/Faq/Faq";

export default async function FaqPage() {
  const data = await fetcher("/layouts/faqs");
  console.log("faq data", data);

  return (
    <section className="flex w-full flex-col gap-8 p-4">
      <h1 className="self-center text-2xl font-bold text-black md:text-4xl">
        Frequently Asked Questions
      </h1>
      <FaqSection section={data.layout} />
    </section>
  );
}
