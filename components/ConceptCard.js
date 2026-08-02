"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CONTENT, CATEGORIES } from "@/data/content";
import SproutIcon from "./SproutIcon";
import FavoriteButton from "./FavoriteButton";
import ShareRow from "./ShareRow";

function pickRandom(excludeId) {
  if (CONTENT.length === 1) return CONTENT[0];
  let entry;
  do {
    entry = CONTENT[Math.floor(Math.random() * CONTENT.length)];
  } while (entry.id === excludeId);
  return entry;
}

export default function ConceptCard() {
  const [entry, setEntry] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setEntry(pickRandom());
  }, []);

  if (!entry) {
    return (
      <div className="concept-card" aria-busy="true">
        <p style={{ color: "var(--ink-muted)" }}>در حال جوانه زدن…</p>
      </div>
    );
  }

  const cat = CATEGORIES[entry.category];
  const quoteText = `${entry.title}\n\n${entry.concept}\n\nتمرین امروز: ${entry.exercise}\n\n— باغچه ذهن`;

  function handleCopy() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(quoteText).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  }

  return (
    <div className="concept-card" aria-live="polite">
      <div className="card-top-row">
        <Link href={`/category/${cat.slug}/`} className="tag">
          <SproutIcon category={entry.category} color={cat.color} size={18} />
          {cat.label}
        </Link>
        <FavoriteButton id={entry.id} />
      </div>
      <h2>{entry.title}</h2>
      <p>{entry.concept}</p>
      <div className="exercise">
        <b>تمرین امروز: </b>
        {entry.exercise}
      </div>
      <div className="actions">
        <button className="btn btn-primary" onClick={() => setEntry(pickRandom(entry.id))}>
          جوانه بعدی 🌱
        </button>
        <button className="btn btn-ghost" onClick={handleCopy}>
          {copied ? "کپی شد ✓" : "کپی متن"}
        </button>
      </div>
      <ShareRow text={quoteText} />
    </div>
  );
}
