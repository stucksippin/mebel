import Link from "next/link";
import HeroParallax from "./HeroParallax";


export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg" />
      <div className="hero-grain" />

      <HeroParallax />

      <div className="hero-inner">
        <div className="hero-label">Собственное производство · Гарантия 3 года</div>

        <h1 className="hero-title">
          Мебель,<br />
          <em>созданная</em><br />
          для вас
        </h1>

        <p className="hero-sub">
          Изготавливаем кухни, шкафы, гостиные и детские
          по вашим размерам. От замера до установки — под ключ.
        </p>

        <div className="hero-actions">
          <Link href="/catalog" className="btn-primary">
            Смотреть каталог
          </Link>
          <Link href="/dizajner" className="btn-ghost">
            Бесплатный 3D-проект →
          </Link>
        </div>

        <div className="hero-stats">
          {[
            { num: "14", unit: "дней", label: "срок изготовления" },
            { num: "800+", unit: "", label: "реализованных проектов" },
            { num: "5", unit: "лет", label: "на рынке" },
          ].map((s) => (
            <div key={s.label} className="hero-stat">
              <span className="hero-stat-num">
                {s.num}
                <span className="hero-stat-unit">{s.unit}</span>
              </span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-image-wrap">
        <div className="hero-image-placeholder">
          <div className="hero-image-inner">
            <span>Фото интерьера</span>
            <small>1200 × 900px</small>
          </div>
        </div>
        <div className="hero-image-badge">
          <span className="hero-badge-num">от 14 дней</span>
          <span className="hero-badge-label">до готовой мебели</span>
        </div>
      </div>
    </section>
  );
}