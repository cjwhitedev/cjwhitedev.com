"use client";

import { useEffect, useState } from "react";
import "./navbar.css";
import { joinClasses } from "@/EngineDS/_Foundations/classes";
import type { EngineTheme } from "@/EngineDS/_Foundations/themes";
import { Anchor, type AnchorProps } from "@/EngineDS/Atoms/Anchor/Anchor";

export interface NavbarProps {
  links: AnchorProps[];
  theme?: EngineTheme;
  title?: string;
}

export const Navbar = ({ links, theme = "dark", title }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  return (
    <div className={joinClasses("engine-navbar", `engine--t-${theme}`)}>
      {title && <span className="engine-navbar__title">{title}</span>}
      <button
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
              <Anchor
                href={link.href}
                reversedUnderline={link.reversedUnderline}
              >
                {link.children}
              </Anchor>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
