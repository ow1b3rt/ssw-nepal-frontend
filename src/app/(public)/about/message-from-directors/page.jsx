import { HomeAboutGallery } from "@/components/organisms/home/HomeAbout/HomeAboutGallery";
import SuccessStoryText from "@/components/organisms/SuccessStories/successStoryText";

export const metadata = {
  title: "Message from Directors | SSW Training Centre Nepal",
  description:
    "Read the vision and commitment of our Directors, Kalakar Thapa and Anil Bhandari, as they share SSW Training Centre Nepal's mission.",
};

const executiveDirectorSection = {
  aboutDesc: {
    name: "Kalakar Thapa",
    batch: "Executive Managing Director",
    description: `Welcome to SSW Training Center Nepal.

Our vision is to strengthen the relationship between Nepal and Japan by preparing motivated candidates for education and career opportunities in Japan. We provide guidance for pathways such as the Specified Skilled Worker (SSW), Engineer/Specialist in Humanities/International Services, and Technical Intern programs.

At our training centre, candidates receive more than Japanese-language education. We help them understand Japanese culture, lifestyle, workplace expectations, and professional manners so that they can confidently adapt and contribute when they begin their journey in Japan.

Our experienced instructors and staff are dedicated to providing high-quality classes, practical training, and personalized guidance. We want every learner to gain the knowledge, confidence, and skills required to turn their ambitions into reality.

Your journey with SSW Training Center Nepal is not simply about studying a language or finding employment. It is an opportunity to transform your career, broaden your perspective, and create new possibilities for your future.

I encourage every candidate to move forward with enthusiasm, discipline, and determination. Together, we can open new horizons and create pathways toward success in Japan and beyond.

We will continue to support you with care and dedication so that your future can be bright and rewarding.`,
  },
};

const managingDirectorSection = {
  aboutDesc: {
    name: "Anil Bhandari",
    batch: "Managing Director",
    description: `Since the establishment of SSW Training Center Nepal, our mission has been to develop skilled and confident individuals who can contribute actively in Japan and across the world.

We believe that learning Japanese is about more than language alone. That is why we also provide cultural education, practical guidance, and training in Japanese manners and workplace etiquette. Our goal is to prepare candidates not only for further study and employment, but also for a successful and meaningful future.

SSW Training Center Nepal was established to support Nepalese candidates who wish to develop advanced Japanese-language skills, professional knowledge, and business manners required to pursue opportunities in Japan.

We are committed to guiding each candidate with care, patience, and sincerity. I sincerely hope that the knowledge, skills, and experiences you gain with us will help you build a bright and successful future.`,
  },
};

export default function MessageFromDirectors() {
  return (
    <div className="flex w-full flex-col gap-16">

      {/* Executive Managing Director */}
      <section className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
        <SuccessStoryText
          {...executiveDirectorSection.aboutDesc}
          showDivider={false}
          batchClass="mb-0"
          className="bg-transparent"
        />

        <HomeAboutGallery
          extraPercentWidth={0}
          statClass="bg-primary-red"
          className="order-1! md:order-2!"
        />
      </section>

      {/* Managing Director */}
      <section className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
        <HomeAboutGallery
          extraPercentWidth={0}
          statClass="bg-primary-red"
          className="order-1! md:order-2!"
        />

        <SuccessStoryText
          {...managingDirectorSection.aboutDesc}
          showDivider={false}
          batchClass="mb-0"
          className="bg-transparent"
        />
      </section>

      
    </div>
  );
}