"use client";

import AnimatedCard from "@/components/ui/animated-card";
import { AutoCarousel } from "@/components/molecules/AutoCarousel";
import { BlogCard } from "@/components/molecules/cards/BlogCard";
import { TestimonialCard } from "@/components/molecules/cards/TestimonialCard";

const testimonials = [
  {
    title: "JLPT N4 + Caregiving",
    quote:
      "The teachers here helped me pass JLPT N4 in just six months. I am now working in Osaka.",
    author: {
      name: "Sunita Rai",
      since: "SSW Trainee",
      avatar: "/favicon.jpg",
    },
  },
  {
    title: "Construction Skill Training",
    quote: "The practical training was exactly what my employer in Japan expected on day one.",
    author: {
      name: "Bishal Tamang",
      since: "SSW Trainee",
      avatar: "/favicon.jpg",
    },
  },
  {
    title: "JFT-Basic",
    quote: "Small class sizes meant I got real speaking practice every day. Highly recommended.",
    author: {
      name: "Anita Gurung",
      since: "SSW Trainee",
      avatar: "/favicon.jpg",
    },
  },
];

const HomeTestimonials = () => {
  return (
    <div
      id="home-testimonials"
      className="flex flex-col items-center justify-center gap-y-8 md:pt-10 xl:gap-y-16"
    >
      <AnimatedCard
        className="rounded-lg bg-black px-10 py-2.5"
        direction="down"
        distance={12}
        triggerOnView
      >
        <h2 className="mb-1 text-3xl leading-none font-black tracking-[1px] text-white md:text-4xl xl:text-5xl">
          Testimonials
        </h2>
      </AnimatedCard>
      <div className="flex w-full flex-col gap-6">
        <AutoCarousel
          items={testimonials}
          transition="marquee"
          itemClassName="flex items-center justify-center basis-full sm:basis-1/2 lg:basis-1/3 md:px-7"
          renderItem={(testimonial, index) => <TestimonialCard section={testimonial} key={index} />}
          marqueeSpeed={50}
          loop={true}
          showControls={false}
          showChevronControls={false}
          showGradientMask={true}
          draggable={false}
        />
        <AutoCarousel
          items={testimonials}
          transition="marquee"
          itemClassName="flex items-center justify-center basis-full sm:basis-1/2 lg:basis-1/3 md:px-7"
          renderItem={(testimonial, index) => <TestimonialCard section={testimonial} key={index} />}
          marqueeSpeed={50}
          loop={true}
          reverse
          showControls={false}
          showChevronControls={false}
          showGradientMask={true}
          draggable={false}
          gradientWidth="8%"
        />
      </div>
    </div>
  );
};

export default HomeTestimonials;
