import Link from "next/link";
import SproutIcon from "./SproutIcon";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand">
          <SproutIcon category="growth" color="#4C7A3D" size={26} />
          باغچه ذهن
        </Link>
        <nav className="nav">
          <Link href="/">امروز</Link>
          <Link href="/archive/">باغچه‌ها</Link>
          <Link href="/about/">درباره</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
