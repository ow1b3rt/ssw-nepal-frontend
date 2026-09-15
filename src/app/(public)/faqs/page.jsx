import { fetcher } from "@/packages/admin";

import { FaqSection } from "@/components/organisms/Faq/Faq";

export const metadata = {
  title: "FAQs | SSW Training Centre Nepal",
  description:
    "Frequently asked questions about SSW Training Centre Nepal's career counselling, visa guidance, and Japanese language training programs.",
};

export default async function FaqPage() {
  const data = await fetcher("/layouts/faqs");

  return (
    <section className="flex w-full flex-col gap-8 p-4">
      <h1 className="self-center text-2xl font-bold text-black md:text-4xl">
        Frequently Asked Questions
      </h1>
      <FaqSection section={data?.layout} />
    </section>
  );
}
