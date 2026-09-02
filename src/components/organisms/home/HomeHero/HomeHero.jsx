import { HeroText } from "./HeroText";
import { HeroGallery } from "./HeroGallery";
import AnimatedCard from "@/components/ui/animated-card";

export function HomeHero() {
  return (
    <section className="grid md:grid-cols-2 gap-4 items-center">
      <AnimatedCard direction="up" distance={12}>
        <HeroText />
      </AnimatedCard>
      <AnimatedCard direction="down" distance={15}>
        <HeroGallery />
      </AnimatedCard>
    </section>
  );
}
