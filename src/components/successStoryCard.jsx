import Image from "next/image";

export default function SuccessStoryCard({
  title,
  description,
  image,
  background = "#f3f6ff",
}) {
  return (
    <div
      className="rounded-[14px] p-6"
      style={{ backgroundColor: background }}
    >
      {title && (
        <h2 className="mb-2 text-[42px] font-black leading-none tracking-[-1.5px] md:text-[50px]">
          {title}
        </h2>
      )}

      {description && (
        <p className="mb-6 text-[17px] leading-[1.45] text-[#4b4b4b]">
          {description}
        </p>
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
    </div>
  );
}