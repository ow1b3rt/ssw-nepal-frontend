import Image from "next/image";

export function ImageContainer({
  className,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  alt = "",
  ...props
}) {
  return (
    <div className={className + " relative overflow-hidden rounded-2xl"}>
      <Image
        alt={alt}
        className="transition duration-500 ease-in-out hover:scale-105"
        fill
        sizes={sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
        {...props}
      />
    </div>
  );
}
