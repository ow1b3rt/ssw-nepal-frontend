import { HomeAbout } from "@/components/organisms/HomeAbout/HomeAbout";
import { HomeHero } from "@/components/organisms/HomeHero/HomeHero";
import { HomeServices } from "@/components/organisms/HomeServices/HomeServices";
import { HomeGallery } from "@/components/organisms/HomeGallery/HomeGallery";

export default function Home() {
  return (
    <div className='flex flex-col gap-12 w-full pt-12'>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeGallery />
    </div>
  );
}