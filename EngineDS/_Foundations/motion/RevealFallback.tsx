"use client";

import { useEffect } from "react";

// Browsers without scroll-driven animations reveal with an observer instead
export const RevealFallback = () => {
  useEffect(() => {
    if (CSS.supports("animation-timeline: view()")) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("engine-reveal--visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    const seen = new WeakSet<Element>();
    const scan = () =>
      document.querySelectorAll(".engine-reveal").forEach((element) => {
        if (seen.has(element)) return;
        seen.add(element);
        observer.observe(element);
      });

    scan();
    document.documentElement.classList.add("engine-reveal-js");
    const mutations = new MutationObserver(scan);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
      document.documentElement.classList.remove("engine-reveal-js");
    };
  }, []);

  return null;
};
