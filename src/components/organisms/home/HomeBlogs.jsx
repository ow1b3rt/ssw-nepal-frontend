import AnimatedCard from "@/components/ui/animated-card";

import BlogsList from "../BlogsList";
import { getBlogs } from "@/lib/api/blogs";
import { stripHtml } from "@/packages/admin/utils/utils";
import { localDate } from "@/lib/utils";

const mapBlogItem = (item) => {
  return {
    image: {
      src: item.media
        ? `${process.env.NEXT_PUBLIC_HOST}${item.media.url}`
        : "/favicon.jpg",
      alt: item.media ? item.media.alt : item.title,
    },
    author: {
      name: item.author?.name || item.author?.fullName || "SSW Team",
      avatar:
        item.author?.avatar ||
        item.author?.profileImage ||
        item.author?.image ||
        "/favicon.jpg",
    },
    date: localDate(item.publishedAt || item.createdAt),
    title: item.title,
    desc:
      stripHtml(item.content).slice(0, 160) +
      (stripHtml(item.content).length > 160 ? "..." : ""),
    ctaLabel: "Read More",
    url: `/blogs/${item.slug}`,
  };
};

const HomeBlogs = async () => {
  const { items = [] } = (await getBlogs()) || {};
  const blogPosts = items.map(mapBlogItem);

  return (
    <div
      id="home-blogs"
      className="flex flex-col items-center justify-center gap-y-8 xl:gap-y-16 pb-16 md:pt-10"
    >
      <AnimatedCard
        className="bg-primary-red rounded-lg py-2.5 px-10"
        direction="down"
        distance={12}
        triggerOnView
      >
        <h2 className="mb-1 text-3xl font-black leading-none tracking-[-1.5px] text-white md:text-4xl xl:text-5xl">
          Blogs
        </h2>
      </AnimatedCard>
      <div className="w-full flex flex-col gap-6">
        {blogPosts.length > 0 ? (
          <BlogsList blogs={blogPosts} />
        ) : (
          <p className="text-center text-neutral-500">
            No blogs available right now.
          </p>
        )}
      </div>
    </div>
  );
};

export default HomeBlogs;
