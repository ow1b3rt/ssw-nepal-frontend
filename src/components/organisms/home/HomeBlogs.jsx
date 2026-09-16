import { getBlogs } from "@/lib/api/blogs";
import { mapBlogItem } from "@/lib/utils";
import AnimatedCard from "@/components/ui/animated-card";

import BlogsList from "../BlogsList";

const HomeBlogs = async () => {
  const { items = [] } = (await getBlogs()) || {};
  const blogPosts = items.map(mapBlogItem);

  return (
    blogPosts.length > 0 && (
      <div
        id="home-blogs"
        className="flex flex-col items-center justify-center gap-y-8 md:pt-10 xl:gap-y-16"
      >
        <AnimatedCard
          className="bg-primary-red rounded-lg px-10 py-2.5"
          direction="down"
          distance={12}
          triggerOnView
        >
          <h2 className="mb-1 text-3xl leading-none font-black tracking-[1px] text-white md:text-4xl xl:text-5xl">
            Blogs
          </h2>
        </AnimatedCard>
        <div className="flex w-full flex-col gap-6">
          {blogPosts.length > 0 ? (
            <BlogsList blogs={blogPosts} />
          ) : (
            <p className="text-center text-neutral-500">No blogs available right now.</p>
          )}
        </div>
      </div>
    )
  );
};

export default HomeBlogs;
