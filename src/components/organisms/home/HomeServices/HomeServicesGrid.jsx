import {
  UserCheck,
  FileText,
  BedDouble,
  RotateCw,
  Languages,
  CreditCard,
  HardHat,
  Sprout,
  UtensilsCrossed,
  PlaneTakeoff,
  HeartHandshake,
} from "lucide-react";

const ICONS = {
  UserCheck,
  FileText,
  BedDouble,
  RotateCw,
  Languages,
  CreditCard,
  HardHat,
  Sprout,
  UtensilsCrossed,
  PlaneTakeoff,
  HeartHandshake,
  Languages,
};

const THEMES = {
  green: {
    bg: "bg-primary-green",
    hoverBg: "hover:bg-primary-green/10",
    iconBg: "bg-white",
    iconHoverBg: "group-hover:bg-primary-green",
    iconColor: "text-primary-green",
    iconHoverColor: "group-hover:text-white",
  },
  red: {
    bg: "bg-primary-red",
    hoverBg: "hover:bg-primary-red/10",
    iconBg: "bg-white",
    iconHoverBg: "group-hover:bg-primary-red",
    iconColor: "text-primary-red",
    iconHoverColor: "group-hover:text-white",
  },
  blue: {
    bg: "bg-primary-blue-dark",
    hoverBg: "hover:bg-faint-blue",
    iconBg: "bg-white",
    iconHoverBg: "group-hover:bg-primary-blue-dark",
    iconColor: "text-primary-blue-dark",
    iconHoverColor: "group-hover:text-white",
  },
};

const section = {
  theme: "blue",
  list: [
    {
      icon: "UserCheck",
      title: "Career Counselling",
      desc: "International English Language Testing System or IELTS",
    },
    {
      icon: "FileText",
      title: "Test Preparations",
      desc: "Preparing for tests can be stressful, but SSW Training Centre Nepal is here to help.",
    },
    {
      icon: "BedDouble",
      title: "Hostel Faculty",
      desc: "We understand that finding a comfortable place to stay is essential for our trainees.",
    },
    {
      icon: "RotateCw",
      title: "SSW Training",
      desc: "We provide training programs to equip you with needed for the SSW visa.",
    },
    {
      icon: "Languages",
      title: "JFT",
      desc: "Japanese language is crucial for a successful life and career in Japan.",
    },
    {
      icon: "CreditCard",
      title: "Visa Guidance",
      desc: "Navigating the visa process can be complex and time-consuming, but at SSW.",
    },
  ],
};

function ServiceCard({ icon, title, desc, theme }) {
  const Icon = ICONS[icon];
  const t = THEMES[theme] ?? THEMES.blue;

  return (
    <div
      className={`group flex w-full flex-col gap-1 sm:gap-4 rounded-3xl p-4 sm:p-6 shadow-sm transition-colors duration-600 ${t.bg} ${t.hoverBg}`}
    >
      <div
        className={`flex p-2 h-8 w-8 md:h-16 md:w-16 lg:h-10 lg:w-10 xl:w-16 xl:h-16 items-center justify-center rounded-md md:rounded-2xl lg:rounded-xl xl:rounded-2xl transition-colors duration-300 ${t.iconBg} ${t.iconHoverBg}`}
      >
        {Icon && (
          <Icon
            size={28}
            className={`transition-colors duration-300 ${t.iconColor} ${t.iconHoverColor}`}
          />
        )}
      </div>
      <h3 className="text-base md:text-2xl lg:text-xl xl:text-2xl font-extrabold text-white transition-colors duration-300 group-hover:text-black">
        {title}
      </h3>
      <p className="text-sm md:text-lg lg:text-base xl:text-lg text-white/70 transition-colors duration-300 group-hover:text-black/60">
        {desc}
      </p>
    </div>
  );
}

export function ServicesGrid({ section: data = section, className }) {
  return (
    <div className={`grid grid-cols-2 gap-2 sm:gap-4 ${className}`}>
      {data.list.map((item, i) => (
        <ServiceCard key={i} {...item} theme={data.theme} />
      ))}
    </div>
  );
}
