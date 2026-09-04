import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ImageContainer } from "@/components/molecules/ImageContainer";

const section = {
  image: { src: "/favicon.jpg", alt: "Trainee in kimono presenting" },
  title: "Lorem ipsum dolor sit amet consectetur.",
  desc: "Lorem ipsum dolor sit amet consectetur. Gravida faucibus sit dignissim tortor lorem.",
  url: "#",
};

export function BlogCard({ blog: data = section, CardIcon = ArrowUpRight }) {
  return (
    <Link
      href={data.url}
      className="group bg-faint-blue hover:bg-faint-red flex flex-col rounded-3xl transition duration-600 ease-in-out"
    >
      <ImageContainer
        className="aspect-4/3 max-h-72 w-full rounded-t-3xl"
        src={data.image.src}
        alt={data.image.alt}
      />

      <div className="relative flex min-h-0.5 flex-col gap-3 p-6 pt-8">
        <h3 className="text-2xl leading-snug font-extrabold">{data.title}</h3>
        <p className="line-clamp-3 text-lg text-black/60">{data.desc}</p>

        <div className="absolute top-0 right-0 flex w-14 -translate-y-1/2 rounded-l-full bg-white p-2">
          <div className="group-hover:bg-primary-green rounded-full bg-black p-2">
            <CardIcon className="text-white" size={24} />
          </div>
        </div>
      </div>
    </Link>
  );
}
