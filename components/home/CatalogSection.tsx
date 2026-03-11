import Link from "next/link";

const cats = [
  { slug: "kuhni", name: "Кухни", sub: "Угловые, прямые, с островом", icon: "🍳" },
  { slug: "shkafy", name: "Шкафы", sub: "Купе, встроенные, гардеробные", icon: "🚪" },
  { slug: "gostinaya", name: "Гостиные", sub: "Стенки, горки, ТВ-зоны", icon: "🛋️" },
  { slug: "spalnya", name: "Спальни", sub: "Кровати, изголовья, тумбы", icon: "🛏️" },
  { slug: "detskaya", name: "Детские", sub: "Кровати, рабочие места", icon: "🎠" },
  { slug: "prihozhaya", name: "Прихожие", sub: "Шкафы, банкетки, вешалки", icon: "🏠" },
];

export default function CatalogSection() {
  return (
    <section className="section catalog-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Каталог</div>
          <h2 className="section-title">Что мы делаем</h2>
          <p className="section-desc">
            Любая мебель по вашим размерам и пожеланиям — от эскиза до установки.
          </p>
        </div>

        <div className="cat-grid">
          {cats.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/catalog/${cat.slug}`}
              className="cat-card"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="cat-card-icon">{cat.icon}</div>
              <div className="cat-card-img-placeholder">
                <span>{cat.name}</span>
              </div>
              <div className="cat-card-body">
                <h3 className="cat-card-name">{cat.name}</h3>
                <p className="cat-card-sub">{cat.sub}</p>
                <span className="cat-card-link">Смотреть →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="section-cta">
          <Link href="/catalog" className="btn-outline">Весь каталог</Link>
        </div>
      </div>
    </section>
  );
}
