import { ROUTES } from "@/constants/routes/routes";
import { BlogCard } from "@/components/molecules/cards/BlogCard";
import { Pagenav } from "@/components/Reusables";

import { stripHtml } from "@/packages/admin/utils/utils";

export const metadata = {
  title: "Notice | Enlighten Int'l Education",
  description: "Important notices from Enlighten International Education",
};

async function getBlogs(page = 1, limit = 9) {
  try {
    const res = await fetch(ROUTES.API.BLOGS(page, limit), {
      cache: "no-store",
    });
    if (!res.ok) {
      return { success: false, items: [], total: 0, page: 1, totalPages: 1 };
    }
    const data = await res.json();
    return (
      data ?? { success: false, items: [], total: 0, page: 1, totalPages: 1 }
    );
  } catch {
    return { success: false, items: [], total: 0, page: 1, totalPages: 1 };
  }
}

export default async function BlogsPage({ searchParams }) {
  const sparams = await searchParams;
  const page = Number(sparams.page) || 1;
  const blogs = await getBlogs(page);
  console.log(blogs);

  return (
    <section className="container mx-auto  px-4 pb-12 xl:px-0">
      <div className="text-center">
        {" "}
        <h1 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
          Blogs
        </h1>
      </div>
      {blogs.items.length === 0 ? (
        <p className="mt-10 text-center text-gray-500">
          No blogs available at the moment.
        </p>
      ) : (
        <ul className="mt-6 divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="grid grid-cols-3 gap-6 ">
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
          </div>
        </ul>
      )}

      <Pagenav page={blogs.page} totalPages={blogs.totalPages} />
    </section>
  );
}
