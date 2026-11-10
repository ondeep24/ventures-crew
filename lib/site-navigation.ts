export const siteNavigationItems = [
  { label: "Hey Crew", href: "#hey-crew" },
  { label: "Music", href: "#music" },
  { label: "Crew Radio", href: "/radio" },
  { label: "Stories", href: "/stories" },
  { label: "Archive", href: "#archive" },
  { label: "Lifestyle", href: "#lifestyle" },
  { label: "Join", href: "#join" },
] as const;

export function getNavigationHref(href: string, pathname: string) {
  return href.startsWith("#") && pathname !== "/" ? `/${href}` : href;
}

export function isCurrentNavigationPage(pathname: string, href: string) {
  if (href.startsWith("/")) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const sectionRoute: Record<string, string> = {
    "#lifestyle": "/lifestyle",
  };
  const route = sectionRoute[href];
  return route ? pathname === route || pathname.startsWith(`${route}/`) : false;
}
