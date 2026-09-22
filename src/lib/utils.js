import { env } from "@/config/env";
import { stripHtml } from "@/packages/admin/utils/utils";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function localDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

export function localTime(date) {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export function getMediaUrl(path) {
  if (!path) return "";
  return `${env.hostUrl}${path}`;
}

export function mapBlogItem(item) {
  const content = stripHtml(item.content);
  return {
    image: {
      src: item.media ? `${process.env.NEXT_PUBLIC_HOST}${item.media.url}` : "/favicon.jpg",
      alt: item.media ? item.media.alt : item.title,
    },
    author: {
      name: item.author?.name || item.author?.fullName || "SSW Team",
      avatar:
        item.author?.avatar || item.author?.profileImage || item.author?.image || "/favicon.jpg",
    },
    date: localDate(item.publishedAt || item.createdAt),
    title: item.title,
    desc: content.slice(0, 160) + (content.length > 160 ? "..." : ""),
    ctaLabel: "Read More",
    url: `/blogs/${item.slug}`,
  };
}
