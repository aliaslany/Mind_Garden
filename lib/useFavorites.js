"use client";

import { useCallback, useEffect, useState } from "react";

const KEY = "baghche-zehn:favorites";

function readFavorites() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeFavorites(ids) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(ids));
  } catch {
    // localStorage unavailable (private mode, etc.) — fail silently
  }
}

export function useFavorites() {
  const [ids, setIds] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setIds(readFavorites());
    setReady(true);
  }, []);

  const isFavorite = useCallback((id) => ids.includes(id), [ids]);

  const toggleFavorite = useCallback((id) => {
    setIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      writeFavorites(next);
      return next;
    });
  }, []);

  return { ids, ready, isFavorite, toggleFavorite };
}
