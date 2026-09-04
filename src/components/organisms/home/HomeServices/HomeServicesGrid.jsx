import {
  BedDouble,
  CreditCard,
  FileText,
  HardHat,
  HeartHandshake,
  Languages,
  PlaneTakeoff,
  RotateCw,
  Sprout,
  UserCheck,
  UtensilsCrossed,
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
      className={`group flex w-full flex-col gap-1 rounded-3xl p-4 shadow-sm transition-colors duration-600 sm:gap-4 sm:p-6 ${t.bg} ${t.hoverBg}`}
    >
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-md p-2 transition-colors duration-300 md:h-16 md:w-16 md:rounded-2xl lg:h-10 lg:w-10 lg:rounded-xl xl:h-16 xl:w-16 xl:rounded-2xl ${t.iconBg} ${t.iconHoverBg}`}
      >
        {Icon && (
          <Icon
            size={28}
            className={`transition-colors duration-300 ${t.iconColor} ${t.iconHoverColor}`}
          />
        )}
      </div>
      <h3 className="text-base font-extrabold text-white transition-colors duration-300 group-hover:text-black md:text-2xl lg:text-xl xl:text-2xl">
        {title}
      </h3>
      <p className="text-sm text-white/70 transition-colors duration-300 group-hover:text-black/60 md:text-lg lg:text-base xl:text-lg">
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
