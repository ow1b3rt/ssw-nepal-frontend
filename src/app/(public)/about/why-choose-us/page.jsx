import { whyChooseUsData } from "@/data/whyus";

import SuccessStoryText from "@/components/organisms/SuccessStories/successStoryText";
import StatCard from "@/components/statImage";

export default function WhyChooseUsPage() {
  const { showcase, content } = whyChooseUsData;

  return (
    <main className="bg-white pt-8 text-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <StatCard data={showcase} />
          <SuccessStoryText name={content.title} description={content.description} />
        </div>
      </div>
    </main>
  );
}
