"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = [
  { label: "Hey Crew", href: "#hey-crew" },
  { label: "Music", href: "#music" },
  { label: "Stories", href: "/stories" },
  { label: "Archive", href: "#archive" },
  { label: "Lifestyle", href: "#lifestyle" },
  { label: "Join", href: "#join" },
];

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="border-t border-[var(--line)] px-6 py-8 md:px-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
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

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href.startsWith("#") && pathname !== "/" ? `/${link.href}` : link.href}
              className="nav-link text-[10px] font-black uppercase tracking-[0.12em]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
