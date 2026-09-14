import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { ROUTES } from "@/constants/routes/routes";

import AnimatedCard from "@/components/ui/animated-card";
import { AnimatedWords } from "@/components/ui/animated-words";
import { BlogCard } from "@/components/molecules/cards/BlogCard";

const cards = [
  {
    title: "Message from Chairman",
    description:
      "Read the vision and commitment of our Executive Chairman, Anil Bhandari, as he shares SSW Training Centre Nepal's mission to empower students for a bright future in Japan.",
    href: ROUTES.ABOUT_US.MESSAGE_FROM_CHAIRMAN,
    image: { src: "/images/home/office.jpg", alt: "SSW Training Centre Nepal office" },
    bg: "bg-faint-blue",
  },
  {
    title: "Success Stories",
    description:
      "Meet the students who have achieved their dreams of studying and working in Japan with our dedicated guidance and support.",
    href: ROUTES.ABOUT_US.SUCCESS_STORY,
    image: { src: "/images/success.png", alt: "Successful students of SSW" },
    bg: "bg-faint-red",
  },
  {
    title: "Why Choose Us",
    description:
      "Discover what makes SSW Training Centre Nepal the go-to consultancy for aspiring candidates looking to build a successful career in Japan.",
    href: ROUTES.ABOUT_US.WHY_CHOOSE_US,
    image: { src: "/images/career-counseling.png", alt: "Career counselling at SSW" },
    bg: "bg-faint-blue",
  },
];

export const metadata = {
  title: "About | SSW Training Centre Nepal",
  description:
    "Learn about SSW Training Centre Nepal — our chairman's message, success stories, and why students choose us for their journey to Japan.",
};

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 pb-16 pt-8 xl:px-0">
      <div className="mb-10 flex flex-col items-center text-center">
        <AnimatedCard className="w-fit" direction="up" distance={12} triggerOnView>
          <h1 className="mb-2 text-3xl font-black tracking-[1px] text-black md:text-4xl xl:text-5xl">
            <AnimatedWords
              text="About Us"
              animKey="aboutUs"
              durationMs={1000}
              staggerMs={100}
              direction="up"
            />
          </h1>
          <p className="text-text-color text-lg">
            <AnimatedWords
              text="Get to know our mission, our people, and why we stand out."
              animKey="aboutSub"
              durationMs={1000}
              staggerMs={10}
              direction="up"
            />
          </p>
        </AnimatedCard>
      </div>

      <AnimatedCard
        direction="down"
        distance={12}
        triggerOnView
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {cards.map((card) => (
          <BlogCard
            key={card.title}
            blog={{
              image: card.image,
              title: card.title,
              desc: card.description,
              url: card.href,
            }}
          />
        ))}
      </AnimatedCard>

      <AnimatedCard className="mt-16 flex justify-center" direction="up" distance={12} triggerOnView>
        <Link
          href={ROUTES.APPOINTMENT}
          className="hover:bg-primary-red inline-flex items-center gap-3 rounded-2xl bg-black px-6 py-2.5 text-base font-bold text-white transition-colors duration-300 ease-in-out md:text-lg"
        >
          <AnimatedWords
            text="Book an Appointment"
            animKey="ctaLabel"
            durationMs={1000}
            staggerMs={100}
            direction="up"
          />
          <ChevronRight className="size-6 shrink-0 lg:size-8" />
        </Link>
      </AnimatedCard>
    </section>
  );
}