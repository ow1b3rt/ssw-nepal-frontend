import Image from "next/image";

import { AnimatedCounter } from "./ui/animated-counter";
import { AnimatedWords } from "./ui/animated-words";

export default function StatImage({ data }) {
  const { images, stats } = data;

  const happyStudents = stats?.[0];
  const experts = stats?.[1];

  return (
    <div className="grid max-h-150 w-full grid-cols-4 grid-rows-4 gap-4">
      <ImageCard
        image={images.main}
        className="col-span-4 row-span-1 md:col-span-2 md:row-span-3"
      />

      <ImageCard image={images.topSmall} className="col-span-2 md:col-span-1 md:row-span-1" />

      <StatCard
        value={happyStudents.value}
        label={happyStudents.label}
        background={happyStudents.background}
        className="col-span-2 md:col-span-1 md:row-span-1"
      />

      <ImageCard
        image={images.largeRight}
        className="col-span-4 md:col-span-2 md:col-start-3 md:row-span-3 md:row-start-2"
      />

      <StatCard
        value={experts.value}
        label={experts.label}
        background={experts.background}
        className="col-span-2 md:col-span-1 md:row-span-1 md:row-start-4"
      />

      <ImageCard
        image={images.bottomSmall}
        className="col-span-2 md:col-span-1 md:col-start-2 md:row-span-1 md:row-start-4"
      />
    </div>
  );
}

function ImageCard({ image, className = "" }) {
  if (!image?.src) return null;

  return (
    <div className={`relative overflow-hidden rounded-[18px] ${className}`}>
      <Image
        src={image.src}
        alt={image.alt || ""}
        fill
        sizes="(max-width: 1024px) 100vw, 650px"
        className="object-cover"
      />
    </div>
  );
}

function StatCard({ value, label, background, className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-[18px] p-8 text-center text-white ${background} ${className} `}
    >
      <div className="text-3xl leading-none font-black xl:text-4xl">
        <AnimatedCounter end={value} suffix="+" start={0} duration={2500} triggerOnView />
      </div>

      <div className="mt-3 text-xl leading-tight font-bold xl:text-2xl">
        <AnimatedWords
          text={label}
          animKey="label"
          durationMs={1000}
          staggerMs={100}
          direction="up"
          className="text-white"
        />
      </div>
    </div>
  );
}
