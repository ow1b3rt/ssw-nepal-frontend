import { notFound } from "next/navigation";
import { getBlog } from "@/lib/api/blogs";

export default async function SingleBlog({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  console.log("single blog", blog);

  const blogData = {
    title: blog.title,
    image: {
      src: blog.mediaUrl ? `${process.env.NEXT_PUBLIC_HOST}${blog.mediaUrl}` : "/favicon.jpg",
      alt: blog.mediaAlt ? blog.mediaAlt : "alt",
    },
    content: blog.content,
  };
  console.log("blog data", blogData);

  if (!blog) notFound();
  return <DetailPage data={blogData} isBlog={true} />;
}
