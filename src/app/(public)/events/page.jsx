import { ROUTES } from "@/constants/routes/routes";

import AnimatedCard from "@/components/ui/animated-card";
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
    url: `/events/${event.id}`,
  };
}

export default async function EventsPage() {
  const events = await getEvents();

  const upcoming = events.upcoming.map((event) => ({
    blog: eventToBlog(event),
  }));
  const past = events.past.map((event) => ({ blog: eventToBlog(event) }));

  return (
    <section className="container mx-auto px-4 xl:px-0">
      <div className="flex flex-col items-center text-center">
        <AnimatedCard
          className="w-fit rounded-lg px-10 py-2.5"
          direction="up"
          distance={12}
          triggerOnView
        >
          <h1 className="mb-1 text-3xl leading-none font-black tracking-[1px] text-black md:text-4xl xl:text-5xl">
            Events
          </h1>
          <p className="text-text-color text-xl leading-relaxed">
            Discover upcoming programs, seminars, and community initiatives at SSW. Stay engaged and
            join us in shaping a healthier future.
          </p>
        </AnimatedCard>
      </div>

      <EventsSection title="Upcoming Events" events={upcoming} initialLimit={6} />

      <EventsSection title="Past Events" events={past} initialLimit={3} />

      <BackToTop className="mt-8 ml-auto" />
    </section>
  );
}
