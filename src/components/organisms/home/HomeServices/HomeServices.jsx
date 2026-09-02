import AnimatedCard from "@/components/ui/animated-card";
import { ServicesGrid } from "./HomeServicesGrid";
import { ServicesIntro } from "./HomeServicesIntro";

export function HomeServices() {
  return (
    <section
      id="home-services"
      className="grid lg:grid-cols-2 gap-x-8 gap-y-8 xl:gap-y-16 md:pt-10"
    >
      <AnimatedCard direction="down" distance={12} triggerOnView>
        <ServicesIntro />
      </AnimatedCard>
      <AnimatedCard direction="up" distance={12} triggerOnView>
        <ServicesGrid />
      </AnimatedCard>
    </section>
  );
}
