import { ROUTES } from "@/constants/routes/routes";

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
    <section className="container mx-auto px-4 pb-12 xl:px-0">
      <div className="text-center">
        {" "}
        <h1 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">Our Services</h1>
        <p className="text-black/60">
          Discover the wide range of services we offer to help you achieve your goals.
        </p>
      </div>
      {!services || services.length === 0 ? (
        <p className="mt-10 text-center text-gray-500">No services available at the moment.</p>
      ) : (
        <ul className="mt-6 divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="grid grid-cols-3 gap-6 p-6">
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
          </div>
        </ul>
      )}
    </section>
  );
}
