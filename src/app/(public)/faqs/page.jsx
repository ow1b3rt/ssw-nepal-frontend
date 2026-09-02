import { FaqSection } from "@/components/organisms/Faq/Faq";
import { fetcher } from "@/packages/admin"

export default async function FaqPage() {
  const data = await fetcher("/layouts/faqs")
  console.log('faq data', data)


  return (
    <section className="flex p-4 w-full flex-col gap-8">
      <h1 className="text-2xl md:text-4xl self-center font-bold text-black">Frequently Asked Questions</h1>
      <FaqSection section={data.layout}/>
    </section>
  );
}