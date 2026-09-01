import Image from "next/image";

export default function DetailPage({ data }) {
  return (
    <main className="bg-white text-black">
      <div className="mx-auto max-w-[1320px] px-5 pb-20 pt-10 md:px-8 lg:px-12">

        {data.title && (
          <h1 className="mb-6 text-center text-[38px] font-black leading-tight tracking-[-1.5px] md:text-[48px] lg:text-[54px]">
            {data.title}
          </h1>
        )}

        {data.image?.src && (
          <div className="relative mb-10 aspect-[2.6/1] w-full overflow-hidden rounded-[12px]">
            <Image
              src={data.image.src}
              alt={data.image.alt || data.title || "Image"}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1320px"
              className="object-cover"
            />
          </div>
        )}

        {data.content?.length > 0 && (
          <div className="space-y-6 text-[17px] leading-[1.5] text-[#4b4b4b]">
            {data.content.map((block, index) => (
              <ContentBlock key={index} block={block} />
            ))}
          </div>
        )}

      </div>
    </main>
  );
}

function ContentBlock({ block }) {

  if (typeof block === "string") {
    return <p>{block}</p>;
  }

  switch (block.type) {
    case "paragraph":
      return <p>{block.text}</p>;

    case "heading":
      return (
        <h2 className="pt-3 text-[28px] font-bold text-black">
          {block.text}
        </h2>
      );

    case "subheading":
      return (
        <h3 className="pt-2 text-[22px] font-bold text-black">
          {block.text}
        </h3>
      );

    case "list":
      return (
        <ul className="list-disc space-y-2 pl-6">
          {block.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );

    case "ordered-list":
      return (
        <ol className="list-decimal space-y-2 pl-6">
          {block.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      );

    case "image":
      return (
        <div className="relative my-8 aspect-[2.6/1] overflow-hidden rounded-[12px]">
          <Image
            src={block.src}
            alt={block.alt || ""}
            fill
            sizes="(max-width: 768px) 100vw, 1320px"
            className="object-cover"
          />
        </div>
      );

    default:
      return null;
  }
}