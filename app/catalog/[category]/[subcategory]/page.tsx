import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { categories } from "@/data/categories";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ProductCard from "@/components/catalog/ProductCard";
import { getProductsBySubcategory } from "@/data/products";

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
  if (!sub || !cat) notFound();

  const products = getProductsBySubcategory(category, subcategory);

  return (
    <div className="catalog-page">
      {/* Hero */}
      <div className="catalog-hero catalog-hero--compact">
        <div className="container">
          <Breadcrumbs items={[
            { label: "Каталог", href: "/catalog" },
            { label: cat.name, href: `/catalog/${category}` },
            { label: sub.name },
          ]} />
          <div className="catalog-hero-inner">
            <h1 className="catalog-hero-title">{sub.h1}</h1>
            <p className="catalog-hero-desc">{sub.metaDescription}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="subcat-page-layout">
          {/* Sidebar */}
          <aside className="subcat-sidebar">
            <div className="sidebar-card">
              <h3 className="sidebar-title">Подкатегории</h3>
              <ul className="sidebar-links">
                {cat.subcategories.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/catalog/${category}/${s.slug}`}
                      className={`sidebar-link ${s.slug === subcategory ? "sidebar-link--active" : ""}`}
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-cta-card">
              <p className="sidebar-cta-label">Бесплатно</p>
              <h3 className="sidebar-cta-title">Получить расчёт</h3>
              <p className="sidebar-cta-desc">Замер и 3D-проект без обязательств</p>
              <Link href="/#zayavka" className="btn-primary">
                Оставить заявку
              </Link>
              <a href="tel:+7XXXXXXXXXX" className="sidebar-phone">+7 (XXX) XXX-XX-XX</a>
            </div>
          </aside>

          {/* Products */}
          <div className="subcat-products">
            <p className="subcat-count">{products.length} вариантов</p>
            <div className="products-grid">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* SEO text block */}
            <div className="seo-text-block">
              <h2 className="seo-text-title">{sub.h1} — изготовление на заказ</h2>
              <p className="seo-text-body">
                Мы изготавливаем {sub.name.toLowerCase()} по индивидуальным размерам на собственном производстве.
                Работаем с любыми планировками: учитываем трубы, скосы, нестандартные углы.
                Стоимость рассчитывается индивидуально после бесплатного замера.
              </p>
              <p className="seo-text-body">
                Срок изготовления — от 14 дней. Гарантия на все изделия и фурнитуру — 3 года.
                Монтаж выполняется нашими мастерами, уборка после установки включена.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
