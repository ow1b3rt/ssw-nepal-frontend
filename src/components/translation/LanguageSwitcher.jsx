"use client";

import { useSiteLanguage } from "./TranslationProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useSiteLanguage();
  return (
    <div data-no-translate className="flex shrink-0 items-center gap-1 rounded-full bg-white p-1 text-sm font-semibold shadow-sm" aria-label="Website language">
      <button type="button" lang="en" aria-label="English" aria-pressed={language === "en"}
        onClick={() => setLanguage("en")}
        className={`rounded-full px-2 py-1 ${language === "en" ? "bg-primary-red text-white" : "text-black"}`}>EN</button>
      <button type="button" lang="ja" aria-label="Japanese" aria-pressed={language === "ja"}
        onClick={() => setLanguage("ja")}
        className={`rounded-full px-2 py-1 ${language === "ja" ? "bg-primary-red text-white" : "text-black"}`}>日本語</button>
    </div>
  );
}
