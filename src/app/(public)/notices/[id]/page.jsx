import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ROUTES } from "@/constants/routes/routes";
import { CalendarDays } from "lucide-react";

async function getNotice(id) {
  try {
    const res = await fetch(ROUTES.API.NOTICE(id), { cache: "no-store" });

    if (!res.ok) return null;

    const data = await res.json();
    return data.item ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const notice = await getNotice(id);
  return {
    title: notice
      ? `${notice.title} | Enlighten Int'l Education`
      : "Notice | Enlighten Int'l Education",
    description: notice?.description ?? undefined,
  };
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function NoticeMedia({ url, type, title }) {
  if (type?.startsWith("image")) {
    return (
      <div className="flex w-full items-center justify-center">
        <img
          src={url}
          alt={title}
          className="max-h-[80vh] max-w-full rounded-lg object-contain shadow-md"
        />
      </div>
    );
  }

  const isPdf =
    type === "application/pdf" || url.toLowerCase().endsWith(".pdf");

  const iframeSrc = isPdf
    ? `${url}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`
    : url;

  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden">
      <iframe
        src={iframeSrc}
        title={title}
        className="h-[75vh] w-full rounded-lg"
      />
    </div>
  );
}

export default async function NoticeDetailPage({ params }) {
  const { id } = await params;
  const notice = await getNotice(id);

  if (!notice) notFound();

  const mediaUrl = notice.mediaUrl
    ? `${process.env.NEXT_PUBLIC_HOST}${notice.mediaUrl}`
    : null;

  return (
    <section className="container mx-auto my-8 rounded-lg border border-gray-200 shadow-sm">
      <div className="border-b border-gray-200 py-[27px] pr-8 pl-[33px]">
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
          {notice.title}
        </h1>
        <div className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
          <CalendarDays className="h-4 w-4" />
          <span>{formatDate(notice.createdAt)}</span>
        </div>
      </div>
      {notice.description && (
        <p className="px-8 pt-[27px] pb-8 pl-[33px] text-base leading-relaxed text-gray-600">
          {notice.description}
        </p>
      )}

      {notice.mediaUrl ? (
        <div className="flex items-center justify-center px-8 pb-8">
          <div className="w-full max-w-5xl">
            <NoticeMedia
              url={mediaUrl}
              type={notice.mediaType}
              title={notice.title}
            />
          </div>
        </div>
      ) : (
        <p className="px-8 pb-8 text-center text-sm text-gray-400">
          No attachment for this notice.
        </p>
      )}
    </section>
  );
}
