import { ImageContainer } from "@/components/molecules/ImageContainer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const section = {
  image: { src: "/favicon.jpg", alt: "SSW team gifting a polo shirt" },
  author: { name: "Bishad Kandel", avatar: "/favicon.jpg" },
  date: "Jan 01, 2026",
  title: "Lorem ipsum dolor sit amet consectetur.",
  desc: "Lorem ipsum dolor sit amet consectetur. Gravida faucibus sit dignissim tortor lorem. Euismod at at vitae lorem aliquet auctor dignissim aliquam.",
  ctaLabel: "Read More",
  url: "#",
};

export function HomeBlogCard({ section: data = section }) {
  return (
    <article className="group flex flex-col gap-2 w-full h-full">
      <ImageContainer
        className="aspect-4/3 max-h-64 w-full rounded-2xl"
        src={data.image.src}
        alt={data.image.alt}
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ImageContainer
            className="h-10 w-10 rounded-full"
            src={data.author.avatar}
            alt={data.author.name}
          />
          <span className="text-base text-black/70">{data.author.name}</span>
        </div>
        <span className="text-sm text-black/50">{data.date}</span>
      </div>

      <h3 className="text-2xl font-extrabold leading-snug">{data.title}</h3>
      <p className="text-lg text-black/60">{data.desc}</p>

      <Link
        href={data.url}
        className="inline-flex w-fit items-center gap-2 rounded-sm bg-black px-8 py-2 text-lg font-bold text-white group-hover:bg-primary-red transition duration-500 ease-in-out"
      >
        {data.ctaLabel}
        <ArrowRight size={24} />
      </Link>
    </article>
  );
}
