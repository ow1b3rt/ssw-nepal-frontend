import { stripHtml } from "@/packages/admin/utils/utils";

import { getBlogs } from "@/lib/api/blogs";
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
    <section className="container mx-auto px-4 pb-12 xl:px-0">
      <div className="text-center">
        {" "}
        <h1 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">Blogs</h1>
      </div>
      {blogs.items.length === 0 ? (
        <p className="mt-10 text-center text-gray-500">No blogs available at the moment.</p>
      ) : (
        <ul className="mt-6 divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="grid grid-cols-3 gap-6">
            {blogs.items.map((b, index) => (
              <BlogCard
                key={index}
                blog={{
                  image: {
                    src: b.media ? `${process.env.NEXT_PUBLIC_HOST}${b.media.url}` : "/favicon.jpg",
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
