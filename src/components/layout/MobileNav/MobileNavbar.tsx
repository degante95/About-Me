import React, { useEffect, useRef } from "react";
import s from "./MobileNavbar.module.css";
import type { NavLink } from "@hooks/useScrollNav";
import { DarkModeToggle } from "@components/layout";

type Props = {
  open: boolean;
  links: NavLink[];
  activeId: string;
  onClose: () => void;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  triggerRef: React.RefObject<HTMLButtonElement>;
};

export default function MobileNavbar({
  open,
  links,
  activeId,
  onClose,
  onNavClick,
  triggerRef,
}: Props) {
  const menuRef = useRef<HTMLUListElement>(null);

  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // esc to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // click outside to close
  useEffect(() => {
    if (!open) return;
    const onPD = (e: PointerEvent) => {
      const t = e.target as Node;
      if (menuRef.current?.contains(t)) return;
      if (triggerRef.current?.contains(t)) return;
      onClose();
    };
    document.addEventListener("pointerdown", onPD);
    return () => document.removeEventListener("pointerdown", onPD);
  }, [open, onClose, triggerRef]);

  return (
    <>
      {/* Backdrop */}
      <button
        className={`${s.backdrop} ${open ? s.backdropOpen : ""}`}
        aria-hidden
        tabIndex={-1}
        onClick={onClose}
      />
      {/* Drawer */}
      <ul
        ref={menuRef}
        id="primary-navigation"
        className={`${s.navMenu} ${open ? s.open : ""}`}
        aria-label="Mobile navigation"
      >
        <li className={s.menuClosePosition}>
          <button
            className={s.menuClose}
            aria-label="Close menu"
            onClick={onClose}
          >
            ×
          </button>
        </li>

        {links.map((link) => {
          const id = link.href.replace(/^\//, "");
          const active = activeId === id;
          return (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  onNavClick(e, link.href);
                  onClose();
                }}
                className={`${s.link} ${active ? s.active : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </a>
            </li>
          );
        })}

        <li>
          <DarkModeToggle />
        </li>
      </ul>
    </>
  );
}
