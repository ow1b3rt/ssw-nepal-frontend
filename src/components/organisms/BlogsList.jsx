"use client";
import { AutoCarousel } from "@/components/molecules/AutoCarousel";
import { TestimonialCard } from "@/components/molecules/cards/TestimonialCard";
import { HomeBlogCard } from "@/components/molecules/cards/HomeBlogCard";

const BlogsList = ({ title = " Latest News & Blogs", blogs }) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <h5 className="text-2xl lg:text-4xl font-bold leading-normal">{title}</h5>
      {blogs && blogs.length > 0 && (
        <AutoCarousel
          items={blogs}
          transition="slide"
          itemClassName="flex items-center justify-center basis-full sm:basis-1/2 lg:basis-1/3 md:px-7"
          renderItem={(blog, index) => <HomeBlogCard {...blog} key={index} />}
          transitionDuration={500}
          loop={true}
          showControls={true}
          showChevronControls={false}
          showGradientMask={false}
        />
      )}
    </div>
  );
};

export default BlogsList;
