import Link from "next/link";
import { CONTENT, CATEGORIES, CATEGORY_LIST, getCategoryBySlug } from "@/data/content";
import SproutIcon from "@/components/SproutIcon";

export function generateStaticParams() {
  return CATEGORY_LIST.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) return {};
  return {
    title: cat.label,
    description: `${cat.description} مجموعه‌ای از ایده‌های باغچه ذهن درباره‌ی ${cat.label}.`,
    alternates: { canonical: `/category/${cat.slug}/` },
  };
}

export default function CategoryPage({ params }) {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) {
    return (
      <div style={{ paddingTop: 24 }}>
        <p>این دسته پیدا نشد.</p>
        <Link href="/archive/">بازگشت به باغچه‌ها</Link>
      </div>
    );
  }
  const catKey = Object.keys(CATEGORIES).find((k) => CATEGORIES[k].slug === cat.slug);
  const entries = CONTENT.filter((e) => e.category === catKey);

  return (
    <div style={{ paddingTop: 24 }}>
      <span className="tag" style={{ marginBottom: 10 }}>
        <SproutIcon category={catKey} color={cat.color} size={18} />
        {cat.label}
      </span>
      <h1 style={{ color: "var(--leaf-deep)", marginTop: 6 }}>{cat.label}</h1>
      <p style={{ color: "var(--ink-muted)", marginTop: -6 }}>{cat.description}</p>
      <div className="plot-entries" style={{ marginTop: 18 }}>
        {entries.map((entry) => (
          <div className="plot-entry" key={entry.id}>
            <SproutIcon category={entry.category} color={cat.color} size={28} />
            <div className="body">
              <b>{entry.title}</b>
              <span>{entry.concept}</span>
            </div>
          </div>
        ))}
      </div>
      <p style={{ marginTop: 20 }}>
        <Link href="/archive/">← بازگشت به همه‌ی باغچه‌ها</Link>
      </p>
    </div>
  );
}
