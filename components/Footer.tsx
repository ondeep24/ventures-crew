"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  getNavigationHref,
  isCurrentNavigationPage,
  siteNavigationItems,
} from "@/lib/site-navigation";

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="border-t border-[var(--line)] px-6 py-8 md:px-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/images/brand/vc-badge.png"
            alt=""
            width={48}
            height={46}
            sizes="48px"
          />
          <div>
            <Link href="/" className="text-lg font-black tracking-[-0.04em]">
              VENTURES CREW
            </Link>
            <div className="mt-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
              Est. 2020 · South Africa
            </div>
            <div className="mt-5 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
              © 2026 Ventures Crew
            </div>
          </div>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3">
          {siteNavigationItems.map((link) => {
            const isCurrentPage = isCurrentNavigationPage(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={getNavigationHref(link.href, pathname)}
                aria-current={isCurrentPage ? "page" : undefined}
                className={`nav-link text-[10px] font-black uppercase tracking-[0.12em] ${isCurrentPage ? "underline decoration-current" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
