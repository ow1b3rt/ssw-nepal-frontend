import { HeroGallery } from "@/components/organisms/HomeHero/HeroGallery";
import { HeroText } from "@/components/organisms/HomeHero/HeroText";
import { HomeAboutGallery } from "@/components/organisms/HomeAbout/HomeAboutGallery";
import { ServicesGrid } from "@/components/organisms/HomeAbout/HomeServices";
import Image from "next/image";
import { OfficeGallery } from "@/components/organisms/HomeGallery/HomeGallery";
import { BlogCard } from "@/components/molecules/cards/BlogCard";
import { HomeBlogCard } from "@/components/molecules/cards/HomeBlogCard";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className='flex gap-4 items-center justify-between'>
        <HeroText />
        <HeroGallery />
      </div>
      <div className='w-1/2 p-10'>
        <HomeAboutGallery />
      </div>
      <ServicesGrid />
      <OfficeGallery />
      <BlogCard />
      <HomeBlogCard />
    </div>
  );
}
