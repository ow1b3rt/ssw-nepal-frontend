import { ROUTES } from "@/constants/routes/routes";
import { stripHtml } from "@/packages/admin/utils/utils";

import { getBlogs } from "@/lib/api/blogs";
import AnimatedCard from "@/components/ui/animated-card";
import Divider from "@/components/ui/divider";
import { BlogCard } from "@/components/molecules/cards/BlogCard";
import { Pagenav } from "@/components/Reusables";

export const metadata = {
  title: "Notice | Enlighten Int'l Education",
  description: "Important notices from Enlighten International Education",
};

export default async function BlogsPage({ searchParams }) {
  const sparams = await searchParams;
  const page = Number(sparams.page) || 1;
  const blogs = await getBlogs(page);

  return (
    <section className="container mx-auto flex w-full flex-col items-center gap-2 md:gap-6">
      <AnimatedCard
        className="w-fit rounded-lg px-10 py-2.5"
        direction="up"
        distance={12}
        triggerOnView
      >
        <h1 className="mb-1 text-3xl leading-none font-black tracking-[1px] text-black md:text-4xl xl:text-5xl">
          Blogs
        </h1>
      </AnimatedCard>
      {blogs.items.length === 0 ? (
        <p className="text-primary-red text-center text-xl font-semibold md:text-2xl">
          No Blogs available at the moment
        </p>
      ) : (
        <>
          <ul className="mt-6 w-full divide-y divide-gray-100">
            <AnimatedCard direction="down" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.items.map((b, index) => (
                <BlogCard
                  key={index}
                  blog={{
                    image: {
                      src: b.media
                        ? `${process.env.NEXT_PUBLIC_HOST}${b.media.url}`
                        : "/favicon.jpg",
                      alt: b.media ? b.media.alt : "alt",
                    },
                    title: b.title,
                    desc: stripHtml(b.content),
                    url: `/blogs/${b.slug}`,
                  }}
                />
              ))}
            </AnimatedCard>
          </ul>
          <AnimatedCard direction="up" className="w-full">
            <Divider backgroundColor="bg-gray-300" className="xl:my-5" />
            <Pagenav page={blogs.page} totalPages={blogs.totalPages} />
          </AnimatedCard>
        </>
      )}
    </section>
  );
}
