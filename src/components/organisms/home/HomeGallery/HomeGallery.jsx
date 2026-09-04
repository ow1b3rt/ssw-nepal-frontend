import Link from "next/link";
import { ROUTES } from "@/constants/routes/routes";

import AnimatedCard from "@/components/ui/animated-card";
import { ImageContainer } from "@/components/molecules/ImageContainer";

const section = {
  items: [
    {
      column: "left",
      image: { src: "/favicon.jpg", alt: "Reception" },
      label: "Reception",
      height: 340,
    },
    {
      column: "left",
      image: { src: "/favicon.jpg", alt: "T-shirt gift" },
      label: null,
      height: 220,
    },
    {
      column: "center",
      image: { src: "/favicon.jpg", alt: "Gathering" },
      label: "Gathering",
      height: 580,
    },
    {
      column: "right",
      image: { src: "/favicon.jpg", alt: "Team Member" },
      label: "Team Member",
      height: 340,
    },
    {
      column: "right",
      image: { src: "/favicon.jpg", alt: "Team gathering" },
      label: null,
      height: 220,
    },
  ],
  ctaLabel: "Explore Gallery",
  ctaURL: ROUTES.GALLERY,
};

const COLUMNS = ["left", "center", "right"];

export function GalleryCard({ image, label, height, theme = "lightblue" }) {
  const THEMES = {
    lightblue: "bg-faint-blue text-primary-blue",
    darkblue: "bg-primary-blue-dark text-white",
  };
  return (
    <div
      className="flex w-full flex-col gap-3 rounded-2xl border bg-transparent p-4 shadow-sm"
      style={{ height: `${height}px` }}
    >
      <ImageContainer
        className="aspect-square w-full flex-1 rounded-xl"
        src={image.src}
        alt={image.alt}
      />
      {label && (
        <div className={`rounded-xl border py-4 text-center text-lg font-bold ${THEMES[theme]}`}>
          {label}
        </div>
      )}
    </div>
  );
}

export function HomeGallery({ section: data = section }) {
  return (
    <div
      id="home-gallery"
      className="flex w-full flex-col items-center gap-2 gap-y-8 md:pt-10 xl:gap-y-16"
    >
      <AnimatedCard
        className="rounded-lg bg-black px-10 py-2.5"
        direction="up"
        distance={12}
        triggerOnView
      >
        <h2 className="mb-1 text-3xl leading-none font-black tracking-[-1.5px] text-white md:text-4xl xl:text-5xl">
          Gallery
        </h2>
      </AnimatedCard>

      <AnimatedCard
        className="relative flex w-full flex-col gap-4 md:flex-row lg:gap-8"
        direction="down"
        distance={12}
        triggerOnView
      >
        {COLUMNS.map((column) => (
          <div key={column} className="flex flex-1 flex-col gap-4 lg:gap-8">
            {data.items
              .filter((item) => item.column === column)
              .map((item, j) => (
                <GalleryCard key={j} {...item} />
              ))}
          </div>
        ))}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-white to-transparent" />
      </AnimatedCard>

      <AnimatedCard direction="up" distance={12} triggerOnView>
        <Link
          href={data.ctaURL}
          className="bg-primary-red rounded-lg px-10 py-4 text-lg font-bold text-white transition duration-500 ease-in-out hover:bg-black"
        >
          {data.ctaLabel}
        </Link>
      </AnimatedCard>
    </div>
  );
}
