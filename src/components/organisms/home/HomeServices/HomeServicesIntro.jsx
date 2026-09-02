import { ImageContainer } from "@/components/molecules/ImageContainer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const section = {
  title: "What We Offer",
  desc: "Explore our wide range of services crafted to help you grow and succeed.",
  ctaLabel: "Explore More",
  ctaURL: "#",
  image: { src: "/favicon.jpg", alt: "SSW team group photo" },
};

export function ServicesIntro({ section: data = section }) {
  return (
    <div className="flex flex-col w-full justify-between gap-6 xl:gap-10 bg-faint-blue rounded-3xl px-4 md:px-8 pt-4 md:pt-6">
      <div className="flex flex-col gap-4 mt-5">
        <h2 className="text-4xl font-extrabold xl:text-6xl">{data.title}</h2>
        <p className="max-w-2xl text-lg md:text-2xl text-black/60">
          {data.desc}
        </p>

        <Link
          href={data.ctaURL}
          className="inline-flex w-fit items-center gap-2 rounded-xl md:rounded-3xl bg-primary-blue px-8 py-2.5 text-lg md:text-xl font-semibold text-white"
        >
          {data.ctaLabel}
          <ArrowRight size={30} />
        </Link>
      </div>

      <ImageContainer
        className="aspect-video w-full lg:h-full lg:w-full rounded-3xl rounded-b-none"
        src={data.image.src}
        alt={data.image.alt}
      />
    </div>
  );
}
