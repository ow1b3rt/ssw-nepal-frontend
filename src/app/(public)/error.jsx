"use client";

import { useEffect } from "react";
import { RefreshCcwIcon } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Runtime error caught:", error);
  }, [error]);

  return (
    <div className="flex min-h-100 flex-col items-center justify-center p-6 text-center">
      <h2 className="text-primary-red text-2xl font-bold xl:text-5xl">
        Something went wrong
      </h2>
      <p className="text-foreground mt-2 text-sm lg:text-xl">
        {error.message ||
          "An unexpected error occurred while loading this page."}
      </p>
      <button
        onClick={() => reset()}
        className="bg-primary-red hover:bg-primary mt-6 flex cursor-pointer items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-colors lg:text-xl"
      >
        Try Again <RefreshCcwIcon />
      </button>
    </div>
  );
}
