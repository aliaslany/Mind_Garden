"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CONTENT, CATEGORY_LIST, CATEGORIES, getArchivePlots } from "@/data/content";
import { PERSIAN_MONTHS } from "@/lib/jalali";
import SproutIcon from "./SproutIcon";
import FavoriteButton from "./FavoriteButton";
import { useFavorites } from "@/lib/useFavorites";

export default function ArchiveExplorer() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const { ids: favoriteIds, ready } = useFavorites();

  const isFiltering = query.trim() !== "" || activeCategory !== null || favoritesOnly;

  const filtered = useMemo(() => {
    const q = query.trim();
    return CONTENT.filter((entry) => {
      if (activeCategory && entry.category !== activeCategory) return false;
      if (favoritesOnly && ready && !favoriteIds.includes(entry.id)) return false;
      if (q && !(entry.title.includes(q) || entry.concept.includes(q) || entry.exercise.includes(q))) {
        return false;
      }
      return true;
    });
  }, [query, activeCategory, favoritesOnly, favoriteIds, ready]);

  const plots = useMemo(() => getArchivePlots(PERSIAN_MONTHS), []);

  return (
    <div>
      <div className="search-box">
        <input
          type="search"
          placeholder="جستجو در ایده‌ها…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="جستجو در ایده‌ها"
        />
      </div>

      <div className="filter-row">
        <button
          className={`chip ${activeCategory === null ? "chip-active" : ""}`}
          onClick={() => setActiveCategory(null)}
        >
          همه
        </button>
        {CATEGORY_LIST.map((c) => (
          <button
            key={c.key}
            className={`chip ${activeCategory === c.key ? "chip-active" : ""}`}
            onClick={() => setActiveCategory(activeCategory === c.key ? null : c.key)}
          >
            {c.label}
          </button>
        ))}
        <button
          className={`chip ${favoritesOnly ? "chip-active" : ""}`}
          onClick={() => setFavoritesOnly((v) => !v)}
        >
          ❤️ علاقه‌مندی‌ها
        </button>
      </div>

      {isFiltering ? (
        <div className="plot-entries" style={{ marginTop: 14 }}>
          {filtered.length === 0 && (
            <p style={{ color: "var(--ink-muted)" }}>چیزی پیدا نشد.</p>
          )}
          {filtered.map((entry) => {
            const cat = CATEGORIES[entry.category];
            return (
              <div className="plot-entry" key={entry.id}>
                <SproutIcon category={entry.category} color={cat.color} size={28} />
                <div className="body" style={{ flex: 1 }}>
                  <b>{entry.title}</b>
                  <span>{entry.concept}</span>
                </div>
                <FavoriteButton id={entry.id} size="sm" />
              </div>
            );
          })}
        </div>
      ) : (
        plots.map((plot) => (
          <details className="plot" key={plot.monthIndex}>
            <summary>
              <span>باغچه {plot.monthName}</span>
              <span className="count">{plot.entries.length} ایده</span>
            </summary>
            <div className="plot-entries">
              {plot.entries.map((entry) => {
                const cat = CATEGORIES[entry.category];
                return (
                  <div className="plot-entry" key={entry.id}>
                    <SproutIcon category={entry.category} color={cat.color} size={28} />
                    <div className="body" style={{ flex: 1 }}>
                      <b>{entry.title}</b>
                      <span>{entry.concept}</span>
                    </div>
                    <FavoriteButton id={entry.id} size="sm" />
                  </div>
                );
              })}
            </div>
          </details>
        ))
      )}

      <p style={{ marginTop: 24, fontSize: "0.85rem" }}>
        <Link href="/category/gratitude/" style={{ color: "var(--ink-muted)" }}>
          مرور بر اساس برچسب‌ها →
        </Link>
      </p>
    </div>
  );
}
