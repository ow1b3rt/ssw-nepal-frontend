import { ImageContainer } from "@/components/molecules/ImageContainer";
import Link from "next/link";
import AnimatedCard from "@/components/ui/animated-card";

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
  ctaURL: "#",
};

const COLUMNS = ["left", "center", "right"];

export function GalleryCard({ image, label, height, theme = "lightblue" }) {
  const THEMES = {
    lightblue: "bg-primary-blue text-white",
    darkblue: "bg-primary-blue-dark text-white",
  };
  return (
    <div
      className="flex w-full flex-col gap-3 rounded-2xl border bg-faint-blue p-4 shadow-sm"
      style={{ height: `${height}px` }}
    >
      <ImageContainer
        className="w-full flex-1 aspect-square rounded-xl"
        src={image.src}
        alt={image.alt}
      />
      {label && (
        <div
          className={`rounded-xl py-4 text-center text-lg font-bold ${THEMES[theme]}`}
        >
          {label}
        </div>
      )}
    </div>
  );
}

export function HomeGallery({ section: data = section }) {
  return (
    <div className="flex w-full flex-col items-center gap-2 space-y-8 lg:space-y-10">
      <AnimatedCard
        className="bg-black rounded-lg py-2.5 px-10"
        direction="up"
        distance={12}
        triggerOnView
      >
        <h2 className="mb-1 text-3xl font-black leading-none tracking-[-1.5px] text-white md:text-4xl xl:text-5xl">
          Gallery
        </h2>
      </AnimatedCard>
      <div className="relative flex flex-col md:flex-row w-full gap-4 lg:gap-8">
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
      </div>

      <Link
        href={data.ctaURL}
        className="rounded-lg bg-primary-red px-10 py-4 text-lg font-bold text-white"
      >
        {data.ctaLabel}
      </Link>
    </div>
  );
}
