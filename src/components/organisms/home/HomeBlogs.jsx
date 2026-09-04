"use client";

import AnimatedCard from "@/components/ui/animated-card";

import BlogsList from "../BlogsList";

const blogPosts = [
  {
    image: { src: "/favicon.jpg", alt: "SSW team gifting a polo shirt" },
    author: { name: "Bishad Kandel", avatar: "/favicon.jpg" },
    date: "Jan 01, 2026",
    title: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Gravida faucibus sit dignissim tortor lorem. Euismod at at vitae lorem aliquet auctor dignissim aliquam.",
    ctaLabel: "Read More",
    url: "/blogs/lorem-ipsum-dolor-sit-amet",
  },
  {
    image: {
      src: "/favicon.jpg",
      alt: "Trainees in a classroom during Japanese language class",
    },
    author: { name: "Sunita Gurung", avatar: "/favicon.jpg" },
    date: "Dec 18, 2025",
    title: "5 Tips to Ace Your JLPT N5 Preparation.",
    desc: "Preparing for the JLPT N5 can feel overwhelming, but with the right strategy and consistent practice, you can build a strong Japanese language foundation.",
    ctaLabel: "Read More",
    url: "/blogs/jlpt-n5-preparation-tips",
  },
  {
    image: { src: "/favicon.jpg", alt: "Trainee receiving SSW visa documents" },
    author: { name: "Bishad Kandel", avatar: "/favicon.jpg" },
    date: "Dec 05, 2025",
    title: "Understanding the SSW Visa Process Step by Step.",
    desc: "Navigating the Specified Skilled Worker visa process can be complex. Here's a clear breakdown of every step, from application to departure.",
    ctaLabel: "Read More",
    url: "/blogs/understanding-ssw-visa-process",
  },
  {
    image: {
      src: "/favicon.jpg",
      alt: "Group photo of SSW Training Centre graduates",
    },
    author: { name: "Anita Thapa", avatar: "/favicon.jpg" },
    date: "Nov 22, 2025",
    title: "How Career Counselling Shapes Your Future in Japan.",
    desc: "Good career counselling goes beyond test scores. Discover how personalized guidance helps trainees choose the right path for long-term success.",
    ctaLabel: "Read More",
    url: "/blogs/career-counselling-shapes-your-future",
  },
];
const HomeBlogs = () => {
  return (
    <div
      id="home-blogs"
      className="flex flex-col items-center justify-center gap-y-8 md:pt-10 xl:gap-y-16"
    >
      <AnimatedCard
        className="bg-primary-red rounded-lg px-10 py-2.5"
        direction="down"
        distance={12}
        triggerOnView
      >
        <h2 className="mb-1 text-3xl leading-none font-black tracking-[-1.5px] text-white md:text-4xl xl:text-5xl">
          Blogs
        </h2>
      </AnimatedCard>
      <div className="flex w-full flex-col gap-6">
        <BlogsList blogs={blogPosts} />
      </div>
    </div>
  );
};

export default HomeBlogs;
