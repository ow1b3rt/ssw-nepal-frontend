"use client";
import { AutoCarousel } from "@/components/molecules/AutoCarousel";
import { BlogCard } from "@/components/molecules/cards/BlogCard";
import AnimatedCard from "@/components/ui/animated-card";
import { TestimonialCard } from "@/components/molecules/cards/TestimonialCard";

const testimonials = [
  {
    title: "Lorem ipsum dolor sit amet consectetur. ",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Gravida faucibus sit dignissim tortor lorem.",
    author: {
      name: "Trainee in kimono presenting",
      since: "SSW Trainee",
      avatar: "/favicon.jpg",
    },
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur. ",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Gravida faucibus sit dignissim tortor lorem.",
    author: {
      name: "Trainee in kimono presenting",
      since: "SSW Trainee",
      avatar: "/favicon.jpg",
    },
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur. ",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Gravida faucibus sit dignissim tortor lorem.",
    author: {
      name: "Trainee in kimono presenting",
      since: "SSW Trainee",
      avatar: "/favicon.jpg",
    },
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur. ",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Gravida faucibus sit dignissim tortor lorem.",
    author: {
      name: "Trainee in kimono presenting",
      since: "SSW Trainee",
      avatar: "/favicon.jpg",
    },
  },
];
const HomeTestimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 xl:gap-y-10 md:py-10">
      <AnimatedCard
        className="bg-black rounded-lg py-2.5 px-10"
        direction="down"
        distance={12}
        triggerOnView
      >
        <h2 className="mb-1 text-3xl font-black leading-none tracking-[-1.5px] text-white md:text-4xl xl:text-5xl">
          Testimonials
        </h2>
      </AnimatedCard>
      <div className="w-full flex flex-col gap-6">
        <AutoCarousel
          items={testimonials}
          transition="marquee"
          itemClassName="flex items-center justify-center basis-full sm:basis-1/2 lg:basis-1/3 md:px-7"
          renderItem={(testimonial, index) => (
            <TestimonialCard {...testimonial} key={index} />
          )}
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
          renderItem={(testimonial, index) => (
            <TestimonialCard {...testimonial} key={index} />
          )}
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
