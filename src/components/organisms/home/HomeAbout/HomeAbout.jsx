import SuccessStoryText from "@/components/organisms/SuccessStories/successStoryText";
import { HomeAboutGallery } from "./HomeAboutGallery";
import AnimatedCard from "@/components/ui/animated-card";
import Divider from "@/components/ui/divider";

const section = {
  aboutDesc: {
    title: "About Us",
    description: `SSW Training Centre Nepal is a leading education training center dedicated to empowering candidates with the opportunity to pursue higher education and work in Japan. With a strong focus on career counseling and personalized guidance, SSW Training Centre Nepal strives to pave the way for promising academic journeys and successful careers for candidates in the Land of the Rising Sun. SSW Training Centre Nepal understands that choosing the right career path is a critical decision for any candidates. They offer personalized career counseling sessions to help candidates identify their interests, strengths, and goals. These sessions are tailored to align candidates' aspirations with the vast array of working opportunities available in Japan. SSW Training Centre Nepal is committed to being the bridge that connects ambitious students with outstanding educational opportunities in Japan. Their dedicated approach, tailored counseling, and unwavering commitment to student success make them the go-to consultancy for those seeking a fulfilling academic and professional experience in Japan.`,
  },
};

export function HomeAbout({ data = section }) {
  return (
    <section className="grid lg:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 w-full items-center gap-y-8 xl:gap-y-16">
      <AnimatedCard direction="up" distance={12} triggerOnView>
        <HomeAboutGallery />
      </AnimatedCard>

      <SuccessStoryText
        name={data.aboutDesc.title}
        description={data.aboutDesc.description}
      />
    </section>
  );
}
