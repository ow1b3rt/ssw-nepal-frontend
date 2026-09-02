import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ROUTES } from "@/constants/routes/routes";
import DetailPage from "@/components/detailPage";
import { localDate, localTime } from "@/lib/utils";

async function getEvent(id) {
  try {
    const res = await fetch(ROUTES.API.EVENT(id), { cache: "no-store" });

    if (!res.ok) return null;

    const data = await res.json();
    return data.item ?? null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const event = await getEvent(id);
  return {
    title: event ? `${event.title} | SSW` : "Event | SSW",
    description: event?.description ?? undefined,
  };
}

export default async function EventDetailsPage({ params }) {
  const { id } = await params;
  const event = await getEvent(id);

  const eventsData = {
    title: event.title,
    image: {
      src: event.mediaUrl
        ? `${process.env.NEXT_PUBLIC_HOST}${event.mediaUrl}`
        : "/favicon.jpg",
      alt: event.mediaAlt ? blog.mediaAlt : "alt",
    },
    content: [event.description],
    date: localDate(event.time),
    time: localTime(event.time),
    venue: event.location,
  };

  if (!event) notFound();
  return <DetailPage data={eventsData} isEvent={true} />;
}
