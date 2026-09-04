import Image from "next/image";
import ArticleBody from "@/packages/admin/components/templates/ArticleBody";
import { Calendar, Clock, MapPin } from "lucide-react";

import { Button } from "./ui/button";

export default function DetailPage({ data, isBlog = false, isEvent = false }) {
  return (
    <main className="bg-white text-black">
      <div className="mx-auto max-w-[1320px] px-5 pt-10 pb-20 md:px-8 lg:px-12">
        {data.title && (
          <h1 className="mb-6 text-center text-[38px] leading-tight font-black tracking-[-1.5px] md:text-[48px] lg:text-[54px]">
            {data.title}
          </h1>
        )}
        {data.image?.src && (
          <div className="relative mb-5 w-full overflow-hidden rounded-[12px]">
            <Image
              src={data.image.src}
              alt={data.image.alt || data.title || "Image"}
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        )}{" "}
        {isEvent && (
          <div className="mb-6 grid grid-cols-1 gap-4 px-8 sm:grid-cols-3">
            {/* Time Section */}
            {data.time && (
              <div className="text-primary-blue-dark flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-[15px] font-semibold shadow-sm">
                <Clock className="text-primary-blue-dark h-4 w-4" />
                <span>Time: {data.time}</span>
              </div>
            )}

            {/* Date Section */}
            {data.date && (
              <div className="text-primary-blue-dark flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-[15px] font-semibold shadow-sm">
                <Calendar className="text-primary-blue-dark h-4 w-4" />
                <span>Date: {data.date}</span>
              </div>
            )}

            {/* Venue Section */}
            {data.venue && (
              <div className="text-primary-blue-dark flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-3 text-[15px] font-semibold shadow-sm">
                <MapPin className="text-primary-blue-dark h-4 w-4" />
                <span>Venue: {data.venue}</span>
              </div>
            )}
          </div>
        )}
        {data.content?.length > 0 &&
          (isBlog ? (
            <ArticleBody html={data.content} />
          ) : (
            <div className="space-y-6 text-[17px] leading-[1.5] whitespace-pre-line text-[#4b4b4b]">
              {data.content.map((block, index) => (
                <ContentBlock key={index} block={block} />
              ))}
            </div>
          ))}
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
      return <h2 className="pt-3 text-[28px] font-bold text-black">{block.text}</h2>;
    case "subheading":
      return <h3 className="pt-2 text-[22px] font-bold text-black">{block.text}</h3>;
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
