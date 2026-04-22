import type { Metadata } from "next";
import Link from "next/link";
import { materials, materialCategories } from "@/data/materials";

export const metadata: Metadata = {
  title: "Материалы для мебели на заказ — ЛДСП, МДФ, массив, фасады",
  description: "Из чего мы делаем мебель: ЛДСП Egger, МДФ в эмали, массив дуба, искусственный камень. Описание, плюсы и минусы каждого материала.",
};

export default function MaterialyPage() {
  return (
    <div className="mat-page">
      <div className="catalog-hero">
        <div className="container">
          <p className="catalog-hero-tag">Материалы</p>
          <h1 className="catalog-hero-title">Из чего мы делаем мебель</h1>
          <p className="catalog-hero-desc">
            Работаем только с проверенными материалами от европейских производителей. Расскажем про каждый — честно, с плюсами и минусами.
          </p>
        </div>
      </div>

      <div className="container">
        {materialCategories.map((cat) => {
          const items = materials.filter((m) => m.categorySlug === cat.slug);
          if (!items.length) return null;
          return (
            <div key={cat.slug} className="mat-category">
              <h2 className="mat-category-title">{cat.name}</h2>
              <div className="mat-grid">
                {items.map((m) => (
                  <Link key={m.slug} href={`/materialy/${m.slug}`} className="mat-card">
                    <div className="mat-card-img">
                      <span className="mat-card-img-label">{m.name}</span>
                    </div>
                    <div className="mat-card-body">
                      <div className="mat-card-cat">{m.category}</div>
                      <h3 className="mat-card-name">{m.name}</h3>
                      <p className="mat-card-desc">{m.shortDesc}</p>
                      <div className="mat-card-meta">
                        <span className="mat-card-price">{m.priceRange}</span>
                        <span className="mat-card-link">Подробнее →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        <div className="catalog-bottom-cta">
          <div className="catalog-cta-card">
            <div>
              <h2 className="catalog-cta-title">Не знаете что выбрать?</h2>
              <p className="catalog-cta-desc">Расскажите задачу — подберём оптимальный материал под бюджет и стиль.</p>
            </div>
            <a href="/#zayavka" className="btn-primary">Получить консультацию</a>
          </div>
        </div>
      </div>
    </div>
  );
}