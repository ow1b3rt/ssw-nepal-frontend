import { ImageContainer } from "@/components/molecules/ImageContainer";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

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
      className="group flex flex-col rounded-3xl bg-primary-green/5 hover:bg-primary-red/5"
    >
      <ImageContainer
        className="aspect-4/3 w-full rounded-t-3xl"
        src={data.image.src}
        alt={data.image.alt}
      />

      <div className="relative min-h-0.5 flex flex-col gap-3 p-6 pt-8">
        <h3 className="text-2xl font-extrabold leading-snug">{data.title}</h3>
        <p className="text-lg text-black/60 line-clamp-3 ">{data.desc}</p>

        <div className="absolute top-0 right-0 -translate-y-1/2 flex w-14 p-2 rounded-l-full bg-white">
          <div className="p-2 rounded-full bg-black group-hover:bg-primary-green">
            <CardIcon className="text-white" size={24} />
          </div>
        </div>
      </div>
    </Link>
  );
}
