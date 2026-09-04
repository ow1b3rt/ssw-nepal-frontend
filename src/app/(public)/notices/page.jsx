import { ROUTES } from "@/constants/routes/routes";

import { BlogCard } from "@/components/molecules/cards/BlogCard";
import { Pagenav } from "@/components/Reusables";

export const metadata = {
  title: "Notice | Enlighten Int'l Education",
  description: "Important notices from Enlighten International Education",
};

async function getNotices(page = 1, limit = 9) {
  try {
    const res = await fetch(ROUTES.API.NOTICES(page, limit), {
      cache: "no-store",
    });
    if (!res.ok) {
      return { success: false, items: [], total: 0, page: 1, totalPages: 1 };
    }
    const data = await res.json();
    return data ?? { success: false, items: [], total: 0, page: 1, totalPages: 1 };
  } catch {
    return { success: false, items: [], total: 0, page: 1, totalPages: 1 };
  }
}

export default async function NoticePage({ searchParams }) {
  const sparams = await searchParams;
  const page = Number(sparams.page) || 1;
  const notices = await getNotices(page);

  return (
    <section className="container mx-auto px-4 pb-12 xl:px-0">
      <div className="text-center">
        {" "}
        <h1 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">Notice</h1>
        <p className="text-black/60">
          Discover upcoming programs, seminars, and community initiatives at Everest Hospital. Stay
          engaged and join us in shaping a healthier future.{" "}
        </p>
      </div>
      {notices.items.length === 0 ? (
        <p className="mt-10 text-center text-gray-500">No notices available at the moment.</p>
      ) : (
        <ul className="mt-6 divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="grid grid-cols-3 gap-6">
            {notices.items.map((notice, index) => (
              <BlogCard
                key={index}
                blog={{
                  image: {
                    src:
                      notice.mediaType === "image"
                        ? `${process.env.NEXT_PUBLIC_HOST}${notice.mediaUrl}`
                        : "/notice_fallback.png",
                    alt: notice.mediaAlt,
                  },
                  title: notice.title,
                  desc: notice.description,
                  url: `/notices/${notice.id}`,
                }}
              />
            ))}
          </div>
        </ul>
      )}

      <Pagenav page={notices.page} totalPages={notices.totalPages} />
    </section>
  );
}
