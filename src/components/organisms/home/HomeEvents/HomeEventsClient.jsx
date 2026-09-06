"use client";

import Link from "next/link";
import { ROUTES } from "@/constants/routes/routes";

import AnimatedCard from "@/components/ui/animated-card";
import { AutoCarousel } from "@/components/molecules/AutoCarousel";
import { BlogCard } from "@/components/molecules/cards/BlogCard";

export function HomeEventsClient({ events }) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 md:pt-10 xl:gap-y-16">
      <AnimatedCard
        className="bg-primary-blue rounded-lg px-10 py-2.5"
        direction="down"
        distance={12}
        triggerOnView
      >
        <h2 className="mb-1 text-3xl leading-none font-black tracking-[1px] text-white md:text-4xl xl:text-5xl">
          Events
        </h2>
      </AnimatedCard>
      <div className="w-full">
        {events && events.length > 0 ? (
          <AutoCarousel
            items={events}
            transition="marquee"
            itemClassName="flex items-stretch w-full justify-center basis-full sm:basis-1/2 lg:basis-1/3 md:px-7"
            renderItem={(event, index) => <BlogCard blog={event} key={index} />}
            marqueeSpeed={90}
            loop={true}
            showControls={false}
            showChevronControls={false}
            showGradientMask={false}
            draggable={false}
          />
        ) : (
          <p className="text-center text-neutral-500">No events available right now.</p>
        )}
      </div>
      <AnimatedCard direction="up" distance={12} triggerOnView>
        <Link
          href={ROUTES.OTHERS.EVENTS.HOME}
          className="bg-primary-red rounded-lg px-10 py-4 text-lg font-bold text-white transition duration-500 ease-in-out hover:bg-black"
        >
          More Events
        </Link>
      </AnimatedCard>
    </div>
  );
}
