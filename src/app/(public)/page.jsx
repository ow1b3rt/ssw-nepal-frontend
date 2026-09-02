import { HomeAbout } from "@/components/organisms/home/HomeAbout/HomeAbout";
import { HomeHero } from "@/components/organisms/home/HomeHero/HomeHero";
import { HomeServices } from "@/components/organisms/home/HomeServices/HomeServices";
import { HomeGallery } from "@/components/organisms/home/HomeGallery/HomeGallery";
import HomeEvents from "@/components/organisms/home/HomeEvents/HomeEvents";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 w-full pt-12">
      <HomeHero />
      <HomeEvents />
      <HomeAbout />
      <HomeServices />
      <HomeGallery />
    </div>
  );
}
