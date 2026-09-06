import { ROUTES } from "@/constants/routes/routes";

import { getEvents } from "@/lib/api/events";

import { HomeEventsClient } from "./HomeEventsClient";

function eventToBlog(event) {
  return {
    image: {
      src:
        event.mediaType === "image"
          ? `${process.env.NEXT_PUBLIC_HOST || ""}${event.mediaUrl}`
          : "/notice_fallback.png",
      alt: event.mediaAlt || event.title,
    },
    title: event.title,
    desc: event.description,
    url: ROUTES.OTHERS.EVENTS.SINGLE_VIA_ID(event.id),
  };
}

export default async function HomeEvents() {
  const data = await getEvents();
  const events = data?.items && data.items.length > 0 ? data.items.map(eventToBlog) : null;

  return events && <HomeEventsClient events={events} />;
}
