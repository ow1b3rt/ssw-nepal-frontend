import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { AnimatedWords } from "@/components/ui/animated-words";

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
    <div className="flex w-full flex-col items-start gap-6">
      <span className="bg-primary-green inline-block rounded-2xl px-7 py-2 text-base font-medium text-white md:text-lg">
        <AnimatedWords
          text={data.badge}
          animKey="badge"
          durationMs={1000}
          staggerMs={100}
          direction="up"
        />
      </span>

      <h1 className="text-4xl leading-tight font-extrabold md:text-6xl xl:text-[80px]">
        <AnimatedWords
          className="block text-black"
          text={data.titleBlack}
          animKey="titleBlack"
          durationMs={1000}
          staggerMs={100}
          direction="up"
        />

        <AnimatedWords
          className="text-primary-red block"
          text={data.titleRed}
          animKey="titleRed"
          durationMs={1000}
          staggerMs={100}
          direction="down"
        />
      </h1>

      <p className="max-w-xl text-lg text-gray-500 md:text-xl">
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
        className="hover:bg-primary-red inline-flex items-center gap-3 rounded-2xl bg-black px-6 py-2.5 text-base font-bold text-white transition-colors duration-300 ease-in-out md:text-lg"
      >
        <AnimatedWords
          text={data.ctaLabel}
          animKey="ctaLabel"
          durationMs={1000}
          staggerMs={100}
          direction="up"
        />
        <ChevronRight className="size-6 shrink-0 lg:size-8" />
      </Link>
    </div>
  );
}
