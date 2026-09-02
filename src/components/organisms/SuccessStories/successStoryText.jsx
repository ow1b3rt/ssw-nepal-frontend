import AnimatedCard from "@/components/ui/animated-card";
import { AnimatedWords } from "@/components/ui/animated-words";
import Divider from "@/components/ui/divider";

export default function SuccessStoryText({ name, batch, description }) {
  return (
    <section className="flex flex-col flex-1 bg-faint-red h-full gap-2 xl:gap-6 p-6 order-1 md:order-2 rounded-lg md:ml-5">
      <AnimatedCard direction="up" distance={12} triggerOnView>
        <h2 className="mb-1 text-3xl font-black leading-none tracking-[-1.5px] text-primary-red md:text-4xl xl:text-5xl">
          {" "}
          {name}{" "}
        </h2>
      </AnimatedCard>
      <Divider backgroundColor="bg-primary-red/10" className="xl:-my-5" />
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
          className="text-base text-wrap xl:text-lg leading-relaxed text-text-color"
        />
      </AnimatedCard>
    </section>
  );
}
