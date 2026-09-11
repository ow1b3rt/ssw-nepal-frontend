import { HomeAbout } from "@/components/organisms/home/HomeAbout/HomeAbout";
import HomeBlogs from "@/components/organisms/home/HomeBlogs";
import HomeEvents from "@/components/organisms/home/HomeEvents/HomeEvents";
import { HomeGallery } from "@/components/organisms/home/HomeGallery/HomeGallery";
import { HomeHero } from "@/components/organisms/home/HomeHero/HomeHero";
import { HomeServices } from "@/components/organisms/home/HomeServices/HomeServices";
import HomeTestimonials from "@/components/organisms/home/HomeTestimonials";
import HomeTrainings from "@/components/organisms/home/HomeTrainings";
import { env } from "@/config/env";

export const metadata = {
  title: "SSW Training Centre Nepal | Career Counselling, Visa & Japanese Language Training",
  description:
    "SSW Training Centre Nepal helps you build a career in Japan through expert career counselling, visa guidance, Japanese language preparation, JLPT-N5 test prep, and Specified Skilled Worker (SSW) training.",
  keywords: [
    "SSW Training Nepal",
    "Specified Skilled Worker Japan",
    "Japanese language classes Nepal",
    "JLPT N5 preparation",
    "visa guidance Japan",
    "career counselling Nepal",
    "work in Japan from Nepal",
  ],
  metadataBase: new URL(env.hostUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SSW Training Centre Nepal",
    description:
      "Career counselling, visa guidance, Japanese language preparation, and SSW training to help you build a career in Japan.",
    url: "/",
    siteName: "SSW Training Centre Nepal",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SSW Training Centre Nepal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SSW Training Centre Nepal",
    description:
      "Career counselling, visa guidance, Japanese language preparation, and SSW training to help you build a career in Japan.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
