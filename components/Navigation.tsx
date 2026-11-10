"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  getNavigationHref,
  isCurrentNavigationPage,
  siteNavigationItems,
} from "@/lib/site-navigation";

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
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/images/brand/vc-mark.png"
              alt=""
              width={52}
              height={29}
              sizes="52px"
              priority
            />
            <span className="text-xl font-black tracking-[-0.04em]">
              VENTURES CREW
              <span className="mt-1 block text-[9px] font-bold tracking-[0.22em]">
                EST. 2020 · SOUTH AFRICA
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-5 text-[10px] font-black uppercase tracking-[0.1em] xl:flex xl:gap-6 xl:text-[11px]">
            {siteNavigationItems.map((item) => {
              const isCurrentPage = isCurrentNavigationPage(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={getNavigationHref(item.href, pathname)}
                  aria-current={isCurrentPage ? "page" : undefined}
                  className={`nav-link py-2 ${isCurrentPage ? "underline decoration-current" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}

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
            className="inline-flex min-h-11 items-center gap-2 text-[11px] font-black uppercase tracking-[0.1em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--blue)] xl:hidden"
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
          className="border-t border-[var(--line)] bg-[var(--background)] px-6 py-3 xl:hidden"
        >
          {siteNavigationItems.map((item, index) => {
            const isCurrentPage = isCurrentNavigationPage(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={getNavigationHref(item.href, pathname)}
                onClick={() => setMenuOpen(false)}
                aria-current={isCurrentPage ? "page" : undefined}
                className={`flex items-center justify-between border-b border-[var(--line)] py-3 text-lg font-black tracking-[-0.04em] ${isCurrentPage ? "text-[var(--muted)]" : ""}`}
              >
                <span>{item.label}</span>
                <span className="text-[10px] font-bold tracking-[0.12em] text-[var(--muted)]">
                  0{index + 1}
                </span>
              </Link>
            );
          })}
          <Link
            href={latestEventHref}
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex border border-[var(--foreground)] bg-transparent px-5 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)] hover:text-white"
          >
            View latest event ↗
          </Link>
        </nav>
      </header>
    </>
  );
}
