import type { Metadata } from "next";
import Link from "next/link";
import { portfolioItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Портфолио — реализованные проекты мебели на заказ",
  description: "Смотрите реализованные проекты: кухни, шкафы, гостиные, детские и спальни на заказ. Фото готовых работ с описанием материалов и сроков.",
};

const allCategories = ["Все", "Кухни", "Шкафы", "Гостиные", "Детские", "Спальни", "Прихожие"];

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      {/* Hero */}
      <div className="catalog-hero">
        <div className="container">
          <div className="catalog-hero-inner">
            <p className="catalog-hero-tag">Портфолио</p>
            <h1 className="catalog-hero-title">Наши работы</h1>
            <p className="catalog-hero-desc">
              {portfolioItems.length} реализованных проектов. Каждый — по индивидуальному заказу.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Filter tabs — static, no JS needed for SEO */}
        <div className="pf-filters">
          {allCategories.map((cat) => (
            <span key={cat} className={`pf-filter ${cat === "Все" ? "pf-filter--active" : ""}`}>
              {cat}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="pf-grid">
          {portfolioItems.map((item, i) => (
            <Link
              key={item.slug}
              href={`/portfolio/${item.slug}`}
              className={`pf-card ${i === 0 || i === 5 ? "pf-card--wide" : ""}`}
            >
              {/* Image placeholder */}
              <div className="pf-card-img">
                <div className="pf-card-placeholder">
                  <span className="pf-card-placeholder-title">{item.title}</span>
                  <small>Фото проекта</small>
                </div>
              </div>

              {/* Overlay */}
              <div className="pf-card-overlay">
                <span className="pf-card-cat">{item.category}</span>
                <h2 className="pf-card-title">{item.title}</h2>
                <div className="pf-card-meta">
                  <span>{item.size}</span>
                  <span>·</span>
                  <span>{item.material}</span>
                </div>
                <span className="pf-card-more">Подробнее →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="pf-cta">
          <div className="catalog-cta-card">
            <div className="catalog-cta-text">
              <h2 className="catalog-cta-title">Хотите так же?</h2>
              <p className="catalog-cta-desc">
                Оставьте заявку — разработаем проект бесплатно и покажем варианты под ваш интерьер.
              </p>
            </div>
            <a href="/#zayavka" className="btn-primary">Обсудить проект</a>
          </div>
        </div>
      </div>
    </div>
  );
}
