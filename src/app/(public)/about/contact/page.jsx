import AnimatedCard from "@/components/ui/animated-card";
import { AnimatedWords } from "@/components/ui/animated-words";
import { ContactForm } from "@/components/organism/forms/ContactForm";

export default function Contact() {
  return (
    <section className="container mx-auto max-w-6xl pb-16 md:py-12">
      <div className="mb-6 flex flex-col gap-3 text-center md:mb-8">
        <h1 className="text-foreground text-3xl font-bold md:text-5xl">
          <AnimatedWords
            text="Contact Us"
            animKey="contactUs"
            durationMs={1000}
            staggerMs={100}
            direction="up"
          />
        </h1>

        <p className="text-muted-foreground text-base md:text-lg">
          <AnimatedWords
            text="Our Team is happy to answer your Questions. Fill out the form, and we’ll be in touch as soon as possible."
            animKey="weAreHereToHelp"
            durationMs={1000}
            staggerMs={10}
            direction="up"
          />
        </p>
      </div>

      <AnimatedCard className="w-full" direction="down" distance={12} triggerOnView>
        <ContactForm />
      </AnimatedCard>
    </section>
  );
}
