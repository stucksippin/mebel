import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Каталог мебели на заказ",
  description: "Каталог мебели на заказ: кухни, шкафы, гостиные, спальни, детские комнаты. Производство по вашим размерам.",
};



export default function CatalogPage() {
  return (
    <div className="catalog-page">
      {/* Hero */}
      <div className="catalog-hero">
        <div className="container">
          <div className="catalog-hero-inner">
            <p className="catalog-hero-tag">Каталог</p>
            <h1 className="catalog-hero-title">Мебель на заказ</h1>
            <p className="catalog-hero-desc">
              Изготавливаем любую мебель по вашим размерам. Выберите категорию — рассчитаем стоимость бесплатно.
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container">
        <div className="catalog-grid">
          {categories.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/catalog/${cat.slug}`}
              className="catalog-cat-card"
            >
              <div className="catalog-cat-img">
                <span className="catalog-cat-img-label">Фото</span>
              </div>
              <div className="catalog-cat-body">
                <h2 className="catalog-cat-name">{cat.name}</h2>
                <ul className="catalog-cat-subs">
                  {cat.subcategories.slice(0, 3).map((sub) => (
                    <li key={sub.slug}>{sub.name}</li>
                  ))}
                  {cat.subcategories.length > 3 && (
                    <li className="catalog-cat-more">+{cat.subcategories.length - 3} ещё</li>
                  )}
                </ul>
                <span className="catalog-cat-cta">Смотреть →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="catalog-bottom-cta">
          <div className="catalog-cta-card">
            <div className="catalog-cta-text">
              <h2 className="catalog-cta-title">Не нашли нужное?</h2>
              <p className="catalog-cta-desc">
                Изготовим любую мебель по вашему проекту или эскизу. Оставьте заявку — менеджер свяжется в течение 30 минут.
              </p>
            </div>
            <a href="#zayavka" className="btn-primary">Обсудить проект</a>
          </div>
        </div>
      </div>
    </div>
  );
}
