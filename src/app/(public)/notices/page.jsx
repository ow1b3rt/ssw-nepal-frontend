import { ROUTES } from "@/constants/routes/routes";

import AnimatedCard from "@/components/ui/animated-card";
import Divider from "@/components/ui/divider";
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
    <section className="container mx-auto px-4 xl:px-0">
      <div className="flex flex-col items-center text-center">
        <AnimatedCard
          className="w-fit rounded-lg px-10 py-2.5"
          direction="up"
          distance={12}
          triggerOnView
        >
          <h1 className="mb-1 text-3xl leading-none font-black tracking-[1px] text-black md:text-4xl xl:text-5xl">
            Notices
          </h1>
          <p className="text-text-color text-xl leading-relaxed">
            Discover upcoming programs, seminars, and community initiatives at Everest Hospital.
            Stay engaged and join us in shaping a healthier future.
          </p>
        </AnimatedCard>
      </div>
      {notices.items.length === 0 ? (
        <p className="text-primary-red text-center text-xl font-semibold md:text-2xl">
          No notices available at the moment.
        </p>
      ) : (
        <>
          <ul className="mt-6 w-full divide-y divide-gray-100">
            <AnimatedCard direction="down" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            </AnimatedCard>
          </ul>
          <AnimatedCard direction="up" className="w-full">
            <Divider backgroundColor="bg-gray-300" className="xl:my-5" />
            <Pagenav page={notices.page} totalPages={notices.totalPages} />
          </AnimatedCard>
        </>
      )}
    </section>
  );
}
