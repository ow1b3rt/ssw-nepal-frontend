import { ImageContainer } from "@/components/molecules/ImageContainer";
import Link from "next/link";

const section = {
  items: [
    { column: "left", image: { src: "/favicon.jpg", alt: "Reception" }, label: "Reception", height: 340 },
    { column: "left", image: { src: "/favicon.jpg", alt: "T-shirt gift" }, label: null, height: 220 },
    { column: "center", image: { src: "/favicon.jpg", alt: "Gathering" }, label: "Gathering", height: 580 },
    { column: "right", image: { src: "/favicon.jpg", alt: "Team Member" }, label: "Team Member", height: 340 },
    { column: "right", image: { src: "/favicon.jpg", alt: "Team gathering" }, label: null, height: 220 },
  ],
  ctaLabel: "Explore Gallery",
  ctaURL: "#",
};

const COLUMNS = ["left", "center", "right"];

function GalleryCard({ image, label, height, theme = "lightblue" }) {
  const THEMES = {
    lightblue: "bg-primary-blue-dark/10 text-primary-blue-dark",
    darkblue: "bg-primary-blue-dark text-white",
  };
  return (
    <div
      className="flex w-full flex-col gap-3 rounded-2xl border border-gray-200 p-3 shadow-sm"
      style={{ height: `${height}px` }}
    >
      <ImageContainer className="w-full flex-1 aspect-square rounded-xl" src={image.src} alt={image.alt} />
      {label && (
        <div className={`rounded-xl py-4 text-center text-lg font-bold ${THEMES[theme]}`}>{label}</div>
      )}
    </div>
  );
}

export function HomeGallery({ section: data = section }) {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <div className="relative flex flex-col md:flex-row w-full gap-4">
        {COLUMNS.map((column) => (
          <div key={column} className="flex flex-1 flex-col gap-4">
            {data.items
              .filter((item) => item.column === column)
              .map((item, j) => (
                <GalleryCard key={j} {...item} />
              ))}
          </div>
        ))}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-white to-transparent" />
      </div>

      <Link href={data.ctaURL} className="rounded-xl bg-primary-red px-8 py-4 text-lg font-bold text-white">
        {data.ctaLabel}
      </Link>
    </div>
  );
}