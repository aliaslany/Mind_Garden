import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "باغچه ذهن | یک جوانه‌ی مثبت برای هر روز",
  description:
    "یک صفحه‌ی غیرانتفاعی برای اشاعه‌ی ایده‌های کوچک روان‌شناسی مثبت — یک ایده و یک تمرین ساده، هر بار که سر می‌زنید.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        <main className="wrap">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
