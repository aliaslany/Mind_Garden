import { SITE_URL } from "@/lib/site";
import { CATEGORY_LIST } from "@/data/content";

export default function sitemap() {
  const staticRoutes = ["", "/archive/", "/about/"];
  const categoryRoutes = CATEGORY_LIST.map((c) => `/category/${c.slug}/`);
  const routes = [...staticRoutes, ...categoryRoutes];
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/category") ? 0.7 : 0.6,
  }));
}
