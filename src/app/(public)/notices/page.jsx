import Link from "next/link";
import { ROUTES } from "@/constants/routes/routes";
import { FileText, ImageIcon } from "lucide-react";
import { BlogCard } from "@/components/molecules/cards/BlogCard";

export const metadata = {
  title: "Notice | Enlighten Int'l Education",
  description: "Important notices from Enlighten International Education",
};

async function getNotices() {
  try {
    const res = await fetch(ROUTES.API.NOTICES, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return data.items ?? [];
  } catch {
    return [];
  }
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function NoticeTypeIcon({ type }) {
  if (type?.startsWith("image/")) {
    return <ImageIcon className="text-destructive h-5 w-5 shrink-0" />;
  }
  return <FileText className="text-destructive h-5 w-5 shrink-0" />;
}

export default async function NoticePage() {
  const notices = await getNotices();

  return (
    <section className="container mx-auto  px-4 pb-12 xl:px-0">
      <div className="text-center">
        {" "}
        <h1 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
          Notice
        </h1>
        <p className="text-black/60">
          Discover upcoming programs, seminars, and community initiatives at
          Everest Hospital. Stay engaged and join us in shaping a healthier
          future.{" "}
        </p>
      </div>
      {notices.length === 0 ? (
        <p className="mt-10 text-center text-gray-500">
          No notices available at the moment.
        </p>
      ) : (
        <ul className="mt-6 divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="grid grid-cols-3 gap-6 ">
            {notices.map((notice, index) => (
              <BlogCard
                key={index}
                blog={{
                  image: {
                    src: `${process.env.NEXT_PUBLIC_HOST}${notice.mediaUrl}`,
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
    </section>
  );
}
