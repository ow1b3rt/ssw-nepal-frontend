import { NotchedImage } from "@/components/molecules/NotchedImage";
import { ImageContainer } from "@/components/molecules/ImageContainer";

const section = {
  mainImage: { src: "/favicon.jpg", alt: "SSW office reception" },
  secondaryImage: { src: "/favicon.jpg", alt: "SSW classroom" },
  badgeNumber: "5+",
  badgeLabel: "Years Of Experience",
};

// which two edges the image sits flush against, opposite the notch corner
const IMAGE_POSITION = {
  "bottom-right": "justify-start items-start",
  "bottom-left": "justify-end items-start",
  "top-right": "justify-start items-end",
  "top-left": "justify-end items-end",
};

const CORNER_POSITION = {
  "bottom-right": "right-0 bottom-0",
  "bottom-left": "left-0 bottom-0",
  "top-right": "right-0 top-0",
  "top-left": "left-0 top-0",
};

const BADGE_POSITION = {
  "bottom-right": "top-8 left-0",
  "bottom-left": "top-8 right-0",
  "top-right": "bottom-8 left-0",
  "top-left": "bottom-8 right-0",
};

export function HomeAboutGallery({ section: data = section, extraPercentWidth = 4 }) {
  const notchCorner = "bottom-right"; // which corner the notch is cut from
  const notchWidth = 42; // % of image width
  const notchHeight = 42; // % of image height

  return (
    <div className={`relative flex aspect-square w-full flex-1 px-4 ${IMAGE_POSITION[notchCorner]}`}>
      <NotchedImage
        src={data.mainImage.src}
        alt={data.mainImage.alt}
        aspectRatio={1 / 1}
        radius={2}
        notchWidth={notchWidth}
        notchHeight={notchHeight}
        notchRadius={2}
        notchCorner={notchCorner}
        className="h-9/10 w-9/10"
      />

      <div className={`absolute z-10 ${BADGE_POSITION[notchCorner]} rounded-2xl bg-green-600 px-6 py-4 text-white shadow-lg`}>
        <p className="text-4xl font-extrabold leading-none">{data.badgeNumber}</p>
        <p className="mt-1 text-lg font-bold">{data.badgeLabel}</p>
      </div>

      {/* sized a few % bigger than the notch so its border overlaps the cut edge */}
      <div
        className={`absolute z-10 ${CORNER_POSITION[notchCorner]} overflow-hidden rounded-sm shadow-xl`}
        style={{ width: `${notchWidth + extraPercentWidth}%`, height: `${notchHeight + extraPercentWidth}%` }}
      >
        <ImageContainer className="h-full w-full" src={data.secondaryImage.src} alt={data.secondaryImage.alt} />
      </div>
    </div>
  );
}