import React, { useState, useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import { ResumeModal } from "./components/Resume";
import DarkModeToggle from "./components/DarkModeToggle";
import Tech from "./components/Tech";

const NAV_LINKS = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tech", label: "Tech" },
  { href: "/projects", label: "Experience & Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/connect", label: "Connect" },
];

const validIds = new Set([
  "home",
  "about",
  "tech",
  "projects",
  "resume",
  "connect",
]);

const scrollToId = (id: string, behavior: ScrollBehavior = "smooth") => {
  document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
};

const idFromPath = (pathname: string, basePrefix = "") => {
  let p = pathname;
  if (basePrefix && p.startsWith(basePrefix)) p = p.slice(basePrefix.length);
  const seg = p.replace(/^\/+/, "").split("/")[0] || "home";
  return validIds.has(seg) ? seg : "home";
};

const pathFromId = (id: string, basePrefix = "") =>
  `${basePrefix}/${id}`.replace(/\/+/g, "/");

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // lock page scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  //close on click outside navbar
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (!menuOpen) return;
      const t = e.target as Node;
      if (menuRef.current?.contains(t)) return;
      if (triggerRef.current?.contains(t)) return;
      setMenuOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  // const handleNavClick = () => setMenuOpen(false);

  //nav routing
  // OPTIONAL: if deploying under a subpath (e.g., GitHub Pages /my-repo), set this:
  const BASE_PREFIX = ""; // e.g., "/my-repo"

  useEffect(() => {
    // normalize "/" to "/home" and jump instantly on first load
    const firstId = idFromPath(window.location.pathname, BASE_PREFIX);
    const want = pathFromId(firstId, BASE_PREFIX);
    if (window.location.pathname !== want) {
      history.replaceState({}, "", want);
    }
    scrollToId(firstId, "auto");
  }, []);

  useEffect(() => {
    const onPop = () =>
      scrollToId(idFromPath(window.location.pathname, BASE_PREFIX));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const id = path.replace(/^\//, "");
    const next = pathFromId(id, BASE_PREFIX);
    if (window.location.pathname !== next) {
      history.pushState({}, "", next);
    }
    scrollToId(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div style={{ fontWeight: 700 }}>CD</div>
        {/* Hamburger icon for mobile */}
        <button
          ref={triggerRef}
          // className="hamburger"
          className={`hamburger${menuOpen ? " is-hidden" : ""}`}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul
          ref={menuRef}
          id="primary-navigation"
          className={`nav-menu${menuOpen ? " open" : ""}`}
        >
          <li className={"menu-close-position"}>
            <button
              className="menu-close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>
          </li>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => onNavClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <DarkModeToggle />
          </li>
        </ul>
      </nav>
      <Hero />
      <About />
      <Tech />
      <Projects />
      <Connect />
    </>
  );
};

export default App;
