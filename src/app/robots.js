import { env } from "@/config/env";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/*", "/login", "/register"],
      },
    ],
    sitemap: `${env.hostUrl}/sitemap.xml`,
  };
}
