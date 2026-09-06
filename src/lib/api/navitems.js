import { env } from "@/config/env";
import { ROUTES } from "@/constants/routes/routes";

async function fetchLayoutItems(endpoint, name) {
  const res = await fetch(endpoint, {
    next: { revalidate: 3600, tags: [endpoint] },
  });

  if (!res.ok) return [];

  const json = await res.json();

  return (json?.layout?.items ?? []).map((item) => ({
    href: `/${name}/${item.slug}`,
    label: item.title || "Untitled",
  }));
}

export async function getNavData() {
  const [languages, training, services] = await Promise.all([
    fetchLayoutItems(`${env.apiUrl}/layouts/languages`, "languages"),
    fetchLayoutItems(`${env.apiUrl}/layouts/training`, "training"),
    fetchLayoutItems(`${env.apiUrl}/layouts/services`, "services"),
  ]);

  return { languages, training, services };
}

export function buildNavConfig({ languages, training, services }) {
  return [
    { href: "/", label: "Home" },
    {
      href: "/about",
      label: "About Us",
      children: [
        {
          href: ROUTES.ABOUT_US.WHY_CHOOSE_US,
          label: "Why Choose Us",
        },
        {
          href: ROUTES.ABOUT_US.MESSAGE_FROM_CHAIRMAN,
          label: "Message from Chairman",
        },
        {
          href: ROUTES.ABOUT_US.SUCCESS_STORY,
          label: "Success Stories",
        },
        {
          href: ROUTES.ABOUT_US.CONTACT_US,
          label: "Contact Us",
        },
      ],
    },
    {
      href: "/languages",
      label: "Language",
      children: languages,
    },
    {
      href: "/training",
      label: "Training",
      children: training,
    },
    {
      href: "/services",
      label: "Services",
      children: services,
    },
    {
      href: "/blogs",
      label: "Blogs",
      hideBetweenLgAndXl: true,
      injectInto: "/others",
    },
    {
      href: "/others",
      label: "Others",
      children: [
        {
          href: ROUTES.OTHERS.EVENTS.HOME,
          label: "Events",
        },
        {
          href: ROUTES.OTHERS.FAQS,
          label: "FAQS",
        },
        {
          href: ROUTES.OTHERS.GALLERY,
          label: "Gallery",
        },
      ],
    },
    { href: ROUTES.APPOINTMENT, label: "Appointment" },
  ];
}
