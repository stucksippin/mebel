import type { Metadata } from "next";
import { categories } from "@/data/categories";
import CategoryGrid from "@/components/catalog/CategoryGrid";

export const metadata: Metadata = {
  title: "Каталог мебели на заказ",
  description: "Каталог мебели на заказ: кухни, шкафы, гостиные, спальни, детские комнаты. Производство по вашим размерам.",
};

export default function CatalogPage() {
  return (
    <div>
      <h1>Каталог мебели на заказ</h1>
      <CategoryGrid categories={categories} />
    </div>
  );
}
