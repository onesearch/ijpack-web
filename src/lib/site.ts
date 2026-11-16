// Public origin of the site, used for canonical URLs, Open Graph, robots and sitemap.
// Set NEXT_PUBLIC_SITE_URL in the hosting environment (e.g. https://www.ijpak.co.kr).
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
