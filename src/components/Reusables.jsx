"use client";

import Link from "next/link";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export function Pagenav({ page, totalPages, nonext = false }) {
  page = Number(page ? page : 1);
  const hasTotal = Boolean(totalPages);
  const prevDisabled = page <= 1;
  const nextDisabled = hasTotal ? page >= totalPages : nonext;

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 px-2 py-6 sm:px-4">
      <div className="flex items-center gap-2">
        <Link
          href={"?page=" + (prevDisabled ? 1 : page - 1)}
          aria-disabled={prevDisabled}
          className={`group flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
            prevDisabled
              ? "pointer-events-none border-gray-100 text-gray-300"
              : "border-gray-200 text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
          }`}
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Previous
        </Link>

        {hasTotal && (
          <span className="hidden text-sm text-gray-400 sm:inline">
            Page <span className="font-semibold text-gray-700">{page}</span> of{" "}
            <span className="font-semibold text-gray-700">{totalPages}</span>
          </span>
        )}

        {!nextDisabled && (
          <Link
            href={"?page=" + (page + 1)}
            className="group flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
          >
            Next
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>

      <BackToTop />
    </div>
  );
}

export function BackToTop({ className }) {
  return (
    <button
      onClick={() => {
        window.top.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={cn(
        "flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900",
        className,
      )}
    >
      <ArrowUp className="h-3.5 w-3.5" />
      Back to top
    </button>
  );
}
