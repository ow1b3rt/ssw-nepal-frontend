import { notFound } from "next/navigation";
import { ROUTES } from "@/constants/routes/routes";

import DetailPage from "@/components/detailPage";

async function getTrainingBySlug(slug) {
  try {
    const res = await fetch(ROUTES.API.TRAINING, { cache: "no-store" });

    if (!res.ok) return null;

    const data = await res.json();
    if (data?.success && data?.layout?.items) {
      return data.layout.items.find((training) => training.slug === slug) ?? null;
    }
    return null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const training = await getTrainingBySlug(slug);
  return {
    title: training
      ? `${training.title} | Enlighten Int'l Education`
      : "Training | Enlighten Int'l Education",
    description: training?.description || undefined,
  };
}

export default async function TrainingDetailPage({ params }) {
  const { slug } = await params;
  const training = await getTrainingBySlug(slug);

  if (!training) notFound();

  const trainingData = {
    title: training.title,
    image: {
      src: training.image?.src || "/training_fallback.png",
      alt: training.image?.alt || training.title,
    },
    content: [training.description || ""],
  };

  return <DetailPage data={trainingData} />;
}
