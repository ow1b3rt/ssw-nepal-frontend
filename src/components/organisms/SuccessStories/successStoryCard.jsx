import Image from "next/image";

import AnimatedCard from "@/components/ui/animated-card";

export default function SuccessStoryCard({ title, description, image, background = "#f3f6ff" }) {
  return (
    <AnimatedCard
      direction="down"
      distance={12}
      triggerOnView
      className={`rounded-lg p-4 md:p-6 ${background}`}
    >
      {title && (
        <h2 className="mb-2 text-3xl leading-none font-black tracking-[1px] md:text-5xl">
          {title}
        </h2>
      )}

      {description && (
        <p className="text-text-color mb-6 text-[17px] leading-[1.45]">{description}</p>
      )}

      {image?.src && (
        <div className="relative aspect-[1.45/1] w-full overflow-hidden rounded-[10px]">
          <Image
            src={image.src}
            alt={image.alt || title || "Success Story"}
            fill
            sizes="(max-width: 1024px) 100vw, 650px"
            className="object-cover"
          />
        </div>
      )}
    </AnimatedCard>
  );
}
