import DetailPage from "@/components/detailPage";

import { notFound } from "next/navigation";
import { careerCounselingData } from "@/data/careerCounseling";
import { ROUTES } from "@/constants/routes/routes";

async function getBlog(slug) {
  try {
    const res = await fetch(ROUTES.API.BLOG(slug), { cache: "no-store" });

    if (!res.ok) return null;

    const data = await res.json();
    return data.item ?? null;
  } catch {
    return null;
  }
}

export default async function SingleBlog({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  console.log("single blog", blog);

  const blogData = {
    title: blog.title,
    image: {
      src: blog.mediaUrl
        ? `${process.env.NEXT_PUBLIC_HOST}${blog.mediaUrl}`
        : "/favicon.jpg",
      alt: blog.mediaAlt ? blog.mediaAlt : "alt",
    },
    content: blog.content,
  };
  console.log("blog data", blogData);

  if (!blog) notFound();
  return <DetailPage data={blogData} isBlog={true} />;
}
