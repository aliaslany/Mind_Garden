import ArchiveExplorer from "@/components/ArchiveExplorer";

export const metadata = {
  title: "باغچه‌ها",
  description:
    "همه‌ی ایده‌های باغچه ذهن، در دوازده باغچه برای مرور دسته‌بندی شده‌اند.",
  alternates: { canonical: "/archive/" },
};

export default function ArchivePage() {
  return (
    <div style={{ paddingTop: 24 }}>
      <h1 style={{ color: "var(--leaf-deep)" }}>همه‌ی باغچه‌ها</h1>
      <p style={{ color: "var(--ink-muted)", marginTop: -6 }}>
        جستجو کنید، بر اساس موضوع فیلتر کنید یا علاقه‌مندی‌های خودتان را ببینید —
        یا در دوازده باغچه‌ی زیر مرور کنید.
      </p>
      <ArchiveExplorer />
    </div>
  );
}
