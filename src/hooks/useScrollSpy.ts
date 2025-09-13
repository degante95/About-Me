// src/hooks/useScrollSpy.ts
import { useCallback, useEffect, useMemo, useState } from "react";

type Options = {
  /** Pixels to offset from top (your fixed navbar height). If omitted, we read --navbar-height from :root. */
  offsetPx?: number;
};

function getOffsetPx(explicit?: number) {
  if (typeof explicit === "number") return explicit;
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue("--navbar-height")
    .trim()
    .replace("px", "");
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : 64; // sensible default
}

function docTop(el: HTMLElement) {
  return window.scrollY + el.getBoundingClientRect().top;
}

export function useScrollSpy(sectionIds: string[], opts: Options = {}) {
  const ids = useMemo(() => sectionIds.filter(Boolean), [sectionIds]);
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  const recomputeActive = useCallback(() => {
    const offset = getOffsetPx(opts.offsetPx);
    const marker = window.scrollY + offset + 1; // +1 to avoid fencepost flicker
    // Gather tops and sort by document order just in case
    const entries = ids
      .map((id) => {
        const el = document.getElementById(id);
        return el ? { id, top: docTop(el) } : null;
      })
      .filter(Boolean) as { id: string; top: number }[];

    entries.sort((a, b) => a.top - b.top);

    // Pick the last section whose top is above the marker
    let current = entries[0]?.id ?? activeId;
    for (const e of entries) {
      if (e.top <= marker) current = e.id;
      else break;
    }
    if (current && current !== activeId) setActiveId(current);
  }, [ids, opts.offsetPx, activeId]);

  useEffect(() => {
    // Initial compute (after layout)
    const r = () => recomputeActive();
    const raf = requestAnimationFrame(r);
    window.addEventListener("scroll", r, { passive: true });
    window.addEventListener("resize", r);
    window.addEventListener("load", r);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", r);
      window.removeEventListener("resize", r);
      window.removeEventListener("load", r);
    };
  }, [recomputeActive]);

  const scrollTo = (id: string, behavior: ScrollBehavior = "smooth") => {
    document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
  };

  return { activeId, scrollTo };
}
