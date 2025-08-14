// src/hooks/useScrollNav.ts
import { useEffect, useMemo } from "react";
import { useScrollSpy } from "./useScrollSpy";

export type NavLink = { href: string; label: string };

const idFromPath = (p: string, base = "") => {
  if (base && p.startsWith(base)) p = p.slice(base.length);
  return p.replace(/^\/+/, "").split("/")[0] || "home";
};
const pathFromId = (id: string, base = "") =>
  `${base}/${id}`.replace(/\/+/g, "/");

export function useScrollNav(links: NavLink[], basePrefix = "") {
  const ids = useMemo(
    () => links.map((l) => l.href.replace(/^\//, "")),
    [links],
  );
  const { activeId, scrollTo } = useScrollSpy(ids); // offset auto-detected from --navbar-height

  // Normalize URL & jump to section on first load (after layout)
  useEffect(() => {
    const id = idFromPath(window.location.pathname, basePrefix);
    const want = pathFromId(id, basePrefix);
    if (window.location.pathname !== want) history.replaceState({}, "", want);
    requestAnimationFrame(() => scrollTo(id, "auto"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basePrefix]);

  // Back/forward support
  useEffect(() => {
    const onPop = () =>
      scrollTo(idFromPath(window.location.pathname, basePrefix));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [basePrefix, scrollTo]);

  // Reflect active section in URL
  useEffect(() => {
    if (!activeId) return;
    const next = pathFromId(activeId, basePrefix);
    if (window.location.pathname !== next) {
      history.replaceState({}, "", next + window.location.search);
    }
  }, [activeId, basePrefix]);

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace(/^\//, "");
    const next = pathFromId(id, basePrefix);
    if (window.location.pathname !== next) history.pushState({}, "", next);
    scrollTo(id);
  };

  return { activeId, onNavClick };
}
