import { notFound } from "next/navigation";
import { capitalise } from "@/packages/admin/utils/utils";

import { getBlog, getBlogs } from "@/lib/api/blogs";
import { getMediaUrl, localDate, mapBlogItem } from "@/lib/utils";
import DetailPage from "@/components/detailPage";
import { ImageContainer } from "@/components/molecules/ImageContainer";
import BlogsList from "@/components/organisms/BlogsList";

const RELATED_BLOGS_LIMIT = 6;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  return {
    title: blog ? `${blog.title} | SSW Training Centre Nepal` : "Blog | SSW Training Centre Nepal",
    description: blog?.description ?? undefined,
  };
}

export default async function SingleBlog({ params }) {
  const { slug } = await params;

  const [blog, relatedResult] = await Promise.all([
    getBlog(slug),
    getBlogs(1, RELATED_BLOGS_LIMIT + 1),
  ]);

  if (!blog) notFound();

  const blogData = {
    title: blog.title,
    image: {
      src: blog.mediaUrl ? `${process.env.NEXT_PUBLIC_HOST}${blog.mediaUrl}` : "/favicon.jpg",
      alt: blog.mediaAlt ? blog.mediaAlt : "alt",
    },
    content: blog.content,
  };

  const relatedBlogs = (relatedResult?.items || [])
    .filter((b) => b.slug !== slug)
    .slice(0, RELATED_BLOGS_LIMIT)
    .map(mapBlogItem);

  const authorName = blog.authorName ? blog.authorName : "SSW Team";
  const authorImage = blog.authorAvatar ? getMediaUrl(blog.authorAvatar) : "/favicon.jpg";

  return (
    <main className="flex flex-col gap-10 pb-12">
      <DetailPage data={blogData} isBlog={true} />

      <div className="container mx-auto flex flex-col items-center gap-4 px-4 sm:flex-row lg:px-0">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full">
          <ImageContainer
            src={authorImage}
            alt={authorName}
            sizes="64px"
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <h4 className="text-xl font-bold">{capitalise(authorName)}</h4>
          <h5 className="text-gray-400">Writer</h5>
          <p className="text-sm font-medium text-gray-500">
            Published on {localDate(blog.publishedAt || blog.createdAt)}
          </p>
        </div>
      </div>

      {relatedBlogs.length > 0 && (
        <section className="container mx-auto px-4 lg:px-0">
          <BlogsList title="Other Blog Articles" blogs={relatedBlogs} />
        </section>
      )}
    </main>
  );
}
