import { HomeAbout } from "@/components/organisms/home/HomeAbout/HomeAbout";
import { HomeHero } from "@/components/organisms/home/HomeHero/HomeHero";
import { HomeServices } from "@/components/organisms/home/HomeServices/HomeServices";
import { HomeGallery } from "@/components/organisms/home/HomeGallery/HomeGallery";
import HomeEvents from "@/components/organisms/home/HomeEvents/HomeEvents";
import HomeTrainings from "@/components/organisms/home/HomeTrainings";
import HomeTestimonials from "@/components/organisms/home/HomeTestimonials";
import HomeBlogs from "@/components/organisms/home/HomeBlogs";

export default function Home() {
  return (
    <div className="flex flex-col w-full pt-12 gap-16">
      <HomeHero />
      <HomeEvents />
      <HomeAbout />
      <HomeServices />
      <HomeGallery />
      <HomeTrainings />
      <HomeTestimonials />
      <HomeBlogs />
    </div>
  );
}
