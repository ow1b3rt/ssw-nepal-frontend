import Image from "next/image";

export default function StatImage({ data }) {
  const { images, stats } = data;

  const happyStudents = stats?.[0];
  const experts = stats?.[1];

  return (
    <div
      className="
        grid
        h-[720px]
        w-full
        grid-cols-4
        grid-rows-4
        gap-4
      "
    >
    
      <ImageCard
        image={images.main}
        className="col-span-2 row-span-3"
      />

     
      <ImageCard
        image={images.topSmall}
        className="col-span-1 row-span-1"
      />

   
      <StatCard
        value={happyStudents.value}
        label={happyStudents.label}
        background={happyStudents.background}
        className="col-span-1 row-span-1"
      />

     
      <ImageCard
        image={images.largeRight}
        className="col-span-2 row-span-3 col-start-3 row-start-2"
      />

    
      <StatCard
        value={experts.value}
        label={experts.label}
        background={experts.background}
        className="col-span-1 row-span-1 row-start-4"
      />

     
      <ImageCard
        image={images.bottomSmall}
        className="col-span-1 row-span-1 col-start-2 row-start-4"
      />
    </div>
  );
}

function ImageCard({ image, className = "" }) {
  if (!image?.src) return null;

  return (
    <div
      className={`relative overflow-hidden rounded-[18px] ${className}`}
    >
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

function StatCard({
  value,
  label,
  background,
  className = "",
}) {
  return (
    <div
      className={`
        flex
        flex-col
        items-center
        justify-center
        rounded-[18px]
        p-8
        text-center
        text-white
        ${background}
        ${className}
      `}
    >
      <div className="text-[32px] font-black leading-none xl:text-[40px]">
        {value}
      </div>

      <div className="mt-3 text-[20px] font-bold leading-tight xl:text-[24px]">
        {label}
      </div>
    </div>
  );
}