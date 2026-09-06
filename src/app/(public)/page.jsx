import { HomeAbout } from "@/components/organisms/home/HomeAbout/HomeAbout";
import HomeBlogs from "@/components/organisms/home/HomeBlogs";
import HomeEvents from "@/components/organisms/home/HomeEvents/HomeEvents";
import { HomeGallery } from "@/components/organisms/home/HomeGallery/HomeGallery";
import { HomeHero } from "@/components/organisms/home/HomeHero/HomeHero";
import { HomeServices } from "@/components/organisms/home/HomeServices/HomeServices";
import HomeTestimonials from "@/components/organisms/home/HomeTestimonials";
import HomeTrainings from "@/components/organisms/home/HomeTrainings";

export const metadata = {
  title: "HOME | SSW",
  description: "Welcome to Home Page of SSW",
};

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-16 pt-12">
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
