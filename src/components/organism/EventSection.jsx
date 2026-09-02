"use client";

import { useState } from "react";
import { BlogCard } from "@/components/molecules/cards/BlogCard";
import { Calendar } from "lucide-react";

export function EventsSection({ title, events, initialLimit }) {
  const [expanded, setExpanded] = useState(false);

  if (events.length === 0) return null;

  const visibleEvents = expanded ? events : events.slice(0, initialLimit);
  const hasMore = events.length > initialLimit;

  return (
    <>
      <h2 className="mb-6 mt-10 text-xl font-bold text-gray-900 md:text-2xl">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleEvents.map((event, index) => (
          <BlogCard key={index} blog={event.blog} CardIcon={Calendar} />
        ))}
      </div>
      {hasMore && (
        <div className="mt-8 ">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="rounded-full border border-primary px-6 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:bg-primary-green hover:text-white"
          >
            {expanded ? "See less" : "See more"}
          </button>
        </div>
      )}
    </>
  );
}
