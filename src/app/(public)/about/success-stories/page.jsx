import { successStoryData } from "@/data/successStory";

import SuccessStoryCard from "@/components/organisms/SuccessStories/successStoryCard";
import SuccessStoryText from "@/components/organisms/SuccessStories/successStoryText";

export default function SuccessStoryPage() {
  return (
    <main className="flex flex-col pt-8">
      <div className="container mx-auto flex flex-col gap-8 lg:px-0">
        {successStoryData.stories.map((story, index) => (
          <StoryRow
            key={`${story.name}-${index}`}
            story={story}
            imageLeft={index % 2 === 0}
            first={index === 0}
          />
        ))}
      </div>
    </main>
  );
}

function StoryRow({ story, imageLeft, first }) {
  const imageCard = (
    <SuccessStoryCard
      title={first ? successStoryData.title : null}
      description={first ? successStoryData.subtitle : null}
      image={story.image}
      background={imageLeft ? "bg-faint-blue" : "bg-faint-red"}
    />
  );

  const storyText = (
    <SuccessStoryText
      name={story.name}
      batch={story.batch}
      description={story.description}
      className="bg-transparent"
      batchClass="mb-0"
      showDivider={false}
    />
  );

  return (
    <div className="grid items-start gap-4 md:grid-cols-2 md:gap-8">
      <div className={imageLeft ? "order-1" : "order-1 md:order-2"}>{imageCard}</div>
      <div className={imageLeft ? "order-2" : "order-2 md:order-1"}>{storyText}</div>
    </div>
  );
}
