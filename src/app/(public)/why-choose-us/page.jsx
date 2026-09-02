import SuccessStoryText from "@/components/organisms/SuccessStories/successStoryText";
import StatCard from "@/components/statImage";

import { whyChooseUsData } from "@/data/whyus";

export default function WhyChooseUsPage() {
  const { showcase, content } = whyChooseUsData;

  return (
    <main className="bg-white text-black">
      <div className="mx-auto max-w-[1540px] px-5 py-10 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <StatCard data={showcase} />

          <SuccessStoryText
            name={content.title}
            description={content.description}
          />
        </div>
      </div>
    </main>
  );
}
