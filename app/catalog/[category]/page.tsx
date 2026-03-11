import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import CategoryGrid from "@/components/catalog/CategoryGrid";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: cat.metaTitle,
    description: cat.metaDescription,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  return (
    <div>
      <Breadcrumbs items={[{ label: "Каталог", href: "/catalog" }, { label: cat.name }]} />
      <h1>{cat.h1}</h1>
      <CategoryGrid categories={cat.subcategories} />
    </div>
  );
}
