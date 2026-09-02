import { ServicesGrid } from "./HomeServices/HomeServicesGrid";
import { ServicesIntro } from "./HomeServices/HomeServicesIntro";

import {
  HardHat,
  Sprout,
  UtensilsCrossed,
  PlaneTakeoff,
  HeartHandshake,
  Languages,
} from "lucide-react";

const ICONS = {
  HardHat,
  Sprout,
  UtensilsCrossed,
  PlaneTakeoff,
  HeartHandshake,
  Languages,
};

const trainingIntro = {
  title: "Our Training Courses",
  desc: "Learn practical skills, gain confidence, and prepare for career opportunities in Japan with SSW Training Centre Nepal.",
  ctaLabel: "Explore More",
  ctaURL: "#",
  image: { src: "/favicon.jpg", alt: "SSW team group photo" },
};
const section = {
  theme: "red",
  list: [
    {
      icon: "HardHat",
      title: "Construction",
      desc: "Gain practical skills and industry knowledge for construction-related work",
    },
    {
      icon: "Sprout",
      title: "Agriculture",
      desc: "Develop essential agricultural skills and knowledge to prepare for",
    },
    {
      icon: "UtensilsCrossed",
      title: "Food Service",
      desc: "Learn essential food service skills, workplace practices, and knowledge required",
    },
    {
      icon: "PlaneTakeoff",
      title: "Aviation Ground Handling",
      desc: "Build practical knowledge and skills for airport ground",
    },
    {
      icon: "HeartHandshake",
      title: "Nursing Caregiver",
      desc: "Develop the essential knowledge, skills, and care practices needed to support",
    },
    {
      icon: "Languages",
      title: "JLPT N5 Preparation",
      desc: "Build your Japanese language foundation",
    },
  ],
};

export default function HomeTrainings() {
  return (
    <section className="grid lg:grid-cols-2 gap-8">
      <ServicesGrid section={section} />
      <ServicesIntro
        className="bg-faint-red"
        section={trainingIntro}
        ctaClassName="bg-primary-red hover:bg-primary-red-dark"
      />
    </section>
  );
}
