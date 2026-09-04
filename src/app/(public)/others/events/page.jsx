import { ROUTES } from "@/constants/routes/routes";

import { EventsSection } from "@/components/organism/EventSection";
import { BackToTop } from "@/components/Reusables";

export const metadata = {
  title: "EVENTS | SSW",
  description: "Important events from SSW",
};

async function getEvents(page = 1, limit = 999) {
  try {
    const res = await fetch(ROUTES.API.EVENTS(page, limit), {
      cache: "no-store",
    });
    if (!res.ok) {
      return { success: false, upcoming: [], past: [] };
    }
    const data = await res.json();
    if (!data) {
      return { success: false, upcoming: [], past: [] };
    }

    const now = Date.now();
    const upcoming = [];
    const past = [];

    for (const event of data.items ?? []) {
      const eventTime = new Date(event.time).getTime();
      if (eventTime >= now) {
        upcoming.push(event);
      } else {
        past.push(event);
      }
    }

    upcoming.sort((a, b) => new Date(a.time) - new Date(b.time));
    past.sort((a, b) => new Date(b.time) - new Date(a.time));

    return { success: true, upcoming, past };
  } catch {
    return { success: false, upcoming: [], past: [] };
  }
}

function eventToBlog(event) {
  return {
    image: {
      src:
        event.mediaType === "image"
          ? `${process.env.NEXT_PUBLIC_HOST}${event.mediaUrl}`
          : "/notice_fallback.png",
      alt: event.mediaAlt,
    },
    title: event.title,
    desc: event.description,
    url: ROUTES.OTHERS.EVENTS.SINGLE_VIA_ID(event.id),
  };
}

export default async function EventsPage() {
  const events = await getEvents();

  const upcoming = events.upcoming.map((event) => ({
    blog: eventToBlog(event),
  }));
  const past = events.past.map((event) => ({ blog: eventToBlog(event) }));

  return (
    <section className="container mx-auto px-4 pb-12 xl:px-0">
      <div className="text-center">
        <h1 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">EVENTS</h1>
        <p className="text-black/60">
          Discover upcoming programs, seminars, and community initiatives at SSW. Stay engaged and
          join us in shaping a healthier future.
        </p>
      </div>

      <EventsSection title="Upcoming Events" events={upcoming} initialLimit={6} />

      <EventsSection title="Past Events" events={past} initialLimit={3} />

      <BackToTop className="mt-8 ml-auto" />
    </section>
  );
}
