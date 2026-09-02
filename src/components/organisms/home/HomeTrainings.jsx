import { ServicesGrid } from "./HomeServices/HomeServicesGrid";
import { ServicesIntro } from "./HomeServices/HomeServicesIntro";
import AnimatedCard from "@/components/ui/animated-card";

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
    <section
      id="home-trainings"
      className="grid lg:grid-cols-2 gap-8 gap-y-8 xl:gap-y-16 md:pt-10"
    >
      <AnimatedCard
        className="order-2 lg:order-1"
        direction="down"
        distance={12}
        triggerOnView
      >
        <ServicesGrid section={section} />
      </AnimatedCard>
      <AnimatedCard
        className="order-1 lg:order-2"
        direction="up"
        distance={12}
        triggerOnView
      >
        <ServicesIntro
          className="bg-faint-red"
          section={trainingIntro}
          ctaClassName="bg-primary-red hover:bg-primary-red-dark"
        />
      </AnimatedCard>
    </section>
  );
}
