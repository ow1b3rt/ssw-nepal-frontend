import { ImageContainer } from "@/components/molecules/ImageContainer";

const section = {
  title: "Lorem Ipsum",
  quote:
    "Lorem ipsum dolor sit amet consectetur. Varius elementum ac enim sem dolor sit. Nulla ultricies sit gravida.",
  author: {
    name: "Ram Hari Sapkota",
    since: "Member since Nov 2025",
    avatar: "/favicon.jpg",
  },
};

export function TestimonialCard({ section: data = section, dark = false }) {
  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 ${
        dark
          ? "bg-primary-blue-dark/5"
          : "grayscale hover:grayscale-0 bg-faint-blue"
      }`}
    >
      <div className="flex flex-col gap-6 p-6">
        <h3 className="text-primary-blue-dark text-2xl font-extrabold">
          {data.title}
        </h3>
        <p className="text-xl text-black/60">&ldquo;{data.quote}&rdquo;</p>
      </div>

      <div
        className={`flex items-center gap-4 p-4 transition-colors duration-300 ${
          dark
            ? "bg-primary-blue-dark text-white"
            : "group-hover:bg-primary-blue group-hover:text-white"
        }`}
      >
        <ImageContainer
          className="h-16 w-16 rounded-full grayscale-0 border-2 border-white"
          src={data.author.avatar}
          alt={data.author.name}
        />
        <div className="flex flex-col">
          <span className="text-xl font-semibold">{data.author.name}</span>
          <span className="text-base font-semibold opacity-80">
            {data.author.since}
          </span>
        </div>
      </div>
    </div>
  );
}
