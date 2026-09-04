import { fetcher } from "@/packages/admin";

import AnimatedCard from "@/components/ui/animated-card";
import { GalleryCard } from "@/components/organisms/home/HomeGallery/HomeGallery";

const galleryData = {
  items: [
    {
      image: { src: "https://picsum.photos/id/1011/800/600", alt: "Office reception" },
      label: "Reception",
    },
    {
      image: { src: "https://picsum.photos/id/1015/800/600", alt: "Team gift ceremony" },
      label: null,
    },
    {
      image: { src: "https://picsum.photos/id/1024/800/600", alt: "Group gathering" },
      label: "Gathering",
    },
    {
      image: { src: "https://picsum.photos/id/1035/800/600", alt: "Team member portrait" },
      label: "Team Member",
    },
    {
      image: { src: "https://picsum.photos/id/1041/800/600", alt: "Staff group photo" },
      label: null,
    },
    {
      image: { src: "https://picsum.photos/id/1050/800/600", alt: "Classroom session" },
      label: "Training",
    },
    {
      image: { src: "https://picsum.photos/id/1062/800/600", alt: "Office desk setup" },
      label: null,
    },
    {
      image: { src: "https://picsum.photos/id/1074/800/600", alt: "Language class in progress" },
      label: "JFT Class",
    },
    {
      image: { src: "https://picsum.photos/id/1084/800/600", alt: "Trainees studying" },
      label: null,
    },
    {
      image: { src: "https://picsum.photos/id/109/800/600", alt: "Certificate ceremony" },
      label: "Graduation",
    },
    {
      image: { src: "https://picsum.photos/id/110/800/600", alt: "Interview preparation" },
      label: null,
    },
    {
      image: { src: "https://picsum.photos/id/1074/800/600", alt: "Staff meeting" },
      label: "Team Meeting",
    },
  ],
};

export default async function GalleryPage() {
  const data = (await fetcher("/layouts/gallery")) ?? galleryData;

  return (
    <section className="container mx-auto flex w-full flex-col items-center gap-2 md:gap-6">
      <AnimatedCard
        className="w-fit rounded-lg px-10 py-2.5"
        direction="up"
        distance={12}
        triggerOnView
      >
        <h1 className="mb-1 text-3xl leading-none font-black tracking-[-1.5px] text-black md:text-4xl xl:text-5xl">
          Gallery
        </h1>
      </AnimatedCard>
      {data?.layout?.items.length > 0 ? (
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data?.layout?.items?.map((item, index) => (
            <GalleryCard key={index} {...item} />
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-primary-red text-center text-xl font-bold md:text-2xl">
            No Media Found !
          </h2>
        </div>
      )}
    </section>
  );
}
