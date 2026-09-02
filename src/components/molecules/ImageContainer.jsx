import Image from "next/image";

export function ImageContainer({
  className,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  alt = "",
  ...props
}) {
  return (
    <div className={className + " overflow-hidden rounded-2xl relative"}>
      <Image
        alt={alt}
        className="hover:scale-105 transition ease-in-out duration-500"
        fill
        sizes={
          sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        }
        {...props}
      />
    </div>
  );
}
