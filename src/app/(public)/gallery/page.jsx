import { fetcher } from "@/packages/admin";

import { GalleryCard } from "@/components/organisms/HomeGallery/HomeGallery";

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
  const data = (await fetcher("/layouts/gallery")) || galleryData;
  console.log("gallery data", data);

  return (
    <section className="flex w-full flex-col gap-8 p-4">
      <h1 className="self-center text-2xl font-bold text-black md:text-4xl">Gallery</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.layout.items.map((item, index) => (
          <GalleryCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
