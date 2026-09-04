"use client";

import AnimatedCard from "@/components/ui/animated-card";
import { AutoCarousel } from "@/components/molecules/AutoCarousel";
import { BlogCard } from "@/components/molecules/cards/BlogCard";

const events = [
  {
    title: "Lorem ipsum dolor sit amet consectetur. ",
    desc: "Lorem ipsum dolor sit amet consectetur. Gravida faucibus sit dignissim tortor lorem.",
    url: "#",
    image: { src: "/favicon.jpg", alt: "Trainee in kimono presenting" },
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur. ",
    desc: "Lorem ipsum dolor sit amet consectetur. Gravida faucibus sit dignissim tortor lorem.",
    url: "#",
    image: { src: "/favicon.jpg", alt: "Trainee in kimono presenting" },
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur. ",
    desc: "Lorem ipsum dolor sit amet consectetur. Gravida faucibus sit dignissim tortor lorem.",
    url: "#",
    image: { src: "/favicon.jpg", alt: "Trainee in kimono presenting" },
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur. ",
    desc: "Lorem ipsum dolor sit amet consectetur. Gravida faucibus sit dignissim tortor lorem.",
    url: "#",
    image: { src: "/favicon.jpg", alt: "Trainee in kimono presenting" },
  },
];

const HomeEvents = () => {
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
        <AutoCarousel
          items={events}
          transition="marquee"
          itemClassName="flex items-center justify-center basis-full sm:basis-1/2 lg:basis-1/3 md:px-7"
          renderItem={(support, index) => <BlogCard {...support} key={index} />}
          marqueeSpeed={90}
          loop={true}
          showControls={false}
          showChevronControls={false}
          showGradientMask={false}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default HomeEvents;
