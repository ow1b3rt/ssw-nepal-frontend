import { ROUTES } from "@/constants/routes/routes";

import AnimatedCard from "@/components/ui/animated-card";
import { BlogCard } from "@/components/molecules/cards/BlogCard";

export const metadata = {
  title: "Services | Enlighten Int'l Education",
  description: "Services provided by Enlighten International Education",
};

async function getServices() {
  try {
    const res = await fetch(ROUTES.API.SERVICES, {
      cache: "no-store",
    });
    if (!res.ok) {
      return [];
    }
    const data = await res.json();
    if (data?.success && data?.layout?.items) {
      return data.layout.items;
    }
    return [];
  } catch {
    return [];
  }
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <section className="container mx-auto px-4 xl:px-0">
      <div className="flex flex-col items-center text-center">
        <AnimatedCard
          className="w-fit rounded-lg px-10 py-2.5"
          direction="down"
          distance={12}
          triggerOnView
        >
          <h1 className="mb-1 text-3xl leading-none font-black tracking-[1px] text-black md:text-4xl xl:text-5xl">
            Our Services
          </h1>
          <p className="text-text-color text-xl leading-relaxed">
            Discover the wide range of services we offer to help you achieve your goals.
          </p>
        </AnimatedCard>
      </div>
      {!services || services.length === 0 ? (
        <p className="mt-10 text-center text-gray-500">No services available at the moment.</p>
      ) : (
        <>
          <ul className="mt-6 w-full divide-y divide-gray-100">
            <AnimatedCard direction="up" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <BlogCard
                  key={index}
                  blog={{
                    image: {
                      src: service.image?.src || "/service_fallback.png",
                      alt: service.image?.alt || service.title,
                    },
                    title: service.title,
                    desc: service.description,
                    url: `/services/${service.slug}`,
                  }}
                />
              ))}
            </AnimatedCard>
          </ul>
        </>
      )}
    </section>
  );
}
