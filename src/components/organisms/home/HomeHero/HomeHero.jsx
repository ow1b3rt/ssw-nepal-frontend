import AnimatedCard from "@/components/ui/animated-card";

import { HeroGallery } from "./HeroGallery";
import { HeroText } from "./HeroText";

export function HomeHero() {
  return (
    <section className="grid items-center gap-4 md:grid-cols-2">
      <AnimatedCard direction="up" distance={12}>
        <HeroText />
      </AnimatedCard>
      <AnimatedCard direction="down" distance={15}>
        <HeroGallery />
      </AnimatedCard>
    </section>
  );
}
