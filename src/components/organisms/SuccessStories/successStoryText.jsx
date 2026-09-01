import AnimatedCard from "@/components/ui/animated-card";
import { AnimatedWords } from "@/components/ui/animated-words";

export default function SuccessStoryText({ name, batch, description }) {
  return (
    <section className="flex flex-col flex-1 bg-faint-red h-full gap-2 xl:gap-8 p-6 order-1 md:order-2 rounded-lg">
      <AnimatedCard direction="up" distance={12} triggerOnView>
        <h2 className="mb-1 text-[44px] font-black leading-none tracking-[-1.5px] text-primary-red md:text-[52px]">
          {" "}
          {name}{" "}
        </h2>
      </AnimatedCard>
      <AnimatedCard direction="up" distance={12} triggerOnView>
        {batch && (
          <h3 className="mb-8 text-[18px] font-bold text-text-color">
            {batch}
          </h3>
        )}
      </AnimatedCard>

      <AnimatedCard direction="up" distance={12} triggerOnView>
        <AnimatedWords
          text={description}
          animKey="description"
          durationMs={500}
          staggerMs={10}
          direction="up"
          className="text-base xl:text-lg leading-relaxed text-text-color"
        />
      </AnimatedCard>
    </section>
  );
}
