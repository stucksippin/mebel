import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geist = Geist({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.ru"),
  title: {
    default: "Мебель на заказ | Название компании",
    template: "%s | Название компании",
  },
  description: "Мебель на заказ в [Город]. Кухни, шкафы, гостиные. Производство от 14 дней. Бесплатный замер и 3D-проект.",
  keywords: ["мебель на заказ", "кухни на заказ", "шкафы на заказ"],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Название компании",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={geist.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
