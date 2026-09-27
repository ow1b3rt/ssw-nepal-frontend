"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { japaneseOverrides } from "@/lib/translation/overrides";

const LanguageContext = createContext({ language: "en", setLanguage: () => {} });
const STORAGE_KEY = "ssw-site-language";
const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "SVG", "CODE", "PRE", "TEXTAREA", "OPTION"]);
const cache = new Map(Object.entries(japaneseOverrides));

export function useSiteLanguage() {
  return useContext(LanguageContext);
}

export default function TranslationProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [available, setAvailable] = useState(false);
  const sourcesRef = useRef(new WeakMap());

  useEffect(() => {
    let cancelled = false;
    fetch("/translate", { cache: "no-store" })
      .then((response) => response.ok ? response.json() : { available: false })
      .then((status) => {
        if (cancelled) return;
        setAvailable(Boolean(status.available));
        if (!status.available) {
          localStorage.removeItem(`${STORAGE_KEY}-cache`);
          localStorage.setItem(STORAGE_KEY, "en");
          return;
        }
        try {
          const saved = JSON.parse(localStorage.getItem(`${STORAGE_KEY}-cache`) || "{}");
          for (const [key, value] of Object.entries(saved)) {
            if (typeof value === "string" && !japaneseOverrides[key]) cache.set(key, value);
          }
          if (localStorage.getItem(STORAGE_KEY) === "ja") setLanguage("ja");
        } catch { /* Storage may be disabled. */ }
      }).catch(() => { if (!cancelled) setAvailable(false); });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const root = document.querySelector(".front");
    if (!root) return;
    document.documentElement.lang = language;
    try { localStorage.setItem(STORAGE_KEY, language); } catch { /* Storage may be disabled. */ }

    // Retain the English source per DOM node so switching back is immediate.
    const sources = sourcesRef.current;
    let observer;
    let timer;
    let busy = false;
    const scan = () => {
      if (busy) return;
      busy = true;
      observer?.disconnect();
      const pending = new Map();
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        const parent = node.parentElement;
        if (!parent || parent.closest("[data-no-translate], [translate='no']") ||
            SKIP_TAGS.has(parent.tagName) || parent.isContentEditable) continue;
        const current = node.nodeValue;
        if (!current.trim()) continue;
        const previous = sources.get(node);
        // React can update a node after an API response. That becomes its new source.
        const source = previous && current === previous.translated ? previous.source : current;
        if (!previous || previous.source !== source) sources.set(node, { source, translated: null });
        if (language === "en") {
          if (node.nodeValue !== source) node.nodeValue = source;
          continue;
        }
        const key = source.trim();
        if (key.length > 1000 || !/[A-Za-z]/.test(key) || /^(https?:|\S+@\S+|[\d\s+()./-]+$)/i.test(key)) continue;
        if (cache.has(key)) {
          const translated = source.replace(key, cache.get(key));
          if (node.nodeValue !== translated) node.nodeValue = translated;
          sources.set(node, { source, translated });
        } else {
          if (!pending.has(key)) pending.set(key, []);
          pending.get(key).push({ node, source });
        }
      }
      observer?.observe(root, { subtree: true, childList: true, characterData: true });
      busy = false;
      if (language !== "ja" || !pending.size) return;
      const entries = [...pending.entries()];
      for (let i = 0; i < entries.length; i += 40) {
        const batch = entries.slice(i, i + 40);
        fetch("/translate", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ language: "ja", texts: batch.map(([key]) => key) }),
        }).then((response) => {
          if (!response.ok) throw new Error("Translation unavailable");
          return response.json();
        }).then(({ translations }) => {
          if (document.documentElement.lang !== "ja") return;
          observer?.disconnect();
          for (const [key, nodes] of batch) {
            const value = translations[key];
            if (typeof value !== "string") continue;
            cache.set(key, value);
            for (const { node, source } of nodes) {
              if (!node.isConnected || node.nodeValue !== source) continue;
              const translated = source.replace(key, value);
              node.nodeValue = translated;
              sources.set(node, { source, translated });
            }
          }
          try { localStorage.setItem(`${STORAGE_KEY}-cache`, JSON.stringify(Object.fromEntries(cache))); }
          catch { /* Cache may exceed storage quota. */ }
          observer?.observe(root, { subtree: true, childList: true, characterData: true });
        }).catch(() => { /* Keep English visible when the service is unavailable. */ });
      }
    };
    observer = new MutationObserver(() => { clearTimeout(timer); timer = setTimeout(scan, 80); });
    scan();
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage, available }}>{children}</LanguageContext.Provider>;
}
