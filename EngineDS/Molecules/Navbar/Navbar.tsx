"use client";

import { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { joinClasses } from "@/EngineDS/_Foundations/classes";
import { themeClass, type EngineTheme } from "@/EngineDS/_Foundations/themes";
import { Anchor, type AnchorProps } from "@/EngineDS/Atoms/Anchor/Anchor";

export interface NavbarProps {
  links: AnchorProps[];
  theme?: EngineTheme | "inherit";
  title?: string;
}

export const Navbar = ({ links, theme = "dark-alt", title }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeOnDesktop = () => {
      // The toggle is hidden by CSS once the menu is always visible
      if (
        toggleRef.current &&
        getComputedStyle(toggleRef.current).display === "none"
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  return (
    <div className={joinClasses("engine-navbar", themeClass(theme))}>
      {title && <span className="engine-navbar__title">{title}</span>}
      <button
        ref={toggleRef}
        type="button"
        className="engine-navbar__toggle"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="engine-navbar__toggle-bar"></span>
        <span className="engine-navbar__toggle-bar"></span>
        <span className="engine-navbar__toggle-bar"></span>
      </button>
      <nav
        className={joinClasses(
          "engine-navbar__nav",
          isOpen && "engine-navbar__nav--open",
        )}
      >
        <ul className="engine-navbar__list">
          {links.map((link) => (
            <li key={link.id} className="engine-navbar__item">
              <Anchor {...link} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
