"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Runtime error caught:", error);
  }, [error]);

  return (
    <div className="flex min-h-100 flex-col items-center justify-center p-6 text-center">
      <h2 className="text-2xl font-bold text-slate-900">Something went wrong!</h2>
      <p className="mt-2 text-sm text-slate-600">
        {error.message || "An unexpected error occurred while loading this page."}
      </p>
      <button
        onClick={() => reset()} // Attempts to re-render the segment
        className="mt-6 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
      >
        Try again
      </button>
    </div>
  );
}
