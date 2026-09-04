import { HomeAboutGallery } from "@/components/organisms/home/HomeAbout/HomeAboutGallery";
import SuccessStoryText from "@/components/organisms/SuccessStories/successStoryText";

const section = {
  aboutDesc: {
    name: "Anil Bhandari",
    batch: "Executive Chairman",
    description: `SSW Training Centre Nepal is a leading education training center dedicated to empowering candidates with the opportunity to pursue higher education and work in Japan. With a strong focus on career counseling and personalized guidance, SSW Training Centre Nepal strives to pave the way for promising academic journeys and successful careers for candidates in the Land of the Rising Sun. SSW Training Centre Nepal understands that choosing the right career path is a critical decision for any candidates. They offer personalized career counseling sessions to help candidates identify their interests, strengths, and goals. These sessions are tailored to align candidates' aspirations with the vast array of working opportunities available in Japan. SSW Training Centre Nepal is committed to being the bridge that connects ambitious students with outstanding educational opportunities in Japan. Their dedicated approach, tailored counseling, and unwavering commitment to student success make them the go-to consultancy for those seeking a fulfilling academic and professional experience in Japan.`,
  },
};
export default function MessageFromChairman() {
  return (
    <section className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
      <HomeAboutGallery
        extraPercentWidth={0}
        statClass="bg-primary-red"
        className="order-1! md:order-2!"
      />
      <SuccessStoryText
        {...section.aboutDesc}
        showDivider={false}
        batchClass="mb-0"
        className="bg-transparent"
      />
    </section>
  );
}
