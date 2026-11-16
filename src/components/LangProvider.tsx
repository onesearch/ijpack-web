"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

export type Lang = "ko" | "en";

const STORAGE_KEY = "ijpack-lang";
const listeners = new Set<() => void>();
// Fallback when localStorage is unavailable (private mode, blocked storage).
let memoryLang: Lang = "ko";

function readLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "ko" || stored === "en") return stored;
  } catch {}
  return memoryLang;
}

function writeLang(lang: Lang) {
  memoryLang = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {}
  listeners.forEach((notify) => notify());
}

function subscribe(notify: () => void) {
  listeners.add(notify);
  return () => {
    listeners.delete(notify);
  };
}

const LangContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void }>({
  lang: "ko",
  setLang: writeLang,
});

export function useLang() {
  return useContext(LangContext);
}

// Every bilingual string is rendered twice (`data-ko` / `data-en` spans); the
// `lang-*` class on #site hides the inactive one via globals.css.
export function LangProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, () => "ko" as const);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext value={{ lang, setLang: writeLang }}>
      <div id="site" className={`lang-${lang}`}>
        {children}
      </div>
    </LangContext>
  );
}
