"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { label: "Hey Crew", href: "#hey-crew" },
  { label: "Music", href: "#music" },
  { label: "Stories", href: "/stories" },
  { label: "Archive", href: "#archive" },
  { label: "Lifestyle", href: "#lifestyle" },
  { label: "Join", href: "#join" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const latestEventHref = pathname === "/" ? "#archive-latest" : "/#archive-latest";

  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-[60] bg-[var(--foreground)] px-4 py-3 text-sm font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--background)]/95 backdrop-blur">
        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between px-6 py-4 md:px-12"
        >
          <Link href="/" className="text-xl font-black tracking-[-0.04em]">
            VENTURES CREW
            <span className="mt-1 block text-[9px] font-bold tracking-[0.22em]">
              EST. 2020 · SOUTH AFRICA
            </span>
          </Link>

          <div className="hidden items-center gap-5 text-[10px] font-black uppercase tracking-[0.1em] lg:flex xl:gap-6 xl:text-[11px]">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href.startsWith("#") && pathname !== "/" ? `/${item.href}` : item.href}
                className="nav-link py-2"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={latestEventHref}
              className="rounded-full border border-[var(--foreground)] bg-transparent px-5 py-3 text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)] hover:text-white"
            >
              Latest event
            </Link>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            className="inline-flex min-h-11 items-center gap-2 text-[11px] font-black uppercase tracking-[0.1em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--blue)] lg:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
            <span aria-hidden="true" className="text-lg leading-none">
              {menuOpen ? "−" : "+"}
            </span>
          </button>
        </nav>

        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          hidden={!menuOpen}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setMenuOpen(false);
              menuButtonRef.current?.focus();
            }
          }}
          className="border-t border-[var(--line)] bg-[var(--background)] px-6 py-3 lg:hidden"
        >
          {navigationItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href.startsWith("#") && pathname !== "/" ? `/${item.href}` : item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-[var(--line)] py-3 text-lg font-black tracking-[-0.04em]"
            >
              <span>{item.label}</span>
              <span className="text-[10px] font-bold tracking-[0.12em] text-[var(--muted)]">
                0{index + 1}
              </span>
            </Link>
          ))}
          <Link
            href={latestEventHref}
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex bg-[var(--foreground)] px-5 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-white"
          >
            View latest event ↗
          </Link>
        </nav>
      </header>
    </>
  );
}
