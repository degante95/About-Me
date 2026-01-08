import React, { useEffect, useRef, useState } from "react";
import s from "./Navbar.module.css"; // ← relative import (avoid barrel cycle)
import { useScrollNav, type NavLink } from "@hooks/useScrollNav";
import MobileNavbar from "@components/layout/MobileNav";
import DarkModeToggle from "../DarkMode";

const NAV_LINKS: NavLink[] = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tech", label: "Tech" },
  { href: "/projects", label: "Projects & Certificates" },
  { href: "/connect", label: "Connect" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { activeId, onNavClick } = useScrollNav(NAV_LINKS);

  // Keep CSS var for scroll offset using a ref (works with modules)
  useEffect(() => {
    const setVar = () => {
      const h = navRef.current?.getBoundingClientRect().height ?? 56;
      document.documentElement.style.setProperty("--navbar-height", `${h}px`);
    };
    setVar();
    window.addEventListener("resize", setVar);
    return () => window.removeEventListener("resize", setVar);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="/home"
            onClick={(e) => onNavClick(e as any, "/home")}
            className={s.brand}
            aria-label="Go to Home"
          >
            CD
          </a>

          {/* Desktop links */}
          <ul className={s.links} aria-label="Primary">
            {NAV_LINKS.map(({ href, label }) => {
              const id = href.slice(1);
              const active = activeId === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => onNavClick(e, href)}
                    className={`${s.link} ${active ? s.active : ""}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
            <li>
              <DarkModeToggle />
            </li>
          </ul>

          {/* Hamburger (mobile) */}
          <button
            ref={triggerRef}
            className={`${s.hamburger} ${open ? s.isHidden : ""}`}
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span className={s.hamburgerBar} />
            <span className={s.hamburgerBar} />
            <span className={s.hamburgerBar} />
          </button>

          {/* Mobile drawer + backdrop */}
          <MobileNavbar
            open={open}
            links={NAV_LINKS}
            activeId={activeId}
            onClose={() => setOpen(false)}
            onNavClick={onNavClick}
            triggerRef={triggerRef}
          />
        </div>
      </div>
    </nav>
  );
}
