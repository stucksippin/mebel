import Link from "next/link";

const works = [
  { id: 1, title: "Кухня в стиле лофт", cat: "Кухни", size: "14 м²" },
  { id: 2, title: "Шкаф-купе в спальню", cat: "Шкафы", size: "3.6 пог. м" },
  { id: 3, title: "Гостиная с ТВ-зоной", cat: "Гостиные", size: "22 м²" },
  { id: 4, title: "Детская для двоих", cat: "Детские", size: "18 м²" },
  { id: 5, title: "Прихожая под заказ", cat: "Прихожие", size: "4 м²" },
  { id: 6, title: "Угловая кухня Белая", cat: "Кухни", size: "11 м²" },
];

export default function PortfolioSection() {
  return (
    <section className="section portfolio-section">
      <div className="container">
        <div className="portfolio-header">
          <div>
            <div className="section-tag">Портфолио</div>
            <h2 className="section-title">Наши работы</h2>
          </div>
          <Link href="/portfolio" className="btn-ghost portfolio-all-link">
            Все проекты →
          </Link>
        </div>

        <div className="portfolio-grid">
          {works.map((w, i) => (
            <div
              key={w.id}
              className={`portfolio-item ${i === 0 ? "portfolio-item--wide" : ""}`}
            >
              <div className="portfolio-placeholder">
                <span className="portfolio-placeholder-label">{w.title}</span>
                <small>Фото работы</small>
              </div>
              <div className="portfolio-overlay">
                <span className="portfolio-cat">{w.cat}</span>
                <h3 className="portfolio-title">{w.title}</h3>
                <span className="portfolio-size">{w.size}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
