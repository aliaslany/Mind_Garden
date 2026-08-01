import { getTodayJalali } from "@/lib/jalali";
import ConceptCard from "@/components/ConceptCard";

export default function Home() {
  const today = getTodayJalali();
  return (
    <div className="garden-bed">
      <p className="date-line">{today.formatted}</p>
      <h1>هر بار که سر می‌زنید، یک جوانه‌ی تازه</h1>
      <ConceptCard />
    </div>
  );
}
