import { ROUTES } from "@/constants/routes/routes";
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
    <section className="container mx-auto px-4 pb-12 xl:px-0">
      <div className="text-center">
        {" "}
        <h1 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
          Our Training Programs
        </h1>
        <p className="text-black/60">
          Discover the wide range of training programs we offer to help you achieve your goals.
        </p>
      </div>
      {!trainingPrograms || trainingPrograms.length === 0 ? (
        <p className="mt-10 text-center text-gray-500">
          No training programs available at the moment.
        </p>
      ) : (
        <ul className="mt-6 divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="grid grid-cols-3 gap-6 p-6">
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
          </div>
        </ul>
      )}
    </section>
  );
}
