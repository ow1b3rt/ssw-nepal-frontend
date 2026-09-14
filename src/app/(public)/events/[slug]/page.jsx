import { notFound } from "next/navigation";

import { getEvent } from "@/lib/api/events";
import { localDate, localTime } from "@/lib/utils";
import DetailPage from "@/components/detailPage";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = await getEvent(slug);
  return {
    title: event ? `${event.title} | SSW` : "Event | SSW",
    description: event?.description ?? undefined,
  };
}

export default async function EventDetailsPage({ params }) {
  const { slug } = await params;
  const event = await getEvent(slug);

  const eventsData = {
    title: event.title,
    image: {
      src: event.mediaUrl ? `${process.env.NEXT_PUBLIC_HOST}${event.mediaUrl}` : "/favicon.jpg",
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
