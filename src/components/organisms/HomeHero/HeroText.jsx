import { ChevronRight } from "lucide-react";

import { AnimatedWords } from "@/components/ui/animated-words";
import Link from "next/link";

const section = {
  badge: "Welcome to SSW Training Centre Nepal",
  titleBlack: "Skills That Shape",
  titleRed: "Your Future.",
  description:
    "Empowering you with practical training, language skills, and career guidance to unlock better opportunities in Nepal and abroad.",
  ctaLabel: "Book an Appointment",
  ctaURL: "#",
};

export function HeroText({ section: data = section }) {
  return (
    <div className="flex flex-col items-start gap-6">
      <span className="rounded-2xl bg-primary-green px-6 py-3 text-lg font-bold text-white">
        <AnimatedWords
          text={data.badge}
          animKey="badge"
          durationMs={1000}
          staggerMs={100}
          direction="up"
        />
      </span>

      <h1 className="text-6xl font-extrabold leading-none xl:text-7xl">
        <span className="block text-black">
          <AnimatedWords
            text={data.titleBlack}
            animKey="titleBlack"
            durationMs={1000}
            staggerMs={100}
            direction="up"
          />
        </span>
        <span className="block text-primary-red">
          <AnimatedWords
            text={data.titleRed}
            animKey="titleRed"
            durationMs={1000}
            staggerMs={100}
            direction="down"
          />
        </span>
      </h1>

      <p className="max-w-xl text-xl text-gray-500">
        <AnimatedWords
          text={data.description}
          animKey="description"
          durationMs={800}
          staggerMs={50}
          direction="up"
        />
      </p>

      <Link
        href={data.ctaURL}
        className="inline-flex items-center gap-2 rounded-2xl bg-black px-6 py-3 text-lg font-bold text-white"
      >
        <AnimatedWords
          text={data.ctaLabel}
          animKey="ctaLabel"
          durationMs={1000}
          staggerMs={100}
          direction="up"
        />
        <span aria-hidden>
          <ChevronRight className="size-8 animate-accordion-up" />
        </span>
      </Link>
    </div>
  );
}
