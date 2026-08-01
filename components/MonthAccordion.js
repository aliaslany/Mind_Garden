import SproutIcon from "./SproutIcon";
import { CATEGORIES } from "@/data/content";
import { toPersianDigits } from "@/lib/jalali";

export default function MonthAccordion({ plot }) {
  return (
    <details className="plot">
      <summary>
        <span>باغچه {plot.monthName}</span>
        <span className="count">{toPersianDigits(plot.entries.length)} ایده</span>
      </summary>
      <div className="plot-entries">
        {plot.entries.map((entry) => {
          const cat = CATEGORIES[entry.category];
          return (
            <div className="plot-entry" key={entry.id}>
              <SproutIcon category={entry.category} color={cat.color} size={28} />
              <div className="body">
                <b>{entry.title}</b>
                <span>{entry.concept}</span>
              </div>
            </div>
          );
        })}
      </div>
    </details>
  );
}
