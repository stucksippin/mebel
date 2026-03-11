import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { categories } from "@/data/categories";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return {};
  return { title: cat.metaTitle, description: cat.metaDescription };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  return (
    <div className="catalog-page">
      {/* Hero */}
      <div className="catalog-hero">
        <div className="container">
          <Breadcrumbs items={[
            { label: "Каталог", href: "/catalog" },
            { label: cat.name },
          ]} />
          <div className="catalog-hero-inner">
            <h1 className="catalog-hero-title">{cat.h1}</h1>
            <p className="catalog-hero-desc">{cat.metaDescription}</p>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Subcategories */}
        <div className="subcat-grid">
          {cat.subcategories.map((sub, i) => (
            <Link
              key={sub.slug}
              href={`/catalog/${category}/${sub.slug}`}
              className="subcat-card"

            >
              <div className="subcat-img">
                <span className="subcat-img-label">{sub.name}</span>
              </div>
              <div className="subcat-body">
                <h2 className="subcat-name">{sub.name}</h2>
                <p className="subcat-desc">{sub.metaDescription}</p>
                <span className="subcat-link">Подробнее →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Why order this category */}
        <div className="cat-info-block">
          <div className="cat-info-text">
            <h2 className="cat-info-title">Почему стоит заказать {cat.name.toLowerCase()} у нас</h2>
            <p className="cat-info-desc">
              Мы изготавливаем мебель на собственном производстве — без посредников. Каждый проект начинается с бесплатного замера и 3D-визуализации, так что вы увидите результат ещё до начала работ.
            </p>
            <ul className="cat-info-list">
              <li><span>✓</span> Бесплатный выезд замерщика</li>
              <li><span>✓</span> 3D-проект за 24 часа</li>
              <li><span>✓</span> Производство от 14 дней</li>
              <li><span>✓</span> Гарантия 3 года</li>
            </ul>
          </div>
          <div className="cat-info-cta">
            <div className="cat-info-cta-card">
              <p className="cat-info-cta-label">Бесплатно</p>
              <h3 className="cat-info-cta-title">Рассчитать стоимость</h3>
              <p className="cat-info-cta-desc">Оставьте заявку — ответим за 30 минут</p>
              <Link href="/#zayavka" className="btn-primary">
                Оставить заявку
              </Link>
              <a href="tel:+7XXXXXXXXXX" className="cat-info-phone">+7 (XXX) XXX-XX-XX</a>
            </div>
          </div>
        </div>

        {/* Other categories */}
        <div className="other-cats">
          <h2 className="other-cats-title">Другие категории</h2>
          <div className="other-cats-grid">
            {categories.filter((c) => c.slug !== category).map((c) => (
              <Link key={c.slug} href={`/catalog/${c.slug}`} className="other-cat-link">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
