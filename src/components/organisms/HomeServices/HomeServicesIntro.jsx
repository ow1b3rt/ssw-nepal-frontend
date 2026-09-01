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
    <div className="flex flex-col gap-6">
      <h2 className="text-6xl font-extrabold xl:text-7xl">{data.title}</h2>
      <p className="max-w-2xl text-2xl text-black/60">{data.desc}</p>

      <Link
        href={data.ctaURL}
        className="inline-flex w-fit items-center gap-2 rounded-xl md:rounded-3xl bg-primary-blue px-8 py-4 text-xl font-bold text-white"
      >
        {data.ctaLabel}
        <ArrowRight size={20} />
      </Link>

      <ImageContainer className="aspect-[16/9] w-full rounded-3xl" src={data.image.src} alt={data.image.alt} />
    </div>
  );
}