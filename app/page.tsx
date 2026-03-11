import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import HeroSection from "@/components/home/HeroSection";
import CatalogSection from "@/components/home/CatalogSection";
import AdvantagesSection from "@/components/home/AdvantagesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import HowWeWorkSection from "@/components/home/HowWeWorkSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import ContactFormSection from "@/components/home/ContactFormSection";

export const metadata: Metadata = {
  title: "Мебель на заказ в [Город] | Производство от 14 дней",
  description: "Изготавливаем кухни, шкафы, гостиные, детские на заказ. Собственное производство, гарантия 3 года, бесплатный замер и 3D-проект.",
};

export default function HomePage() {
  return (
    <>
      <JsonLd type="LocalBusiness" />
      <HeroSection />
      <CatalogSection />
      <AdvantagesSection />
      <PortfolioSection />
      <HowWeWorkSection />
      <ReviewsSection />
      <ContactFormSection />
    </>
  );
}
