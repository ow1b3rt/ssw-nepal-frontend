import { AnimatedCounter } from "@/components/ui/animated-counter";
import { GraduationCap, IdCard, Star } from "lucide-react";
import AnimatedCard from "@/components/ui/animated-card";

const section = {
  image1: { src: "/favicon.jpg", alt: "helo" },
  text1: { icon: "IdCard", number: 20, label: "Experts" },
  image2: { src: "/favicon.jpg", alt: "helo" },
  text2: { icon: "GraduationCap", number: 1500, label: "Students Enrolled" },
  image3: { src: "/favicon.jpg", alt: "helo" },
  doubleImage: [
    { src: "/favicon.jpg", alt: "helo" },
    { src: "/favicon.jpg", alt: "helo" },
  ],
  text3: { icon: "Star", number: 6, label: "Courses" },
};

const ICONS = { IdCard, GraduationCap, Star };

import Image from "next/image";

export function ImageContainer({ className, ...props }) {
  return (
    <AnimatedCard
      direction="up"
      delay={100}
      className={className + " overflow-hidden relative rounded-lg!"}
    >
      <Image fill {...props} />
    </AnimatedCard>
  );
}

function StatCard({ icon, number, label }) {
  const Icon = ICONS[icon];

  return (
    <AnimatedCard
      direction="down"
      delay={50}
      className="flex items-center justify-center gap-3 rounded-lg! bg-faint-blue p-4"
    >
      {Icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900">
          <Icon className="text-white" size={20} />
        </div>
      )}
      <div>
        <p className="text-2xl font-extrabold">
          <AnimatedCounter end={number} suffix={"+"} start={0} />
        </p>
        <p className="text-lg font-bold">{label}</p>
      </div>
    </AnimatedCard>
  );
}

export function HeroGallery({ section: data = section }) {
  return (
    <div
      className={`
            grid grid-cols-2 max-h-200 
            [grid-template-areas:'image1_text1'_'image1_image2'_'image1_image2'_'text2_image2'_'image3_doubleImage'_'image3_doubleImage'_'image3_text3']
            gap-2 *:rounded-sm
        `}
    >
      <ImageContainer
        className="[grid-area:image1] aspect-square"
        src={data.image1.src}
        alt={data.image1.alt}
      />
      <div className="[grid-area:text1]">
        <StatCard {...data.text1} />
      </div>
      <ImageContainer
        className="[grid-area:image2] aspect-square h-full w-full"
        src={data.image2.src}
        alt={data.image2.alt}
      />
      <div className="[grid-area:text2]">
        <StatCard {...data.text2} />
      </div>
      <ImageContainer
        className="[grid-area:image3] aspect-square h-full lg:max-h-72 w-full"
        src={data.image3.src}
        alt={data.image3.alt}
      />
      <div className="[grid-area:doubleImage] flex gap-2 *:rounded-sm">
        {data.doubleImage.map((img, i) => (
          <ImageContainer
            key={i}
            className="aspect-square flex-1"
            src={img.src}
            alt={img.alt}
          />
        ))}
      </div>
      <div className="[grid-area:text3] p-1">
        <StatCard {...data.text3} />
      </div>
    </div>
  );
}
