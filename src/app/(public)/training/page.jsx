import { ROUTES } from "@/constants/routes/routes";

import AnimatedCard from "@/components/ui/animated-card";
import { BlogCard } from "@/components/molecules/cards/BlogCard";

export const metadata = {
  title: "Training | Enlighten Int'l Education",
  description: "Training programs provided by Enlighten International Education",
};

async function getTraining() {
  try {
    const res = await fetch(ROUTES.API.TRAINING, {
      cache: "no-store",
    });
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    if (data?.success && data?.layout?.items) {
      return data.layout.items;
    }
    return [];
  } catch {
    return [];
  }
}

export default async function TrainingPage() {
  const trainingPrograms = await getTraining();

  return (
    <section className="container mx-auto px-4 xl:px-0">
      <div className="flex flex-col items-center text-center">
        <AnimatedCard
          className="w-fit rounded-lg px-10 py-2.5"
          direction="up"
          distance={12}
          triggerOnView
        >
          <h1 className="mb-1 text-3xl leading-none font-black tracking-[1px] text-black md:text-4xl xl:text-5xl">
            Our Training Programs
          </h1>
          <p className="text-text-color text-xl leading-relaxed">
            Discover the wide range of training programs we offer to help you achieve your goals.
          </p>
        </AnimatedCard>
      </div>
      {!trainingPrograms || trainingPrograms.length === 0 ? (
        <p className="text-primary-red text-center text-xl font-semibold md:text-2xl">
          No training programs available at the moment.
        </p>
      ) : (
        <>
          <ul className="mt-6 w-full divide-y divide-gray-100">
            <AnimatedCard direction="down" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {trainingPrograms.map((training, index) => (
                <BlogCard
                  key={index}
                  blog={{
                    image: {
                      src: training.image?.src || "/training_fallback.png",
                      alt: training.image?.alt || training.title,
                    },
                    title: training.title,
                    desc: training.description,
                    url: `/training/${training.slug}`,
                  }}
                />
              ))}
            </AnimatedCard>
          </ul>
        </>
      )}
    </section>
  );
}
