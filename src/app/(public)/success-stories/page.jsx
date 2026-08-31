import SuccessStoryCard from "@/components/successStoryCard";
import SuccessStoryText from "@/components/successStoryText";
import { successStoryData } from "@/data/successStory";

export default function SuccessStoryPage() {
  return (
    <main className="bg-white text-black">
      <div className="mx-auto max-w-[1320px] px-5 py-10 md:px-8 lg:px-12">

        <div className="grid grid-cols-1 gap-x-10 gap-y-16 lg:grid-cols-2">
          {successStoryData.stories.map((story, index) => {
            const isEven = index % 2 === 0;

            return (
              <StoryRow
                key={`${story.name}-${index}`}
                story={story}
                imageLeft={isEven}
                first={index === 0}
              />
            );
          })}
        </div>

      </div>
    </main>
  );
}

function StoryRow({
  story,
  imageLeft,
  first,
}) {
  const imageCard = (
    <SuccessStoryCard
      title={first ? successStoryData.title : null}
      description={first ? successStoryData.subtitle : null}
      image={story.image}
      background={imageLeft ? "#f3f6ff" : "#fff5f5"}
    />
  );

  const storyText = (
    <SuccessStoryText
      name={story.name}
      batch={story.batch}
      description={story.description}
    />
  );

  if (imageLeft) {
    return (
      <>
        {imageCard}
        {storyText}
      </>
    );
  }

  return (
    <>
      {storyText}
      {imageCard}
    </>
  );
}