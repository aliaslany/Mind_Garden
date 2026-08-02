"use client";

import { SITE_URL } from "@/lib/site";

export default function ShareRow({ text }) {
  const encodedText = encodeURIComponent(text);
  const encodedUrl = encodeURIComponent(SITE_URL);

  const links = [
    {
      label: "تلگرام",
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    },
    {
      label: "فیس‌بوک",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
    },
  ];

  return (
    <div className="share-row">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost btn-sm"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
