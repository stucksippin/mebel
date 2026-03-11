import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Мебель на заказ в [Город] | Производство от 14 дней",
  description: "Изготовим кухни, шкафы, гостиные, детские на заказ. Собственное производство, гарантия 3 года, бесплатный 3D-проект.",
};

export default function HomePage() {
  return (
    <>
      <JsonLd type="LocalBusiness" />
      <h1>Мебель на заказ в [Город]</h1>
    </>
  );
}
