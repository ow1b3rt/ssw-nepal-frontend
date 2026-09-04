import { ROUTES } from "@/constants/routes/routes";

import { BlogCard } from "@/components/molecules/cards/BlogCard";

export const metadata = {
  title: "Languages | Enlighten Int'l Education",
  description: "Language classes provided by Enlighten International Education",
};

async function getLanguages() {
  try {
    const res = await fetch(ROUTES.API.LANGUAGE, {
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

export default async function LanguagePage() {
  const languages = await getLanguages();

  return (
    <section className="container mx-auto px-4 pb-12 xl:px-0">
      <div className="text-center">
        {" "}
        <h1 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">Our Language Classes</h1>
        <p className="text-black/60">
          Discover the wide range of language classes we offer to help you achieve your goals.
        </p>
      </div>
      {!languages || languages.length === 0 ? (
        <p className="mt-10 text-center text-gray-500">
          No language classes available at the moment.
        </p>
      ) : (
        <ul className="mt-6 divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="grid grid-cols-3 gap-6 p-6">
            {languages.map((language, index) => (
              <BlogCard
                key={index}
                blog={{
                  image: {
                    src: language.image?.src || "/language_fallback.png",
                    alt: language.image?.alt || language.title,
                  },
                  title: language.title,
                  desc: language.description,
                  url: `/languages/${language.slug}`,
                }}
              />
            ))}
          </div>
        </ul>
      )}
    </section>
  );
}
