import { notFound } from "next/navigation";
import { ROUTES } from "@/constants/routes/routes";

import DetailPage from "@/components/detailPage";

async function getLanguageBySlug(slug) {
  try {
    const res = await fetch(ROUTES.API.LANGUAGE, { cache: "no-store" });

    if (!res.ok) return null;

    const data = await res.json();
    if (data?.success && data?.layout?.items) {
      return data.layout.items.find((language) => language.slug === slug) ?? null;
    }
    return null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const language = await getLanguageBySlug(slug);
  return {
    title: language
      ? `${language.title} | Enlighten Int'l Education`
      : "Language | Enlighten Int'l Education",
    description: language?.description || undefined,
  };
}

export default async function LanguageDetailPage({ params }) {
  const { slug } = await params;
  const language = await getLanguageBySlug(slug);

  if (!language) notFound();

  const languageData = {
    title: language.title,
    image: {
      src: language.image?.src || "/language_fallback.png",
      alt: language.image?.alt || language.title,
    },
    content: [language.description || ""],
  };

  return <DetailPage data={languageData} />;
}
