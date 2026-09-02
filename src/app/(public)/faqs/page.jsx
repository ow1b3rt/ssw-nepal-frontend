import { FaqSection } from "@/components/organisms/Faq/Faq";

export default function FaqPage() {
  return (
    <section className="flex p-4 w-full flex-col gap-8">
      <h1 className="text-2xl md:text-4xl self-center font-bold text-black">Frequently Asked Questions</h1>
      <FaqSection />
    </section>
  );
}