import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ImageContainer } from "@/components/molecules/ImageContainer";
import { NotchedImage } from "@/components/molecules/NotchedImage";

const section = {
  mainImage: { src: "/favicon.jpg", alt: "SSW office reception" },
  secondaryImage: { src: "/favicon.jpg", alt: "SSW classroom" },
  badgeNumber: 5,
  badgeLabel: "Years Of Experience",
};

const IMAGE_POSITION = {
  "bottom-right": "justify-start items-start",
  "bottom-left": "justify-end items-start",
  "top-right": "justify-start items-end",
  "top-left": "justify-end items-end",
};

const BADGE_POSITION = {
  "bottom-right": "top-8 -left-8",
  "bottom-left": "top-8 -right-8",
  "top-right": "bottom-8 -left-8",
  "top-left": "bottom-8 -right-8",
};

// which side of the box the notch is cut TOWARD, per axis — used to
// decide whether the overlay's position is measured "from" or "against" that edge
const CORNER_AXES = {
  "bottom-right": { x: "left", y: "top" },
  "bottom-left": { x: "right", y: "top" },
  "top-right": { x: "left", y: "bottom" },
  "top-left": { x: "right", y: "bottom" },
};

export function HomeAboutGallery({
  section: data = section,
  extraPercentWidth = 4,
  padPercent = 2,
  statClass = "bg-primary-green",
  className = "",
}) {
  const notchCorner = "bottom-right";
  const notchWidth = 42; // % of image width
  const notchHeight = 42; // % of image height

  const { x, y } = CORNER_AXES[notchCorner];
  const xValue = `${100 - notchWidth + padPercent}%`;
  const yValue = `${100 - notchHeight + padPercent}%`;

  return (
    <div className={`order-2 flex w-full flex-1 md:order-1 ${className}`}>
      <div
        className={`relative m-8 flex aspect-square max-h-160 ${IMAGE_POSITION[notchCorner]}`}
        style={{
          width: `${100 - extraPercentWidth - padPercent}%`,
          marginBottom: `${extraPercentWidth + padPercent}%`,
        }}
      >
        <NotchedImage
          src={data.mainImage.src}
          alt={data.mainImage.alt}
          aspectRatio={1 / 1}
          radius={2}
          notchWidth={notchWidth}
          notchHeight={notchHeight}
          notchRadius={2}
          notchCorner={notchCorner}
          className="h-full w-full"
        />

        <div
          className={`absolute z-10 ${BADGE_POSITION[notchCorner]} rounded-2xl px-6 py-4 text-white shadow-lg ${statClass}`}
        >
          <p className="text-4xl leading-none font-extrabold">
            <AnimatedCounter
              end={data.badgeNumber}
              suffix={"+"}
              start={0}
              duration={2500}
              triggerOnView
            />
          </p>
          <p className="mt-1 text-lg font-bold">{data.badgeLabel}</p>
        </div>

        {/* position measured from the corner OPPOSITE the notch: (100% - notchSize - pad) */}
        <div
          className="absolute z-10 overflow-hidden rounded-2xl shadow-xl"
          style={{
            width: `${notchWidth + extraPercentWidth - padPercent}%`,
            height: `${notchHeight + extraPercentWidth - padPercent}%`,
            [x]: xValue,
            [y]: yValue,
          }}
        >
          <ImageContainer
            className="h-full w-auto"
            src={data.secondaryImage.src}
            alt={data.secondaryImage.alt}
          />
        </div>
      </div>
    </div>
  );
}
