const section = {
  badge: "Welcome to SSW Training Centre Nepal",
  titleBlack: "Skills That Shape",
  titleRed: "Your Future.",
  description:
    "Empowering you with practical training, language skills, and career guidance to unlock better opportunities in Nepal and abroad.",
  ctaLabel: "Book an Appointment",
  ctaURL: "#",
};

export function HeroText({ section: data = section }) {
  return (
    <div className="flex flex-col items-start gap-6">
      <span className="rounded-2xl bg-green-600 px-6 py-3 text-lg font-bold text-white">
        {data.badge}
      </span>

      <h1 className="text-6xl font-extrabold leading-none xl:text-7xl">
        <span className="block text-black">{data.titleBlack}</span>
        <span className="block text-red-600">{data.titleRed}</span>
      </h1>

      <p className="max-w-xl text-xl text-gray-500">{data.description}</p>

      <a
        href={data.ctaURL}
        className="inline-flex items-center gap-2 rounded-2xl bg-black px-6 py-3 text-lg font-bold text-white"
      >
        {data.ctaLabel}
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}