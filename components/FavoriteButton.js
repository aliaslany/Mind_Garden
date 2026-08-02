"use client";

import { useFavorites } from "@/lib/useFavorites";

export default function FavoriteButton({ id, size = "md" }) {
  const { isFavorite, toggleFavorite, ready } = useFavorites();
  const active = ready && isFavorite(id);

  return (
    <button
      type="button"
      className={`fav-btn ${active ? "fav-btn-active" : ""} fav-btn-${size}`}
      aria-pressed={active}
      aria-label={active ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
      onClick={() => toggleFavorite(id)}
      title={active ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
    >
      {active ? "❤️" : "🤍"}
    </button>
  );
}
