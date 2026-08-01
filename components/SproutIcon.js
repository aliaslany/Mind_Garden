"use client";

// Small hand-drawn-feel sprout/leaf glyphs, one shape family per category.
// Kept intentionally simple (single stroke color from the category) so the
// garden bed reads as a coherent set rather than mismatched clipart.

const SHAPES = {
  gratitude: (c) => (
    <path
      d="M20 46 C20 30 20 18 20 6 M20 20 C12 16 8 10 8 4 M20 26 C28 22 32 16 32 10"
      stroke={c}
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
  ),
  growth: (c) => (
    <path
      d="M20 46 V14 M20 14 C8 14 6 4 6 4 C6 4 10 16 20 14 C20 14 22 4 34 4 C34 4 30 16 20 14"
      stroke={c}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  resilience: (c) => (
    <path
      d="M20 46 C20 46 10 38 10 26 C10 18 16 12 20 6 C24 12 30 18 30 26 C30 38 20 46 20 46 Z"
      stroke={c}
      strokeWidth="2.5"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  selfCompassion: (c) => (
    <path
      d="M20 46 V20 M20 20 C20 20 8 22 8 12 C8 6 14 4 20 10 C26 4 32 6 32 12 C32 22 20 20 20 20 Z"
      stroke={c}
      strokeWidth="2.5"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  mindfulness: (c) => (
    <path
      d="M20 46 V18 M20 30 C20 30 30 30 30 20 M20 30 C20 30 10 30 10 20 M20 18 C20 18 26 12 20 4 C14 12 20 18 20 18 Z"
      stroke={c}
      strokeWidth="2.5"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  connection: (c) => (
    <path
      d="M8 46 C8 46 8 30 20 30 C32 30 32 46 32 46 M20 30 V6 M20 14 C20 14 12 12 12 6 M20 14 C20 14 28 12 28 6"
      stroke={c}
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
  ),
};

export default function SproutIcon({ category, color = "#4C7A3D", size = 40 }) {
  const draw = SHAPES[category] || SHAPES.gratitude;
  return (
    <svg width={size} height={size} viewBox="0 0 40 50" fill="none" aria-hidden="true">
      {draw(color)}
    </svg>
  );
}
