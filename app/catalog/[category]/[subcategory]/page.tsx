import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

type Props = { params: Promise<{ category: string; subcategory: string }> };

export async function generateStaticParams() {
  return categories.flatMap((cat) =>
    cat.subcategories.map((sub) => ({ category: cat.slug, subcategory: sub.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, subcategory } = await params;
  const cat = categories.find((c) => c.slug === category);
  const sub = cat?.subcategories.find((s) => s.slug === subcategory);
  if (!sub) return {};
  return { title: sub.metaTitle, description: sub.metaDescription };
}

export default async function SubcategoryPage({ params }: Props) {
  const { category, subcategory } = await params;
  const cat = categories.find((c) => c.slug === category);
  const sub = cat?.subcategories.find((s) => s.slug === subcategory);
  if (!sub) notFound();

  return (
    <div>
      <Breadcrumbs items={[
        { label: "Каталог", href: "/catalog" },
        { label: cat!.name, href: `/catalog/${category}` },
        { label: sub.name },
      ]} />
      <h1>{sub.h1}</h1>
    </div>
  );
}
