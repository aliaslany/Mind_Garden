import { getArchivePlots } from "@/data/content";
import { PERSIAN_MONTHS } from "@/lib/jalali";
import MonthAccordion from "@/components/MonthAccordion";

export const metadata = { title: "باغچه‌ها | باغچه ذهن" };

export default function ArchivePage() {
  const plots = getArchivePlots(PERSIAN_MONTHS);
  return (
    <div style={{ paddingTop: 24 }}>
      <h1 style={{ color: "var(--leaf-deep)" }}>همه‌ی باغچه‌ها</h1>
      <p style={{ color: "var(--ink-muted)", marginTop: -6 }}>
        همه‌ی ایده‌ها برای مرور، در دوازده باغچه دسته‌بندی شده‌اند — این
        دسته‌بندی فقط برای مرور راحت‌تر است و ربطی به تاریخ روز ندارد.
      </p>
      {plots.map((plot) => (
        <MonthAccordion plot={plot} key={plot.monthIndex} />
      ))}
    </div>
  );
}
